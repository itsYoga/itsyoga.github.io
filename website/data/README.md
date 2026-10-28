# Site Content — How to Maintain

Almost everything you'd want to change lives in this `data/` folder.
Edit the data file, run `npm run build` (or just push — CI builds it), done.

| What to change | Where |
|---|---|
| Projects (portfolio cards, detail pages, homepage, terminal, ⌘K search, sitemap) | `data/projects.ts` |
| Bio text | `app/about/about-client.tsx` |
| Experience, education, awards, languages, life photos | `data/profile.ts` |
| Technical skills on About | `data/skills.ts` |
| Name, email, social links, resume path, nav pages | `data/site.ts` |
| Photography collections (film rolls) | `data/photography.ts` + `public/photography/` |
| Resume PDF | edit `../resume/YuJia_resume.tex`, run `pdflatex` twice, copy PDF to `public/YuJia_resume.pdf` |

Pages only render this data. Anything that lists projects or links (terminal,
command palette, sitemap, footer) derives from these files, so there is no
second copy to keep in sync.

## Adding a project

Add an entry to `data/projects.ts`. It automatically appears on the
portfolio page, gets its own page at `/portfolio/<id>`, and can be
referenced from the homepage featured section (`app/page.tsx`) and the
terminal page. Fields:

- `id` — becomes the URL slug
- `thumb` — optional preview image in `public/images/projects/`
  (extract from a demo video: `ffmpeg -i demo.mp4 -ss 2 -frames:v 1 -vf "scale=1280:-2" thumb.jpg`)
- `video` — optional demo video in `public/videos/`
- `award` / `news` — optional badge (WWDC awards get the Apple mark, others a trophy) and press links
- `demoLabel` / `links` — the demo button's text, and further links (report, crates.io…)
- `gallery` — screenshots, photos or clips shown under the description

## Adding skills

Add the name to a category in `data/skills.ts`. To give it an icon,
map it in `skillIcons` in `app/about/about-client.tsx` (icons come from
`react-icons/si`). Skills without icons render as plain text chips.

## Adding a photography collection (film roll)

1. Create a folder in `public/photography/` (kebab-case).
2. Add photos — **compress first**: max 2000px long edge, ideally <500KB
   (`sips -Z 2000 -s formatOptions 80 photo.jpg`).
3. Add the collection to `data/photography.ts`:

```typescript
{
  id: "kyoto-2026",           // used as the roll's edge label
  title: "Kyoto",
  description: "Autumn in Kyoto",
  location: "Kyoto, Japan",
  photos: [
    { src: "/photography/kyoto-2026/photo1.jpg", alt: "Torii gate at dusk" },
  ],
}
```

Each collection renders as one scrollable film roll, in array order.
