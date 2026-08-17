"use client";

import { FaHammer } from "react-icons/fa";
import { useLiveClock } from "./LiveClock";

export function NowBuildingWidget() {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
        <FaHammer size={15} />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-gray-100">Now Building</p>
        <p className="truncate text-xs text-gray-500">
          EcoChain — a supply chain tracker
        </p>
      </div>
    </div>
  );
}

export function StatusWidget() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-100">Status</p>
        <span className="flex items-center gap-1.5 text-xs text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available
        </span>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-gray-500">
        Open to new full-stack &amp; infra projects starting next month.
      </p>
    </div>
  );
}

export function ClockWidget() {
  const { time, date } = useLiveClock("America/Los_Angeles");

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
        San Francisco &middot; PST
      </p>
      <p className="mt-1 font-mono text-2xl font-bold text-gray-100">
        {time}
      </p>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  );
}
