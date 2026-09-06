import assert from "node:assert/strict";
import { JSDOM } from "jsdom";

const base = new URL(process.argv[2] ?? "http://localhost:3100");
const response = await fetch(base);
assert.equal(response.status, 200, "Home route must succeed");
const { document } = new JSDOM(await response.text()).window;

assert.equal(document.querySelectorAll("h1").length, 1);
assert.equal(document.querySelector("h1")?.textContent, "Abhishek Sonje");
for (const id of ["intro", "projects", "experience", "open-source", "stack", "contact"]) {
  assert.ok(document.getElementById(id), `Missing section: ${id}`);
}
assert.equal(document.querySelectorAll("#projects article").length, 4);
assert.ok(document.querySelector('button[aria-label="Toggle light and dark theme"]'));
assert.ok(document.querySelector("blockquote[cite]")?.textContent.includes("enthusiasm"));
assert.ok(document.querySelector('meta[property="og:image"]'));
assert.ok(!document.querySelector('img[src*="banner1"]'), "Banner should be omitted");

for (const anchor of document.querySelectorAll('a[href^="#"]')) {
  assert.ok(document.getElementById(anchor.hash.slice(1)), `Broken anchor: ${anchor.hash}`);
}
for (const anchor of document.querySelectorAll('a[target="_blank"]')) {
  assert.ok(anchor.rel.includes("noopener"), "External links need safe window isolation");
}

const resources = new Set([
  ...Array.from(document.querySelectorAll("img[src]"), (image) => image.getAttribute("src")),
  ...Array.from(document.querySelectorAll('link[rel="stylesheet"]'), (link) => link.getAttribute("href")),
]);
await Promise.all(Array.from(resources, async (resource) => {
  const result = await fetch(new URL(resource, base));
  assert.equal(result.status, 200, `Asset failed: ${resource}`);
}));
assert.equal((await fetch(new URL("/missing-smoke-route", base))).status, 404);
console.log(`Production smoke passed: sections, 4 projects, navigation, quote, metadata, ${resources.size} assets, and 404 response.`);
