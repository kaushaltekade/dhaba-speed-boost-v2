import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#locations', label: 'Locations' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">PP</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-foreground">Panjabrao Patil</div>
              <div className="text-xs text-primary">Varhadi Dhaba</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild variant="default" size="sm">
              <a href="tel:+919545665544" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-t border-border">
            <ul className="py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-3 text-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-4 pt-4">
                <Button asChild className="w-full">
                  <a href="tel:+919545665544" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
