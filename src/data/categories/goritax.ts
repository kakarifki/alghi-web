import { CategoryData } from '../types';

export const goritaxData: CategoryData = {
  category: 'Goritax',
  info: {
    tagline: 'Tax & Finance Made Simple',
    description: 'Simplifying complex tax regulations into digestible content for everyday users. Dari panduan investasi pemula hingga analisis makro ekonomi, menyederhanakan konsep keuangan yang kompleks menjadi konten yang actionable.',
    links: [
      { label: 'OCBC NISP', url: 'https://www.ocbc.id/id/article/2021/08/30/investasi-reksa-dana' },
      { label: 'DBS Treasures', url: 'https://www.dbs.id/treasures' },
      { label: 'Stockbit Blog', url: 'https://stockbit.com/#/' },
    ],
  },
  subs: ['Blog', 'Newsletter', 'Investing', 'Personal Finance', 'Economics'],
  items: [
    {
      id: 105,
      title: 'Tax Planning for Freelancers',
      category: 'Goritax',
      subCategory: 'Blog',
      publication: 'Goritax Insight',
      highlight: 'Shared over 500 times across social media platforms.',
      link: '#',
      date: '2024',
    },
    {
      id: 400,
      title: 'Cara Investasi Reksa Dana untuk Pemula: Panduan Lengkap',
      category: 'Goritax',
      subCategory: 'Investing',
      publication: 'OCBC NISP',
      highlight: 'Ranking #1 Google untuk keyword "investasi reksa dana pemula"',
      link: 'https://ocbc.id',
      date: '2023',
    },
    {
      id: 500,
      title: 'Dollar Cost Averaging: Strategi Investasi Anti-Panik',
      category: 'Goritax',
      subCategory: 'Investing',
      publication: 'Stockbit Blog',
      highlight: '15.000+ pembaca unik dalam 30 hari pertama setelah publikasi',
      link: 'https://stockbit.com',
      date: '2023',
    },
    {
      id: 600,
      title: 'Inflasi dan Cara Cerdas Menghadapinya di Tahun 2024',
      category: 'Goritax',
      subCategory: 'Personal Finance',
      publication: 'DBS Treasures',
      highlight: 'Dwell time rata-rata 4 menit — sinyal konten berkualitas tinggi',
      link: 'https://dbsbank.com',
      date: '2024',
    },
  ],
};
