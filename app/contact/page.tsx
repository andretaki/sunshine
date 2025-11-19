'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

// Define schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  projectType: z.string().min(1, 'Please tell us about your project type.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      projectType: '',
      message: ''
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        form.reset();
      } else {
        // Handle error - you might want to show an error message to the user
        console.error('Form submission failed:', data.error);
        alert(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-20">
        <Card className="max-w-2xl mx-auto p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-accent" />
          </div>
          <h1 className="font-display text-4xl font-semibold mb-4">
            Thank you for reaching out!
          </h1>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            We&apos;ve received your message and will get back to you within 24 hours.
            In the meantime, feel free to explore our work or learn more about how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </Button>
            <Button
              onClick={() => window.location.href = '/work'}
              className="bg-accent hover:bg-accent/90"
            >
              View Our Work
            </Button>
          </div>
        </Card>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <div className="mb-12">
        <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">
          Let's work together.
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Fill out the form below and we&apos;ll get back to you within 24 hours.
          We&apos;re excited to learn about your project and discuss how we can help bring your vision to life.
        </p>
      </div>

      <Card className="p-8 md:p-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a project type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="logistics">Logistics & Production</SelectItem>
                      <SelectItem value="web-seo">Website + SEO Sprint</SelectItem>
                      <SelectItem value="ppc">PPC Campaigns</SelectItem>
                      <SelectItem value="systems">Systems Sprint</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project, timeline, and what you&apos;re hoping to accomplish..."
                      className="min-h-[150px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Form>
      </Card>

      {/* Additional Information */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Response Time</h3>
          <p className="text-sm text-muted-foreground">
            Typically within 24 hours
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Free Discovery Call</h3>
          <p className="text-sm text-muted-foreground">
            Let&apos;s discuss your needs
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">No Obligation</h3>
          <p className="text-sm text-muted-foreground">
            Just a friendly conversation
          </p>
        </Card>
      </div>
    </main>
  );
}
