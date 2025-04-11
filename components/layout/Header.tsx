'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '/' },
  // { name: 'About', href: '/about' },
  // { name: 'Services', href: '/services' },
  // { name: 'Portfolio', href: '/portfolio' },
  // { name: 'Tools', href: '/tools' },
  // { name: 'Mini Games', href: '/games' },
  // { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-[var(--duration-normal)] ${
      scrolled ? 'bg-white shadow-sm py-3' : 'bg-white py-4 border-b border-gray-100'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="w-10 h-10 relative">
            <Image 
              src="/assets/logo-ariel-spencer.png" 
              alt="Ariel Spencer Logo" 
              fill 
              sizes="40px"
              className="object-contain"
            />
          </span>
          <span className="text-lg md:text-xl font-bold text-[var(--color-text-heading)]">
            Ariel Spencer
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-[var(--color-text-body)] hover:text-[var(--color-accent)] transition-colors duration-[var(--duration-fast)]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Button */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-6 py-3 text-[var(--color-text-body)] hover:bg-[var(--color-bg-secondary)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}