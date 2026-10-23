import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_vyn7d25';
const PUBLIC_KEY = 'xWvR0d6huBxCsxOxl';
const PRODUCTION_HOSTS = ['www.sweetcuteicecream.com', 'sweetcuteicecream.com'];

// Only the live site emails the owner. Vercel previews and local dev log the
// email to the console instead. Resolves to whether an email was sent.
export function sendEmail(
  templateId: string,
  params: Record<string, unknown>,
): Promise<boolean> {
  if (!PRODUCTION_HOSTS.includes(window.location.hostname)) {
    console.info(`Email not sent (${templateId}):`, params);
    return Promise.resolve(false);
  }
  return emailjs
    .send(SERVICE_ID, templateId, params, { publicKey: PUBLIC_KEY })
    .then(() => true);
}
