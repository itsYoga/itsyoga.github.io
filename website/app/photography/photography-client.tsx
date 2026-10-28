"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { photoCollections, type Photo } from "@/data/photography";
import EditorialHeader from "@/components/EditorialHeader";

interface FlatPhoto extends Photo {
  collection: string;
  location?: string;
  frame: number;
}

const roll = (i: number) => String(i + 1).padStart(2, "0");

/**
 * A justified grid: photos keep their full frame — widths follow each photo's
 * aspect ratio, nothing is cropped — and each row stretches to fill the width.
 * A photo may grow only to --cap × its base size (looser on narrow screens,
 * where rows hold fewer photos), so a short last row or a one-photo
 * collection stays a sensible size instead of filling the page.
 */
function JustifiedRow({
  photos,
  onOpen,
  eager,
}: {
  photos: FlatPhoto[];
  onOpen: (photo: FlatPhoto) => void;
  eager: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3 [--row-h:150px] [--cap:2.4] sm:[--row-h:220px] sm:[--cap:2] lg:[--row-h:300px] lg:[--cap:1.6]">
      {photos.map((photo) => {
        const ratio = photo.width / photo.height;
        return (
          <button
            key={photo.src}
            type="button"
            onClick={() => onOpen(photo)}
            aria-label={`Open frame ${roll(photo.frame)}: ${photo.alt}`}
            className="group relative overflow-hidden rounded-lg bg-accent/40"
            style={{
              flexGrow: ratio,
              flexBasis: `calc(var(--row-h) * ${ratio})`,
              maxWidth: `calc(var(--row-h) * ${ratio} * var(--cap))`,
            }}
          >
            <div style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading={eager ? "eager" : "lazy"}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:brightness-105"
              />
            </div>
            <span className="pointer-events-none absolute bottom-1.5 left-2 font-mono text-[10px] tracking-[0.2em] text-white/85 [text-shadow:0_1px_3px_rgb(0_0_0/0.6)]">
              {roll(photo.frame)}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function Photography() {
  const [selected, setSelected] = useState<number | null>(null);

  // One flat list for the lightbox, so ← / → walk across collections.
  const allPhotos: FlatPhoto[] = useMemo(
    () =>
      photoCollections.flatMap((c) =>
        c.photos.map((p, frame) => ({ ...p, collection: c.title, location: c.location, frame }))
      ),
    []
  );

  const open = (photo: FlatPhoto) => setSelected(allPhotos.findIndex((p) => p.src === photo.src));
  const step = useCallback(
    (delta: number) => setSelected((i) => (i === null ? i : (i + delta + allPhotos.length) % allPhotos.length)),
    [allPhotos.length]
  );

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, step]);

  const current = selected === null ? null : allPhotos[selected];

  return (
    <main className="min-h-screen">
      <section className="px-4 pb-24 pt-10 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 lg:mb-12">
            <EditorialHeader
              title="Through My Lens"
              subtitle="A small, curated set of photographs — harbors, stages, food and travel. Each collection is a roll; open any frame to see it full size."
            />
          </div>

          {/* Index: every roll at a glance, and a jump to it */}
          <nav aria-label="Collections" className="mb-16 lg:mb-20 flex flex-wrap gap-2">
            {photoCollections.map((c, i) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="group flex items-center gap-2.5 rounded-full border border-border bg-card/60 py-1 pl-1 pr-3.5 hover:border-foreground/30 transition-colors"
              >
                <img src={c.photos[0].src} alt="" loading="lazy" className="h-8 w-8 rounded-full object-cover" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">{roll(i)}</span>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">{c.title}</span>
              </a>
            ))}
          </nav>

          <div className="space-y-20 md:space-y-24">
            {photoCollections.map((collection, rollIndex) => (
              <motion.section
                key={collection.id}
                id={collection.id}
                className="scroll-mt-20"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <header className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-mono text-xs tracking-[0.2em] text-primary">ROLL {roll(rollIndex)}</span>
                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{collection.title}</h2>
                  <span className="text-sm text-muted-foreground">
                    {collection.description}
                    {collection.location && ` · ${collection.location}`}
                    {` · ${collection.photos.length} frame${collection.photos.length === 1 ? "" : "s"}`}
                  </span>
                </header>
                <JustifiedRow
                  photos={allPhotos.filter((p) => p.collection === collection.title)}
                  onOpen={open}
                  eager={rollIndex === 0}
                />
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 rounded-full bg-foreground/10 border border-border/50 hover:bg-foreground/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-foreground/10 border border-border/50 hover:bg-foreground/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-foreground/10 border border-border/50 hover:bg-foreground/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <motion.figure
              key={current.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex max-w-5xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={current.src} alt={current.alt} className="max-h-[76vh] w-auto rounded-lg object-contain" />
              <figcaption className="mt-5 text-center">
                <p className="text-sm text-foreground/85">{current.alt}</p>
                <p className="mt-1.5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  {current.location && (
                    <>
                      <MapPin className="w-3 h-3" />
                      {current.location} ·{" "}
                    </>
                  )}
                  {current.collection}
                  <span className="font-mono tracking-widest ml-2">
                    {(selected ?? 0) + 1} / {allPhotos.length}
                  </span>
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
