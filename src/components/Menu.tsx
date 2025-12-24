import { Flame } from 'lucide-react';
import LazySection from './LazySection';
import OptimizedImage from './OptimizedImage';
import curryDish from '@/assets/curry-dish.webp';
import accompaniments from '@/assets/accompaniments.webp';

const menuCategories = [
  {
    title: 'Non-Veg Specialties',
    icon: '🍗',
    items: [
      { name: 'Varhadi Chicken', description: 'Signature spicy chicken with traditional spices', spicy: true },
      { name: 'Chicken Fry', description: 'Crispy fried chicken with dhaba masala', spicy: true },
      { name: 'Chicken Curry', description: 'Rich and flavorful chicken in gravy', spicy: false },
      { name: 'Mutton Curry', description: 'Tender mutton slow-cooked in spices', spicy: true },
      { name: 'Mutton Thali', description: 'Complete meal with mutton and sides', spicy: false },
      { name: 'Anda (Egg) Curry', description: 'Eggs in spicy tomato-onion gravy', spicy: false },
    ],
  },
  {
    title: 'Vegetarian Delights',
    icon: '🥗',
    items: [
      { name: 'Veg Curry', description: 'Mixed vegetables in traditional gravy', spicy: false },
      { name: 'Dal Tadka', description: 'Yellow dal with aromatic tempering', spicy: false },
      { name: 'Seasonal Sabji', description: 'Fresh vegetable of the day', spicy: false },
      { name: 'Paneer Masala', description: 'Cottage cheese in rich gravy', spicy: true },
    ],
  },
  {
    title: 'Breads & Rice',
    icon: '🍞',
    items: [
      { name: 'Bhakri', description: 'Traditional jowar/bajra flatbread', spicy: false },
      { name: 'Chapati', description: 'Soft wheat flour bread', spicy: false },
      { name: 'Steamed Rice', description: 'Plain basmati rice', spicy: false },
      { name: 'Jeera Rice', description: 'Cumin-flavored aromatic rice', spicy: false },
    ],
  },
  {
    title: 'Special Combos',
    icon: '🍽️',
    items: [
      { name: 'Dhaba Special Thali', description: 'Complete meal with curry, dal, rice, bhakri & sides', spicy: false },
      { name: 'Non-Veg Thali', description: 'Choice of chicken/mutton with accompaniments', spicy: false },
      { name: 'Family Combo', description: 'Large portions for family dining', spicy: false },
    ],
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <LazySection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Menu
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
              Taste the Tradition
            </h2>
            <p className="text-muted-foreground text-lg">
              From spicy Varhadi chicken to comforting dal-bhakri, every dish is prepared 
              with love and authentic flavors
            </p>
          </div>
        </LazySection>

        {/* Featured Images */}
        <LazySection delay={100}>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="relative rounded-2xl overflow-hidden">
              <OptimizedImage
                src={curryDish}
                alt="Signature Curry"
                className="h-[250px]"
                aspectRatio=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-display font-bold text-foreground">Signature Curries</h3>
                <p className="text-muted-foreground">Rich, spicy, and flavorful</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <OptimizedImage
                src={accompaniments}
                alt="Fresh Accompaniments"
                className="h-[250px]"
                aspectRatio=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-display font-bold text-foreground">Fresh Accompaniments</h3>
                <p className="text-muted-foreground">Onions, lime, and green chutney</p>
              </div>
            </div>
          </div>
        </LazySection>

        {/* Menu Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {menuCategories.map((category, index) => (
            <LazySection key={category.title} delay={index * 50}>
              <div className="bg-card rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-foreground">{item.name}</h4>
                          {item.spicy && (
                            <Flame className="h-4 w-4 text-accent" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </LazySection>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          * Prices may vary by location. Contact us for current menu and pricing.
        </p>
      </div>
    </section>
  );
};

export default Menu;
