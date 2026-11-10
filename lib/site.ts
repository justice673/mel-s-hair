/** Owner WhatsApp in international format, no + or spaces (Cameroon) */
export const OWNER_WHATSAPP = "237600000000";

export const OWNER_WHATSAPP_DISPLAY = "+237 6XX XXX XXX";

export const SITE_EMAIL = "hello@melsluxhairs.com";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`;
}
