import type { Metadata } from "next";
import PhotographyClient from "./photography-client";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Photography by YuJia Liang — Taiwan, Japan, California, scuba diving, concerts, and daily life through my lens.",
};

export default function Page() {
  return <PhotographyClient />;
}
