import { RitualUseItem, FAQItem } from '../types';

export const BRAND_DATA = {
  name: "DEVGANGA AMRIT",
  tagline: "Sacred Ganga Jal from Devprayag Sangam",
  subheading: "Sacred Ganga Jal from Devprayag Sangam",
  description: "A carefully presented expression of India's timeless spiritual tradition, created for moments of पूजा, श्रद्धा and ritual.",
  eyebrow: "FROM THE SACRED CONFLUENCE OF DEVPRAYAG",
  price: 299,
  mrp: 349,
  volume: "250 ml",
  status: "COMING SOON",
  contactEmail: "devgangaamrit@gmail.com",
  phone: "+91 96433 45474",
  location: "Devprayag, Tehri Garhwal, Uttarakhand, India",
  pinCode: "249301",
  disclaimerUsage: "FOR RELIGIOUS & RITUAL USE ONLY",
  disclaimerSafety: "NOT FOR DRINKING",
};

export const RITUAL_USES: RitualUseItem[] = [
  {
    id: "puja",
    title: "Daily & Special Puja",
    sanskritName: "पूजा एवं अर्चा",
    description: "Ideal for shuddhi (purification) of the home mandir, sankalpa ceremonies, and daily offering to deities.",
    iconName: "Sparkles",
    significance: "Brings the tranquil sanctity of the Himalayan confluence to your home sanctum."
  },
  {
    id: "abhishek",
    title: "Abhishek",
    sanskritName: "रुद्राभिषेक एवं अभिषेक",
    description: "Consecration of the Shiva Lingam, Shaligram, and temple murthis during Somvar, Pradosham, and Shivratri.",
    iconName: "Droplets",
    significance: "Traditional bathing of the sacred deities with water gathered from the origin."
  },
  {
    id: "havan",
    title: "Havan & Yagya",
    sanskritName: "हवन एवं यज्ञ",
    description: "Prokshana (sacred sprinkling) of samagri, perimeter sanctification, and concluding purnahuti rites.",
    iconName: "Flame",
    significance: "Essential ceremonial purification for Vedic home fire rituals."
  },
  {
    id: "tarpan",
    title: "Tarpan",
    sanskritName: "तर्पण",
    description: "Offering oblations with reverent devotion during Amavasya, Solar events, and morning rituals.",
    iconName: "Sun",
    significance: "Sacred water offerings dedicated with reverence."
  },
  {
    id: "shraddh",
    title: "Shraddh Rites",
    sanskritName: "श्राद्ध एवं पितृ कर्म",
    description: "Pinda daan and ancestor offerings during Pitru Paksha and sacred remembrance memorials.",
    iconName: "HeartHandshake",
    significance: "Traditional ritual medium for honoring ancestral lineage."
  },
  {
    id: "festivals",
    title: "Festivals & Special Occasions",
    sanskritName: "पर्व एवं गृह प्रवेश",
    description: "Griha Pravesh (housewarming), Ganga Dussehra, Diwali Laxmi Puja, and auspicious life milestones.",
    iconName: "Flower2",
    significance: "Bestows the sacred aura of the Ganga on new beginnings and holy days."
  }
];

export const PRESENTATION_STEPS = [
  {
    step: "01",
    tag: "SOURCE",
    title: "Devprayag Sangam",
    description: "Drawn directly at Devprayag, Tehri Garhwal, Uttarakhand — where the turquoise waters of the Alaknanda meet the emerald Bhagirathi to form the river known as Ganga.",
    detail: "Collected with due reverence at the first sangam of the sacred river."
  },
  {
    step: "02",
    tag: "PRESERVE",
    title: "Careful Handling & Sealed Presentation",
    description: "Handled with dignified ritual hygiene. Transferred into a pristine 250 ml glass presentation and sealed with airtight safety to preserve dignity and sanctity.",
    detail: "A tamper-evident golden seal guarantees uncompromised ritual integrity."
  },
  {
    step: "03",
    tag: "DELIVER",
    title: "Respectfully Presented for Rituals",
    description: "Packaged securely and dispatched respectfully across India, meant exclusively for your personal prayer room, family ceremonies, and temple services.",
    detail: "Strictly for religious and ritual use. Never for consumption."
  }
];

export const TRUST_POINTS = [
  {
    label: "ORIGIN",
    value: "Devprayag, Uttarakhand",
    subtext: "Confluence of Bhagirathi & Alaknanda rivers",
    verified: true
  },
  {
    label: "PURPOSE",
    value: "Religious & Ritual Use Only",
    subtext: "Explicitly designated; not for drinking",
    verified: true
  },
  {
    label: "FORMAT",
    value: "250 ml Sealed Presentation",
    subtext: "Aesthetic glass bottle with tamper-evident seal",
    verified: true
  },
  {
    label: "IDENTITY",
    value: "DevGanga Amrit",
    subtext: "Authentic Indian spiritual heritage brand",
    verified: true
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Where is the Ganga Jal in DevGanga Amrit sourced from?",
    answer: "DevGanga Amrit is gathered specifically from Devprayag in Tehri Garhwal, Uttarakhand. Devprayag is the sacred holy confluence where the Alaknanda and Bhagirathi rivers meet — it is at this very geographic point that the holy river officially takes the name 'Ganga'.",
    category: "origin"
  },
  {
    question: "Why is it labeled 'FOR RELIGIOUS & RITUAL USE ONLY' and 'NOT FOR DRINKING'?",
    answer: "We uphold strict honesty and consumer safety. Natural sacred waters gathered in their unaltered ritual state from natural river sangams are meant solely for puja, abhishek, yagya, tarpan, and ceremonial worship. In compliance with safety standards and transparent ethics, we explicitly state it is not intended for drinking or internal medical consumption.",
    category: "usage"
  },
  {
    question: "What is the volume and packaging of the bottle?",
    answer: "DevGanga Amrit is presented in a custom 250 ml luxury bottle, featuring an airtight gold cap and tamper-evident band to ensure that the sanctity is preserved from Devprayag until it arrives at your home mandir.",
    category: "presentation"
  },
  {
    question: "When will DevGanga Amrit be available to order?",
    answer: "DevGanga Amrit is currently in its pre-launch sample phase. By joining our pre-launch notification list, you will receive priority access when our inaugural ritual batches are released.",
    category: "availability"
  },
  {
    question: "How should I store DevGanga Amrit in my home?",
    answer: "Keep the sealed bottle in a clean, elevated, and quiet area of your home mandir or altar, away from footwear, dust, and direct prolonged sunlight. When using for rituals, use clean ritual spoons (achamani) or pour directly into an arghya patra.",
    category: "usage"
  }
];
