// ─── Type Definitions ───────────────────────────────────────────────────────

export type Category = 'Tech' | 'Finance' | 'Game' | 'Pop Culture' | 'Copywriting' | 'News';

export interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  subCategory: string;   // Must match one of the strings in CATEGORY_SUBS[category]
  publication: string;
  highlight: string;     // One-liner achievement / SEO result / objective
  link: string;          // URL to the published article
  date: string;          // e.g. "2023", "2024"
}

// ─── Constants ──────────────────────────────────────────────────────────────

export const EMAIL = 'hello@alghi.dev';  // TODO: replace with real email

export const LINKEDIN_URL = 'https://www.linkedin.com/in/taufiqalghifr/';

export const GDRIVE_PORTFOLIO_URL = 'https://drive.google.com/drive/folders/dummy-link-replace-me';  // TODO: replace with real GDrive link

// ─── Category Info ────────────────────────────────────────────────────────────
//
// Shown as a panel when a category filter is selected.
// - tagline   : short punchy one-liner
// - description : 1-2 sentences about Alghi's work in this category
// - links     : clickable navigation links (publications, profiles, etc.)
//   → set url to '#' for links you haven't filled yet

export interface CategoryLink {
  label: string;
  url: string;
}

export interface CategoryInfo {
  tagline: string;
  description: string;
  links: CategoryLink[];
}

export const CATEGORY_INFO: Record<Category, CategoryInfo> = {
  'Tech': {
    tagline: 'Dari AI sampai blockchain — teknologi yang mudah dipahami.',
    description:
      'Alghi menulis konten teknologi yang menjembatani jargon teknis dan pembaca umum. ' +
      'Fokus pada topik AI, blockchain, dan tren digital yang sedang membentuk masa depan.',
    links: [
      { label: 'IDN Times',   url: 'https://www.idntimes.com' },   // TODO: replace with article-specific link
      { label: 'Kumparan',    url: 'https://kumparan.com' },
      { label: 'Glints Blog', url: 'https://glints.com/id/lowongan/blog/' },
    ],
  },
  'Finance': {
    tagline: 'Konten finansial yang mendidik, bukan mengintimidasi.',
    description:
      'Dari panduan investasi pemula hingga analisis makro ekonomi, Alghi menyederhanakan ' +
      'konsep keuangan yang kompleks menjadi konten yang actionable dan mudah dicerna.',
    links: [
      { label: 'OCBC NISP',    url: 'https://www.ocbc.id/id/article/2021/08/30/investasi-reksa-dana' }, // TODO
      { label: 'DBS Treasures', url: 'https://www.dbs.id/treasures' },
      { label: 'Stockbit Blog', url: 'https://stockbit.com/#/' },
    ],
  },
  'Game': {
    tagline: 'Review, insight industri, dan cerita di balik layar game.',
    description:
      'Sebagai gamer sekaligus penulis, Alghi menghadirkan ulasan yang jujur dan analisis ' +
      'industri gaming yang relevan untuk pembaca kasual maupun enthusiast.',
    links: [
      { label: 'GamesLoop.id', url: 'https://gamesloop.id' },
      { label: 'Hybrid.co.id', url: 'https://hybrid.co.id' },
    ],
  },
  'Pop Culture': {
    tagline: 'Tren, fenomena, dan cerita budaya yang mewarnai generasi kita.',
    description:
      'Dari gelombang K-Drama hingga evolusi meme internet, Alghi mengulas fenomena pop culture ' +
      'dengan sudut pandang yang segar dan berbasis data.',
    links: [
      { label: 'Fimela',         url: 'https://www.fimela.com' },
      { label: 'Vice Indonesia', url: 'https://www.vice.com/id' },
    ],
  },
  'Copywriting': {
    tagline: 'Copy yang mengkonversi — bukan sekadar terlihat bagus.',
    description:
      'Alghi mengerjakan landing page, email campaign, dan materi iklan dengan pendekatan ' +
      'berbasis data: setiap kata dipilih untuk mendorong aksi nyata dari pembaca.',
    links: [
      { label: 'Lihat Portfolio (Drive)', url: 'https://drive.google.com/drive/folders/dummy-link-replace-me' }, // TODO: replace with real GDrive
      { label: 'Hubungi Alghi',           url: 'mailto:hello@alghi.dev' }, // TODO: replace with real email
    ],
  },
  'News': {
    tagline: 'Berita bisnis dan startup yang langsung ke inti.',
    description:
      'Liputan peristiwa bisnis dan ekosistem startup Indonesia yang ditulis dengan ' +
      'gaya jurnalistik ringkas — fakta pertama, opini setelahnya.',
    links: [
      { label: 'Tempo.co', url: 'https://tempo.co' },
    ],
  },
};

// ─── Subcategory Map ─────────────────────────────────────────────────────────
//
// Define all valid subcategories for each category here.
// When adding a new item, use one of these exact strings as its `subCategory`.
// To add a new subcategory: simply add a string to the array below.

export const CATEGORY_SUBS: Record<Category, string[]> = {
  'Tech':        ['AI & Tools', 'Blockchain', 'General Tech'],
  'Finance':     ['Investing', 'Personal Finance', 'Economics'],
  'Game':        ['Review', 'Industry'],
  'Pop Culture': ['K-Drama', 'Internet Culture'],
  'Copywriting': ['Landing Page', 'Email Campaign', 'Social Media'],
  'News':        ['Startup', 'Business'],
};

// ─── Portfolio Data ──────────────────────────────────────────────────────────
//
// To add a new article:
//   1. Pick a `category` from the Category type above.
//   2. Pick a `subCategory` from CATEGORY_SUBS[category].
//   3. Fill in the rest of the fields, increment the `id`.

export const portfolioItems: PortfolioItem[] = [
  // ── Tech / AI & Tools ──────────────────────────────────────────────────────
  {
    id: 1,
    title: '10 AI Tools Terbaik untuk Produktivitas di 2024',
    category: 'Tech',
    subCategory: 'AI & Tools',
    publication: 'Glints Blog',
    highlight: 'Featured Snippet di Google; organic traffic naik 240% dalam sebulan',
    link: 'https://glints.com',
    date: '2024',
  },

  // ── Tech / Blockchain ───────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Kriptografi Blockchain: Cara Kerja Teknologi yang Mengubah Dunia',
    category: 'Tech',
    subCategory: 'Blockchain',
    publication: 'Kumparan',
    highlight: 'Click-through rate 8.2% — di atas rata-rata industri 3.5%',
    link: 'https://kumparan.com',
    date: '2023',
  },

  // ── Tech / General Tech ─────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Mengenal Metaverse: Masa Depan Internet yang Sesungguhnya',
    category: 'Tech',
    subCategory: 'General Tech',
    publication: 'IDN Times',
    highlight: 'Top 3 hasil pencarian Google untuk keyword "metaverse adalah" selama 6 bulan',
    link: 'https://www.idntimes.com',
    date: '2023',
  },

  // ── Finance / Investing ─────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Cara Investasi Reksa Dana untuk Pemula: Panduan Lengkap',
    category: 'Finance',
    subCategory: 'Investing',
    publication: 'OCBC NISP',
    highlight: 'Ranking #1 Google untuk keyword "investasi reksa dana pemula"',
    link: 'https://ocbc.id',
    date: '2023',
  },
  {
    id: 5,
    title: 'Dollar Cost Averaging: Strategi Investasi Anti-Panik',
    category: 'Finance',
    subCategory: 'Investing',
    publication: 'Stockbit Blog',
    highlight: '15.000+ pembaca unik dalam 30 hari pertama setelah publikasi',
    link: 'https://stockbit.com',
    date: '2023',
  },

  // ── Finance / Personal Finance ──────────────────────────────────────────────
  {
    id: 6,
    title: 'Inflasi dan Cara Cerdas Menghadapinya di Tahun 2024',
    category: 'Finance',
    subCategory: 'Personal Finance',
    publication: 'DBS Treasures',
    highlight: 'Dwell time rata-rata 4 menit — sinyal konten berkualitas tinggi',
    link: 'https://dbsbank.com',
    date: '2024',
  },

  // ── Game / Review ───────────────────────────────────────────────────────────
  {
    id: 7,
    title: "Review Baldur's Gate 3: RPG Terbaik Dekade Ini?",
    category: 'Game',
    subCategory: 'Review',
    publication: 'GamesLoop.id',
    highlight: "Top 5 pencarian 'review baldur's gate 3 bahasa Indonesia'",
    link: 'https://gamesloop.id',
    date: '2023',
  },

  // ── Game / Industry ─────────────────────────────────────────────────────────
  {
    id: 8,
    title: 'Mengapa Game Indie Semakin Mendominasi Gaming Industry?',
    category: 'Game',
    subCategory: 'Industry',
    publication: 'Hybrid.co.id',
    highlight: 'Artikel paling banyak di-share di sosial media bulan April 2023',
    link: 'https://hybrid.co.id',
    date: '2023',
  },

  // ── Pop Culture / K-Drama ───────────────────────────────────────────────────
  {
    id: 9,
    title: 'Fenomena K-Drama: Kenapa Drama Korea Bisa Kuasai Dunia?',
    category: 'Pop Culture',
    subCategory: 'K-Drama',
    publication: 'Fimela',
    highlight: 'Viral di Twitter; 2.000+ share organik dalam 48 jam',
    link: 'https://fimela.com',
    date: '2023',
  },

  // ── Pop Culture / Internet Culture ──────────────────────────────────────────
  {
    id: 10,
    title: 'Dari Meme ke Mainstream: Evolusi Humor Internet',
    category: 'Pop Culture',
    subCategory: 'Internet Culture',
    publication: 'Vice Indonesia',
    highlight: 'Featured di newsletter mingguan Vice dengan 80K+ subscriber',
    link: 'https://vice.com',
    date: '2022',
  },

  // ── Copywriting / Landing Page ──────────────────────────────────────────────
  {
    id: 11,
    title: 'Landing Page Copy — Aplikasi Fintech Peer-to-Peer Lending',
    category: 'Copywriting',
    subCategory: 'Landing Page',
    publication: 'Client Project',
    highlight: 'Conversion rate naik 34% dibanding copy sebelumnya (A/B test)',
    link: 'https://drive.google.com',
    date: '2024',
  },

  // ── Copywriting / Email Campaign ────────────────────────────────────────────
  {
    id: 12,
    title: 'Email Campaign Series — E-commerce Fashion Lokal',
    category: 'Copywriting',
    subCategory: 'Email Campaign',
    publication: 'Client Project',
    highlight: 'Open rate 42% & click rate 18% — jauh di atas benchmark industri',
    link: 'https://drive.google.com',
    date: '2024',
  },

  // ── News / Startup ──────────────────────────────────────────────────────────
  {
    id: 13,
    title: 'Startup Unicorn Baru Indonesia: Kisah Sukses di Tengah Krisis',
    category: 'News',
    subCategory: 'Startup',
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
