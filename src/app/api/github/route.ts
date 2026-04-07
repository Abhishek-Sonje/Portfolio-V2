import { NextResponse } from "next/server";

export async function GET() {
  const GITHUB_USERNAME = "Abhishek-Sonje";
  const now = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(now.getFullYear() - 1);

  const from = oneYearAgo.toISOString();
  const to = now.toISOString();

  const query = `
    query {
      user(login: "${GITHUB_USERNAME}") {
        contributionsCollection(
          from: "${from}"
          to: "${to}"
        ) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: "GitHub API error" }, { status: 500 });
    }

    const json = await res.json();
    const calendar =
      json.data.user.contributionsCollection.contributionCalendar;

    return NextResponse.json({
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks,
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
