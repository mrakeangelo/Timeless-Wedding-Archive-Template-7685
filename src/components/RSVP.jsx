import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiX, FiUser, FiMail, FiPhone, FiHeart } = FiIcons;

const RSVP = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guestCount: 1,
    dietaryRestrictions: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('RSVP Data:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-gradient-to-b from-stone-100 to-amber-50 dark:from-stone-800 dark:to-stone-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-stone-800 p-12 rounded-lg shadow-2xl border-2 border-amber-200 dark:border-stone-600"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiCheck} className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-serif font-light text-stone-800 dark:text-amber-100 mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-300 font-serif leading-relaxed">
              Your response has been added to our archive. We cannot wait to celebrate this momentous day with you.
            </p>
            <div className="mt-8">
              <div className="w-24 h-px bg-amber-600 mx-auto" />
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" ref={ref} className="py-20 bg-gradient-to-b from-stone-100 to-amber-50 dark:from-stone-800 dark:to-stone-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-light text-stone-800 dark:text-amber-100 mb-6">
            Join Our Legacy
          </h2>
          <div className="w-32 h-px bg-amber-600 mx-auto mb-8" />
          <p className="text-xl text-stone-600 dark:text-stone-300 font-serif max-w-3xl mx-auto leading-relaxed">
            Your presence would be the greatest gift as we begin this new chapter. 
            Please seal your response with the care of a cherished letter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white dark:bg-stone-800 rounded-lg shadow-2xl border-2 border-amber-200 dark:border-stone-600 overflow-hidden"
        >
          {/* Header with Wax Seal Design */}
          <div className="bg-gradient-to-r from-amber-100 to-stone-100 dark:from-stone-700 dark:to-stone-600 p-8 relative">
            <div className="text-center">
              <h3 className="text-3xl font-serif font-semibold text-stone-800 dark:text-amber-100 mb-2">
                Respond with Grace
              </h3>
              <p className="text-stone-600 dark:text-stone-300 font-serif">
                Please respond by August 15th, 2024
              </p>
            </div>
            
            {/* Decorative Wax Seal */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-amber-600 dark:bg-amber-500 rounded-full flex items-center justify-center border-4 border-white dark:border-stone-800">
                <SafeIcon icon={FiHeart} className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block text-stone-700 dark:text-stone-300 font-serif font-medium mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 dark:text-amber-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-amber-200 dark:border-stone-600 rounded-lg focus:border-amber-500 dark:focus:border-amber-400 focus:outline-none bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 font-serif transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-stone-700 dark:text-stone-300 font-serif font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 dark:text-amber-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-amber-200 dark:border-stone-600 rounded-lg focus:border-amber-500 dark:focus:border-amber-400 focus:outline-none bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 font-serif transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            {/* Phone and Attendance Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block text-stone-700 dark:text-stone-300 font-serif font-medium mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <SafeIcon icon={FiPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 dark:text-amber-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-amber-200 dark:border-stone-600 rounded-lg focus:border-amber-500 dark:focus:border-amber-400 focus:outline-none bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 font-serif transition-colors duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-700 dark:text-stone-300 font-serif font-medium mb-2">
                  Will you attend?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={formData.attendance === 'yes'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-3 rounded-lg border-2 text-center font-serif transition-all duration-300 ${
                      formData.attendance === 'yes'
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                        : 'border-amber-200 dark:border-stone-600 bg-white dark:bg-stone-700 text-stone-700 dark:text-stone-300'
                    }`}>
                      <SafeIcon icon={FiCheck} className="w-5 h-5 mx-auto mb-1" />
                      <span className="text-sm">Joyfully Accept</span>
                    </div>
                  </label>

                  <label className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={formData.attendance === 'no'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-3 rounded-lg border-2 text-center font-serif transition-all duration-300 ${
                      formData.attendance === 'no'
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                        : 'border-amber-200 dark:border-stone-600 bg-white dark:bg-stone-700 text-stone-700 dark:text-stone-300'
                    }`}>
                      <SafeIcon icon={FiX} className="w-5 h-5 mx-auto mb-1" />
                      <span className="text-sm">Regretfully Decline</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Guest Count and Dietary Restrictions */}
            {formData.attendance === 'yes' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-stone-700 dark:text-stone-300 font-serif font-medium mb-2">
                    Number of Guests
                  </label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-amber-200 dark:border-stone-600 rounded-lg focus:border-amber-500 dark:focus:border-amber-400 focus:outline-none bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 font-serif transition-colors duration-300"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 dark:text-stone-300 font-serif font-medium mb-2">
                    Dietary Restrictions
                  </label>
                  <input
                    type="text"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-amber-200 dark:border-stone-600 rounded-lg focus:border-amber-500 dark:focus:border-amber-400 focus:outline-none bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 font-serif transition-colors duration-300"
                    placeholder="Any dietary needs?"
                  />
                </div>
              </div>
            )}

            {/* Message */}
            <div>
              <label className="block text-stone-700 dark:text-stone-300 font-serif font-medium mb-2">
                A Message for Our Archive
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-amber-200 dark:border-stone-600 rounded-lg focus:border-amber-500 dark:focus:border-amber-400 focus:outline-none bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 font-serif transition-colors duration-300 resize-none"
                placeholder="Share your thoughts, memories, or well wishes..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-serif text-lg rounded-lg shadow-lg transition-all duration-300 border-2 border-amber-600 hover:border-amber-700"
              >
                <span className="relative z-10">Seal Your Response</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;