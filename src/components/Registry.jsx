import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiGift, FiMapPin, FiBookOpen, FiHome, FiGlobe } = FiIcons;

const Registry = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const registryCategories = [
    {
      title: 'Heritage Home',
      icon: FiHome,
      description: 'Help us create a timeless sanctuary filled with pieces that will tell our story for generations.',
      items: [
        { name: 'Antique Dining Set', description: 'Victorian-era table for family gatherings', priority: 'High' },
        { name: 'Persian Heirloom Rug', description: 'Hand-woven centerpiece for our living room', priority: 'High' },
        { name: 'Crystal Chandelier', description: 'To illuminate our future dinner parties', priority: 'Medium' },
        { name: 'Library Bookshelf', description: 'Oak shelving for our growing collection', priority: 'Medium' }
      ]
    },
    {
      title: 'Legacy Adventures',
      icon: FiGlobe,
      description: 'Create memories that will become the stories we tell our grandchildren.',
      items: [
        { name: 'Honeymoon in Tuscany', description: 'Two weeks exploring Italian heritage', priority: 'High' },
        { name: 'Anniversary Trip Fund', description: 'Annual escapes to historic destinations', priority: 'Medium' },
        { name: 'Cultural Experiences', description: 'Museum memberships and theater subscriptions', priority: 'Low' },
        { name: 'Photography Sessions', description: 'Professional portraits for our archive', priority: 'Medium' }
      ]
    },
    {
      title: 'Charitable Legacy',
      icon: FiHeart,
      description: 'Honor our union by supporting causes close to our hearts.',
      items: [
        { name: 'Literacy Foundation', description: 'Supporting reading programs in underserved communities', priority: 'High' },
        { name: 'Historic Preservation', description: 'Protecting architectural heritage for future generations', priority: 'High' },
        { name: 'Local Arts Council', description: 'Nurturing creativity in our community', priority: 'Medium' },
        { name: 'Environmental Conservation', description: 'Preserving natural beauty for our children', priority: 'Medium' }
      ]
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20';
      case 'Medium': return 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20';
      case 'Low': return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20';
      default: return 'text-stone-600 dark:text-stone-400 bg-stone-50 dark:bg-stone-900/20';
    }
  };

  return (
    <section id="registry" ref={ref} className="py-20 bg-gradient-to-b from-stone-100 to-amber-50 dark:from-stone-800 dark:to-stone-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-light text-stone-800 dark:text-amber-100 mb-6">
            Legacy Gifts
          </h2>
          <div className="w-32 h-px bg-amber-600 mx-auto mb-8" />
          <p className="text-xl text-stone-600 dark:text-stone-300 font-serif max-w-3xl mx-auto leading-relaxed">
            Your presence is the greatest gift of all. However, if you wish to honor our union 
            with a tangible token, these meaningful contributions will help us build our legacy together.
          </p>
        </motion.div>

        {/* Registry Categories */}
        <div className="space-y-12">
          {registryCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="bg-white dark:bg-stone-800 rounded-lg shadow-2xl border-2 border-amber-200 dark:border-stone-600 overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-amber-100 to-stone-100 dark:from-stone-700 dark:to-stone-600 p-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-amber-600 dark:bg-amber-500 rounded-full flex items-center justify-center mr-6">
                    <SafeIcon icon={category.icon} className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif font-semibold text-stone-800 dark:text-amber-100 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-lg text-stone-600 dark:text-stone-300 font-serif">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Category Items */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: (index * 0.3) + (itemIndex * 0.1) }}
                      className="bg-gradient-to-br from-amber-50 to-stone-50 dark:from-stone-700 dark:to-stone-600 p-6 rounded-lg border border-amber-200 dark:border-stone-500 relative group hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-serif font-semibold text-stone-800 dark:text-amber-100 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors duration-300">
                          {item.name}
                        </h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-serif uppercase tracking-wider ${getPriorityColor(item.priority)}`}>
                          {item.priority}
                        </span>
                      </div>
                      
                      <p className="text-stone-600 dark:text-stone-300 font-serif leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-amber-600 dark:text-amber-400">
                          <SafeIcon icon={FiGift} className="w-4 h-4 mr-2" />
                          <span className="text-sm font-serif">Legacy Item</span>
                        </div>
                        
                        <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-serif text-sm rounded-lg transition-colors duration-300 transform hover:scale-105">
                          Select Gift
                        </button>
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-8 h-8 bg-amber-200 dark:bg-amber-700 transform rotate-45 translate-x-4 -translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Registry Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-white to-amber-50 dark:from-stone-800 dark:to-stone-700 p-8 rounded-lg shadow-lg border-2 border-amber-200 dark:border-stone-600">
            <h3 className="text-2xl font-serif font-semibold text-stone-800 dark:text-amber-100 mb-6">
              Find Our Complete Registry
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="#"
                className="group block p-6 bg-white dark:bg-stone-700 rounded-lg border border-amber-200 dark:border-stone-500 hover:border-amber-400 dark:hover:border-amber-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-amber-600 dark:bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <SafeIcon icon={FiBookOpen} className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-serif font-semibold text-stone-800 dark:text-amber-100 mb-2">
                  Williams Sonoma
                </h4>
                <p className="text-sm text-stone-600 dark:text-stone-300 font-serif">
                  Kitchen & Dining Essentials
                </p>
              </a>

              <a
                href="#"
                className="group block p-6 bg-white dark:bg-stone-700 rounded-lg border border-amber-200 dark:border-stone-500 hover:border-amber-400 dark:hover:border-amber-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-amber-600 dark:bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <SafeIcon icon={FiHome} className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-serif font-semibold text-stone-800 dark:text-amber-100 mb-2">
                  Pottery Barn
                </h4>
                <p className="text-sm text-stone-600 dark:text-stone-300 font-serif">
                  Home Furnishings
                </p>
              </a>

              <a
                href="#"
                className="group block p-6 bg-white dark:bg-stone-700 rounded-lg border border-amber-200 dark:border-stone-500 hover:border-amber-400 dark:hover:border-amber-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-amber-600 dark:bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <SafeIcon icon={FiMapPin} className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-serif font-semibold text-stone-800 dark:text-amber-100 mb-2">
                  Honeymoon Fund
                </h4>
                <p className="text-sm text-stone-600 dark:text-stone-300 font-serif">
                  Travel Experiences
                </p>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-stone-50 to-amber-50 dark:from-stone-800 dark:to-stone-700 p-8 rounded-lg border-2 border-amber-200 dark:border-stone-600">
            <blockquote className="text-xl font-serif italic text-stone-700 dark:text-stone-200 leading-relaxed mb-4">
              "The most precious gifts are not those that can be wrapped, but the love, 
              laughter, and memories we will create together. Your presence at our wedding 
              is the greatest treasure of all."
            </blockquote>
            <cite className="text-amber-600 dark:text-amber-400 font-script text-lg">
              — Eleanor & Jonathan
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;