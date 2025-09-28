'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Yaşanmış Deneyim.\nPsikolojik Zeka.\nYeni Bir Etki Dönemi.",
      subtitle: "Dr. Esra Çavuşoğlu hakkında – Kurucu, Yatırımcı, Danışman ve Sağlık Savunucusu.",
      image: "/api/placeholder/800/600"
    },
    {
      title: "Bilimsel Yaklaşım.\nUmut Dolu Gelecek.\nYenilikçi Tedavi.",
      subtitle: "Bağımlılık tedavisinde yenilikçi yaklaşımlar ve sürdürülebilir iyileşme yolları.",
      image: "/api/placeholder/800/600"
    },
    {
      title: "Yeniden Doğuş.\nTürkiye Modeli.\nKalıcı Çözümler.",
      subtitle: "Yale deneyimi ile Türkiye'ye özel rehabilitasyon modelinin yaratıcısı.",
      image: "/api/placeholder/800/600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-manjit">
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 lg:pr-12">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-white tracking-tight font-crimson">
                  {slides[currentSlide].title.split('\n').map((line, index) => (
                    <span key={index} className="block">
                      {line}
                      {index < slides[currentSlide].title.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </h1>
                
                <p className="text-base md:text-lg text-manjit-coral font-normal leading-relaxed max-w-lg font-crimson">
                  {slides[currentSlide].subtitle}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link 
                  href="/iletisim"
                  className="cta-button inline-flex items-center justify-center font-crimson"
                >
                  İLETİŞİM
                </Link>
              </div>
            </div>
            
            {/* Right Content - Image/Profile */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 lg:w-96 lg:h-[480px] overflow-hidden rounded-lg">
                  <div className="w-full h-full bg-gradient-to-br from-taupe-light to-taupe-dark flex items-end justify-center">
                    {/* Profile placeholder - in real implementation this would be an actual image */}
                    <div className="w-full h-full bg-cover bg-center bg-no-repeat" 
                         style={{backgroundImage: `linear-gradient(135deg, rgba(212, 116, 107, 0.1) 0%, rgba(168, 150, 133, 0.1) 100%), url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQ4MCIgdmlld0JveD0iMCAwIDQwMCA0ODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDgwIiBmaWxsPSIjYzJiNWEwIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE4MCIgcj0iNjAiIGZpbGw9IiNkNGQ0ZDgiLz4KPHBhdGggZD0iTTEwMCAzNjBIMzAwQzMwMCAzMjAgMjYwIDI4MCAyMDAgMjgwQzE0MCAyODAgMTAwIDMyMCAxMDAgMzYwWiIgZmlsbD0iI2Q0ZDRkOCIvPgo8L3N2Zz4K')`}}>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -z-10 top-8 -right-8 w-32 h-32 bg-white rounded-full opacity-10"></div>
                <div className="absolute -z-10 -bottom-6 -left-6 w-24 h-24 bg-white rounded-full opacity-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slide Indicators */}
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

      {/* Navigation Arrows */}
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
    </section>
  );
}