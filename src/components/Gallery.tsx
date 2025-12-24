import LazySection from './LazySection';
import OptimizedImage from './OptimizedImage';
import heroDhaba from '@/assets/hero-dhaba.jpg';
import dhabaAmbience from '@/assets/dhaba-ambience.jpg';
import curryDish from '@/assets/curry-dish.jpg';
import accompaniments from '@/assets/accompaniments.jpg';

const galleryImages = [
  { src: heroDhaba, alt: 'Outdoor Dining Area', title: 'Open Air Seating' },
  { src: dhabaAmbience, alt: 'Indoor Dining', title: 'Cozy Indoor Space' },
  { src: curryDish, alt: 'Signature Curry', title: 'Our Signature Curry' },
  { src: accompaniments, alt: 'Fresh Accompaniments', title: 'Fresh Sides' },
];

const Gallery = () => {
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <LazySection key={index} delay={index * 50}>
              <div className="relative rounded-xl overflow-hidden group">
                <OptimizedImage src={image.src} alt={image.alt} className="h-[200px] md:h-[250px]" aspectRatio="" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-display font-bold text-foreground">{image.title}</h3>
                  </div>
                </div>
              </div>
            </LazySection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
