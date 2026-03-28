"use client";

import { useEffect, useState } from "react";

const TIER_COLORS = [
  "bg-surface-raised", 
  "bg-emerald-900",    
  "bg-emerald-700",    
  "bg-emerald-500",    
  "bg-emerald-400",    
];

export default function GitHubGraph() {
  const [mounted, setMounted] = useState(false);
  const totalContributions = 412; 
  
  const [gridData, setGridData] = useState<number[]>([]);

  useEffect(() => {
    const data = Array.from({ length: 52 * 7 }, () => {
      const rand = Math.random();
      if (rand < 0.6) return 0;
      return Math.floor(Math.random() * 4) + 1;
    });
    setGridData(data);
    setMounted(true);
  }, []);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <section className="flex flex-col w-full bg-background relative border-y border-border-subtle hidden sm:flex">
      <div className="flex border-b border-border-subtle bg-surface-raised/30">
        <div className="w-full p-3 pl-4 flex items-center justify-between">
           <h2 className="text-[10px] font-semibold tracking-widest uppercase text-foreground-tertiary">GitHub Contributions</h2>
           <span className="text-[10px] font-mono text-foreground-secondary">{totalContributions} contributions in the last year</span>
        </div>
      </div>

      <div className="flex">
        <div className="w-40 shrink-0 border-r border-border-subtle p-3 pl-4 flex flex-col justify-start">
          <span className="text-sm font-mono text-foreground-secondary mt-1">Activity</span>
          <span className="text-[10px] font-mono text-foreground-tertiary mt-2 hidden sm:block">Public graph showing 0 commit mocks organically arrayed to 4 levels.</span>
        </div>
        
        <div className="w-full p-5 overflow-x-auto">
          <div className="flex gap-[3px] min-w-max mb-1 pl-6">
            {months.map((month, idx) => (
              <span key={idx} className="flex-1 text-[10px] text-foreground-tertiary">
                {month}
              </span>
            ))}
          </div>

          <div className="flex gap-[3px] min-w-max">
            <div className="flex flex-col gap-[3px] text-[10px] text-foreground-tertiary justify-between py-1 pr-2">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>
            
            <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
              {mounted ? (
                gridData.map((level, idx) => (
                  <div
                    key={idx}
                    className={`w-[10px] h-[10px] rounded-sm ${TIER_COLORS[level]}`}
                    title={`${level} contributions`}
                  />
                ))
              ) : (
                Array.from({ length: 52 * 7 }).map((_, idx) => (
                  <div key={idx} className="w-[10px] h-[10px] rounded-sm bg-surface-raised" />
                ))
              )}
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 mt-4 text-[10px] text-foreground-tertiary min-w-max">
            <span>Less</span>
            <div className="flex gap-[3px]">
              {TIER_COLORS.map((color, idx) => (
                <div key={idx} className={`w-[10px] h-[10px] rounded-sm ${color}`} />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
