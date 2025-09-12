'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black text-white min-h-[70vh] flex items-center" style={{ paddingTop: '72px' }}>
        <div className="w-full px-[4vw] py-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="font-playfair text-white" 
                    style={{ 
                      fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                      fontWeight: 200,
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em'
                    }}>
                  Blog & <span style={{ color: '#F1515C' }}>Yazılarım.</span>
                </h1>
                <p className="font-playfair text-white/80 mt-8 max-w-3xl"
                   style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
                  Bağımlılık, iyileşme, biyohacking ve kişisel gelişim üzerine düşünceler.
                </p>
              </div>
              
              <div className="relative h-[500px]">
                <Image
                  src="/images/esracavusoglu-blog.jpg"
                  alt="Dr. Esra Çavuşoğlu - Blog"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <BlogSection />

      <Footer />
    </>
  );
}