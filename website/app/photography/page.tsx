"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PhotoCollectionComponent from "@/components/PhotoCollection";
import { photoCollections } from "@/data/photography";

export default function Photography() {
  return (
    <main>
      <section className="px-4 pb-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12 lg:mb-16"
          >
            <h1 className="text-[clamp(32px,4vw,72px)] font-bold tracking-tight leading-[1.1] mb-6">
              Photography
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 lg:p-12 mb-12 rounded-2xl bg-card border-2">
              <div className="space-y-6">
                <p className="text-[clamp(18px,1.6vw,28px)] text-muted-foreground leading-relaxed">
                  Photography is my creative outlet and a way to see the world from different perspectives. 
                  I enjoy capturing landscapes, portraits, and moments that tell a story.
                </p>
                <p className="text-[clamp(16px,1.2vw,20px)] text-muted-foreground">
                  Check out my latest work on Instagram or reach out if you're interested in collaborating 
                  on a photography project.
                </p>
                <div className="pt-4">
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl">
                    <Link href="https://www.instagram.com/yogaliang0702/" target="_blank">
                      View on Instagram
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

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
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-12 text-center rounded-2xl bg-card border-2">
                <p className="text-[clamp(16px,1.2vw,20px)] text-muted-foreground mb-4">
                  No photos uploaded yet. Add your photo collections in the data file.
                </p>
                <p className="text-[clamp(14px,1vw,16px)] text-muted-foreground">
                  To add photos: Place them in <code className="bg-accent px-2 py-1 rounded-lg">public/photography/[event-or-place-name]/</code> 
                  and update <code className="bg-accent px-2 py-1 rounded-lg">data/photography.ts</code>
                </p>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </section>
    </main>
  );
}
