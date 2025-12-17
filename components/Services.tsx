'use client';

import { Heart, Star, Target, Leaf } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Expert Curation',
      description: 'Hand-picked pieces selected by our stylists to match your aesthetic, lifestyle, and values.',
      icon: Star,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop&q=80',
      color: 'emerald-600',
    },
    {
      id: 2,
      title: 'Personal Styling Sessions',
      description: 'One-on-one consultations to discover your signature style and build confidence in your wardrobe choices.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&q=80',
      color: 'emerald-600',
    },
    {
      id: 3,
      title: 'Membership Access',
      description: 'Exclusive benefits including early access to new arrivals, VIP discounts, and personalized styling recommendations.',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&q=80',
      color: 'emerald-600',
    },
    {
      id: 4,
      title: 'Capsule Wardrobe Planning',
      description: 'Strategic planning to build a versatile wardrobe of essential pieces that work together seamlessly.',
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=900&fit=crop&q=80',
      color: 'emerald-600',
    },
    {
      id: 5,
      title: 'Curated Collections',
      description: 'Thoughtfully assembled seasonal collections that celebrate quality, craftsmanship, and timeless style.',
      icon: Star,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop&q=80',
      color: 'emerald-600',
    },
    {
      id: 6,
      title: 'Sustainable Fashion Focus',
      description: 'Commitment to eco-conscious pieces that are kind to the planet without compromising on elegance.',
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=900&fit=crop&q=80',
      color: 'emerald-600',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-4">
            How We Serve Your Style
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            From discovery to delivery, we handle every detail of your fashion journey. Experience curation that celebrates who you are.
          </p>
        </div>

        {/* Services Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Icon Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end justify-start p-6">
                    <div className={`bg-${service.color} rounded-xl p-3`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-slate-600 mb-6">
            Ready to discover your perfect style?
          </p>
          <a
            href="#contact"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
