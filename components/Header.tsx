'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'ANA SAYFA' },
    { href: '/hakkimda', label: 'HAKKIMDA' },
    { href: '/is-hayati', label: 'İŞ HAYATI' },
    { href: '/kisisel', label: 'KİŞİSEL' },
    { href: '/blog', label: 'BLOG' },
  ];

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm fixed top-0 z-50" style={{ borderBottom: '0.5px solid rgba(0,0,0,0.08)' }}>
      <div className="w-full px-[4vw]">
        <div className="flex justify-between items-center" style={{ height: '72px' }}>
          {/* Logo */}
          <Link href="/" className="font-josefin text-black" style={{ fontSize: '1.25rem', fontWeight: 300, letterSpacing: '-0.02em' }}>
            Esra Çavuşoğlu.
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center" style={{ gap: '2.5rem' }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-josefin text-black hover:text-gray-600 transition-colors"
                style={{ fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase' }}
              >
                {item.label}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/iletisim"
              className="font-josefin text-black hover:text-gray-600 transition-all"
              style={{ 
                fontSize: '0.75rem', 
                fontWeight: 300, 
                letterSpacing: '0.2em', 
                textTransform: 'uppercase',
                borderBottom: '1px solid #000',
                paddingBottom: '2px',
                marginLeft: '1rem'
              }}
            >
              İLETİŞİM
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ padding: '0.5rem' }}
          >
            <div className="flex flex-col justify-center" style={{ width: '24px', height: '18px' }}>
              <span 
                className="block bg-black transition-all duration-300" 
                style={{ 
                  height: '1px', 
                  marginBottom: isMobileMenuOpen ? '0' : '6px',
                  transform: isMobileMenuOpen ? 'rotate(45deg) translateY(0.5px)' : 'none',
                  transformOrigin: 'center'
                }}
              />
              <span 
                className="block bg-black transition-all duration-300" 
                style={{ 
                  height: '1px',
                  opacity: isMobileMenuOpen ? 0 : 1,
                  marginBottom: isMobileMenuOpen ? '0' : '6px'
                }}
              />
              <span 
                className="block bg-black transition-all duration-300" 
                style={{ 
                  height: '1px',
                  transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-0.5px)' : 'none',
                  transformOrigin: 'center'
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-josefin text-black hover:text-gray-600"
                  style={{ fontSize: '0.9rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/iletisim"
                className="font-josefin text-black hover:text-gray-600 inline-block"
                style={{ 
                  fontSize: '0.9rem', 
                  fontWeight: 300, 
                  letterSpacing: '0.15em', 
                  textTransform: 'uppercase',
                  borderBottom: '1px solid #000',
                  paddingBottom: '2px'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                İLETİŞİM
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}