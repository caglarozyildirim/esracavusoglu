'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface PageHeroSliderProps {
  slides: {
    title: string;
    subtitle: string;
    image?: string;
  }[];
  ctaText?: string;
  ctaLink?: string;
}

export default function PageHeroSlider({ slides, ctaText = "İLETİŞİM", ctaLink = "/iletisim" }: PageHeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-taupe">
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 lg:pr-12">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-[0.9] text-white tracking-tight font-josefin">
                  {slides[currentSlide].title.split('\n').map((line, index) => (
                    <span key={index} className="block">
                      {line}
                      {index < slides[currentSlide].title.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </h1>
                
                <p className="text-lg md:text-xl text-white text-opacity-90 font-normal leading-relaxed max-w-2xl font-josefin">
                  {slides[currentSlide].subtitle}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link 
                  href={ctaLink}
                  className="bg-transparent border border-white text-white px-6 py-3 text-xs font-josefin font-medium uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-all inline-flex items-center justify-center"
                >
                  {ctaText}
                </Link>
              </div>
            </div>
            
            {/* Right Content - Image/Profile */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 lg:w-96 lg:h-[480px] overflow-hidden rounded-sm">
                  <div className="w-full h-full bg-gradient-to-br from-taupe-light to-taupe-dark flex items-end justify-center">
                    {/* Profile placeholder - in real implementation this would be an actual image */}
                    <div className="w-full h-full bg-cover bg-center bg-no-repeat" 
                         style={{backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%), url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQ4MCIgdmlld0JveD0iMCAwIDQwMCA0ODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDgwIiBmaWxsPSIjZDRjOWI2Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE4MCIgcj0iNjAiIGZpbGw9IiNhODk2ODUiLz4KPHBhdGggZD0iTTEwMCAzNjBIMzAwQzMwMCAzMjAgMjYwIDI4MCAyMDAgMjgwQzE0MCAyODAgMTAwIDMyMCAxMDAgMzYwWiIgZmlsbD0iI2E4OTY4NSIvPgo8L3N2Zz4K')`}}>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -z-10 top-8 -right-8 w-32 h-32 bg-taupe-light rounded-full opacity-50"></div>
                <div className="absolute -z-10 -bottom-6 -left-6 w-24 h-24 bg-taupe-light rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slide Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white w-8' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 text-white text-opacity-60 hover:text-opacity-100 transition-opacity"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 text-white text-opacity-60 hover:text-opacity-100 transition-opacity"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </section>
  );
}