import { MapPin, Navigation } from 'lucide-react';
import { Button } from './ui/button';
import LazySection from './LazySection';

const locations = [
  {
    name: 'Main Branch',
    badge: 'Primary Location',
    address: 'Dharni Road, Gaurkheda, Maharashtra – 444806, India',
    area: 'Paratwada / Gaurkheda Region',
    type: 'Highway-style dining',
    mapUrl: 'https://maps.app.goo.gl/72XpdX1i94vMv6uSA',
  },
  {
    name: 'City Branch',
    badge: 'Amravati',
    address: 'Badnera Road, Shashi Nagar, Guruchhaya Colony, Sai Nagar, Amravati, Maharashtra – 444607, India',
    area: 'Amravati City',
    type: 'City Branch',
    mapUrl: 'https://maps.app.goo.gl/2267fzpWcWRBzoqZ9',
  },
];

const Locations = () => {
  return (
    <section id="locations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <LazySection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Locations</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">Find Us Near You</h2>
            <p className="text-muted-foreground text-lg">Visit our dhaba at two convenient locations in Maharashtra</p>
          </div>
        </LazySection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <LazySection key={location.name} delay={index * 100}>
              <div className="bg-card rounded-2xl p-6 shadow-lg card-hover h-full">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">{location.badge}</span>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">{location.name}</h3>
                <div className="space-y-3 mb-6">
                  <div><span className="text-muted-foreground text-sm">Address</span><p className="text-foreground">{location.address}</p></div>
                  <div><span className="text-muted-foreground text-sm">Area</span><p className="text-foreground">{location.area}</p></div>
                  <div><span className="text-muted-foreground text-sm">Type</span><p className="text-foreground">{location.type}</p></div>
                </div>
                <Button asChild className="w-full">
                  <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Navigation className="h-4 w-4" /> Get Directions
                  </a>
                </Button>
              </div>
            </LazySection>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8">Open Daily: Morning to Late Night</p>
      </div>
    </section>
  );
};

export default Locations;
