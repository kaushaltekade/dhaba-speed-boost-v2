import { MapPin, Clock, Star } from 'lucide-react';
import { Button } from './ui/button';
import heroDhaba from '@/assets/hero-dhaba.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image - Priority loaded */}
      <div className="absolute inset-0">
        <img
          src={heroDhaba}
          alt="Panjabrao Patil Varhadi Dhaba outdoor dining"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in"
          >
            <Star className="h-4 w-4 text-primary fill-primary" />
            <span className="text-foreground text-sm font-medium">
              Authentic Varhadi Cuisine Since Years
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in text-foreground"
            style={{ animationDelay: '0.2s' }}
          >
            Panjabrao Patil
            <span className="block text-primary mt-2">Varhadi Dhaba</span>
          </h1>

          {/* Tagline */}
          <p 
            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in text-muted-foreground"
            style={{ animationDelay: '0.4s' }}
          >
            Experience the true taste of Maharashtra with our authentic Varhadi spices, 
            desi cooking methods, and heartwarming dhaba-style hospitality
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Button asChild size="lg" className="text-lg px-8">
              <a href="#menu">Explore Menu</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-background/10 border-foreground/20 text-foreground hover:bg-background/20">
              <a href="#locations" className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Find Us
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="flex flex-wrap justify-center gap-8 text-foreground/80 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>2 Locations in Maharashtra</span>
            </div>
            <span className="hidden sm:block text-primary">•</span>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Open Daily</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
