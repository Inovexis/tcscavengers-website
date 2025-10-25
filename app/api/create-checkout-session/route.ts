import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2025-09-30.clover',
});

export async function POST(request: NextRequest) {
  try {
    const { amount, isMonthly, successUrl, cancelUrl } = await request.json();

    if (!amount || amount < 50) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: isMonthly ? 'Monthly Donation' : 'One-time Donation',
              description: 'Support Treasure Coast Scavengers',
            },
            unit_amount: amount,
            recurring: isMonthly ? { interval: 'month' } : undefined,
          },
          quantity: 1,
        },
      ],
      mode: isMonthly ? 'subscription' : 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        type: 'donation',
        isMonthly: isMonthly.toString(),
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
