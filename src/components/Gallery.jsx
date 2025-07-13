import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'The moment he asked forever',
      category: 'Engagement'
    },
    {
      src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'Our first dance practice',
      category: 'Preparation'
    },
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'Where our story began',
      category: 'Memories'
    },
    {
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'Choosing our venue together',
      category: 'Planning'
    },
    {
      src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'Our first home together',
      category: 'Memories'
    },
    {
      src: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'Sunday morning walks',
      category: 'Daily Life'
    },
    {
      src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'Late night conversations',
      category: 'Memories'
    },
    {
      src: 'https://images.unsplash.com/photo-1519167758481-83f29c1fe8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'Finding our perfect day',
      category: 'Planning'
    }
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <section id="gallery" ref={ref} className="py-20 bg-gradient-to-b from-amber-50 to-stone-100 dark:from-stone-900 dark:to-stone-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-light text-stone-800 dark:text-amber-100 mb-6">
            Our Archive
          </h2>
          <div className="w-32 h-px bg-amber-600 mx-auto mb-8" />
          <p className="text-xl text-stone-600 dark:text-stone-300 font-serif max-w-3xl mx-auto leading-relaxed">
            A curated collection of moments that tell our story, preserved with the care 
            and reverence of a family heirloom.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => openLightbox(image, index)}
            >
              <div className="aspect-square relative">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover filter sepia-[0.3] group-hover:sepia-0 transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-serif text-sm leading-tight mb-1">
                    {image.caption}
                  </p>
                  <span className="text-amber-200 text-xs font-serif uppercase tracking-wider">
                    {image.category}
                  </span>
                </div>

                {/* Vintage Frame Effect */}
                <div className="absolute inset-2 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="max-w-full max-h-[80vh] object-contain filter sepia-[0.2]"
                />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-serif text-lg mb-2">
                    {selectedImage.caption}
                  </p>
                  <span className="text-amber-200 font-serif text-sm uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                </div>

                {/* Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300"
                >
                  <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300"
                >
                  <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
                </button>

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300"
                >
                  <SafeIcon icon={FiX} className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-stone-50 to-amber-50 dark:from-stone-800 dark:to-stone-700 p-12 rounded-lg border-2 border-amber-200 dark:border-stone-600 relative">
            <div className="absolute top-0 left-8 transform -translate-y-1/2">
              <div className="w-16 h-16 bg-amber-600 dark:bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white font-script">"</span>
              </div>
            </div>
            <blockquote className="text-2xl font-serif italic text-stone-700 dark:text-stone-200 leading-relaxed max-w-4xl mx-auto">
              Every photograph is a memory preserved, every memory a treasure saved for future generations. 
              In this archive of our love, time stands still, and our story becomes eternal.
            </blockquote>
            <cite className="block mt-6 text-amber-600 dark:text-amber-400 font-script text-lg">
              — Eleanor & Jonathan
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;