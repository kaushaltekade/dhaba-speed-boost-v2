import { Utensils, Heart, Users, Award } from 'lucide-react';
import LazySection from './LazySection';
import OptimizedImage from './OptimizedImage';
import dhabaAmbience from '@/assets/dhaba-ambience.webp';

const features = [
  {
    icon: Utensils,
    title: 'Authentic Varhadi',
    description: 'Traditional recipes passed down through generations',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Fresh ingredients and desi cooking methods',
  },
  {
    icon: Users,
    title: 'Family Friendly',
    description: 'Welcoming atmosphere for all ages',
  },
  {
    icon: Award,
    title: 'Local Favorite',
    description: 'Trusted by locals in Paratwada & Amravati',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <LazySection>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src={dhabaAmbience}
                  alt="Dhaba Ambience"
                  className="h-[400px] md:h-[500px]"
                  aspectRatio=""
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl card-hover hidden md:block">
                <div className="text-4xl font-bold text-primary">10+</div>
                <div className="text-muted-foreground">Years of Tradition</div>
              </div>
            </div>
          </LazySection>

          {/* Content Side */}
          <LazySection delay={100}>
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground">
                The Authentic Taste of Vidarbha
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Punjabrao Patil Varhadi Dhaba brings you the true essence of Maharashtrian 
                dhaba-style cuisine. Our kitchen is filled with the aroma of traditional 
                Varhadi spices, serving spicy gravies, fresh bhakri, and hearty non-veg 
                & veg dishes that remind you of home.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you are a local craving authentic flavors or a traveler exploring 
                the region, our doors are always open to serve you the best of Vidarbha 
                cuisine with genuine dhaba hospitality.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title} 
                    className="flex items-start gap-3 p-4 bg-card rounded-lg card-hover"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </LazySection>
        </div>
      </div>
    </section>
  );
};

export default About;
