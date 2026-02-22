import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";
import gallery7 from "@/assets/gallery/gallery-7.jpg";
import gallery8 from "@/assets/gallery/gallery-8.jpg";

const galleryImages = [
  { src: gallery1, caption: "Full exterior detail — hand polishing to a mirror finish", alt: "Full exterior auto detail Houston TX" },
  { src: gallery2, caption: "Interior deep clean — pristine leather conditioning", alt: "Interior car detailing Houston" },
  { src: gallery3, caption: "Ceramic coating application on a red sports car", alt: "Ceramic coating Houston TX" },
  { src: gallery4, caption: "Paint correction — before & after swirl removal", alt: "Paint correction Houston TX" },
  { src: gallery5, caption: "Premium wax application on white luxury SUV", alt: "Car waxing service Houston" },
  { src: gallery6, caption: "Engine bay detailing — professional results", alt: "Engine detailing Houston TX" },
  { src: gallery7, caption: "Before and after full paint restoration", alt: "Before after paint correction Houston" },
  { src: gallery8, caption: "Leather interior restoration — like-new condition", alt: "Leather conditioning auto detail Houston" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container-main">
          <ScrollReveal>
            <h1 className="font-heading text-4xl sm:text-5xl font-black mb-4">
              Our Detailing Work in <span className="text-accent">Houston, TX</span>
            </h1>
            <p className="font-body text-silver-light text-lg max-w-2xl">
              Browse our portfolio of premium auto detailing results from Houston and surrounding areas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <button
                  onClick={() => setLightbox(i)}
                  className="clay-card overflow-hidden group w-full text-left hover:translate-y-[-4px] transition-transform duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-body text-xs text-muted-foreground">{img.caption}</p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="clay-card max-w-3xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].alt}
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="p-4 flex items-center justify-between">
                <p className="font-body text-sm text-muted-foreground">{galleryImages[lightbox].caption}</p>
                <button onClick={() => setLightbox(null)} className="p-2 hover:text-accent transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
