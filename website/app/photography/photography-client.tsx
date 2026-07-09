"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import { photoCollections } from "@/data/photography";
import EditorialHeader from "@/components/EditorialHeader";

interface FlatPhoto {
  url: string;
  title: string;
  category: string;
  location: string;
  collectionId: string;
}

/* Sprocket-hole strip: holes punch through to the page background */
function Perforations() {
  return (
    <div
      aria-hidden
      className="h-5 mx-2"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, var(--background) 4px, transparent 4.5px)",
        backgroundSize: "28px 100%",
        backgroundPosition: "center",
      }}
    />
  );
}

export default function Photography() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Flat list for the lightbox; rolls index into it via running offsets
  const allPhotos: FlatPhoto[] = useMemo(() => {
    const flatPhotos: FlatPhoto[] = [];
    photoCollections.forEach((collection) => {
      collection.photos.forEach((photo) => {
        flatPhotos.push({
          url: photo.src,
          title: collection.title,
          category: collection.description || "Photography",
          location: collection.location || "",
          collectionId: collection.id,
        });
      });
    });
    return flatPhotos;
  }, []);

  const collectionOffsets = useMemo(() => {
    const offsets: Record<string, number> = {};
    let offset = 0;
    photoCollections.forEach((collection) => {
      offsets[collection.id] = offset;
      offset += collection.photos.length;
    });
    return offsets;
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedImage((prev) =>
          prev === 0 ? allPhotos.length - 1 : (prev ?? 0) - 1
        );
      } else if (e.key === "ArrowRight") {
        setSelectedImage((prev) =>
          prev === allPhotos.length - 1 ? 0 : (prev ?? 0) + 1
        );
      }
    },
    [selectedImage, allPhotos.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = selectedImage !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="min-h-screen">
      <section className="px-4 pb-24 pt-10 lg:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 lg:mb-24">
            <EditorialHeader
              index="03"
              title="Through My Lens"
              subtitle="Every collection is a roll of film — scroll through the frames, click one to develop the memory."
              size="large"
            />
          </div>

          {/* Film rolls */}
          <div className="space-y-16 md:space-y-20">
            {photoCollections.map((collection, rollIndex) => (
              <motion.section
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Roll label */}
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4 px-1">
                  <span className="font-mono text-xs tracking-[0.2em] text-primary">
                    ROLL {String(rollIndex + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                    {collection.title}
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    {collection.location && `${collection.location} · `}
                    {collection.photos.length} frames
                  </span>
                  <span className="ml-auto hidden md:inline font-mono text-[11px] text-muted-foreground/60">
                    scroll →
                  </span>
                </div>

                {/* Film strip */}
                <div className="rounded-2xl bg-[#171310] shadow-xl overflow-hidden">
                  <Perforations />
                  <div className="flex items-stretch gap-3 overflow-x-auto px-4 py-1 snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {collection.photos.map((photo, frameIndex) => (
                      <button
                        key={photo.src}
                        onClick={() =>
                          setSelectedImage(collectionOffsets[collection.id] + frameIndex)
                        }
                        className="group shrink-0 snap-center text-left"
                        aria-label={`${collection.title} frame ${frameIndex + 1}`}
                      >
                        <div className="relative h-48 md:h-64 overflow-hidden bg-black/40">
                          <Image
                            src={photo.src}
                            alt={photo.alt || collection.title}
                            width={900}
                            height={600}
                            className="h-full w-auto max-w-none object-cover transition duration-500 group-hover:brightness-110 group-hover:contrast-[1.02]"
                            sizes="(max-width: 768px) 60vw, 30vw"
                            loading={rollIndex === 0 ? "eager" : "lazy"}
                            quality={82}
                          />
                        </div>
                        <div className="flex items-center justify-between mt-1 mb-1.5 px-0.5">
                          <span className="font-mono text-[10px] tracking-[0.25em] text-amber-500/70">
                            {String(frameIndex + 1).padStart(2, "0")}A
                          </span>
                          <span className="font-mono text-[10px] tracking-[0.2em] text-amber-500/40 uppercase group-hover:text-amber-500/70 transition-colors">
                            {collection.id}·400
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                  <Perforations />
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && allPhotos[selectedImage] && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
            />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 rounded-full bg-foreground/10 border border-border/50 hover:bg-foreground/20 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation buttons */}
              {allPhotos.length > 1 && (
                <>
                  <button
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-foreground/10 border border-border/50 hover:bg-foreground/20 transition-colors z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage((prev) =>
                        prev === 0 ? allPhotos.length - 1 : (prev ?? 0) - 1
                      );
                    }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-foreground/10 border border-border/50 hover:bg-foreground/20 transition-colors z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage((prev) =>
                        prev === allPhotos.length - 1 ? 0 : (prev ?? 0) + 1
                      );
                    }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image container */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full flex items-center justify-center">
                  <Image
                    src={allPhotos[selectedImage].url}
                    alt={allPhotos[selectedImage].title}
                    width={1400}
                    height={1000}
                    className="max-h-[70vh] w-auto h-auto object-contain rounded-lg"
                    sizes="90vw"
                    priority
                    quality={95}
                  />
                </div>

                {/* Photo info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mt-6 text-center"
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {allPhotos[selectedImage].title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {allPhotos[selectedImage].category}
                  </p>
                  {allPhotos[selectedImage].location && (
                    <p className="text-muted-foreground/70 text-xs flex items-center justify-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {allPhotos[selectedImage].location}
                    </p>
                  )}
                  <p className="font-mono text-muted-foreground/50 text-xs mt-4 tracking-widest">
                    FRAME {selectedImage + 1} / {allPhotos.length}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
