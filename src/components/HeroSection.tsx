import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
    const { scrollY } = useScroll();
    const yAndOpacity = useTransform(scrollY, [0, 500], [0, 0.5]); // Opacity fade for overlay
    const yParallax = useTransform(scrollY, [0, 500], [0, 200]); // Upload image slower than scroll

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background with Parallax */}
            <motion.div
                style={{ y: yParallax }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-dhaba-dark z-10" />
                <img
                    src="/images/gallery/hero-dhaba.webp"
                    alt="Authentic Dhaba Atmosphere"
                    className="w-full h-full object-cover scale-110" // scale-110 to avoid whitespace on parallax
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 border border-dhaba-orange/50 rounded-full bg-dhaba-orange/10 backdrop-blur-md text-dhaba-orange text-sm font-semibold tracking-widest uppercase mb-6">
                        Est. 1985
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight"
                >
                    Taste the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-dhaba-orange to-dhaba-amber">
                        Soul of Maharashtra Varhadi
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light"
                >
                    Experience authentic flavors, rustic ambience, and culinary traditions passed down through generations.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <motion.a
                        href="#menu"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-dhaba-orange text-white rounded-full font-bold text-lg shadow-lg hover:shadow-dhaba-orange/40 transition-shadow cursor-pointer inline-block"
                    >
                        View Menu
                    </motion.a>
                    <motion.a
                        href="#ambience"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 border border-white/20 text-white rounded-full font-bold text-lg backdrop-blur-sm cursor-pointer inline-block"
                    >
                        Our Story
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ArrowDown className="text-dhaba-orange w-6 h-6" />
                </motion.div>
            </motion.div>

            {/* Gradient Overlay for seamless transition to next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dhaba-dark to-transparent z-10" />
        </section>
    );
};

export default HeroSection;
