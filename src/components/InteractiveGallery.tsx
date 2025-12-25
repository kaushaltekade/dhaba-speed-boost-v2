import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";

const InteractiveGallery = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);
    const [isOpen, setIsOpen] = useState(false);

    const images = [
        "/src/assets/gallery/gallery-1.webp",
        "/src/assets/gallery/gallery-2.webp",
        "/src/assets/gallery/gallery-3.webp",
        "/src/assets/gallery/gallery-4.webp",
        "/src/assets/gallery/gallery-5.webp",
        "/src/assets/gallery/gallery-6.webp",
        "/src/assets/gallery/gallery-7.webp",
        "/src/assets/gallery/gallery-8.webp",
        "/src/assets/gallery/gallery-9.webp",
        "/src/assets/gallery/gallery-10.webp",
        "/src/assets/gallery/gallery-11.webp",
        "/src/assets/gallery/gallery-12.webp",
        "/src/assets/gallery/gallery-13.webp",
        "/src/assets/gallery/gallery-15.webp",
        "/src/assets/gallery/gallery-16.webp",
        // Add duplicate or more images if available for a full feel
    ];

    return (
        <section ref={targetRef} id="gallery" className="relative h-[400vh] bg-neutral-900">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                <div className="container mx-auto px-6 mb-8 z-10 flex justify-between items-end">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="font-display text-4xl md:text-6xl text-white mb-4"
                        >
                            Culinary <span className="text-dhaba-orange">Moments</span>
                        </motion.h2>
                        <p className="text-white/60">Scroll to explore our gallery</p>
                    </div>

                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="hidden md:block px-6 py-3 border border-dhaba-orange text-dhaba-orange rounded-full hover:bg-dhaba-orange hover:text-white transition-colors"
                            >
                                View All Photos ({images.length})
                            </motion.button>
                        </DialogTrigger>
                        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-dhaba-dark border-white/10 p-0">
                            <DialogTitle className="sr-only">Photo Gallery</DialogTitle>
                            <DialogDescription className="sr-only">A collection of photos from Panjabrao Patil Varhadi Dhaba</DialogDescription>
                            <div className="sticky top-0 z-50 bg-dhaba-dark/90 backdrop-blur-md p-4 flex justify-between items-center border-b border-white/10">
                                <h3 className="font-display text-2xl text-white">All Photos</h3>
                                <button onClick={() => setIsOpen(false)} className="bg-white/10 p-2 rounded-full text-white hover:bg-white/20 transition-colors">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                                {images.map((src, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="aspect-[4/3] rounded-lg overflow-hidden relative group"
                                    >
                                        <img
                                            src={src}
                                            alt={`Gallery ${index}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                <motion.div style={{ x }} className="flex gap-8 px-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className="relative h-[50vh] min-h-[300px] w-[70vh] min-w-[400px] shrink-0 rounded-2xl overflow-hidden shadow-2xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover pointer-events-none"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                    {/* Mobile view all card at the end of scroll */}
                    <div className="flex items-center justify-center h-[50vh] min-h-[300px] w-[30vh] shrink-0">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="w-20 h-20 rounded-full bg-dhaba-orange text-white flex items-center justify-center font-bold hover:scale-110 transition-transform"
                        >
                            View All
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default InteractiveGallery;
