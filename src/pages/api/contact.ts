import type { APIRoute } from 'astro';
import { SITE } from '@/lib/site';

// Server-rendered — the rest of the site is static (see astro.config.mjs).
export const prerender = false;

interface ContactPayload {
  name?: string;
  organization?: string;
  email?: string;
  title?: string;
  phone?: string;
  facilityType?: string;
  areaOfInterest?: string | string[];
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 2000;

function clamp(value: unknown): string {
  return typeof value === 'string' ? value.trim().slice(0, MAX_FIELD_LENGTH) : '';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export const POST: APIRoute = async ({ request }) => {
  let raw: ContactPayload;
  try {
    raw = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
  }

  const body = {
    name: clamp(raw.name),
    organization: clamp(raw.organization),
    email: clamp(raw.email),
    title: clamp(raw.title),
    phone: clamp(raw.phone),
    facilityType: clamp(raw.facilityType),
    areaOfInterest: Array.isArray(raw.areaOfInterest)
      ? raw.areaOfInterest.map((a) => clamp(a)).filter(Boolean)
      : [clamp(raw.areaOfInterest)].filter(Boolean),
    message: clamp(raw.message),
  };

  if (!body.name || !body.organization || !body.email || !EMAIL_RE.test(body.email)) {
    return new Response(JSON.stringify({ error: 'Missing or invalid required fields' }), { status: 422 });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  const fromAddress = import.meta.env.CONTACT_FROM_EMAIL || `GSS Website <noreply@${SITE.domain}>`;

  if (!apiKey) {
    // No provider configured — fail loudly server-side rather than silently pretending to send.
    console.error('[contact-form] RESEND_API_KEY is not set; submission was not delivered.', {
      name: body.name,
      organization: body.organization,
      email: body.email,
    });
    return new Response(JSON.stringify({ error: 'Email delivery is not configured' }), { status: 500 });
  }

  const rows: [string, string][] = [
    ['Name', body.name],
    ['Title', body.title || '—'],
    ['Organization', body.organization],
    ['Email', body.email],
    ['Phone', body.phone || '—'],
    ['Facility type', body.facilityType || '—'],
    ['Area of interest', body.areaOfInterest.join(', ') || '—'],
  ];

  const html = `
    <div style="font-family:sans-serif;font-size:14px;color:#0A0B0C">
      <h2 style="margin:0 0 16px">New consultation request</h2>
      <table cellpadding="6" cellspacing="0">
        ${rows.map(([label, value]) => `<tr><td style="color:#5b6167;vertical-align:top"><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`).join('')}
      </table>
      <p style="margin-top:16px"><strong>Message</strong><br>${escapeHtml(body.message || '—').replace(/\n/g, '<br>')}</p>
    </div>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [SITE.email],
        reply_to: body.email,
        subject: `Consultation request — ${body.organization}`,
        html,
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      console.error('[contact-form] Resend API error:', res.status, errText);
      return new Response(JSON.stringify({ error: 'Email delivery failed' }), { status: 502 });
    }
  } catch (err) {
    console.error('[contact-form] Failed to reach Resend:', err);
    return new Response(JSON.stringify({ error: 'Email delivery failed' }), { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
