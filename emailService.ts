import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: string;
}

export interface EmailResult {
  success: boolean;
  message: string;
  isPlaceholderMode?: boolean;
}

// Configuration options with environment variable fallbacks
const metaEnv = (import.meta as any).env || {};

export const EMAILJS_CONFIG = {
  serviceId: metaEnv.VITE_EMAILJS_SERVICE_ID || "service_xengkh8",
  templateId: metaEnv.VITE_EMAILJS_TEMPLATE_ID || "template_k9f0g7t",
  publicKey: metaEnv.VITE_EMAILJS_PUBLIC_KEY || "3E1BZ1V9bDcYUmU5B",
  recipientEmail: 'anjalidhiman501@gmail.com',
};

/**
 * Validates the contact form inputs
 */
export function validateContactForm(data: ContactFormData): { valid: boolean; errors: Partial<Record<keyof ContactFormData, string>> } {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please enter a message containing at least 10 characters.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Sends a contact message via EmailJS to anjalidhiman501@gmail.com
 */
export async function sendContactEmail(formData: ContactFormData): Promise<EmailResult> {
  // 1. Client-side input validation
  const validation = validateContactForm(formData);
  if (!validation.valid) {
    const firstError = Object.values(validation.errors)[0] || 'Invalid form data.';
    return {
      success: false,
      message: firstError,
    };
  }

  // 2. Prepare EmailJS template parameter payload
  const templateParams = {
    to_email: EMAILJS_CONFIG.recipientEmail,
    to_name: 'Anjali Rani',
    from_name: formData.name.trim(),
    from_email: formData.email.trim(),
    reply_to: formData.email.trim(),
    subject: formData.subject.trim() || `Inquiry from ${formData.name}`,
    collaboration_type: formData.type || 'General Inquiry',
    message: formData.message.trim(),
    sent_at: new Date().toLocaleString(),
  };

  const publicKey = EMAILJS_CONFIG.publicKey;
  const isPlaceholderKey = !publicKey || publicKey === 'YOUR_EMAILJS_PUBLIC_KEY' || publicKey === 'YOUR_PUBLIC_KEY';

  // 3. Handle actual EmailJS API dispatch if key is provided
  if (!isPlaceholderKey) {
    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200 || response.text === 'OK') {
        return {
          success: true,
          message: `Thank you, ${formData.name}! Your message was successfully sent to Anjali (anjalidhiman501@gmail.com).`,
        };
      } else {
        throw new Error(`EmailJS responded with status: ${response.status} (${response.text})`);
      }
    } catch (error: any) {
      console.warn('EmailJS transmission failed, falling back to local server contact handler:', error);
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, recipient: EMAILJS_CONFIG.recipientEmail }),
        });
        if (res.ok) {
          const data = await res.json();
          return {
            success: true,
            message: data.message || `Thank you, ${formData.name}! Your message has been delivered to Anjali (anjalidhiman501@gmail.com).`,
          };
        }
      } catch (fallbackError) {
        console.error('Local contact fallback error:', fallbackError);
      }

      return {
        success: false,
        message: error?.text || error?.message || 'Failed to dispatch message. Please email directly to anjalidhiman501@gmail.com.',
      };
    }
  }

  // 4. Fallback / Placeholder mode when VITE_EMAILJS_PUBLIC_KEY is not yet configured in environment
  console.info('[EmailJS Service] Form submission captured for recipient anjalidhiman501@gmail.com:', templateParams);

  // Send request to local express endpoint as secondary backup/logger
  try {
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, recipient: EMAILJS_CONFIG.recipientEmail }),
    });
  } catch (err) {
    // Ignore secondary endpoint logging errors
  }

  return {
    success: true,
    isPlaceholderMode: true,
    message: `Thank you, ${formData.name}! Your message has been prepared for delivery to Anjali Rani (anjalidhiman501@gmail.com). Note: EmailJS public key can be configured in .env as VITE_EMAILJS_PUBLIC_KEY.`,
  };
}
