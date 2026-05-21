"use client"

import React from 'react';
import {
  ChevronRight,
  Mail, Phone, MapPin,
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Nav from '@/app/components/Nav';

const services = [
  {
    title: 'Competitive bid solicitation',
    description:
      'Multi-vendor sourcing for real cost discovery. We go to market across qualified suppliers, not a single dealer contact.',
  },
  {
    title: 'Specification coordination',
    description:
      'Technical review with the A/E team at every stage to ensure design intent is preserved through procurement and substitution review.',
  },
  {
    title: 'Vendor & schedule management',
    description:
      'Relationship management with manufacturers, dealers, and installers from award through delivery. One point of contact for the GC.',
  },
  {
    title: 'Installation oversight & closeout',
    description:
      'Delivery coordination, install supervision, punch resolution, warranty documentation, and final asset inventory for the owner.',
  },
];

const projectTypes = [
  'K-12 Schools',
  'Higher Education',
  'Public Libraries',
  'Municipal Buildings',
  'Healthcare Clinics',
  'State Agency Facilities',
];

const budgetRows = [
  { label: 'Construction budget',                value: '$5,000,000', highlight: false },
  { label: 'District VetHUB goal (20%)',         value: '$1,000,000', highlight: false },
  { label: 'Typical FFE scope (12% of budget)',  value: '$600,000',   highlight: false },
  { label: 'VetHUB credit via Steinert Brothers',value: '100% of FFE scope', highlight: true },
];

const steps = [
  {
    num: '01',
    title: 'Pre-bid',
    desc: 'Review scope documents, identify VetHUB-eligible line items, and provide competitive bid pricing for the GC package.',
  },
  {
    num: '02',
    title: 'Award',
    desc: 'Execute subcontract, conduct competitive vendor solicitation, and finalize product selections with the owner and A/E team.',
  },
  {
    num: '03',
    title: 'Procurement',
    desc: 'Coordinate with the A/E on submittals, place purchase orders, and actively track delivery schedules against the construction timeline.',
  },
  {
    num: '04',
    title: 'Closeout',
    desc: 'Coordinate staged delivery and installation, resolve punch items, and compile warranty docs and final asset inventory for the owner.',
  },
];

export default function FFEPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>

      <Nav />

      {/* ── Hero ── */}
      <section className="pt-28 pb-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}
            >
              FFE Procurement
            </p>
            <h1
              className="text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }}
            >
              VetHUB-certified FFE procurement, done right.
            </h1>
            <p className="text-xl leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
              Furniture, fixtures, and equipment procurement for general contractors who need verifiable VetHUB
              participation, not a pass-through invoice.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)', color: '#fff', fontFamily: 'var(--font-heading)' }}
            >
              Request capability statement <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="py-20" style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2
              className="text-4xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }}
            >
              The pass-through trap.
            </h2>
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              <p>
                Many general contractors meet VetHUB participation goals by routing invoices through a certified firm
                with no actual involvement in the work. The certified sub gets a fee. The GC gets a check in the box.
                The owner pays for both.
              </p>
              <p>
                State auditors (particularly on ESSER-funded school district and higher education projects) are increasingly
                scrutinizing these arrangements. A pass-through that doesn&apos;t hold up to good-faith documentation
                review can expose the GC to disqualification, clawback, or debarment risk on future bids.
              </p>
              <p>
                Steinert Brothers participates as a performing sub. We manage the FFE scope from specification review
                through final closeout. Our involvement is documentable at every stage, because we actually do
                the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services 2×2 ── */}
      <section className="py-20" style={{ backgroundColor: 'var(--background)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold mb-12"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }}
          >
            What we deliver.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <div
                key={i}
                className="p-8 rounded-xl"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
                >
                  {svc.title}
                </h3>
                <p style={{ color: '#FEF3C7', fontSize: '15px', lineHeight: '1.6' }}>
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Types ── */}
      <section className="py-16" style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold mb-10"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }}
          >
            Where we work.
          </h2>
          <div className="flex flex-wrap gap-3">
            {projectTypes.map((label, i) => (
              <div
                key={i}
                className="px-5 py-3 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  color: 'var(--foreground)',
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Numbers ── */}
      <section className="py-20" style={{ backgroundColor: 'var(--background)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }}
              >
                How VetHUB credit works on a typical project.
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
                On a state-funded school project, the district sets a VetHUB participation goal as a percentage of total
                construction value. FFE is a natural scope for VetHUB-certified subs: discrete,
                documentable, and doesn&apos;t require a licensed general contractor. When Steinert Brothers holds the
                FFE subcontract, 100% of that scope counts toward the goal with a clean audit trail.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
              <div className="px-6 py-4" style={{ backgroundColor: 'var(--dark)' }}>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: 'var(--dark-muted)' }}
                >
                  Example
                </p>
                <p
                  className="text-lg font-semibold text-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  $5M Elementary School Project
                </p>
              </div>
              <div>
                {budgetRows.map((row, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center px-6 py-4"
                    style={{
                      backgroundColor: row.highlight ? '#FEF3C7' : 'var(--surface)',
                      borderTop: '1px solid var(--border)',
                    }}
                  >
                    <span className="text-sm" style={{ color: row.highlight ? '#92400E' : 'var(--muted)' }}>
                      {row.label}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{
                        color: row.highlight ? 'var(--accent)' : 'var(--foreground)',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20" style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2
              className="text-4xl font-bold mb-2"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }}
            >
              How a project runs.
            </h2>
            <p style={{ color: 'var(--muted)' }}>
              Typical timeline: 60–120 days depending on project scope.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num}>
                <div
                  className="text-6xl font-bold mb-3 leading-none"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)', opacity: 0.35 }}
                >
                  {step.num}
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }}
                >
                  {step.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.6' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section id="contact" className="py-20" style={{ backgroundColor: 'var(--dark)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-4xl font-bold mb-6 text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Get started
              </h2>
              <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--dark-muted)' }}>
                Request our capability statement or submit a project inquiry. We respond within one business day.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    content: <a href="mailto:info@steinertbros.com" className="text-white hover:underline">info@steinertbros.com</a>,
                  },
                  {
                    icon: Phone,
                    label: 'Anton Adams-Fuchs',
                    content: <a href="tel:+13194734473" className="text-white hover:underline">(319) 473-4473</a>,
                  },
                  {
                    icon: Phone,
                    label: 'Stephen Fuchs',
                    content: <a href="tel:+19414003843" className="text-white hover:underline">(941) 400-3843</a>,
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    content: (
                      <>
                        <p className="text-white">College Station, Texas</p>
                        <p className="text-sm" style={{ color: 'var(--dark-muted)' }}>Serving all of Texas</p>
                      </>
                    ),
                  },
                ].map((item, i) => (
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
            </div>

            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }}
              >
                Request a quote
              </h3>
              <ContactForm defaultProjectType="FFE Procurement" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12" style={{ backgroundColor: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3
                className="text-xl font-bold mb-4 text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Steinert Brothers
              </h3>
              <p style={{ color: 'var(--dark-muted)' }}>
                VetHUB certified, veteran-owned FFE contractor serving Texas government and educational institutions.
              </p>
              <p className="mt-2" style={{ color: 'var(--dark-muted)' }}>College Station, Texas</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2" style={{ color: 'var(--dark-muted)' }}>
                <li><a href="/#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/#certifications" className="hover:text-white transition-colors">Certifications</a></li>
                <li><a href="/ffe" className="hover:text-white transition-colors">FFE Procurement</a></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Certifications</h4>
              <ul className="space-y-2" style={{ color: 'var(--dark-muted)' }}>
                <li>✓ Texas VetHUB Certified</li>
                <li>✓ Service-Disabled Veteran Owned</li>
                <li>✓ Texas HUB Eligible</li>
              </ul>
            </div>
          </div>
          <div
            className="pt-8 text-center"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)', color: 'var(--dark-muted)' }}
          >
            <p>&copy; 2026 Steinert Brothers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
