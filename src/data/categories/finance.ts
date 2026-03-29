import { CategoryData } from '../types';

export const financeData: CategoryData = {
  category: 'Goritax',
  info: {
    tagline: 'Konten finansial yang mendidik, bukan mengintimidasi.',
    description: 'Dari panduan investasi pemula hingga analisis makro ekonomi, Alghi menyederhanakan konsep keuangan yang kompleks menjadi konten yang actionable dan mudah dicerna.',
    links: [
      { label: 'OCBC NISP', url: 'https://www.ocbc.id/id/article/2021/08/30/investasi-reksa-dana' },
      { label: 'DBS Treasures', url: 'https://www.dbs.id/treasures' },
      { label: 'Stockbit Blog', url: 'https://stockbit.com/#/' },
    ],
  },
  subs: ['Investing', 'Personal Goritax', 'Economics'],
  items: [
    {
      id: 400, // Make sure ID is unique or let it be the same, but portfolioItems IDs are listed as 4, 5, 6
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
      subCategory: 'Personal Goritax',
      publication: 'DBS Treasures',
      highlight: 'Dwell time rata-rata 4 menit — sinyal konten berkualitas tinggi',
      link: 'https://dbsbank.com',
      date: '2024',
    },
  ],
};
