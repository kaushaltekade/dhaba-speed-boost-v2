import { motion } from "framer-motion";

const FeaturedMenu = () => {
    const menuCategories = [
        {
            title: "Non-Veg Specialties",
            icon: "🍗",
            items: [
                { name: "Varhadi Chicken", desc: "Signature spicy chicken with traditional spices" },
                { name: "Chicken Fry", desc: "Crispy fried chicken with dhaba masala" },
                { name: "Chicken Curry", desc: "Rich and flavorful chicken in gravy" },
                { name: "Mutton Curry", desc: "Tender mutton slow-cooked in spices" },
                { name: "Mutton Thali", desc: "Complete meal with mutton and sides" },
                { name: "Anda (Egg) Curry", desc: "Eggs in spicy tomato-onion gravy" },
            ]
        },
        {
            title: "Vegetarian Delights",
            icon: "🥗",
            items: [
                { name: "Veg Curry", desc: "Mixed vegetables in traditional gravy" },
                { name: "Dal Tadka", desc: "Yellow dal with aromatic tempering" },
                { name: "Seasonal Sabji", desc: "Fresh vegetable of the day" },
                { name: "Paneer Masala", desc: "Cottage cheese in rich gravy" },
            ]
        },
        {
            title: "Breads & Rice",
            icon: "🍞",
            items: [
                { name: "Bhakri", desc: "Traditional jowar/bajra flatbread" },
                { name: "Chapati", desc: "Soft wheat flour bread" },
                { name: "Steamed Rice", desc: "Plain basmati rice" },
                { name: "Jeera Rice", desc: "Cumin-flavored aromatic rice" },
            ]
        },
        {
            title: "Special Combos",
            icon: "🍽️",
            items: [
                { name: "Dhaba Special Thali", desc: "Complete meal with curry, dal, rice, bhakri & sides" },
                { name: "Non-Veg Thali", desc: "Choice of chicken/mutton with accompaniments" },
                { name: "Family Combo", desc: "Large portions for family dining" },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <section id="menu" className="py-24 bg-zinc-900 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-dhaba-orange font-semibold uppercase tracking-widest">Taste of Tradition</span>
                    <h2 className="font-display text-4xl md:text-5xl text-white mt-2">Our Menu</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {menuCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-dhaba-brown/10 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-dhaba-orange/20 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-4xl">{category.icon}</span>
                                <h3 className="font-display text-2xl text-dhaba-amber">{category.title}</h3>
                            </div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                {category.items.map((item, itemIdx) => (
                                    <motion.div
                                        key={itemIdx}
                                        variants={itemVariants}
                                        className="group"
                                    >
                                        <div className="flex justify-between items-baseline">
                                            <h4 className="text-lg font-medium text-white/90 group-hover:text-dhaba-orange transition-colors">
                                                {item.name}
                                            </h4>
                                        </div>
                                        <p className="text-white/50 text-sm mt-1 group-hover:text-white/70 transition-colors">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedMenu;
