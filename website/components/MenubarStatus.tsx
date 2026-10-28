"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

interface BatteryManager extends EventTarget {
  level: number;
  charging: boolean;
}

/**
 * A menu bar status item: a glyph, and on hover or focus the small
 * pop-over macOS shows for it.
 */
function StatusItem({
  label,
  popover,
  align = "center",
  children,
}: {
  label: string;
  popover: React.ReactNode;
  align?: "center" | "right";
  children: React.ReactNode;
}) {
  return (
    <span
      tabIndex={0}
      aria-label={label}
      className="group relative inline-flex items-center justify-center min-w-7 h-7 px-1 rounded-[5px] text-foreground/75 hover:bg-accent focus-visible:bg-accent outline-none"
    >
      {children}
      <span
        role="tooltip"
        className={`pointer-events-none absolute top-[calc(100%+0.5rem)] z-50 flex items-center gap-2.5 whitespace-nowrap rounded-xl border border-border bg-popover/95 backdrop-blur-md px-3.5 py-2 text-left shadow-lg opacity-0 translate-y-0.5 transition duration-150 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 ${
          align === "right" ? "right-0" : "left-1/2 -translate-x-1/2"
        }`}
      >
        {popover}
      </span>
    </span>
  );
}

function PopText({ title, detail }: { title: string; detail?: string }) {
  return (
    <span className="grid">
      <b className="text-[13px] font-semibold text-foreground">{title}</b>
      {detail && <em className="not-italic text-xs text-muted-foreground">{detail}</em>}
    </span>
  );
}

export function WifiStatus() {
  return (
    <StatusItem label="Wi-Fi, Connected" popover={<PopText title="Wi-Fi" detail="Connected" />}>
      <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true">
        <path
          d="M8 11.2 5.6 8.8a3.4 3.4 0 0 1 4.8 0L8 11.2Zm-4-4a5.7 5.7 0 0 1 8 0l1.2-1.2a7.4 7.4 0 0 0-10.4 0L4 7.2ZM1.2 4.4a9.7 9.7 0 0 1 13.6 0L16 3.2a11.4 11.4 0 0 0-16 0l1.2 1.2Z"
          fill="currentColor"
        />
      </svg>
    </StatusItem>
  );
}

export function BluetoothStatus() {
  return (
    <StatusItem
      label="Bluetooth, AirPods Max connected"
      popover={<PopText title="Bluetooth" detail="YuJia’s AirPods Max · Connected" />}
    >
      <svg width="10" height="14" viewBox="0 0 10 14" aria-hidden="true">
        <path d="m1 4 7 6-3.5 3V1L8 4 1 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    </StatusItem>
  );
}

/** Now playing on AirPods Max: artwork, two lines, an equaliser. */
export function AirPodsStatus() {
  return (
    <StatusItem
      label="YuJia’s AirPods Max, playing from Spotify"
      popover={
        <>
          <span
            aria-hidden="true"
            className="w-8 h-8 rounded-md bg-[conic-gradient(from_200deg,#1DB954,#9ee7c0,#8ea1ff,#1DB954)]"
          />
          <PopText title="YuJia’s AirPods Max" detail="Spotify · Now playing" />
          <span aria-hidden="true" className="flex items-end gap-[2px] h-3.5">
            {[0, -0.3, -0.6, -0.15].map((delay) => (
              <i
                key={delay}
                className="block w-[3px] h-full rounded-sm bg-foreground origin-bottom animate-[np-eq_0.9s_ease-in-out_infinite_alternate]"
                style={{ animationDelay: `${delay}s` }}
              />
            ))}
          </span>
        </>
      }
    >
      {/* AirPods Max: the canopy, the band, and two cups. */}
      <svg width="15" height="14" viewBox="0 0 15 14" aria-hidden="true">
        <path d="M2 8.5V7a5.5 5.5 0 0 1 11 0v1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="0.5" y="7.2" width="3.6" height="6.2" rx="1.4" fill="currentColor" />
        <rect x="10.9" y="7.2" width="3.6" height="6.2" rx="1.4" fill="currentColor" />
      </svg>
    </StatusItem>
  );
}

/**
 * The visitor's own battery, where the browser will say. Chromium browsers
 * expose `navigator.getBattery()`; Safari and Firefox do not, and there the
 * glyph is drawn without a level rather than with an invented percentage.
 */
export function BatteryStatus() {
  const [state, setState] = useState<{ level: number; charging: boolean } | null>(null);

  useEffect(() => {
    const nav = navigator as Navigator & { getBattery?: () => Promise<BatteryManager> };
    if (!nav.getBattery) return;
    let battery: BatteryManager | null = null;
    const read = () => battery && setState({ level: battery.level, charging: battery.charging });
    nav
      .getBattery()
      .then((b) => {
        battery = b;
        read();
        b.addEventListener("levelchange", read);
        b.addEventListener("chargingchange", read);
      })
      .catch(() => {});
    return () => {
      battery?.removeEventListener("levelchange", read);
      battery?.removeEventListener("chargingchange", read);
    };
  }, []);

  const pct = state ? Math.round(state.level * 100) : null;
  const fill = state ? Math.max(1.5, 15.5 * state.level) : 0;

  return (
    <StatusItem
      label={pct === null ? "Battery" : `Battery ${pct}%`}
      align="right"
      popover={
        <PopText
          title={`Battery${pct !== null ? ` ${pct}%` : ""}`}
          detail={state ? (state.charging ? "Power Adapter" : "Battery") : undefined}
        />
      }
    >
      {pct !== null && <span className="mr-1 text-xs tabular-nums">{pct}%</span>}
      <svg width="26" height="12" viewBox="0 0 26 12" aria-hidden="true">
        <rect x="0.5" y="0.5" width="21" height="11" rx="3" fill="none" stroke="currentColor" opacity="0.6" />
        {state && (
          <rect x="2.5" y="2.5" width={fill} height="7" rx="1.5" fill={pct! <= 20 ? "#ff3b30" : "currentColor"} />
        )}
        <rect x="22.8" y="4" width="1.6" height="4" rx="0.8" fill="currentColor" opacity="0.6" />
      </svg>
    </StatusItem>
  );
}

/** The clock, in the visitor's own time, the way a Mac's menu bar reads. */
const formatClock = () =>
  new Date().toLocaleString("en-US", { weekday: "short", hour: "numeric", minute: "2-digit" });

// The clock is external state: subscribe to a 15-second tick, and render
// nothing on the server, where the visitor's time is unknown.
function subscribeClock(onTick: () => void) {
  const id = setInterval(onTick, 15_000);
  return () => clearInterval(id);
}

export function MenubarClock() {
  const now = useSyncExternalStore(subscribeClock, formatClock, () => null);

  return <span className="min-w-[10ch] text-right tabular-nums">{now}</span>;
}
