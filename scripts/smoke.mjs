import assert from "node:assert/strict";
import { JSDOM } from "jsdom";

const base = new URL(process.argv[2] ?? "http://localhost:3100");
const response = await fetch(base);
assert.equal(response.status, 200, "Home route must succeed");
const html = await response.text();
const { document } = new JSDOM(html).window;

assert.equal(document.querySelectorAll("h1").length, 1);
assert.equal(document.querySelector("h1")?.textContent, "Abhishek Sonje");
for (const id of [
  "intro",
  "projects",
  "experience",
  "open-source",
  "stack",
  "contact",
]) {
  assert.ok(document.getElementById(id), `Missing section: ${id}`);
}
assert.equal(document.querySelectorAll("#projects article").length, 4);
assert.ok(
  document
    .getElementById("experience")
    .compareDocumentPosition(document.getElementById("projects")) & 4,
  "Work must appear before projects",
);
assert.equal(
  document.querySelectorAll("#projects details:not([open])").length,
  4,
);
assert.ok(
  document.querySelectorAll('#stack [role="img"][aria-label]').length > 20,
);
assert.ok(document.querySelector('button[aria-label="Interface sounds"]'));
assert.ok(
  document.querySelector('button[aria-label="Toggle light and dark theme"]'),
);
assert.ok(
  document
    .querySelector("blockquote[cite]")
    ?.textContent.includes("enthusiasm"),
);
assert.ok(document.querySelector('meta[property="og:image"]'));
assert.ok(
  !document.querySelector('img[src*="banner1"]'),
  "Banner should be omitted",
);

assert.equal(
  document.querySelector('link[rel="canonical"]')?.getAttribute("href"),
  "https://abhishekdev.tech",
);
assert.ok(
  document.querySelector(
    'link[rel="alternate"][href="https://abhishekdev.tech/llms.txt"]',
  ),
);
assert.ok(
  document.querySelector(
    'link[rel="alternate"][href="https://abhishekdev.tech/portfolio.md"]',
  ),
);
assert.equal(document.querySelectorAll('link[rel="me"]').length, 3);
const jsonLd = JSON.parse(
  document.querySelector('script[type="application/ld+json"]')?.textContent ??
    "null",
);
assert.equal(jsonLd["@context"], "https://schema.org");
assert.ok(jsonLd["@graph"].some((item) => item["@type"] === "Person"));
assert.ok(jsonLd["@graph"].some((item) => item["@type"] === "ProfilePage"));

for (const anchor of document.querySelectorAll('a[href^="#"]')) {
  assert.ok(
    document.getElementById(anchor.hash.slice(1)),
    `Broken anchor: ${anchor.hash}`,
  );
}
for (const anchor of document.querySelectorAll('a[target="_blank"]')) {
  assert.ok(
    anchor.rel.includes("noopener"),
    "External links need safe window isolation",
  );
}

const resources = new Set([
  ...Array.from(document.querySelectorAll("img[src]"), (image) =>
    image.getAttribute("src"),
  ),
  ...Array.from(document.querySelectorAll('link[rel="stylesheet"]'), (link) =>
    link.getAttribute("href"),
  ),
]);
await Promise.all(
  Array.from(resources, async (resource) => {
    const result = await fetch(new URL(resource, base));
    assert.equal(result.status, 200, `Asset failed: ${resource}`);
  }),
);

const discoveryRoutes = [
  ["/robots.txt", "Sitemap: https://abhishekdev.tech/sitemap.xml"],
  ["/sitemap.xml", "https://abhishekdev.tech/portfolio.md"],
  ["/llms.txt", "Complete portfolio profile"],
  ["/portfolio.md", "## Work experience"],
];
for (const [route, expected] of discoveryRoutes) {
  const result = await fetch(new URL(route, base));
  assert.equal(result.status, 200, `${route} must succeed`);
  assert.ok(
    (await result.text()).includes(expected),
    `${route} is missing expected content`,
  );
}

assert.equal((await fetch(new URL("/missing-smoke-route", base))).status, 404);
console.log(
  `Production smoke passed: portfolio UI, structured data, discovery routes, ${resources.size} assets, and 404 response.`,
);
