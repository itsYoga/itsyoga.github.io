import type { Metadata } from "next";
import HobbiesClient from "./hobbies-client";

export const metadata: Metadata = {
  title: "Hobbies",
  description:
    "Beyond code: scuba diving, volleyball, music, photography, and gaming.",
};

export default function Page() {
  return <HobbiesClient />;
}
