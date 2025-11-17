"use client";

import { useEffect } from "react";
import { setupViewTransitions } from "@/lib/view-transitions";

export default function ViewTransitionSetup() {
  useEffect(() => {
    setupViewTransitions();
  }, []);

  return null;
}

