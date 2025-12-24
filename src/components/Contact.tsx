import { Phone, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import LazySection from './LazySection';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <LazySection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">Get in Touch</h2>
            <p className="text-muted-foreground text-lg">Have questions or want to make a reservation? Give us a call!</p>
          </div>
        </LazySection>

        <LazySection delay={100}>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 text-center card-hover">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <a href="tel:+919545665544" className="text-primary hover:underline block">+91 95456 65544</a>
              <a href="tel:+918668227038" className="text-primary hover:underline block">+91 86682 27038</a>
            </div>
            <div className="bg-card rounded-xl p-6 text-center card-hover">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground">Paratwada (Main) & Amravati (City Branch)</p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center card-hover">
              <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Opening Hours</h3>
              <p className="text-muted-foreground">Open Daily: Morning to Late Night</p>
            </div>
          </div>
        </LazySection>

        <div className="text-center mt-8">
          <Button asChild size="lg"><a href="tel:+919545665544">Call Now</a></Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
