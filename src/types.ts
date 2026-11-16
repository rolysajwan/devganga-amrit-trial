export interface RitualUseItem {
  id: string;
  title: string;
  sanskritName: string;
  description: string;
  iconName: string;
  significance: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'origin' | 'usage' | 'presentation' | 'availability';
}

export interface PreLaunchSubscriber {
  name: string;
  email: string;
  phone?: string;
  ritualInterest?: string;
}
