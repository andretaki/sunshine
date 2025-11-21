import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/db';
import { contacts } from '@/db/schema';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  topic: z.string().min(1, 'Please select a topic.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Save to database
    await db.insert(contacts).values({
      name: validatedData.name,
      email: validatedData.email,
      topic: validatedData.topic,
      message: validatedData.message,
    });

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_INBOX || process.env.RESEND_TO || process.env.SEND_TO_EMAIL;

    if (apiKey && toEmail) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
          'User-Agent': 'sunshine-site',
        },
        body: JSON.stringify({
          from: 'Sunshine Contact <contact@thesunshineeffect.com>',
          to: [toEmail],
          subject: `New Contact: ${validatedData.topic}`,
          reply_to: validatedData.email,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Topic:</strong> ${validatedData.topic}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message}</p>
          `,
          text: [
            'New Contact Form Submission',
            `Name: ${validatedData.name}`,
            `Email: ${validatedData.email}`,
            `Topic: ${validatedData.topic}`,
            'Message:',
            validatedData.message,
          ].join('\n'),
        }),
      });
    } else {
      console.log('Contact form submission (email not configured):', validatedData);
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Invalid form data', details: error.issues },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
