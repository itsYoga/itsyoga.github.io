"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import type { PhotoCollection } from "@/data/photography";

interface PhotoCollectionProps {
  collection: PhotoCollection;
  index: number;
}

export default function PhotoCollectionComponent({ collection, index }: PhotoCollectionProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-16"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{collection.title}</h2>
        {collection.description && (
          <p className="text-muted-foreground mb-2">{collection.description}</p>
        )}
        <div className="flex gap-4 text-sm text-muted-foreground">
          {collection.date && <span>Date: {collection.date}</span>}
          {collection.location && <span>Location: {collection.location}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {collection.photos.map((photo, photoIndex) => (
          <motion.div
            key={photoIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: photoIndex * 0.05 }}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedPhoto(photo.src)}
          >
            <Card className="h-full p-0 overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold z-10 hover:text-gray-300"
            >
              ×
            </button>
            <Image
              src={selectedPhoto}
              alt={collection.photos.find(p => p.src === selectedPhoto)?.alt || collection.title}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

