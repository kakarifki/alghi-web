// ─── Type Definitions ───────────────────────────────────────────────────────

export type Category = 'Tech' | 'Finance' | 'Game' | 'Pop Culture' | 'Copywriting' | 'News';

export interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  publication: string;
  highlight: string;   // One-liner achievement / SEO result / objective
  link: string;        // URL to the published article
  date: string;        // e.g. "2023", "2024"
}

// ─── Constants ──────────────────────────────────────────────────────────────

export const EMAIL = 'hello@alghi.dev';  // TODO: replace with real email

export const LINKEDIN_URL = 'https://www.linkedin.com/in/taufiqalghifr/';

export const GDRIVE_PORTFOLIO_URL = 'https://drive.google.com/drive/folders/dummy-link-replace-me';  // TODO: replace with real GDrive link

// ─── Portfolio Data ──────────────────────────────────────────────────────────

export const portfolioItems: PortfolioItem[] = [
  // Tech
  {
    id: 1,
    title: 'Mengenal Metaverse: Masa Depan Internet yang Sesungguhnya',
    category: 'Tech',
    publication: 'IDN Times',
    highlight: 'Top 3 hasil pencarian Google untuk keyword "metaverse adalah" selama 6 bulan',
    link: 'https://www.idntimes.com',
    date: '2023',
  },
  {
    id: 2,
    title: 'Kriptografi Blockchain: Cara Kerja Teknologi yang Mengubah Dunia',
    category: 'Tech',
    publication: 'Kumparan',
    highlight: 'Click-through rate 8.2% — di atas rata-rata industri 3.5%',
    link: 'https://kumparan.com',
    date: '2023',
  },
  {
    id: 3,
    title: '10 AI Tools Terbaik untuk Produktivitas di 2024',
    category: 'Tech',
    publication: 'Glints Blog',
    highlight: 'Featured Snippet di Google; organic traffic naik 240% dalam sebulan',
    link: 'https://glints.com',
    date: '2024',
  },
  // Finance
  {
    id: 4,
    title: 'Cara Investasi Reksa Dana untuk Pemula: Panduan Lengkap',
    category: 'Finance',
    publication: 'OCBC NISP',
    highlight: 'Ranking #1 Google untuk keyword "investasi reksa dana pemula"',
    link: 'https://ocbc.id',
    date: '2023',
  },
  {
    id: 5,
    title: 'Inflasi dan Cara Cerdas Menghadapinya di Tahun 2024',
    category: 'Finance',
    publication: 'DBS Treasures',
    highlight: 'Dwell time rata-rata 4 menit — sinyal konten berkualitas tinggi',
    link: 'https://dbsbank.com',
    date: '2024',
  },
  {
    id: 6,
    title: 'Dollar Cost Averaging: Strategi Investasi Anti-Panik',
    category: 'Finance',
    publication: 'Stockbit Blog',
    highlight: '15.000+ pembaca unik dalam 30 hari pertama setelah publikasi',
    link: 'https://stockbit.com',
    date: '2023',
  },
  // Game
  {
    id: 7,
    title: 'Mengapa Game Indie Semakin Mendominasi Gaming Industry?',
    category: 'Game',
    publication: 'Hybrid.co.id',
    highlight: 'Artikel paling banyak di-share di sosial media bulan April 2023',
    link: 'https://hybrid.co.id',
    date: '2023',
  },
  {
    id: 8,
    title: 'Review Baldur\'s Gate 3: RPG Terbaik Dekade Ini?',
    category: 'Game',
    publication: 'GamesLoop.id',
    highlight: 'Top 5 pencarian "review baldur\'s gate 3 bahasa Indonesia"',
    link: 'https://gamesloop.id',
    date: '2023',
  },
  // Pop Culture
  {
    id: 9,
    title: 'Fenomena K-Drama: Kenapa Drama Korea Bisa Kuasai Dunia?',
    category: 'Pop Culture',
    publication: 'Fimela',
    highlight: 'Viral di Twitter; 2.000+ share organik dalam 48 jam',
    link: 'https://fimela.com',
    date: '2023',
  },
  {
    id: 10,
    title: 'Dari Meme ke Mainstream: Evolusi Humor Internet',
    category: 'Pop Culture',
    publication: 'Vice Indonesia',
    highlight: 'Featured di newsletter mingguan Vice dengan 80K+ subscriber',
    link: 'https://vice.com',
    date: '2022',
  },
  // Copywriting
  {
    id: 11,
    title: 'Landing Page Copy — Aplikasi Fintech Peer-to-Peer Lending',
    category: 'Copywriting',
    publication: 'Client Project',
    highlight: 'Conversion rate naik 34% dibanding copy sebelumnya (A/B test)',
    link: 'https://drive.google.com',
    date: '2024',
  },
  {
    id: 12,
    title: 'Email Campaign Series — E-commerce Fashion Lokal',
    category: 'Copywriting',
    publication: 'Client Project',
    highlight: 'Open rate 42% & click rate 18% — jauh di atas benchmark industri',
    link: 'https://drive.google.com',
    date: '2024',
  },
  // News
  {
    id: 13,
    title: 'Startup Unicorn Baru Indonesia: Kisah Sukses di Tengah Krisis',
    category: 'News',
    publication: 'Tempo.co',
    highlight: 'Masuk halaman utama Tempo.co selama 3 hari berturut-turut',
    link: 'https://tempo.co',
    date: '2022',
  },
];

// ─── Skills ─────────────────────────────────────────────────────────────────

export const skills = [
  { label: 'SEO Writing', color: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  { label: 'Keyword Research', color: 'bg-teal-500/15 text-teal-400 border-teal-500/30' },
  { label: 'Yoast SEO', color: 'bg-green-500/15 text-green-400 border-green-500/30' },
  { label: 'Storytelling', color: 'bg-purple-500/15 text-purple-400 border-purple-500/30' },
  { label: 'Copywriting', color: 'bg-purple-500/15 text-purple-400 border-purple-500/30' },
  { label: 'Content Strategy', color: 'bg-rose-500/15 text-rose-400 border-rose-500/30' },
  { label: 'Content Marketing', color: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30' },
  { label: 'Google Analytics', color: 'bg-orange-500/15 text-orange-400 border-orange-500/30' },
];

export const FILTER_CATEGORIES: Array<Category | 'All'> = ['All', 'Tech', 'Finance', 'Game', 'Pop Culture', 'Copywriting', 'News'];

export const CATEGORY_BADGE: Record<Category, string> = {
  'Tech': 'badge-tech',
  'Finance': 'badge-finance',
  'Game': 'badge-game',
  'Pop Culture': 'badge-pop',
  'Copywriting': 'badge-copy',
  'News': 'badge-news',
};
