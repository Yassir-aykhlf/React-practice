export const PRICING_DATA = [
  {
    id: 'plan_basic',
    title: 'Basic',
    price: 12,
    features: [
      '10 Form Submissions per Month',
      'Basic Form Fields',
      'Email Notifications',
      'Community Support',
    ],
    isFeatured: false,
  },
  {
    id: 'plan_pro',
    title: 'Pro',
    price: 25,
    features: [
      'Unlimited Form Submissions',
      'All Basic Features',
      'File Uploads & Webhooks',
      'Data Export',
      'Priority Email Support',
    ],
    isFeatured: true,
  },
  {
    id: 'plan_enterprise',
    title: 'Enterprise',
    price: 'Custom',
    features: [
      'All Pro Features',
      'Dedicated Account Manager',
      'Custom Integrations',
      '24/7 Phone Support',
      'Guaranteed SLAs',
    ],
    isFeatured: false,
  },
];