export interface ShowcaseItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface CollectionItem {
  id: number;
  category: string;
  image: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}