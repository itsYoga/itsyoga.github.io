import type { Metadata } from "next";
import TerminalClient from "./terminal-client";

export const metadata: Metadata = {
  title: "Terminal",
  description: "An interactive terminal easter egg. Type help to get started.",
};

export default function Page() {
  return <TerminalClient />;
}
