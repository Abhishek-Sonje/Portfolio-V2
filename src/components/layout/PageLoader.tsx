"use client";

import { useState, useEffect } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("warm_serif_portfolio_visited");
    if (!hasVisited) {
      // Simulate loading for 900ms on first visit
      const timer = setTimeout(() => setLoading(false), 900);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="w-10 h-10 border-[3px] border-border-strong border-t-accent rounded-full animate-spin" />
    </div>
  );
}
