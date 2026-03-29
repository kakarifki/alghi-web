import { Category, PortfolioItem, CategoryInfo } from './types';

import { techData } from './categories/tech';
import { gameData } from './categories/game';
import { popCultureData } from './categories/popCulture';
import { newsData } from './categories/news';
import { spGroupData } from './categories/spGroup';
import { fluimucilData } from './categories/fluimucil';
import { umcData } from './categories/umc';
import { nasavalData } from './categories/nasaval';
import { goritaxData } from './categories/goritax';

export * from './types';

const allCategories = [
  techData,
  gameData,
  popCultureData,
  newsData,
  spGroupData,
  fluimucilData,
  umcData,
  nasavalData,
  goritaxData,
];

export const EMAIL = 'alghialghi23@gmail.com';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/taufiqalghifr/';

export const CATEGORY_INFO: Record<Category, CategoryInfo> = allCategories.reduce((acc, cat) => {
  acc[cat.category] = cat.info;
  return acc;
}, {} as Record<Category, CategoryInfo>);

export const CATEGORY_SUBS: Record<Category, string[]> = allCategories.reduce((acc, cat) => {
  acc[cat.category] = cat.subs;
  return acc;
}, {} as Record<Category, string[]>);

export const portfolioItems: PortfolioItem[] = allCategories.flatMap(cat => cat.items);

export const skillCategories = [
  {
    title: 'Content & Strategy',
    skills: [
      { label: 'Copywriting', color: 'bg-purple-500/15 text-purple-400 border-purple-500/30' },
      { label: 'Content Strategy', color: 'bg-rose-500/15 text-rose-400 border-rose-500/30' },
      { label: 'Content Planning', color: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
      { label: 'Editorial Planning', color: 'bg-teal-500/15 text-teal-400 border-teal-500/30' },
    ]
  },
  {
    title: 'Management & Research',
    skills: [
      { label: 'Creative Project Management', color: 'bg-green-500/15 text-green-400 border-green-500/30' },
      { label: 'Research & Insight Analysis', color: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30' },
      { label: 'Project Coordination', color: 'bg-orange-500/15 text-orange-400 border-orange-500/30' },
    ]
  }
];

export const FILTER_CATEGORIES: Array<Category | 'All'> = ['All', 'Tech', 'Game', 'Pop Culture', 'News'];

export const STRATEGIST_CATEGORIES: Array<Category | 'All'> = ['All', 'SP Group', 'Fluimucil', 'United Medicare Centre', 'Nasaval', 'Goritax'];

export const WRITING_CATEGORIES: Array<Category | 'All'> = ['All', 'Pop Culture', 'Game', 'Tech', 'News'];

export const CATEGORY_BADGE: Record<Category, string> = {
  'Tech': 'badge-tech',
  'Game': 'badge-game',
  'Pop Culture': 'badge-pop',
  'News': 'badge-news',
  'SP Group': 'badge-tech',
  'Fluimucil': 'badge-finance',
  'United Medicare Centre': 'badge-pop',
  'Nasaval': 'badge-news',
  'Goritax': 'badge-game',
};
