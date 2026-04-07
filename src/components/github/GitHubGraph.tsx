"use client";

import { useEffect, useState } from "react";

const TIER_COLORS = [
  "bg-neutral-200 dark:bg-neutral-800/50",
  "bg-emerald-200 dark:bg-emerald-900",
  "bg-emerald-300 dark:bg-emerald-700",
  "bg-emerald-400 dark:bg-emerald-500",
  "bg-emerald-500 dark:bg-emerald-400",
];

const getLevel = (count: number) => {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
};

type DayData = {
  level: number;
  date: string;
  count: number;
};
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export default function GitHubGraph() {
  const [mounted, setMounted] = useState(false);
  const [totalContributions, setTotalContributions] = useState(0);
  const [gridData, setGridData] = useState<DayData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch("/api/github")
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setTotalContributions(data.totalContributions);

        // Get all days from weeks
        const allDays = data.weeks.flatMap(
          (week: any) => week.contributionDays,
        );

        const levels: DayData[] = allDays.map((day: any) => ({
          level: getLevel(day.contributionCount),
          date: day.date,
          count: day.contributionCount,
        }));

        setGridData(levels);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const renderGrid = () => {
    if (!mounted || loading) {
      return Array.from({ length: 52 * 7 }).map((_, idx) => (
        <div
          key={idx}
          className="w-[10px] h-[10px] rounded-sm bg-neutral-200 dark:bg-neutral-800/50 animate-pulse"
        />
      ));
    }

    if (error) {
      return (
        <div className="flex items-center justify-center w-full">
          <span className="text-[10px] text-foreground-tertiary">
            Failed to load contributions
          </span>
        </div>
      );
    }

    return gridData.map((day, idx) => (
      <div
        key={idx}
        className={`w-[10px] h-[10px] rounded-sm ${TIER_COLORS[day.level]} cursor-default`}
        title={`${day.count} contribution${day.count !== 1 ? "s" : ""} on ${day.date}`}
      />
    ));
  };

  return (
    <section className="flex flex-col w-full bg-background relative border-y border-border-subtle hidden sm:flex">
      {/* Header */}
      <div className="flex border-b border-border-subtle ">
        <div className="w-full p-3 pl-4 flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-foreground tracking-tight leading-tight">
            GitHub Contributions
          </h2>
          <span className="text-[10px] font-mono text-foreground-secondary">
            {loading
              ? "Loading..."
              : error
                ? "Unavailable"
                : `${totalContributions} contributions in the last year`}
          </span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-40 shrink-0 border-r border-border-subtle p-3 pl-4 flex flex-col justify-start">
          <span className="text-sm font-mono text-foreground-secondary mt-1">
            Activity
          </span>
          <span className="text-[10px] font-mono text-foreground-tertiary mt-2 hidden sm:block">
            Public graph showing real contributions across 4 activity levels.
          </span>
        </div>

        {/* Graph */}
        <div className="w-full p-5 overflow-x-auto">
          {/* Month labels */}
          <div className="flex gap-[3px] min-w-max mb-1 pl-6">
            {MONTHS.map((month, idx) => (
              <span
                key={idx}
                className="flex-1 text-[10px] text-foreground-tertiary"
              >
                {month}
              </span>
            ))}
          </div>

          {/* Day labels + grid */}
          <div className="flex gap-[3px] min-w-max">
            <div className="flex flex-col gap-[3px] text-[10px] text-foreground-tertiary justify-between py-1 pr-2">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
              {renderGrid()}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-4 text-[10px] text-foreground-tertiary min-w-max">
            <span>Less</span>
            <div className="flex gap-[3px]">
              {TIER_COLORS.map((color, idx) => (
                <div
                  key={idx}
                  className={`w-[10px] h-[10px] rounded-sm ${color}`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
