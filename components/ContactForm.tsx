'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_id: 'contact_form',
          form_data: {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone') || '',
          },
          project_id: '61b66ab3-cbb7-4399-8b3b-426cb8915f6a',
          founder_id: '',
          submitted_at: new Date().toISOString(),
        }),
      });

      // Always show success (optimistic UI)
      localStorage.setItem('form_submitted', 'true');
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();

      if (!response.ok) {
        console.error('Form submission may have failed:', response.status);
      }
    } catch (error) {
      // Still show success, log error internally
      localStorage.setItem('form_submitted', 'true');
      setSubmitted(true);
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-6">
            Let's Create Something Beautiful
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have a question about our curated collection or need styling advice? We'd love to hear from you. Reach out and let's start a conversation.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
            {submitted ? (
              // Success State
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-6 flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-full">
                  <Check className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-3">
                  Thank You!
                </h3>
                <p className="text-slate-500 text-lg mb-8">
                  We've received your message and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors duration-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              // Form
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-3">
                    Phone Number <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Subtext */}
                <p className="text-center text-sm text-slate-500 mt-6">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info Below Form */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-slate-400 text-sm mb-2">Email</p>
              <p className="text-white font-semibold">hello@curated.com</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Phone</p>
              <p className="text-white font-semibold">+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Location</p>
              <p className="text-white font-semibold">New York, NY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
