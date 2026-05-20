"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Menu, X, ChevronRight,
  Layers, Building2, Package,
  CheckCircle,
  Mail, Phone, MapPin,
} from 'lucide-react';
import ContactForm from './components/ContactForm';

// ─── data ────────────────────────────────────────────────────────────────────

const navigation = [
  { name: 'Services',        href: '#services' },
  { name: 'FFE procurement', href: '/ffe' },
  { name: 'About',           href: '#about' },
  { name: 'Contact',         href: '#contact' },
];

const projectTypes = [
  { word: 'Institutional',   label: 'Schools, libraries, civic, state agencies' },
  { word: 'Commercial',      label: 'Offices, retail, light industrial'          },
  { word: 'Public works',    label: 'State and local agency facilities'          },
  { word: 'FFE procurement', label: 'Certified subcontracting at scale'          },
];

const pillars = [
  {
    icon: Layers,
    title: 'Architectural subcontracting',
    body: 'Production drafting, construction documents, code review, Revit/CAD support, and construction administration for prime architects and design-build teams. Add VetHUB participation to your A/E side without compromising delivery quality.',
    link: null,
  },
  {
    icon: Building2,
    title: 'Full architectural services',
    body: 'Stamped architectural services across Texas, Iowa, and Washington. Anton Adams-Fuchs, AIA leads design from concept through construction administration: institutional, civic, and education focus.',
    link: null,
  },
  {
    icon: Package,
    title: 'FFE procurement',
    body: 'VetHUB-certified furniture, fixtures, and equipment procurement. Competitive sourcing, vendor coordination, installation management. Same certification, broader scope.',
    link: { href: '/ffe', label: 'Learn more' },
  },
];

const checklistItems = [
  'Licensed architects on the work (TX, IA, WA)',
  'Verifiable VetHUB credit, not pass-through',
  'Service-disabled veteran ownership (US Navy)',
  'College Station presence with TEEX network access',
  '25+ years in practice across institutional and civic work',
  'Real deliverables on real schedules',
];

const principals = [
  {
    photo: '/anton.png',
    name: 'Anton Adams-Fuchs, AIA',
    subtitle: 'Licensed architect. Texas, Iowa, Washington.',
    bio: 'Anton runs the architectural practice for Steinert Brothers and is principal of Cherry Architecture. Twenty-five years in design and construction, with experience across institutional, civic, and residential work in three states. He focuses on buildable design, construction administration, and integrating with prime architectural teams.',
    phone: '(319) 473-4473',
    phoneHref: 'tel:+13194734473',
    email: 'anton@steinertbros.com',
  },
  {
    photo: '/stephen.jpg',
    name: 'Stephen Fuchs',
    subtitle: 'Service-disabled Navy veteran. Operations and procurement.',
    bio: 'Stephen runs operations and procurement for Steinert Brothers and serves as Facilities and Development Manager at TEEX (Texas A&M Engineering Extension Service), overseeing major facility expansion projects. A service-disabled Navy veteran, he brings deep familiarity with Texas state procurement, agency relationships, and institutional construction.',
    phone: '(941) 400-3843',
    phoneHref: 'tel:+19414003843',
    email: 'stephen@steinertbros.com',
  },
];

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    content: (
      <a href="mailto:info@steinertbros.com" className="text-white hover:underline">
        info@steinertbros.com
      </a>
    ),
  },
  {
    icon: Phone,
    label: 'Anton Adams-Fuchs, AIA',
    content: (
      <a href="tel:+13194734473" className="text-white hover:underline">
        (319) 473-4473
      </a>
    ),
  },
  {
    icon: Phone,
    label: 'Stephen Fuchs',
    content: (
      <a href="tel:+19414003843" className="text-white hover:underline">
        (941) 400-3843
      </a>
    ),
  },
  {
    icon: MapPin,
    label: 'Location',
    content: (
      <>
        <p className="text-white">College Station, Texas</p>
        <p className="text-sm" style={{ color: 'var(--dark-muted)' }}>
          Serving Texas, Iowa, and Washington
        </p>
      </>
    ),
  },
];

// ─── component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>

      {/* ── NAV ── */}
      <nav className="fixed w-full z-50 bg-white" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="flex items-center">
              <a
                href="/"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--foreground)',
                }}
              >
                Steinert Brothers
              </a>
            </div>

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

      {/* ── HERO ── */}
      <section className="pt-36 pb-24" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-bold uppercase mb-6"
            style={{ color: 'var(--accent)', letterSpacing: '0.15em' }}
          >
            Architecture. Project management. Coordination.
          </p>

          <h1
            className="font-semibold tracking-tight leading-[1.05] mb-6"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--foreground)',
              maxWidth: '820px',
            }}
          >
            The VetHUB architect.
          </h1>

          <p
            className="text-lg sm:text-xl leading-relaxed mb-10"
            style={{ color: 'var(--muted)', maxWidth: '600px' }}
          >
            Steinert Brothers is one of the few VetHUB-certified architectural practices in
            Texas. Led by licensed architects (Texas, Iowa, Washington) and a service-disabled
            Navy veteran, we deliver real professional services to general contractors, design
            firms, and public agencies.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#fff',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Request a capability statement <ChevronRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-colors"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--foreground)',
                backgroundColor: 'transparent',
              }}
            >
              See services
            </a>
          </div>

          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </section>

      {/* ── CREDIBILITY STRIP ── */}
      <section
        style={{
          backgroundColor: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x"
            style={{ '--tw-divide-opacity': '1' } as React.CSSProperties}>
            {projectTypes.map((pt, i) => (
              <div key={i} className="lg:px-10 first:lg:pl-0 last:lg:pr-0">
                <p
                  className="font-bold leading-none mb-2"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    color: 'var(--foreground)',
                  }}
                >
                  {pt.word}
                </p>
                <p
                  className="text-xs font-semibold uppercase"
                  style={{ color: 'var(--muted)', letterSpacing: '0.06em' }}
                >
                  {pt.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section id="services" className="py-24" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-bold mb-12"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.25rem',
              color: 'var(--foreground)',
            }}
          >
            What we do.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="rounded-lg p-8 flex flex-col"
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                }}
              >
                <pillar.icon
                  size={28}
                  className="mb-5 flex-shrink-0"
                  style={{ color: 'var(--accent)' }}
                />
                <h3
                  className="font-semibold mb-3"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '22px',
                    color: 'var(--foreground)',
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="leading-relaxed flex-1"
                  style={{ color: 'var(--muted)', fontSize: '16px' }}
                >
                  {pillar.body}
                </p>
                {pillar.link && (
                  <a
                    href={pillar.link.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold mt-5"
                    style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}
                  >
                    {pillar.link.label} <ChevronRight size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VETHUB ARCHITECT CASE ── */}
      <section
        className="py-24"
        style={{
          backgroundColor: 'var(--background)',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div>
              <h2
                className="font-bold mb-8"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  color: 'var(--foreground)',
                }}
              >
                Why a VetHUB architect matters.
              </h2>
              <div className="space-y-5 text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
                <p>
                  The December 2025 program reset reduced certified Texas firms from over
                  15,000 to approximately 485. Architecture is among the highest-value scopes
                  a prime contractor can subcontract for VetHUB credit, and licensed VetHUB
                  architects are vanishingly rare.
                </p>
                <p>
                  Working with licensed architects, not a pass-through, means your
                  participation is verifiable, your project is better, and your audit trail
                  is clean.
                </p>
              </div>
            </div>

            <div
              className="rounded-lg p-8"
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
            >
              <h3
                className="font-semibold mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  color: 'var(--foreground)',
                }}
              >
                What you get
              </h3>
              <ul className="space-y-4">
                {checklistItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: 'var(--accent)' }}
                    />
                    <span style={{ color: 'var(--muted)', fontSize: '15px' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="py-24"
        style={{
          backgroundColor: 'var(--surface)',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-bold mb-12"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.25rem',
              color: 'var(--foreground)',
            }}
          >
            Brothers. Partners.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {principals.map((p, i) => (
              <div
                key={i}
                className="rounded-lg p-8"
                style={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                }}
              >
                <Image
                  src={p.photo}
                  alt={p.name}
                  width={140}
                  height={140}
                  className="rounded-full object-cover mb-5"
                  style={{ width: '140px', height: '140px' }}
                />
                <h3
                  className="font-semibold mb-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    color: 'var(--foreground)',
                  }}
                >
                  {p.name}
                </h3>
                <p
                  className="font-semibold mb-5 uppercase"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    color: 'var(--accent)',
                  }}
                >
                  {p.subtitle}
                </p>
                <p
                  className="leading-relaxed mb-6"
                  style={{ color: 'var(--muted)', fontSize: '15px' }}
                >
                  {p.bio}
                </p>
                <div className="space-y-2.5">
                  <a
                    href={p.phoneHref}
                    className="flex items-center gap-2 text-sm transition-colors hover:underline"
                    style={{ color: 'var(--muted)' }}
                  >
                    <Phone size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    {p.phone}
                  </a>
                  <a
                    href={`mailto:${p.email}`}
                    className="flex items-center gap-2 text-sm transition-colors hover:underline"
                    style={{ color: 'var(--muted)' }}
                  >
                    <Mail size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    {p.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="py-24"
        style={{ backgroundColor: 'var(--dark)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2
              className="font-bold mb-3 text-white"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.25rem',
              }}
            >
              Start a conversation.
            </h2>
            <p
              style={{
                color: 'var(--dark-muted)',
                fontSize: '18px',
                maxWidth: '520px',
                lineHeight: '1.6',
              }}
            >
              Capability statements, qualifications packages, and project inquiries.
              We respond within one business day.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--accent)' }}
                  >
                    <item.icon className="text-white" size={18} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: 'var(--dark-muted)' }}
                    >
                      {item.label}
                    </p>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl p-8"
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
            >
              <h3
                className="font-bold mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  color: 'var(--foreground)',
                }}
              >
                Request a quote
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-14"
        style={{
          backgroundColor: 'var(--dark)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <h3
                className="font-bold mb-3 text-white"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}
              >
                Steinert Brothers
              </h3>
              <p style={{ color: 'var(--dark-muted)', fontSize: '14px', lineHeight: '1.7' }}>
                VetHUB-certified architectural services. Service-disabled veteran-owned.
                Texas.
              </p>
              <p
                className="mt-2"
                style={{ color: 'var(--dark-muted)', fontSize: '13px' }}
              >
                Licensed in TX, IA, WA. Anton Adams-Fuchs, AIA.
              </p>
            </div>

            <div>
              <h4
                className="font-bold mb-4 text-white"
                style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                Quick links
              </h4>
              <ul className="space-y-2.5" style={{ color: 'var(--dark-muted)', fontSize: '14px' }}>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/ffe" className="hover:text-white transition-colors">
                    FFE procurement
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className="font-bold mb-4 text-white"
                style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                Certifications
              </h4>
              <ul className="space-y-2.5" style={{ color: 'var(--dark-muted)', fontSize: '14px' }}>
                <li>✓ Texas VetHUB Certified</li>
                <li>✓ Service-Disabled Veteran-Owned</li>
                <li>✓ Licensed architects (TX, IA, WA)</li>
              </ul>
            </div>
          </div>

          <div
            className="pt-8 text-sm"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.07)',
              color: 'var(--dark-muted)',
            }}
          >
            &copy; 2026 Steinert Brothers. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
