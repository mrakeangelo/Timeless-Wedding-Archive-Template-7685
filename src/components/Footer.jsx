import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiMail, FiPhone, FiMapPin } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-stone-800 to-stone-900 dark:from-stone-900 dark:to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Couple Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-script text-amber-400 mb-4">
              Eleanor & Jonathan
            </h3>
            <p className="text-stone-300 font-serif leading-relaxed mb-4">
              Creating a legacy of love, one moment at a time. Our story continues 
              to unfold with each passing day, and we're grateful to share it with you.
            </p>
            <div className="flex items-center justify-center md:justify-start text-amber-400">
              <SafeIcon icon={FiHeart} className="w-5 h-5 mr-2" />
              <span className="font-serif text-sm">September 15th, 2024</span>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-xl font-serif font-semibold text-amber-400 mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <SafeIcon icon={FiMail} className="w-4 h-4 mr-3 text-amber-400" />
                <span className="text-stone-300 font-serif text-sm">
                  eleanor.jonathan@wedding.com
                </span>
              </div>
              <div className="flex items-center justify-center">
                <SafeIcon icon={FiPhone} className="w-4 h-4 mr-3 text-amber-400" />
                <span className="text-stone-300 font-serif text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center justify-center">
                <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-3 text-amber-400" />
                <span className="text-stone-300 font-serif text-sm">
                  Ashford Estate, Cotswolds
                </span>
              </div>
            </div>
          </motion.div>

          {/* Wedding Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="text-xl font-serif font-semibold text-amber-400 mb-6">
              Important Dates
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-amber-300 font-serif font-medium">RSVP Deadline</p>
                <p className="text-stone-300 font-serif text-sm">August 15th, 2024</p>
              </div>
              <div>
                <p className="text-amber-300 font-serif font-medium">Ceremony</p>
                <p className="text-stone-300 font-serif text-sm">4:00 PM</p>
              </div>
              <div>
                <p className="text-amber-300 font-serif font-medium">Reception</p>
                <p className="text-stone-300 font-serif text-sm">6:30 PM</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Divider */}
        <div className="border-t border-stone-700 pt-8 mb-8">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-px bg-amber-400" />
              <div className="w-3 h-3 bg-amber-400 rounded-full" />
              <div className="w-16 h-px bg-amber-400" />
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-8"
        >
          <blockquote className="text-xl font-serif italic text-stone-300 leading-relaxed max-w-3xl mx-auto mb-4">
            "Love is not just looking at each other, it's looking in the same direction. 
            Together, we look toward a future filled with purpose, passion, and endless possibility."
          </blockquote>
          <cite className="text-amber-400 font-script text-lg">
            — Our Promise to Each Other
          </cite>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-stone-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-stone-400 font-serif text-sm">
                © 2024 Eleanor & Jonathan's Wedding Archive
              </p>
              <p className="text-stone-500 font-serif text-xs mt-1">
                A celebration of timeless love and lasting legacy
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-stone-400 font-serif text-sm">
                Timeless Archive – An Heirloom Wedding Template
              </p>
              <p className="text-amber-400 font-serif text-xs mt-1">
                by Mrake Agency
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-900/20 to-transparent rounded-full transform -translate-x-16 translate-y-16" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-bl from-stone-700/20 to-transparent rounded-full transform translate-x-24 translate-y-24" />
      </div>
    </footer>
  );
};

export default Footer;