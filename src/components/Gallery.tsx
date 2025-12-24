import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LazySection from './LazySection';
import OptimizedImage from './OptimizedImage';

// Import all gallery images
import gallery1 from '@/assets/gallery/gallery-1.webp';
import gallery2 from '@/assets/gallery/gallery-2.webp';
import gallery3 from '@/assets/gallery/gallery-3.webp';
import gallery4 from '@/assets/gallery/gallery-4.webp';
import gallery5 from '@/assets/gallery/gallery-5.webp';
import gallery6 from '@/assets/gallery/gallery-6.webp';
import gallery7 from '@/assets/gallery/gallery-7.webp';
import gallery8 from '@/assets/gallery/gallery-8.webp';
import gallery9 from '@/assets/gallery/gallery-9.webp';
import gallery10 from '@/assets/gallery/gallery-10.webp';
import gallery11 from '@/assets/gallery/gallery-11.webp';
import gallery12 from '@/assets/gallery/gallery-12.webp';
import gallery13 from '@/assets/gallery/gallery-13.webp';
import gallery15 from '@/assets/gallery/gallery-15.webp';
import gallery16 from '@/assets/gallery/gallery-16.webp';

const galleryImages = [
  { src: gallery1, alt: 'Dhaba Food 1' },
  { src: gallery2, alt: 'Dhaba Food 2' },
  { src: gallery3, alt: 'Dhaba Food 3' },
  { src: gallery4, alt: 'Dhaba Food 4' },
  { src: gallery5, alt: 'Dhaba Food 5' },
  { src: gallery6, alt: 'Dhaba Food 6' },
  { src: gallery7, alt: 'Dhaba Food 7' },
  { src: gallery8, alt: 'Dhaba Food 8' },
  { src: gallery9, alt: 'Dhaba Food 9' },
  { src: gallery10, alt: 'Dhaba Food 10' },
  { src: gallery11, alt: 'Dhaba Food 11' },
  { src: gallery12, alt: 'Dhaba Food 12' },
  { src: gallery13, alt: 'Dhaba Food 13' },
  { src: gallery15, alt: 'Dhaba Food 15' },
  { src: gallery16, alt: 'Dhaba Food 16' },
];

const Gallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="gallery" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <LazySection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Gallery</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
              A Glimpse of Our Dhaba
            </h2>
            <p className="text-muted-foreground text-lg">
              Experience the warm ambience, delicious food, and authentic dhaba atmosphere
            </p>
          </div>
        </LazySection>

        {/* Scrollable Gallery with Navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-3 rounded-full shadow-lg transition-all -translate-x-4 md:translate-x-0"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-3 rounded-full shadow-lg transition-all translate-x-4 md:translate-x-0"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] md:w-[320px] rounded-xl overflow-hidden group"
              >
                <OptimizedImage 
                  src={image.src} 
                  alt={image.alt} 
                  className="h-[200px] md:h-[240px] group-hover:scale-105 transition-transform duration-300" 
                  aspectRatio="" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
