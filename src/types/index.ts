// Common types used across the application
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export interface NavigationItem {
  href: string;
  label: string;
  external?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  social: {
    linkedin?: string;
    medium?: string;
    behance?: string;
    portfolio?: string;
  };
}

export interface PageProps {
  children?: React.ReactNode;
  className?: string;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
