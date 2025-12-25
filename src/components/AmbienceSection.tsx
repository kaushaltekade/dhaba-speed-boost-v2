import { motion } from "framer-motion";

const AmbienceSection = () => {
    return (
        <section id="ambience" className="py-24 bg-dhaba-dark relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="font-display text-4xl md:text-5xl text-dhaba-cream">
                            Rustic Charm, <br />
                            <span className="text-dhaba-orange">Modern Comfort</span>
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed">
                            Step into a world where tradition meets elegance. Our space is designed to transport you to the authentic highway dhabas of Maharashtra while offering the comfort of a fine dining experience.
                        </p>
                        <p className="text-white/70 text-lg leading-relaxed">
                            Whether you choose our vibrant outdoor seating under the stars or the warm, cozy indoor dining area, every corner tells a story of heritage and hospitality.
                        </p>
                        <motion.a
                            href="#gallery"
                            whileHover={{ scale: 1.05, x: 10 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 text-dhaba-amber font-semibold uppercase tracking-widest flex items-center gap-2 group cursor-pointer inline-block"
                        >
                            Explore Our Space
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </motion.a>
                    </motion.div>

                    {/* Images Grid */}
                    <div className="relative h-[600px] w-full">
                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="absolute top-0 right-0 w-4/5 h-3/5 rounded-2xl overflow-hidden shadow-2xl z-10"
                        >
                            <img
                                src="/images/gallery/dhaba-ambience.webp"
                                alt="Main Ambience"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Secondary Image - Top Left */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, x: -30 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute bottom-0 left-0 w-3/5 h-2/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-dhaba-dark z-20"
                        >
                            <img
                                src="/images/gallery/indoor-dining.webp"
                                alt="Indoor Dining"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Accent Elements */}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AmbienceSection;
