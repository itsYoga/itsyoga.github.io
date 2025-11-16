"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PhotoCollectionComponent from "@/components/PhotoCollection";
import { photoCollections } from "@/data/photography";
import Copy from "@/components/Copy";

export default function Photography() {
  return (
    <main>
      <section className="px-4 pb-20 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 lg:mb-16">
            <Copy>
              <h1 className="text-[clamp(32px,4vw,72px)] font-bold tracking-tight leading-[1.1] mb-6">
                Photography
              </h1>
            </Copy>
          </div>
          
          <div className="mb-12">
            <Card className="p-8 lg:p-12 rounded-2xl bg-card border-2">
              <Copy>
                <p className="text-[clamp(18px,1.6vw,28px)] text-muted-foreground leading-relaxed mb-6">
                  Photography is my creative outlet and a way to see the world from different perspectives. 
                  I enjoy capturing landscapes, portraits, and moments that tell a story.
                </p>
              </Copy>
              <Copy delay={0.1}>
                <p className="text-[clamp(16px,1.2vw,20px)] text-muted-foreground mb-6">
                  Check out my latest work on Instagram or reach out if you're interested in collaborating 
                  on a photography project.
                </p>
              </Copy>
              <div className="pt-4">
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl">
                  <Link href="https://www.instagram.com/yogaliang0702/" target="_blank">
                    View on Instagram
                  </Link>
                </Button>
              </div>
            </Card>
          </div>

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
            <div>
              <Card className="p-12 text-center rounded-2xl bg-card border-2">
                <Copy>
                  <p className="text-[clamp(16px,1.2vw,20px)] text-muted-foreground mb-4">
                    No photos uploaded yet. Add your photo collections in the data file.
                  </p>
                </Copy>
                <Copy delay={0.1}>
                  <p className="text-[clamp(14px,1vw,16px)] text-muted-foreground">
                    To add photos: Place them in <code className="bg-accent px-2 py-1 rounded-lg">public/photography/[event-or-place-name]/</code> 
                    and update <code className="bg-accent px-2 py-1 rounded-lg">data/photography.ts</code>
                  </p>
                </Copy>
              </Card>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
