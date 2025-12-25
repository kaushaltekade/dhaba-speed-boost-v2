import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";

const InteractiveGallery = () => {
    const [isOpen, setIsOpen] = useState(false);

    const images = [
        "/images/gallery/gallery-1.webp",
        "/images/gallery/gallery-2.webp",
        "/images/gallery/gallery-3.webp",
        "/images/gallery/gallery-4.webp",
        "/images/gallery/gallery-5.webp",
        "/images/gallery/gallery-6.webp",
        "/images/gallery/gallery-7.webp",
        "/images/gallery/gallery-8.webp",
        "/images/gallery/gallery-9.webp",
        "/images/gallery/gallery-10.webp",
        "/images/gallery/gallery-11.webp",
        "/images/gallery/gallery-12.webp",
        "/images/gallery/gallery-13.webp",
        "/images/gallery/gallery-15.webp",
        "/images/gallery/gallery-16.webp",
    ];

    // Duplicate images for seamless loop
    const marqueeImages = [...images, ...images];

    return (
        <section id="gallery" className="py-20 bg-neutral-900 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-display text-4xl md:text-6xl text-white mb-4"
                    >
                        Culinary <span className="text-dhaba-orange">Moments</span>
                    </motion.h2>
                    <p className="text-white/60">Experience our atmosphere</p>
                </div>

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border border-dhaba-orange text-dhaba-orange rounded-full hover:bg-dhaba-orange hover:text-white transition-colors"
                        >
                            View All Photos
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

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden py-10">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10" />

                <motion.div
                    className="flex gap-4 md:gap-8 w-max"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {marqueeImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative h-[250px] w-[350px] md:h-[400px] md:w-[600px] shrink-0 rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default InteractiveGallery;
