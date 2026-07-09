import type { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Engineer & Full-Stack Developer. Computer Science graduate from National Taiwan Ocean University, based in Taipei.",
};

export default function Page() {
  return <AboutClient />;
}
