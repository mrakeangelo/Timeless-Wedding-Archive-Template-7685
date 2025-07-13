import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiClock, FiHeart, FiCamera } = FiIcons;

const WeddingDetails = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const events = [
    {
      title: 'Ceremony',
      time: '4:00 PM',
      location: 'Ashford Estate Gardens',
      description: 'Join us as we exchange vows beneath the ancient oak tree, surrounded by heritage roses and the whispered blessings of generations past.',
      icon: FiHeart
    },
    {
      title: 'Cocktail Hour',
      time: '5:00 PM',
      location: 'Estate Terrace',
      description: 'Celebrate with champagne and canapés on the stone terrace overlooking the English countryside, where stories will be shared and memories made.',
      icon: FiClock
    },
    {
      title: 'Reception',
      time: '6:30 PM',
      location: 'Grand Ballroom',
      description: 'Dance the night away in the candlelit ballroom, where crystal chandeliers cast golden light upon our celebration of eternal love.',
      icon: FiCamera
    }
  ];

  return (
    <section id="details" ref={ref} className="py-20 bg-gradient-to-b from-stone-100 to-amber-50 dark:from-stone-800 dark:to-stone-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-light text-stone-800 dark:text-amber-100 mb-6">
            Our Wedding Day
          </h2>
          <div className="w-32 h-px bg-amber-600 mx-auto mb-8" />
          <p className="text-xl text-stone-600 dark:text-stone-300 font-serif max-w-3xl mx-auto leading-relaxed">
            September 15th, 2024 • A day destined to become legend in our family's archive
          </p>
        </motion.div>

        {/* Venue Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-20"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f29c1fe8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Ashford Estate"
              className="w-full h-96 object-cover filter sepia-[0.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-4xl font-serif font-light text-white mb-2">Ashford Estate</h3>
              <p className="text-lg text-white/90 font-serif">A 19th-century manor house steeped in history and romance</p>
              <div className="flex items-center mt-4 text-amber-200">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 mr-2" />
                <span className="font-serif">Cotswolds, England</span>
              </div>
            </div>
            
            {/* Decorative Border */}
            <div className="absolute inset-4 border-2 border-white/30 pointer-events-none" />
          </div>
        </motion.div>

        {/* Event Timeline */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              className="bg-white dark:bg-stone-800 p-8 rounded-lg shadow-lg border border-amber-200 dark:border-stone-700 relative overflow-hidden group"
            >
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent dark:from-amber-900/20 group-hover:from-amber-100/70 dark:group-hover:from-amber-800/30 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-600 dark:bg-amber-500 rounded-full flex items-center justify-center mr-4">
                    <SafeIcon icon={event.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-stone-800 dark:text-amber-100">
                      {event.title}
                    </h3>
                    <p className="text-amber-600 dark:text-amber-400 font-serif font-medium">
                      {event.time}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center text-stone-600 dark:text-stone-300 mb-2">
                    <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-2" />
                    <span className="font-serif font-medium">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dress Code & Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-amber-50 to-stone-50 dark:from-stone-800 dark:to-stone-700 p-8 rounded-lg border-2 border-amber-200 dark:border-stone-600">
            <h3 className="text-2xl font-serif font-semibold text-stone-800 dark:text-amber-100 mb-6">
              Dress Code
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-serif font-medium text-amber-700 dark:text-amber-400 mb-2">Formal Attire</h4>
                <p className="text-stone-600 dark:text-stone-300 font-serif">
                  We invite you to dress in timeless elegance. Think classic silhouettes, rich fabrics, and heritage colors.
                </p>
              </div>
              <div>
                <h4 className="font-serif font-medium text-amber-700 dark:text-amber-400 mb-2">Color Palette</h4>
                <p className="text-stone-600 dark:text-stone-300 font-serif">
                  Deep jewel tones, warm earth colors, and classic neutrals complement our autumn celebration.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-50 to-amber-50 dark:from-stone-700 dark:to-stone-800 p-8 rounded-lg border-2 border-amber-200 dark:border-stone-600">
            <h3 className="text-2xl font-serif font-semibold text-stone-800 dark:text-amber-100 mb-6">
              Special Notes
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-serif font-medium text-amber-700 dark:text-amber-400 mb-2">Ceremony</h4>
                <p className="text-stone-600 dark:text-stone-300 font-serif">
                  Our ceremony will be held outdoors. Light wraps recommended for evening celebration.
                </p>
              </div>
              <div>
                <h4 className="font-serif font-medium text-amber-700 dark:text-amber-400 mb-2">Photography</h4>
                <p className="text-stone-600 dark:text-stone-300 font-serif">
                  We ask that you enjoy our ceremony unplugged. Professional photographers will capture every moment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingDetails;