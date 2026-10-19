// Company facts and switches. Every value here was verified against the two existing Final Choice
// websites (foreign worker site and maid site). Items marked [CONFIRM] are listed in CONFIRMATIONS.md.
export const site = {
  company: {
    legalName: 'Agensi Pekerjaan Final Choice Sdn Bhd',
    brandName: 'Final Choice',
    registrationNo: '201201028954 (1013441-H)',
    licence: 'JTKSM 483 (Category C)',
    email: 'apfinalchoice@gmail.com',
    address: {
      street: 'No. 58, Jalan Mutiara Barat 6, Taman Mutiara Barat',
      postcode: '56000',
      city: 'Kuala Lumpur',
      state: 'Wilayah Persekutuan Kuala Lumpur',
      country: 'MY',
    },
    serviceAreas: ['Kuala Lumpur', 'Selangor'], // [CONFIRM] stated on the maid site; the foreign worker site says "across Malaysia"
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=No.+58+Jalan+Mutiara+Barat+6+Taman+Mutiara+Barat+56000+Kuala+Lumpur',
    hours: [
      { key: 'weekdays', opens: '09:00', closes: '18:00', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
      { key: 'saturday', opens: '09:00', closes: '13:00', days: ['Saturday'] },
    ],
  },
  // Two enquiry lines, as instructed: foreign worker enquiries and maid enquiries. [CONFIRM] both numbers
  contact: {
    consultantName: 'Yuki',
    fw: { display: '013-377 3333', wa: '60133773333' },
    maid: { display: '018-377 3333', wa: '60183773333' },
  },
  social: { facebook: '', instagram: '', tiktok: '', googleBusinessProfile: '' },
  // Existing maid biodata directory, linked instead of rebuilt.
  externalBiodata: 'https://yukisph88.github.io/final-choice-maid-agency/en/maids/',
  existingFwSite: 'https://yukisph88.github.io/final-choice-foreign-worker/',
  seo: {
    // Keep false until the final domain is confirmed. While false: noindex on every page and robots.txt blocks crawling.
    indexing: false,
    googleSiteVerification: '',
    defaultOgImage: 'images/og-image.jpg',
    privacyPolicyApproved: false,
  },
  // Optional free form endpoint (e.g. Web3Forms). The access key is public by design. Empty = WhatsApp hand-off only.
  forms: { endpoint: '', accessKey: '' },
} as const;

export type Track = 'fw' | 'maid';
