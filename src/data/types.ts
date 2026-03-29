export type Category = 'Tech' | 'Game' | 'Pop Culture' | 'News' | 'SP Group' | 'Fluimucil' | 'United Medicare Centre' | 'Nasaval' | 'Goritax';

export interface PortfolioItem {
  id: number;
  type?: 'article' | 'instagram';
  title: string;
  category: Category;
  subCategory: string;   // Must match one of the strings in CATEGORY_SUBS[category]
  publication: string;
  highlight: string;     // One-liner achievement / SEO result / objective
  link: string;          // URL to the published article
  date: string;          // e.g. "2023", "2024"
  image?: string;
  caption?: string;
}

export interface CategoryLink {
  label: string;
  url: string;
}

export interface CategoryInfo {
  tagline: string;
  description: string;
  links: CategoryLink[];
}

export interface CategoryData {
  category: Category;
  info: CategoryInfo;
  subs: string[];
  items: PortfolioItem[];
}
