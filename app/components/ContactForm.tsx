"use client"

import React, { useState } from 'react';

const PROJECT_TYPES = [
  'Schools / School Districts',
  'Higher Education',
  'Government / State Agency',
  'Parks & Recreation',
  'FFE Procurement',
  'Other',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactFormProps {
  defaultProjectType?: string;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

interface Fields {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const labelCss: React.CSSProperties = {
  display: 'block',
  fontSize: '11px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: 'var(--muted)',
  marginBottom: '5px',
};

const errorCss: React.CSSProperties = {
  color: '#DC2626',
  fontSize: '12px',
  marginTop: '4px',
};

function fieldCss(hasError: boolean): React.CSSProperties {
  return {
    border: `1px solid ${hasError ? '#DC2626' : 'var(--border)'}`,
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
  };
}

const baseInputClass =
  'w-full px-3.5 py-2.5 rounded-lg text-[15px] outline-none transition-colors';

export default function ContactForm({ defaultProjectType = '' }: ContactFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [fields, setFields] = useState<Fields>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: defaultProjectType,
    message: '',
  });

  function update(field: keyof Fields) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setFields((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };
  }

  function validate(): Partial<Record<keyof Fields, string>> {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) e.name = 'Required';
    if (!fields.company.trim()) e.company = 'Required';
    if (!fields.email.trim()) e.email = 'Required';
    else if (!EMAIL_RE.test(fields.email)) e.email = 'Enter a valid email address';
    if (!fields.projectType) e.projectType = 'Required';
    if (!fields.message.trim()) e.message = 'Required';
    return e;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitState('loading');

    const data = new FormData();
    data.set('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '');
    data.set('subject', `New inquiry from ${fields.company}: ${fields.projectType}`);
    data.set('from_name', 'Steinert Brothers Website');
    data.set('name', fields.name);
    data.set('company', fields.company);
    data.set('email', fields.email);
    if (fields.phone) data.set('phone', fields.phone);
    data.set('project_type', fields.projectType);
    data.set('message', fields.message);
    // honeypot: must remain unchecked
    data.set('botcheck', '');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setSubmitState('success');
      } else {
        setSubmitState('error');
      }
    } catch {
      setSubmitState('error');
    }
  }

  if (submitState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: '#D1FAE5' }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#059669"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p
          className="text-lg font-semibold mb-1"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }}
        >
          Message received.
        </p>
        <p style={{ color: 'var(--muted)' }}>We&apos;ll respond within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* honeypot: hidden from humans */}
      <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" style={labelCss}>Name</label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={update('name')}
            className={baseInputClass}
            style={fieldCss(!!errors.name)}
            placeholder="Jane Smith"
          />
          {errors.name && <p style={errorCss}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-company" style={labelCss}>Company / Organization</label>
          <input
            id="cf-company"
            type="text"
            autoComplete="organization"
            value={fields.company}
            onChange={update('company')}
            className={baseInputClass}
            style={fieldCss(!!errors.company)}
            placeholder="Acme Construction"
          />
          {errors.company && <p style={errorCss}>{errors.company}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-email" style={labelCss}>Email</label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={update('email')}
            className={baseInputClass}
            style={fieldCss(!!errors.email)}
            placeholder="jane@example.com"
          />
          {errors.email && <p style={errorCss}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="cf-phone" style={labelCss}>
            Phone{' '}
            <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
              (optional)
            </span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={update('phone')}
            className={baseInputClass}
            style={fieldCss(false)}
            placeholder="(555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-project-type" style={labelCss}>Project Type</label>
        <select
          id="cf-project-type"
          value={fields.projectType}
          onChange={update('projectType')}
          className={baseInputClass}
          style={fieldCss(!!errors.projectType)}
        >
          <option value="">Select a project type…</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.projectType && <p style={errorCss}>{errors.projectType}</p>}
      </div>

      <div>
        <label htmlFor="cf-message" style={labelCss}>Message</label>
        <textarea
          id="cf-message"
          rows={5}
          value={fields.message}
          onChange={update('message')}
          className={baseInputClass}
          style={{ ...fieldCss(!!errors.message), resize: 'vertical' }}
          placeholder="Tell us about your project, timeline, and any specific requirements…"
        />
        {errors.message && <p style={errorCss}>{errors.message}</p>}
      </div>

      {submitState === 'error' && (
        <p
          className="text-sm rounded-lg px-4 py-3"
          style={{ backgroundColor: '#FEE2E2', color: '#DC2626' }}
        >
          Something went wrong. Please email{' '}
          <a href="mailto:info@steinertbros.com" className="underline font-medium">
            info@steinertbros.com
          </a>{' '}
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={submitState === 'loading'}
        className="w-full py-3.5 rounded-lg font-semibold text-white transition-opacity disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
        style={{ backgroundColor: 'var(--accent)', fontFamily: 'var(--font-heading)' }}
      >
        {submitState === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
