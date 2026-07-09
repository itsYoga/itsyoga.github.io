"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiSpotify } from "react-icons/si";
import { ExternalLink, ChevronLeft, ChevronRight, X, Camera } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import EditorialHeader from "@/components/EditorialHeader";
import Magnetic from "@/components/Magnetic";

const hobbies = [
  {
    id: "scuba",
    title: "Scuba Diving",
    description: "Exploring the underwater world and discovering marine life. There's something magical about the silence and beauty beneath the waves.",
    photos: [
      "/photography/scubadiving/P4020012.JPG",
      "/photography/scubadiving/P4020014.JPG",
      "/photography/scubadiving/P4020039.JPG",
      "/photography/scubadiving/P4020043.JPG",
    ],
  },
  {
    id: "volleyball",
    title: "Volleyball",
    description: "Playing volleyball keeps me active and connected with friends. I love the teamwork and strategy involved in every match.",
    photos: [
      "/photography/volleyball/1747577189638.jpg",
      "/photography/volleyball/1749805710516.jpg",
      "/photography/volleyball/received_1762153534291220.jpeg",
    ],
  },
  {
    id: "music",
    title: "Music",
    description: "Music is a huge part of my life. I play guitar to express creativity and unwind. I also love discovering new artists and attending live concerts.",
    link: "https://open.spotify.com/user/21t6mkxonp73ou4n3ahjddbkq?si=78805a09a5b0464a",
    linkText: "My Spotify",
    linkIcon: "spotify",
    photos: [
      "/photography/music/04bd1c25-0486-4241-acee-eb4d437f71c6.jpeg",
      "/photography/concert/aimyon.jpg",
      "/photography/concert/gracie_abrams.jpg",
      "/photography/concert/gracie_abrams2.jpg",
    ],
  },
  {
    id: "photography",
    title: "Photography",
    description: "Capturing moments and exploring different perspectives through the lens. I love landscape, portrait, and travel photography.",
    link: "/photography",
    linkText: "View Gallery",
    linkIcon: "camera",
  },
  {
    id: "gaming",
    title: "Gaming",
    description: "Playing video games in my free time, especially strategy and puzzle games that challenge my thinking and problem-solving skills.",
  },
];

interface LightboxState {
  hobbyIndex: number;
  photoIndex: number;
}

export default function Hobbies() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const currentHobby = lightbox !== null ? hobbies[lightbox.hobbyIndex] : null;
  const currentPhotos = currentHobby?.photos || [];

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!lightbox) return;

      if (e.key === "Escape") {
        setLightbox(null);
      } else if (e.key === "ArrowLeft") {
        setLightbox((prev) =>
          prev
            ? {
                ...prev,
                photoIndex:
                  prev.photoIndex === 0
                    ? currentPhotos.length - 1
                    : prev.photoIndex - 1,
              }
            : null
        );
      } else if (e.key === "ArrowRight") {
        setLightbox((prev) =>
          prev
            ? {
                ...prev,
                photoIndex:
                  prev.photoIndex === currentPhotos.length - 1
                    ? 0
                    : prev.photoIndex + 1,
              }
            : null
        );
      }
    },
    [lightbox, currentPhotos.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <main className="min-h-screen">
      <section className="px-4 pb-20 pt-10 lg:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16 lg:mb-24">
            <EditorialHeader
              index="04"
              title="Beyond Code"
              subtitle="The activities and passions that bring balance and inspiration to life."
              size="large"
            />
          </div>

          {/* Hobbies List */}
          <div className="space-y-16 md:space-y-24">
            {hobbies.map((hobby, index) => (
              <motion.article
                key={hobby.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`grid grid-cols-1 gap-8 md:gap-14 items-center ${
                    hobby.photos && hobby.photos.length > 0 ? "md:grid-cols-2" : ""
                  }`}
                >
                  {/* Text — alternates sides on desktop */}
                  <div
                    className={
                      hobby.photos && hobby.photos.length > 0 && index % 2 === 1
                        ? "md:order-2"
                        : ""
                    }
                  >
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="font-mono text-sm tracking-[0.2em] text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                        {hobby.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {hobby.description}
                    </p>

                    {/* Link */}
                    {hobby.link && (
                      <div className="mt-5">
                        <Magnetic strength={0.3} radius={60}>
                          <Link
                            href={hobby.link}
                            target={hobby.link.startsWith("http") ? "_blank" : undefined}
                            rel={hobby.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                              hobby.linkIcon === "spotify"
                                ? "bg-[#1DB954]/10 text-[#1DB954] hover:bg-[#1DB954]/20 border border-[#1DB954]/30"
                                : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30"
                            }`}
                          >
                            {hobby.linkIcon === "spotify" && <SiSpotify className="w-4 h-4" />}
                            {hobby.linkIcon === "camera" && <Camera className="w-4 h-4" />}
                            {hobby.linkText}
                            {hobby.link.startsWith("http") && <ExternalLink className="w-3 h-3" />}
                          </Link>
                        </Magnetic>
                      </div>
                    )}
                  </div>

                  {/* Photo collage */}
                  {hobby.photos && hobby.photos.length > 0 && (
                    <div className={index % 2 === 1 ? "md:order-1" : ""}>
                      <div className="grid grid-cols-2 gap-3">
                        {hobby.photos.map((photo, photoIndex) => {
                          // With an odd photo count, let the first photo span the row
                          const spansRow =
                            hobby.photos!.length % 2 === 1 && photoIndex === 0;
                          return (
                            <motion.div
                              key={photoIndex}
                              initial={{ opacity: 0, scale: 0.96 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: photoIndex * 0.05 }}
                              onClick={() => setLightbox({ hobbyIndex: index, photoIndex })}
                              className={`relative overflow-hidden rounded-xl cursor-pointer group/photo bg-accent/30 ${
                                spansRow ? "col-span-2 aspect-video" : "aspect-square"
                              }`}
                            >
                              <Image
                                src={photo}
                                alt={`${hobby.title} photo ${photoIndex + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover/photo:scale-105"
                                sizes="(max-width: 768px) 50vw, 25vw"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/20 transition-colors duration-300" />
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && currentPhotos[lightbox.photoIndex] && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setLightbox(null)}
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
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 rounded-full bg-foreground/10 border border-border/50 hover:bg-foreground/20 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation buttons */}
              {currentPhotos.length > 1 && (
                <>
                  <button
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-foreground/10 border border-border/50 hover:bg-foreground/20 transition-colors z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightbox((prev) =>
                        prev
                          ? {
                              ...prev,
                              photoIndex:
                                prev.photoIndex === 0
                                  ? currentPhotos.length - 1
                                  : prev.photoIndex - 1,
                            }
                          : null
                      );
                    }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-foreground/10 border border-border/50 hover:bg-foreground/20 transition-colors z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightbox((prev) =>
                        prev
                          ? {
                              ...prev,
                              photoIndex:
                                prev.photoIndex === currentPhotos.length - 1
                                  ? 0
                                  : prev.photoIndex + 1,
                            }
                          : null
                      );
                    }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image container */}
              <motion.div
                key={`${lightbox.hobbyIndex}-${lightbox.photoIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full flex items-center justify-center">
                  <Image
                    src={currentPhotos[lightbox.photoIndex]}
                    alt={`${currentHobby?.title} photo`}
                    width={1400}
                    height={1000}
                    className="max-h-[75vh] w-auto h-auto object-contain rounded-lg"
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
                  <h3 className="text-xl md:text-2xl font-semibold mb-1">
                    {currentHobby?.title}
                  </h3>
                  <p className="text-muted-foreground/50 text-sm">
                    {lightbox.photoIndex + 1} / {currentPhotos.length}
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
