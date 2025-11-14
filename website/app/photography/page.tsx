"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PhotoCollectionComponent from "@/components/PhotoCollection";
import { photoCollections } from "@/data/photography";

export default function Photography() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold">Photography</h1>
          </div>
          
          <Card className="p-8 md:p-12 mb-12">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Photography is my creative outlet and a way to see the world from different perspectives. 
                I enjoy capturing landscapes, portraits, and moments that tell a story.
              </p>
              <p className="text-muted-foreground">
                Check out my latest work on Instagram or reach out if you're interested in collaborating 
                on a photography project.
              </p>
              <div className="pt-4">
                <Button asChild variant="outline">
                  <Link href="https://www.instagram.com/yogaliang0702/" target="_blank">
                    View on Instagram
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Photo Collections */}
          {photoCollections.length > 0 ? (
            <div>
              {photoCollections.map((collection, index) => (
                <PhotoCollectionComponent
                  key={collection.id}
                  collection={collection}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground mb-4">
                No photos uploaded yet. Add your photo collections in the data file.
              </p>
              <p className="text-sm text-muted-foreground">
                To add photos: Place them in <code className="bg-muted px-2 py-1 rounded">public/photography/[event-or-place-name]/</code> 
                and update <code className="bg-muted px-2 py-1 rounded">data/photography.ts</code>
              </p>
            </Card>
          )}
        </motion.div>
      </section>
    </div>
  );
}
