export interface Project {
  id: string;
  title: string;
  category: 'Deep Learning' | 'Machine Learning' | 'Computer Vision' | 'NLP & Recommenders';
  subcategory: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
  imageUrl: string;
  imageAlt: string;
  metrics: {
    label: string;
    value: string;
  }[];
  architecture: string;
  keyFeatures: string[];
  modelType: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    experience: string;
    badge: string;
    description: string;
  }[];
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  type: 'education' | 'certification' | 'milestone';
  description: string;
  highlights: string[];
  badge?: string;
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  techTags: string[];
}
