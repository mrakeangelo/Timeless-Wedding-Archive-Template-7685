import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OurStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const timelineEvents = [
    {
      year: '2018',
      title: 'First Meeting',
      description: 'Our paths crossed at the university library, where Eleanor was researching Victorian literature and Jonathan was studying architectural history.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      year: '2019',
      title: 'First Date',
      description: 'A walk through the botanical gardens turned into hours of conversation about our shared love of history and timeless beauty.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      year: '2021',
      title: 'Moving In Together',
      description: 'We found our first home together in a charming Victorian cottage, where we began building our shared collection of antiques and memories.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      year: '2023',
      title: 'The Proposal',
      description: 'On a misty morning in the rose garden where we had our first date, Jonathan proposed with his grandmother\'s vintage engagement ring.',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      year: '2024',
      title: 'Our Wedding Day',
      description: 'Today we begin our legacy together, surrounded by family, friends, and the timeless beauty of Ashford Estate.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      year: 'Forever',
      title: 'Our Future',
      description: 'Together we will build a legacy of love, create a family, and leave our mark on the world through acts of kindness and devotion.',
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <section id="story" ref={ref} className="py-20 bg-gradient-to-b from-amber-50 to-stone-100 dark:from-stone-900 dark:to-stone-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-light text-stone-800 dark:text-amber-100 mb-6">
            Chapters of Our Love
          </h2>
          <div className="w-32 h-px bg-amber-600 mx-auto mb-8" />
          <p className="text-xl text-stone-600 dark:text-stone-300 font-serif max-w-3xl mx-auto leading-relaxed">
            Every great love story deserves to be chronicled. Here are the defining moments 
            that have shaped our journey together, each one a precious page in our timeless archive.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-amber-600 via-amber-500 to-amber-600 dark:from-amber-400 dark:via-amber-300 dark:to-amber-400" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-16 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-white dark:bg-stone-800 p-8 rounded-lg shadow-lg border border-amber-200 dark:border-stone-700 relative">
                    {/* Decorative Corner */}
                    <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-16 h-16 bg-amber-100 dark:bg-stone-700 transform rotate-45 translate-x-8 -translate-y-8`} />
                    
                    <div className="relative z-10">
                      <span className="text-4xl font-script text-amber-600 dark:text-amber-400 mb-2 block">
                        {event.year}
                      </span>
                      <h3 className="text-2xl font-serif font-semibold text-stone-800 dark:text-amber-100 mb-4">
                        {event.title}
                      </h3>
                      <p className="text-stone-600 dark:text-stone-300 leading-relaxed font-serif">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-20">
                  <div className="w-16 h-16 bg-amber-600 dark:bg-amber-400 rounded-full border-4 border-white dark:border-stone-800 shadow-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full" />
                  </div>
                </div>

                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg group">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 object-cover filter sepia-[0.3] group-hover:sepia-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Family Legacy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-amber-50 to-stone-50 dark:from-stone-800 dark:to-stone-700 p-12 rounded-lg border-2 border-amber-200 dark:border-stone-600">
            <h3 className="text-3xl font-serif font-semibold text-stone-800 dark:text-amber-100 mb-6">
              Honoring Those Who Came Before
            </h3>
            <p className="text-lg text-stone-600 dark:text-stone-300 font-serif leading-relaxed max-w-4xl mx-auto mb-8">
              Our love story is built upon the foundation of those who loved before us. 
              We carry forward the wisdom of our grandparents, the strength of our parents, 
              and the blessing of family traditions that have shaped who we are today.
            </p>
            <div className="flex justify-center space-x-8 text-amber-600 dark:text-amber-400">
              <div className="text-center">
                <div className="text-2xl font-script mb-2">Eleanor's Heritage</div>
                <div className="text-sm font-serif">Rose Garden Traditions</div>
              </div>
              <div className="w-px h-16 bg-amber-400" />
              <div className="text-center">
                <div className="text-2xl font-script mb-2">Jonathan's Heritage</div>
                <div className="text-sm font-serif">Craftsman Legacy</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;