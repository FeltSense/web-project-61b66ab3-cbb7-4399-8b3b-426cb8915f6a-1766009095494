'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Alexandra Chen',
    role: 'Fashion Influencer & Stylist',
    quote: "The curation here is impeccable. Every piece tells a story and reflects genuine craftsmanship. I've recommended this boutique to all my followers.",
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Priya Patel',
    role: 'Creative Director',
    quote: "Finding sustainable luxury shouldn't be this easy. Their selection of emerging designers is exactly what the market needs.",
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Jordan Mitchell',
    role: 'Fashion Editor',
    quote: "The attention to detail in their collection is remarkable. Quality, sustainability, and style—they've mastered the trifecta.",
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Brand Consultant',
    quote: 'Working with this boutique has elevated our brand positioning. Their expertise in retail curation is unmatched in the industry.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">
            Trusted by Fashion-Forward Minds
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            Hear from the industry leaders, influencers, and style icons who trust our curation.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4 md:px-6"
                >
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 md:p-12 h-full">
                    {/* Quote Mark */}
                    <div className="text-5xl text-emerald-600 mb-6 leading-none">
                      "
                    </div>

                    {/* Quote Text */}
                    <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8">
                      {testimonial.quote}
                    </p>

                    {/* Divider */}
                    <div className="w-12 h-1 bg-emerald-600 rounded-full mb-8"></div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-slate-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-emerald-600 w-8'
                      : 'bg-slate-200 w-2 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-4">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="p-3 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-16 border-t border-slate-100">
          <p className="text-center text-slate-500 text-sm mb-8">
            Trusted by industry leaders worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-slate-900">500+</p>
              <p className="text-sm text-slate-500 mt-2">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">98%</p>
              <p className="text-sm text-slate-500 mt-2">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">50+</p>
              <p className="text-sm text-slate-500 mt-2">Designer Brands</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">15 yrs</p>
              <p className="text-sm text-slate-500 mt-2">Industry Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
