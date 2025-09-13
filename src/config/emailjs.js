// EmailJS Configuration
// To set up EmailJS for sending emails:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the values below with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: "service_6js0yru", // Replace with your EmailJS service ID
  templateId: "template_cj6jgma", // Replace with your EmailJS template ID
  publicKey: "5lYEaGpogQ0S8iulR", // Replace with your EmailJS public key
};

// Example EmailJS template variables that should be configured in your EmailJS template:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{message}} - Message content
// {{to_email}} - Recipient email (info@hotforgedbolts.com)
// {{reply_to}} - Reply-to email address

// Sample EmailJS template content:
// Subject: New Contact Form Submission from {{from_name}}
//
// Hello,
//
// You have received a new message from your website contact form:
//
// Name: {{from_name}}
// Email: {{from_email}}
//
// Message:
// {{message}}
//
// Please reply to: {{reply_to}}
//
// Best regards,
// Hot Forged Bolts Website
