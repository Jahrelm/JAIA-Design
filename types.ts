// Fix: Added React import to resolve React.ReactNode namespace error in a .ts file
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Speaker {
  name: string;
  role: string;
  image: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}