"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

type MediaItem = {
  type: 'image' | 'video';
  url: string;
  alt: string;
  rotate?: number;
};

export default function GalleryPage() {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const media: MediaItem[] = [
    // Violin lady video at top
    { type: 'video', url: "/gallery/event-video.mp4", alt: "Event highlights" },

    // Sushi - moved higher
    { type: 'image', url: "/gallery/IMG_0497.jpeg", alt: "Sushi spread", rotate: 0 },

    // New event photos
    { type: 'image', url: "/gallery/IMG_3683.jpeg", alt: "Event setup", rotate: 0 },
    { type: 'image', url: "/gallery/IMG_1819.jpeg", alt: "Catering display", rotate: 0 },

    // Chocolate fountain (kept best one)
    { type: 'image', url: "/gallery/IMG_3785.jpeg", alt: "Chocolate fountain", rotate: 0 },

    // Fruit and colorful displays
    { type: 'image', url: "/gallery/IMG_2963.jpeg", alt: "Colorful fruit display", rotate: 0 },
    { type: 'image', url: "/gallery/IMG_8907.jpeg", alt: "Artistic platter", rotate: 0 },
    { type: 'image', url: "/gallery/IMG_3081.jpeg", alt: "Food presentation", rotate: 0 },

    // Taco bar
    { type: 'image', url: "/gallery/IMG_0493.jpeg", alt: "Taco bar buffet", rotate: 0 },
    { type: 'image', url: "/gallery/IMG_0489.jpeg", alt: "Fresh taco", rotate: 0 },
    { type: 'image', url: "/gallery/IMG_1264.jpeg", alt: "Salsa bar", rotate: 180 },

    // Video break
    { type: 'video', url: "/gallery/catering-1.mov", alt: "Catering service" },

    // Event setup shots
    { type: 'image', url: "/gallery/IMG_5046.jpeg", alt: "Event setup", rotate: 0 },
    { type: 'image', url: "/gallery/IMG_3374.jpeg", alt: "Event ambiance", rotate: 0 },
    { type: 'image', url: "/gallery/IMG_5054.jpeg", alt: "Professional service", rotate: 0 },
    { type: 'image', url: "/gallery/IMG_5049.jpeg", alt: "Catering display", rotate: 0 },
    { type: 'image', url: "/gallery/IMG_5873.jpeg", alt: "Event details", rotate: 0 },

    // People enjoying
    { type: 'image', url: "/gallery/IMG_8903.jpeg", alt: "Happy guest", rotate: 0 },
    { type: 'image', url: "/gallery/thumbnail_IMG_1027.jpg", alt: "Event moment", rotate: 0 },

    // Video
    { type: 'video', url: "/gallery/IMG_8412.mov", alt: "Event atmosphere" },

    // Dessert bars (kept best ones)
    { type: 'image', url: "/gallery/IMG_8910.jpeg", alt: "Ice cream bar", rotate: 0 },
    { type: 'image', url: "/gallery/IMG_3773.jpeg", alt: "Dessert service", rotate: 0 },
    { type: 'image', url: "/gallery/IMG_1186.jpeg", alt: "Yogurt bar", rotate: 90 },

    // Video
    { type: 'video', url: "/gallery/IMG_8415.mov", alt: "Celebration" },

    // Behind the scenes
    { type: 'image', url: "/gallery/IMG_9500.jpeg", alt: "Cooking preparation", rotate: 180 },
    { type: 'image', url: "/gallery/IMG_1178.jpeg", alt: "Catering staff", rotate: 90 },
  ];

  const nextMedia = useCallback(() => {
    if (selectedMedia !== null) {
      setSelectedMedia((selectedMedia + 1) % media.length);
    }
  }, [selectedMedia, media.length]);

  const prevMedia = useCallback(() => {
    if (selectedMedia !== null) {
      setSelectedMedia((selectedMedia - 1 + media.length) % media.length);
    }
  }, [selectedMedia, media.length]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedMedia === null) return;
      if (e.key === 'ArrowRight') nextMedia();
      if (e.key === 'ArrowLeft') prevMedia();
      if (e.key === 'Escape') setSelectedMedia(null);
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedMedia, nextMedia, prevMedia]);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-neutral-950 pt-32 pb-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Elegant Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-neutral-50 mb-6 tracking-tight">
              Gallery
            </h1>
            <div className="w-16 h-px bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
              A curated collection of our finest moments
            </p>
          </motion.div>

          {/* Elegant 2-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {media.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.7,
                    delay: (index % 4) * 0.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  onClick={() => setSelectedMedia(index)}
                  className="relative group cursor-pointer col-span-1"
                >
                  <div className={`
                    relative overflow-hidden bg-black
                    transition-all duration-500 ease-out
                    border border-neutral-800/40 group-hover:border-amber-500/30
                    shadow-lg group-hover:shadow-amber-500/10 group-hover:shadow-2xl
                    aspect-square
                  `}>
                    {item.type === 'image' ? (
                      <>
                        <Image
                          src={item.url}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          style={{ transform: `rotate(${item.rotate || 0}deg)` }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          quality={95}
                          priority={index < 4}
                        />
                        {/* Subtle ambient glow animation */}
                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/10 via-transparent to-amber-400/10 animate-pulse"></div>
                        </div>
                      </>
                    ) : (
                      <>
                        <video
                          src={item.url}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          muted
                          loop
                          playsInline
                          preload="metadata"
                        />
                        {/* Subtle shimmer effect on videos */}
                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/15 via-transparent to-amber-600/15"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-500">
                          <div className="w-20 h-20 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-amber-500/20 group-hover:scale-110 group-hover:shadow-amber-500/40 transition-all duration-300">
                            <svg className="w-8 h-8 text-neutral-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </>
                    )}


                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedMedia !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMedia(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-6 cursor-pointer"
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="absolute top-8 left-8 text-white text-sm font-light z-50">
                {selectedMedia + 1} / {media.length}
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); prevMedia(); }}
                className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextMedia(); }}
                className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <motion.div
                key={selectedMedia}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-6xl max-h-[85vh] w-full h-full flex items-center justify-center"
              >
                {media[selectedMedia].type === 'image' ? (
                  <Image
                    src={media[selectedMedia].url}
                    alt={media[selectedMedia].alt}
                    width={1600}
                    height={1200}
                    className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                    style={{ transform: `rotate(${media[selectedMedia].rotate || 0}deg)` }}
                    quality={100}
                    priority
                  />
                ) : (
                  <video
                    src={media[selectedMedia].url}
                    controls
                    autoPlay
                    playsInline
                    className="max-w-full max-h-[85vh]"
                  />
                )}
              </motion.div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 text-xs font-light tracking-wide">
                Use arrow keys • Press ESC to close
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
