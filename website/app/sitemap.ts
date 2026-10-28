import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { pages, site } from "@/data/site";

// Built from the same data as the pages, so a removed project leaves the
// sitemap with it.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${site.url}${path === "/" ? "/" : `${path}/`}`;
  return [
    ...pages.map((page) => ({ url: url(page.href), priority: page.href === "/" ? 1 : 0.8 })),
    ...projects.map((project) => ({ url: url(`/portfolio/${project.id}`), priority: 0.6 })),
  ];
}
