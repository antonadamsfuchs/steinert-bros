"use client"

import React, { useState } from 'react';
import { Menu, X, CheckCircle, Building2, Shield, Award, Users, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

export default function SteinertBrosWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', organization: '', projectType: '', message: '' });
  };

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    {
      icon: Building2,
      title: 'Educational Facilities',
      description: 'Complete FFE solutions for K-12 schools, universities, and training facilities. From classroom furniture to lab equipment.'
    },
    {
      icon: Shield,
      title: 'Government Projects',
      description: 'VetHUB certified contractor specializing in state, local government, and educational institution FFE procurement and installation.'
    },
    {
      icon: Users,
      title: 'Parks & Recreation',
      description: 'Outdoor furniture, playground equipment, and facility furnishings for Texas parks and recreation departments.'
    },
    {
      icon: Award,
      title: 'Project Management',
      description: 'End-to-end FFE coordination: vendor sourcing, bidding, procurement, delivery scheduling, and installation oversight.'
    }
  ];

  const certifications = [
    {
      title: 'Texas VetHUB Certified',
      description: 'State of Texas VetHUB certification providing competitive advantages for state contracting opportunities and good-faith effort goals.',
      highlight: true
    },
    {
      title: 'Service-Disabled Veteran Owned',
      description: 'Navy veteran owned business with deep commitment to quality, integrity, and mission success.',
      highlight: true
    },
    {
      title: 'College Station Based',
      description: 'Local knowledge of Texas procurement regulations, vendor relationships, and regional project requirements.',
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-slate-900">Steinert Brothers</span>
              <span className="ml-3 text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">VetHUB Certified</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate-600 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center gap-3 mb-6 flex-wrap">
              <span className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                <Shield size={16} /> VetHUB Certified
              </span>
              <span className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                <Award size={16} /> Veteran Owned
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              FFE Contracting Solutions for Texas Government & Education
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Service-disabled veteran owned, VetHUB certified contractor specializing in furniture, fixtures, and equipment procurement for schools, parks, and government facilities across Texas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Request Quote <ChevronRight size={20} />
              </a>
              <a
                href="#certifications"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                View Certifications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive FFE solutions from initial planning through final installation, backed by VetHUB certification and veteran leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our FFE Process</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Planning', desc: 'Scope review, budget analysis, timeline development' },
                { step: '02', title: 'Sourcing', desc: 'Vendor identification, competitive bidding, compliance verification' },
                { step: '03', title: 'Procurement', desc: 'Purchase order management, quality assurance, delivery coordination' },
                { step: '04', title: 'Installation', desc: 'Site coordination, installation oversight, final acceptance' }
              ].map((phase, index) => (
                <div key={index} className="relative">
                  <div className="text-5xl font-bold text-blue-200 mb-2">{phase.step}</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{phase.title}</h4>
                  <p className="text-slate-600 text-sm">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">About Steinert Brothers</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded by half-brothers Anton Adams-Fuchs and Stephen Fuchs, Steinert Brothers honors our Lithuanian grandmother's family name while delivering exceptional FFE contracting services across Texas.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Stephen, a Navy disabled veteran, brings extensive experience as Facilities and Development Manager at TEEX, overseeing major expansion projects. Anton contributes architectural expertise and project management experience from decades in design and construction.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Based in College Station, Texas, we combine veteran leadership, technical expertise, and VetHUB certification to serve government and educational clients throughout Texas with integrity and excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={24} />
                  <span className="font-semibold text-slate-900">Veteran Owned</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={24} />
                  <span className="font-semibold text-slate-900">VetHUB Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={24} />
                  <span className="font-semibold text-slate-900">Texas Based</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Steinert Brothers?</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'VetHUB Advantage',
                    description: 'Texas state VetHUB certification provides competitive edge for state contracts and helps agencies meet good-faith effort goals.'
                  },
                  {
                    title: 'Veteran Leadership',
                    description: 'Military-trained discipline, mission focus, and commitment to excellence in every project.'
                  },
                  {
                    title: 'Texas Expertise',
                    description: 'Deep knowledge of state procurement requirements, local vendors, and regional project demands.'
                  },
                  {
                    title: 'Proven Experience',
                    description: 'Combined decades managing large-scale facility projects for government and educational institutions, including TEEX expansion projects.'
                  }
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Certifications & Qualifications</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our certifications provide competitive advantages for Texas state contracting and demonstrate our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 ${
                  cert.highlight
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl'
                    : 'bg-slate-50 text-slate-900'
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{cert.title}</h3>
                <p className={cert.highlight ? 'text-blue-100' : 'text-slate-600'}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6">Texas State Contracting Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-blue-400">State & Educational</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Texas VetHUB certification</li>
                  <li>• Service-disabled veteran preference</li>
                  <li>• Good-faith effort goals support</li>
                  <li>• State agency priority access</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-blue-400">Local Government</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Texas universities and colleges</li>
                  <li>• K-12 school districts</li>
                  <li>• County and city contracts</li>
                  <li>• Parks and recreation departments</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-slate-300 text-sm">
                VetHUB (Veteran Heroes United in Business) is administered by the Texas Comptroller's office and provides certification for service-disabled veteran owned businesses to help state agencies meet procurement goals for historically underutilized businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Get Started</h2>
              <p className="text-lg text-slate-600 mb-8">
                Ready to discuss your FFE project? Contact us for a consultation and quote. We serve Texas state agencies, educational institutions, and local government throughout Texas.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <a href="mailto:info@steinertbros.com" className="text-blue-600 hover:underline">
                      info@steinertbros.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Contact</h3>
                    <div className="space-y-1">
                      <div>
                        <span className="text-slate-600 text-sm">Anton Adams-Fuchs</span>
                        <a href="tel:+13194734473" className="block text-blue-600 hover:underline">
                          (319) 473-4473
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-600 text-sm">Stephen Fuchs</span>
                        <a href="tel:+19414003843" className="block text-blue-600 hover:underline">
                          (941) 400-3843
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Location</h3>
                    <p className="text-slate-600">College Station, Texas</p>
                    <p className="text-slate-600 text-sm">Serving all of Texas</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h4 className="font-bold text-slate-900 mb-2">VetHUB Certified</h4>
                <p className="text-slate-600">
                  Request our VetHUB certification documents with your quote inquiry for Texas state contracting opportunities.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h3>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdHxsodySlQKesk4sClLAUS0XvT7W-9IsoT092hAOf9Tt7jMw/viewform?embedded=true" 
                width="100%" 
                height="1200" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="border-0"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Steinert Brothers</h3>
              <p className="text-slate-400">
                VetHUB certified, veteran-owned FFE contractor serving Texas government and educational institutions.
              </p>
              <p className="text-slate-400 mt-2">
                College Station, Texas
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#certifications" className="hover:text-white transition-colors">Certifications</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Certifications</h4>
              <ul className="space-y-2 text-slate-400">
                <li>✓ Texas VetHUB Certified</li>
                <li>✓ Service-Disabled Veteran Owned</li>
                <li>✓ Texas HUB Eligible</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2026 Steinert Brothers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}