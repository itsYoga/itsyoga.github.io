"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Instagram } from "lucide-react";
import Link from "next/link";

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
          <div className="flex items-center gap-3 mb-8">
            <Camera className="w-6 h-6 text-primary" />
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
                <Button asChild variant="outline" className="gap-2">
                  <Link href="https://www.instagram.com/yogaliang0702/" target="_blank">
                    <Instagram className="w-4 h-4" />
                    View on Instagram
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Photo Grid Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="aspect-square bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors cursor-pointer group">
                  <Camera className="w-12 h-12 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

