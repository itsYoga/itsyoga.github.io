"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import { photoCollections } from "@/data/photography";
import EditorialHeader from "@/components/EditorialHeader";
import Magnetic from "@/components/Magnetic";

interface FlatPhoto {
  url: string;
  title: string;
  category: string;
  location: string;
  collectionId: string;
}

export default function Photography() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCollection, setActiveCollection] = useState<string>("all");

  // Get unique collection IDs for filtering
  const collections = useMemo(() => {
    return [
      { id: "all", title: "All" },
      ...photoCollections.map((c) => ({ id: c.id, title: c.title })),
    ];
  }, []);

  // Flatten all photos from collections into a single array
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

  // Filter photos based on active collection
  const photos = useMemo(() => {
    if (activeCollection === "all") return allPhotos;
    return allPhotos.filter((p) => p.collectionId === activeCollection);
  }, [allPhotos, activeCollection]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedImage((prev) =>
          prev === 0 ? photos.length - 1 : (prev ?? 0) - 1
        );
      } else if (e.key === "ArrowRight") {
        setSelectedImage((prev) =>
          prev === photos.length - 1 ? 0 : (prev ?? 0) + 1
        );
      }
    },
    [selectedImage, photos.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="min-h-screen">
      <section className="px-4 pb-20 pt-10 lg:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 lg:mb-20">
            <EditorialHeader
              index="03"
              title="Through My Lens"
              subtitle="Exploring the world one frame at a time. A collection of moments captured during travels and everyday adventures."
              size="large"
            />
          </div>

          {/* Collection Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {collections.map((collection) => (
                <Magnetic key={collection.id} strength={0.2} radius={40}>
                  <button
                    onClick={() => {
                      setActiveCollection(collection.id);
                      setSelectedImage(null);
                    }}
                    className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                      activeCollection === collection.id
                        ? "bg-foreground text-background border-foreground"
                        : "bg-transparent text-foreground/70 border-border/50 hover:border-foreground/30 hover:text-foreground"
                    }`}
                  >
                    {collection.title}
                  </button>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Photo Count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {photos.length} {photos.length === 1 ? "photo" : "photos"}
              {activeCollection !== "all" && (
                <span className="ml-2">
                  in{" "}
                  <span className="text-foreground">
                    {collections.find((c) => c.id === activeCollection)?.title}
                  </span>
                </span>
              )}
            </p>
          </div>

          {/* Masonry Grid */}
          <AnimatePresence mode="wait">
            {photos.length > 0 ? (
              <motion.div
                key={activeCollection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="columns-1 sm:columns-2 lg:columns-3 gap-4"
              >
                {photos.map((photo, index) => (
                  <motion.div
                    key={`${photo.collectionId}-${photo.url}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: Math.min(index * 0.05, 0.5),
                    }}
                    className="break-inside-avoid mb-4 group cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="relative overflow-hidden rounded-xl bg-accent/30">
                      <Image
                        src={photo.url}
                        alt={photo.title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading={index < 6 ? "eager" : "lazy"}
                        priority={index < 6}
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                      {/* Bottom info bar - appears on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-sm font-medium">{photo.title}</p>
                        {photo.location && (
                          <p className="text-white/70 text-xs flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3" />
                            {photo.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-muted-foreground text-lg mb-4">
                  No photos in this collection yet.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && photos[selectedImage] && (
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
              {photos.length > 1 && (
                <>
                  <button
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-foreground/10 border border-border/50 hover:bg-foreground/20 transition-colors z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage((prev) =>
                        prev === 0 ? photos.length - 1 : (prev ?? 0) - 1
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
                        prev === photos.length - 1 ? 0 : (prev ?? 0) + 1
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
                    src={photos[selectedImage].url}
                    alt={photos[selectedImage].title}
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
                    {photos[selectedImage].title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {photos[selectedImage].category}
                  </p>
                  {photos[selectedImage].location && (
                    <p className="text-muted-foreground/70 text-xs flex items-center justify-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {photos[selectedImage].location}
                    </p>
                  )}
                  <p className="text-muted-foreground/50 text-xs mt-4">
                    {selectedImage + 1} / {photos.length}
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
