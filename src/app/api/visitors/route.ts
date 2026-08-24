import { getRedis } from "@/lib/redis";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const COUNTER_KEY = "portfolio:visitors";
const VISITOR_COOKIE = "portfolio_visitor";
const ONE_YEAR = 60 * 60 * 24 * 365;

export const dynamic = "force-dynamic";

export async function POST() {
  const redis = getRedis();

  if (!redis) {
    return NextResponse.json(
      { error: "Visitor count is unavailable." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    const cookieStore = await cookies();
    const hasVisited = cookieStore.has(VISITOR_COOKIE);
    const count = hasVisited
      ? ((await redis.get<number>(COUNTER_KEY)) ?? 0)
      : await redis.incr(COUNTER_KEY);

    const response = NextResponse.json(
      { count, counted: !hasVisited },
      { headers: { "Cache-Control": "no-store" } },
    );

    if (!hasVisited) {
      response.cookies.set(VISITOR_COOKIE, "1", {
        httpOnly: true,
        maxAge: ONE_YEAR,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
    }

    return response;
  } catch {
    return NextResponse.json(
      { error: "Visitor count is unavailable." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
