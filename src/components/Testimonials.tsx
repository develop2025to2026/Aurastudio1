import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { testimonialsList } from '../data/businessData';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsList.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonialsList.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="testimonials" className="relative py-24 bg-neutral-900/40 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Client Endorsements"
          title="Reputation Built on Tangible Concrete & Trust"
          subtitle="Read verified reviews from prominent property owners, international boutique hoteliers, and corporate leaders across Sri Lanka."
        />

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {testimonialsList.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-neutral-900/90 border border-white/10 hover:border-white/20 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-amber-400/90 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                    {item.projectType}
                  </span>
                </div>

                {/* Quote text */}
                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    {item.name}
                  </h4>
                  <p className="text-xs text-neutral-400">{item.role}</p>
                  <p className="text-[11px] text-amber-300/80">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Interactive Carousel */}
        <div className="md:hidden relative">
          <div className="rounded-2xl bg-neutral-900/90 border border-white/10 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                {[...Array(testimonialsList[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-[10px] font-medium text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">
                {testimonialsList[currentIndex].projectType}
              </span>
            </div>

            <p className="text-sm text-neutral-200 italic mb-6 leading-relaxed min-h-[140px]">
              "{testimonialsList[currentIndex].quote}"
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <img
                src={testimonialsList[currentIndex].avatar}
                alt={testimonialsList[currentIndex].name}
                className="w-10 h-10 rounded-full object-cover border border-white/20"
              />
              <div>
                <h4 className="text-xs font-bold text-white">
                  {testimonialsList[currentIndex].name}
                </h4>
                <p className="text-[11px] text-neutral-400">
                  {testimonialsList[currentIndex].role}
                </p>
                <p className="text-[10px] text-amber-400">
                  {testimonialsList[currentIndex].location}
                </p>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex items-center gap-1.5">
              {testimonialsList.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === i
                      ? 'w-6 bg-amber-400'
                      : 'bg-white/20'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
