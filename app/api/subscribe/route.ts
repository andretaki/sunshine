import { NextResponse } from 'next/server';
import { z } from 'zod';

const subscribeSchema = z.object({
  type: z.enum(['newsletter', 'sms', 'glow-notes', 'guide', 'waitlist']),
  email: z.string().email().optional(),
  phone: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = subscribeSchema.parse(body);

    // TODO: wire to real email/SMS provider (Resend, Postmark, Twilio, etc.)
    console.log('Subscription received:', data);

    return NextResponse.json({ success: true, message: 'Thanks for joining.' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: 'Invalid data' }, { status: 400 });
    }

    console.error('Subscription error:', error);
    return NextResponse.json({ success: false, error: 'Unable to subscribe' }, { status: 500 });
  }
}
