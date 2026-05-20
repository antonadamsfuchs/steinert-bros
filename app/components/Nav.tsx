"use client"

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home',            href: '/' },
  { name: 'Services',        href: '/#services' },
  { name: 'FFE procurement', href: '/ffe' },
  { name: 'About',           href: '/#about' },
  { name: 'Contact',         href: '/#contact' },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <a
            href="/"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.2rem',
              fontWeight: 600,
              color: 'var(--foreground)',
            }}
          >
            Steinert Brothers
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors"
                style={{ color: 'var(--muted)' }}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md"
            style={{ color: 'var(--muted)' }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium rounded-md"
                style={{ color: 'var(--muted)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
