"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { photoCollections } from "@/data/photography";
import Copy from "@/components/Copy";
import EditorialHeader from "@/components/EditorialHeader";

interface FlatPhoto {
  url: string;
  title: string;
  category: string;
  location: string;
  collectionId: string;
}

export default function Photography() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Flatten all photos from collections into a single array
  const photos: FlatPhoto[] = useMemo(() => {
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

  return (
    <main className="min-h-screen bg-background">
      <section className="px-4 pb-20 pt-10 lg:py-24">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-16 lg:mb-24">
            <EditorialHeader
              index="03"
              title="Through My Lens"
              subtitle="Exploring the world one frame at a time. A collection of moments captured during travels and everyday adventures."
              size="large"
            />
          </div>

          {/* Masonry Grid */}
          {photos.length > 0 ? (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {photos.map((photo, index) => (
                <motion.div
                  key={`${photo.collectionId}-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.02,
                    ease: "easeOut"
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onTouchStart={() => setHoveredIndex(index)}
                  className="break-inside-avoid mb-4 relative group cursor-pointer overflow-hidden rounded-xl bg-card border-2 border-transparent hover:border-primary/30 active:border-primary/50 transition-all touch-manipulation"
                  onClick={() => setSelectedImage(index)}
                  style={{ willChange: 'transform' }}
                >
                  <div className="relative w-full aspect-auto">
                    <Image
                      src={photo.url}
                      alt={photo.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading={index < 6 ? "eager" : "lazy"}
                      priority={index < 6}
                      quality={85}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  
                  {/* Overlay - Show on hover (desktop) or always visible on mobile for better UX */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-4 md:p-6 md:opacity-0 md:group-hover:opacity-100"
                  >
                    <motion.div
                      initial={{ y: 20 }}
                      animate={{ y: hoveredIndex === index ? 0 : 20 }}
                      transition={{ duration: 0.3 }}
                      className="transform"
                    >
                      <h3 className="text-white mb-1 text-base md:text-lg font-semibold">{photo.title}</h3>
                      <p className="text-xs md:text-sm text-gray-300 mb-1">{photo.category}</p>
                      {photo.location && (
                        <p className="text-xs text-gray-400">{photo.location}</p>
                      )}
                    </motion.div>
                    <motion.div
                      className="absolute top-4 right-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ZoomIn className="text-white" size={24} />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Copy>
                <p className="text-muted-foreground text-lg mb-4">
                  No photos uploaded yet. Add your photo collections in the data file.
                </p>
              </Copy>
              <Copy delay={0.1}>
                <p className="text-muted-foreground text-sm">
                  To add photos: Place them in <code className="bg-accent px-2 py-1 rounded-lg">public/photography/[event-or-place-name]/</code> 
                  and update <code className="bg-accent px-2 py-1 rounded-lg">data/photography.ts</code>
                </p>
              </Copy>
            </div>
          )}
          
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 active:bg-white/30 transition-colors z-50 rounded-xl touch-manipulation"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </motion.button>

            {/* Navigation */}
            {photos.length > 1 && (
              <>
                <button
                  className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 active:bg-white/30 transition-colors rounded-xl touch-manipulation"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) =>
                      prev === 0 ? photos.length - 1 : (prev ?? 0) - 1
                    );
                  }}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 active:bg-white/30 transition-colors rounded-xl touch-manipulation"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) =>
                      prev === photos.length - 1 ? 0 : (prev ?? 0) + 1
                    );
                  }}
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ ease: [0.16, 1, 0.3, 1] }}
              className="max-w-6xl max-h-[90vh] md:max-h-[85vh] flex flex-col w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-h-[70vh] md:max-h-[75vh] flex items-center justify-center px-2">
                <Image
                  src={photos[selectedImage].url}
                  alt={photos[selectedImage].title}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[70vh] md:max-h-[75vh] object-contain"
                  sizes="(max-width: 768px) 95vw, 90vw"
                  priority
                  quality={90}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 md:mt-6 text-center bg-black/50 backdrop-blur-sm p-4 md:p-6 border border-white/10 rounded-xl"
              >
                <h3 className="text-white mb-2 text-lg md:text-xl font-semibold">{photos[selectedImage].title}</h3>
                <p className="text-gray-300 text-xs md:text-sm mb-1">
                  {photos[selectedImage].category}
                </p>
                {photos[selectedImage].location && (
                  <p className="text-gray-400 text-xs">
                    {photos[selectedImage].location}
                  </p>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
