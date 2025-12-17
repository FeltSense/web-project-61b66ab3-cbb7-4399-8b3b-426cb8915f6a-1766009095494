'use client';

import { motion } from 'framer-motion';
import { Check, Shield, Lock, Zap } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-indigo-50 rounded-full">
            <span className="text-indigo-600 text-sm font-semibold tracking-wide">EXCLUSIVE ACCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">
            Secure Your Curated Collection
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            Join our pre-order community and get exclusive access to limited-edition pieces before they sell out
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl blur-2xl opacity-20" />
            
            {/* Card */}
            <div className="relative bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden">
              {/* Badge */}
              <div className="absolute top-6 right-6 z-10">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-block bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-5 py-2 rounded-full text-sm font-bold"
                >
                  Limited Time
                </motion.div>
              </div>

              <div className="p-8 md:p-12">
                {/* Price Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Founder's Pre-Order</h3>
                  <p className="text-slate-500 mb-6">One-time investment for exclusive access</p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-6xl font-bold text-indigo-600">$29</span>
                    <span className="text-slate-500 text-lg">USD</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Early Access to Drops</p>
                      <p className="text-slate-500 text-sm">Get first dibs on limited-edition pieces 48 hours before public release</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Exclusive Founder's Discount</p>
                      <p className="text-slate-500 text-sm">Unlock 20% off all purchases for life—your way of saying thanks</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Personal Styling Sessions</p>
                      <p className="text-slate-500 text-sm">Quarterly 1-on-1 consultations with our style experts included</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">VIP Community Access</p>
                      <p className="text-slate-500 text-sm">Join our private Slack channel with 500+ fashion-forward members</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Free Shipping & Returns</p>
                      <p className="text-slate-500 text-sm">No fees on shipping and hassle-free returns forever</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Lifetime Member Badge</p>
                      <p className="text-slate-500 text-sm">Display your founder status and support sustainable fashion</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  Pre-Order Now - $29
                </motion.button>

                {/* Trust Indicators */}
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Lock className="w-5 h-5 text-indigo-600" />
                      </div>
                      <p className="text-xs text-slate-500 font-medium">Secure Payment</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Shield className="w-5 h-5 text-indigo-600" />
                      </div>
                      <p className="text-xs text-slate-500 font-medium">30-Day Money Back</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Zap className="w-5 h-5 text-indigo-600" />
                      </div>
                      <p className="text-xs text-slate-500 font-medium">Instant Access</p>
                    </div>
                  </div>
                </div>

                {/* Footer Text */}
                <p className="text-center text-slate-500 text-sm mt-8">
                  Only <span className="font-bold text-indigo-600">47 spots</span> remaining at this price
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-slate-500">
            Questions? <a href="#contact" className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
