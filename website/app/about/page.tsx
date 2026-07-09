import type { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Engineer & Full-Stack Developer. Apple WWDC26 Swift Student Challenge Winner. CS graduate from National Taiwan Ocean University.",
};

export default function Page() {
  return <AboutClient />;
}
