"use client";

import Link from 'next/link';

import { 
  FiGithub, 
  FiInstagram, 
  FiYoutube, 
  FiLinkedin,
} from 'react-icons/fi';
import { PiTiktokLogoBold } from "react-icons/pi";

const navLinks = [
  { name: 'Home', href: '/' },
  // { name: 'Blog', href: '/blog' },
  // { name: 'Services', href: '/services' },
  // { name: 'Portfolio', href: '/portfolio' },
  // { name: 'Tools', href: '/tools' },
  // { name: 'Mini Games', href: '/games' },
  // { name: 'About', href: '/about' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/arielspencer/', icon: FiGithub },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/arielspencer-log/', icon: FiLinkedin },
  { name: 'Instagram', href: 'https://www.instagram.com/arielspencer.dev', icon: FiInstagram },
  { name: 'TikTok', href: 'https://www.tiktok.com/@arielspencer.tech', icon: PiTiktokLogoBold },
  { name: 'YouTube', href: 'https://www.youtube.com/@arielspencer-log', icon: FiYoutube },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-secondary)] pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-5">
            <h3 className="text-lg font-bold mb-4">Ariel Spencer</h3>
            <p className="text-sm mb-6 text-[var(--color-text-body)]">
              Full-stack developer specializing in TypeScript, Python and Node.js.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-body)] hover:text-[var(--color-accent)] transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-body)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <p className="text-sm mb-4 text-[var(--color-text-body)]">
              Have a question or want to work together? Feel free to reach out!
            </p>
            <Link
              href="https://wa.me/5511991007079"
              className="inline-block text-sm font-medium text-[var(--color-accent)] hover:underline"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 text-center text-sm text-[var(--color-text-body)]">
          <p>Developed by Ariel Spencer © {currentYear}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}