import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiEdit3, FiHeart, FiStar, FiUser } = FiIcons;

const Guestbook = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [newEntry, setNewEntry] = useState({
    name: '',
    relationship: '',
    message: ''
  });

  const [entries, setEntries] = useState([
    {
      id: 1,
      name: 'Margaret & William Thompson',
      relationship: 'Eleanor\'s Grandparents',
      message: 'Watching our granddaughter find her perfect match fills our hearts with such joy. May your love story be as enduring as the ancient oaks that shelter your ceremony.',
      date: '2024-08-01'
    },
    {
      id: 2,
      name: 'David Chen',
      relationship: 'Jonathan\'s College Friend',
      message: 'From late-night philosophy discussions to finding your soulmate - what a journey it\'s been, my friend. Eleanor, you\'ve found yourself a true gentleman and scholar.',
      date: '2024-08-03'
    },
    {
      id: 3,
      name: 'The Ashford Estate Staff',
      relationship: 'Venue Team',
      message: 'In all our years hosting celebrations, we\'ve rarely seen a love so genuine and timeless. Your wedding will be a treasured memory in our estate\'s long history.',
      date: '2024-08-05'
    }
  ]);

  const relationships = [
    'Family',
    'Friend',
    'Colleague',
    'Classmate',
    'Neighbor',
    'Wedding Party',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEntry.name && newEntry.message) {
      const entry = {
        id: entries.length + 1,
        ...newEntry,
        date: new Date().toISOString().split('T')[0]
      };
      setEntries([entry, ...entries]);
      setNewEntry({ name: '', relationship: '', message: '' });
    }
  };

  return (
    <section id="guestbook" ref={ref} className="py-20 bg-gradient-to-b from-amber-50 to-stone-100 dark:from-stone-900 dark:to-stone-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-light text-stone-800 dark:text-amber-100 mb-6">
            Add to the Archive
          </h2>
          <div className="w-32 h-px bg-amber-600 mx-auto mb-8" />
          <p className="text-xl text-stone-600 dark:text-stone-300 font-serif max-w-3xl mx-auto leading-relaxed">
            Leave your mark in our family's digital archive. Your words will be treasured 
            as part of our legacy for generations to come.
          </p>
        </motion.div>

        {/* Add Entry Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white dark:bg-stone-800 rounded-lg shadow-2xl border-2 border-amber-200 dark:border-stone-600 p-8 mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-amber-600 dark:bg-amber-500 rounded-full flex items-center justify-center mr-4">
              <SafeIcon icon={FiEdit3} className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-stone-800 dark:text-amber-100">
              Sign Our Digital Guestbook
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-stone-700 dark:text-stone-300 font-serif font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={newEntry.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-amber-200 dark:border-stone-600 rounded-lg focus:border-amber-500 dark:focus:border-amber-400 focus:outline-none bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 font-serif transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-stone-700 dark:text-stone-300 font-serif font-medium mb-2">
                  Relationship to Couple
                </label>
                <select
                  name="relationship"
                  value={newEntry.relationship}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-amber-200 dark:border-stone-600 rounded-lg focus:border-amber-500 dark:focus:border-amber-400 focus:outline-none bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 font-serif transition-colors duration-300"
                >
                  <option value="">Select relationship</option>
                  {relationships.map((rel) => (
                    <option key={rel} value={rel}>{rel}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-stone-700 dark:text-stone-300 font-serif font-medium mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={newEntry.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border-2 border-amber-200 dark:border-stone-600 rounded-lg focus:border-amber-500 dark:focus:border-amber-400 focus:outline-none bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 font-serif transition-colors duration-300 resize-none"
                placeholder="Share your thoughts, memories, or well wishes for Eleanor & Jonathan..."
              />
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-serif rounded-lg shadow-lg transition-all duration-300"
              >
                <SafeIcon icon={FiHeart} className="w-5 h-5 mr-2" />
                Add to Archive
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Existing Entries */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-serif font-semibold text-stone-800 dark:text-amber-100 text-center mb-8">
            Messages from Our Loved Ones
          </h3>

          {entries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-gradient-to-br from-white to-amber-50 dark:from-stone-800 dark:to-stone-700 p-8 rounded-lg shadow-lg border border-amber-200 dark:border-stone-600 relative"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-4 left-4 text-6xl text-amber-300 dark:text-amber-600 font-serif leading-none">
                "
              </div>

              <div className="relative z-10 ml-12">
                <p className="text-lg text-stone-700 dark:text-stone-200 font-serif leading-relaxed mb-6 italic">
                  {entry.message}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-amber-600 dark:bg-amber-500 rounded-full flex items-center justify-center mr-3">
                      <SafeIcon icon={FiUser} className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-serif font-semibold text-stone-800 dark:text-amber-100">
                        {entry.name}
                      </p>
                      {entry.relationship && (
                        <p className="text-sm text-amber-600 dark:text-amber-400 font-serif">
                          {entry.relationship}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center text-amber-600 dark:text-amber-400 mb-1">
                      <SafeIcon icon={FiStar} className="w-4 h-4 mr-1" />
                      <span className="text-xs font-serif uppercase tracking-wider">
                        Archive Entry
                      </span>
                    </div>
                    <p className="text-sm text-stone-500 dark:text-stone-400 font-serif">
                      {new Date(entry.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-amber-300 dark:border-amber-600" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-amber-300 dark:border-amber-600" />
            </motion.div>
          ))}
        </motion.div>

        {/* Archive Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-stone-50 to-amber-50 dark:from-stone-800 dark:to-stone-700 p-8 rounded-lg border-2 border-amber-200 dark:border-stone-600">
            <blockquote className="text-xl font-serif italic text-stone-700 dark:text-stone-200 leading-relaxed">
              "In the pages of time, your words become part of our eternal story. 
              Thank you for adding your voice to our family's archive."
            </blockquote>
            <cite className="block mt-4 text-amber-600 dark:text-amber-400 font-script text-lg">
              — With Love, Eleanor & Jonathan
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guestbook;