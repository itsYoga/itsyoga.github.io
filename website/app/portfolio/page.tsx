import type { Metadata } from "next";
import PortfolioClient from "./portfolio-client";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected works: RiffNode (WWDC26 Swift Student Challenge Winner), deep-learning volleyball analytics, Ghote Notes, and more.",
};

export default function Page() {
  return <PortfolioClient />;
}
