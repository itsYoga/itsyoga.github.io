"use client";

import { Card } from "@/components/ui/card";
import Copy from "@/components/Copy";
import { SiSpotify } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const hobbies = [
  {
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
    title: "Volleyball",
    description: "Playing volleyball keeps me active and helps me stay connected with friends. I love the teamwork and strategy involved in the game.",
    photos: [
      "/photography/volleyball/1747577189638.jpg",
      "/photography/volleyball/1749805710516.jpg",
      "/photography/volleyball/received_1762153534291220.jpeg",
    ],
  },
  {
    title: "Music",
    description: "Music is a huge part of my life. I play guitar as a way of expressing creativity and relaxing, enjoy learning new songs and experimenting with different styles. I also listen to a wide variety of genres, love discovering new artists and songs, and enjoy attending live concerts.",
    link: "https://open.spotify.com/user/21t6mkxonp73ou4n3ahjddbkq?si=78805a09a5b0464a",
    linkText: "Check out my Spotify",
    photos: [
      "/photography/music/04bd1c25-0486-4241-acee-eb4d437f71c6.jpeg",
      "/photography/concert/aimyon.jpg",
      "/photography/concert/gracie_abrams.jpg",
      "/photography/concert/gracie_abrams2.jpg",
    ],
  },
  {
    title: "Photography",
    description: "Capturing moments and exploring different perspectives through the lens. I love landscape, portrait, and travel photography.",
    link: "/photography",
    linkText: "View my photography collection",
  },
  {
    title: "Gaming",
    description: "Playing video games in my free time, especially strategy and puzzle games that challenge my thinking and problem-solving skills.",
  },
];

export default function Hobbies() {
  return (
    <main>
      <section className="px-4 pb-20 lg:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 lg:mb-16">
            <Copy animateOnScroll={false} delay={0}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] pb-1">
                Hobbies & Interests
              </h1>
            </Copy>
          </div>

          <div className="space-y-4 md:space-y-6">
            {hobbies.map((hobby, index) => (
              <div key={hobby.title}>
                <Card className="p-4 md:p-6 lg:p-8 rounded-2xl hover:shadow-xl transition-all group bg-card border-2 border-transparent hover:border-primary/30 active:border-primary/50 touch-manipulation">
                  <div>
                    <Copy delay={index * 0.1}>
                      <h3 className="text-xl md:text-2xl lg:text-[clamp(24px,2.5vw,40px)] font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors">
                        {hobby.title}
                      </h3>
                    </Copy>
                    <Copy delay={index * 0.1 + 0.1}>
                      <p className="text-sm md:text-base lg:text-[clamp(16px,1.2vw,20px)] text-muted-foreground leading-relaxed mb-3 md:mb-4">
                        {hobby.description}
                      </p>
                      {hobby.link && (
                        <Link
                          href={hobby.link}
                          target={hobby.link.startsWith('http') ? "_blank" : undefined}
                          rel={hobby.link.startsWith('http') ? "noopener noreferrer" : undefined}
                          className={`inline-flex items-center gap-2 transition-colors font-medium text-sm md:text-base touch-manipulation py-1 ${
                            hobby.link.includes('spotify') 
                              ? 'text-[#1DB954] hover:text-[#1ed760] active:text-[#1ed760]' 
                              : 'text-primary hover:text-primary/80 active:text-primary/80'
                          }`}
                        >
                          {hobby.link.includes('spotify') && <SiSpotify className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />}
                          <span className="break-words">{hobby.linkText}</span>
                        </Link>
                      )}
                    </Copy>
                    
                    {/* Photo Gallery */}
                    {hobby.photos && hobby.photos.length > 0 && (
                      <div className={`mt-4 md:mt-6 grid gap-2 md:gap-3 ${
                        hobby.photos.length === 1 
                          ? 'grid-cols-1' 
                          : hobby.photos.length === 2
                          ? 'grid-cols-2'
                          : hobby.photos.length === 3
                          ? 'grid-cols-2 md:grid-cols-3'
                          : 'grid-cols-2 md:grid-cols-4'
                      }`}>
                        {hobby.photos.map((photo, photoIndex) => (
                          <motion.div
                            key={photoIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 + photoIndex * 0.05 }}
                            className="relative aspect-square overflow-hidden rounded-lg group/photo touch-manipulation"
                          >
                            <Image
                              src={photo}
                              alt={`${hobby.title} photo ${photoIndex + 1}`}
                              fill
                              className="object-cover group-hover/photo:scale-110 transition-transform duration-300"
                              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                              loading="lazy"
                            />
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12">
            <Card className="p-4 md:p-6 lg:p-8 text-center rounded-2xl bg-card border-2">
              <Copy>
                <p className="text-base md:text-lg lg:text-[clamp(18px,1.6vw,24px)] text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                  When I'm not coding, you'll find me exploring underwater depths, playing volleyball with friends, 
                  enjoying music and playing guitar, or capturing moments through my camera lens.
                </p>
              </Copy>
              <Copy delay={0.1}>
                <p className="text-sm md:text-base lg:text-[clamp(16px,1.2vw,20px)] text-muted-foreground leading-relaxed">
                  I believe in balancing technical work with creative pursuits and physical activities. 
                  These hobbies keep me inspired, active, and constantly learning.
                </p>
              </Copy>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
