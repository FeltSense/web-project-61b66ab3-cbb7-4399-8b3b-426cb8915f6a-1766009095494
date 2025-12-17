'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-screen flex items-center">
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-12">
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">
            Curated Fashion, Your Personal Narrative
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-lg">
            Thoughtfully selected pieces from emerging designers and heritage brands. Discover collections that tell your story.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            {/* Primary CTA */}
            <Link
              href="#contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 inline-block"
            >
              Start Exploring
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#about"
              className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 inline-block"
            >
              View Our Story
            </Link>
          </div>

          {/* Trust Element */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <p className="text-sm text-slate-500 mb-4">Trusted by fashion enthusiasts worldwide</p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-emerald-700">
                  A
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-amber-700">
                  B
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-700">
                  C
                </div>
              </div>
              <span className="text-sm text-slate-600 ml-2">10,000+ members</span>
            </div>
          </div>
        </div>

        {/* Right Column: Imagery (Split Layout) */}
        <div className="hidden lg:flex w-1/2 flex-col gap-6 h-full items-center justify-center">
          {/* Portrait Image - Top Right */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
            <Image
              src="https://images.unsplash.com/photo-1595777707802-51b0a4dee1e3?w=600&h=400&fit=crop"
              alt="Styled woman in curated fashion"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Flat-lay Image - Bottom Right */}
          <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
            <Image
              src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&h=300&fit=crop"
              alt="Flat-lay of curated fashion pieces"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout: Stack vertically */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 sm:px-8 pb-12">
        <div className="space-y-6">
          {/* Portrait Image - Mobile */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
            <Image
              src="https://images.unsplash.com/photo-1595777707802-51b0a4dee1e3?w=600&h=400&fit=crop"
              alt="Styled woman in curated fashion"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Flat-lay Image - Mobile */}
          <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
            <Image
              src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&h=300&fit=crop"
              alt="Flat-lay of curated fashion pieces"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}