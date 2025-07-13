import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-fixed filter grayscale"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        
        {/* Vintage Paper Texture Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-100/30 dark:from-stone-900/40 dark:to-stone-800/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-serif font-light text-white mb-4 tracking-wide">
            Our Legacy
          </h1>
          <div className="w-24 h-px bg-amber-400 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-serif font-light text-white/90 mb-2">
            Begins
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl font-script text-amber-200 mb-4">
            Eleanor Rose & Jonathan Michael
          </p>
          <p className="text-lg text-white/80 font-serif">
            September 15th, 2024 • Ashford Estate
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="relative"
        >
          <div className="inline-block p-8 border-2 border-amber-400/50 bg-black/20 backdrop-blur-sm">
            <p className="text-lg font-serif text-white/90 italic leading-relaxed max-w-2xl">
              "In the archives of time, our love story shall be written with golden ink,
              preserved for generations yet to come."
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-amber-400/60" />
          <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-amber-400/60" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-amber-400/60" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-amber-400/60" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16"
        >
          <button
            onClick={() => document.querySelector('#story').scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center justify-center px-8 py-3 font-serif text-white border-2 border-amber-400/60 hover:border-amber-400 transition-all duration-300 bg-black/20 hover:bg-black/40 backdrop-blur-sm"
          >
            <span className="uppercase tracking-wider text-sm">Begin Our Story</span>
            <div className="absolute inset-0 bg-amber-400/10 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-amber-400/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;