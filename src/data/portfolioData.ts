// ─── Type Definitions ───────────────────────────────────────────────────────

export type Category = 'Copywriting' | 'Tech' | 'Finance' | 'Game' | 'Pop Culture' | 'News';

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

export const EMAIL = 'alghialghi23@gmail.com';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/taufiqalghifr/';


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
    tagline: 'Writing about tech in a simple way',
    description:
      'I write about things like keyboards, laptops, and other tools people use every day.',
    links: [
      { label: 'VCGamers', url: 'https://www.vcgamers.com/news/author/taufiqalghifr/' },

    ],
  },
  'Finance': {
    tagline: 'Konten finansial yang mendidik, bukan mengintimidasi.',
    description:
      'Dari panduan investasi pemula hingga analisis makro ekonomi, Alghi menyederhanakan ' +
      'konsep keuangan yang kompleks menjadi konten yang actionable dan mudah dicerna.',
    links: [
      { label: 'OCBC NISP', url: 'https://www.ocbc.id/id/article/2021/08/30/investasi-reksa-dana' }, // TODO
      { label: 'DBS Treasures', url: 'https://www.dbs.id/treasures' },
      { label: 'Stockbit Blog', url: 'https://stockbit.com/#/' },
    ],
  },
  'Game': {
    tagline: 'Making games easier to understand.',
    description:
      'I write about games, focusing on guides, hero builds, and so on.',
    links: [
      { label: 'TheGamer', url: 'https://www.thegamer.com/author/muhammad-taufiq-al-ghifari/' },
      { label: 'VCGamers', url: 'https://www.vcgamers.com/news/author/taufiqalghifr/' },
    ],
  },
  'Pop Culture': {
    tagline: 'Breaking down stories, themes, and meaning',
    description:
      'Where I write and reflect about pop culture in a more personal way.',
    links: [
      { label: 'Medium', url: 'https://medium.com/@moonsoaked' },
    ],
  },
  'Copywriting': {
    tagline: 'Copy yang mengkonversi — bukan sekadar terlihat bagus.',
    description:
      'Alghi mengerjakan landing page, email campaign, dan materi iklan dengan pendekatan ' +
      'berbasis data: setiap kata dipilih untuk mendorong aksi nyata dari pembaca.',
    links: [
      { label: 'Hubungi Alghi', url: 'mailto:alghialghi23@gmail.com' },
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
  'Tech': ['Hardware', 'Software'],
  'Finance': ['Investing', 'Personal Finance', 'Economics'],
  'Game': ['Guides', 'Builds', 'Updates'],
  'Pop Culture': ['Music', 'Anime'],
  'Copywriting': ['Landing Page', 'Email Campaign', 'Social Media'],
  'News': ['Startup', 'Business'],
};

// ─── Portfolio Data ──────────────────────────────────────────────────────────
//
// To add a new article:
//   1. Pick a `category` from the Category type above.
//   2. Pick a `subCategory` from CATEGORY_SUBS[category].
//   3. Fill in the rest of the fields, increment the `id`.

export const portfolioItems: PortfolioItem[] = [
  // ── Tech / Software ──────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Platform Streaming Gaming Terbaik, Mana Andalanmu?',
    category: 'Tech',
    subCategory: 'Software',
    publication: 'VCGamers',
    highlight: 'Platform Streaming Gaming menjadi salah satu kebutuhan para Streamer agar dapat berinteraksi dengan para penontonnya secara langsung.',
    link: 'https://www.vcgamers.com/news/platform-streaming-gaming/',
    date: '2022',
  },

  // ── Tech / Hardware ───────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Rekomendasi Laptop Harga 7 Jutaan, Cek Sekarang!',
    category: 'Tech',
    subCategory: 'Hardware',
    publication: 'VCGamers',
    highlight: 'Laptop harga 7 jutaan merupakan laptop yang cocok untuk memenuhi kebutuhan para pengguna baik kebutuhan sehari-hari ataupun bekerja.',
    link: 'https://www.vcgamers.com/news/laptop-harga-7-jutaan/',
    date: '2022',
  },

  // ── Tech / Hardware ─────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Rekomendasi Keyboard Gaming Murah, Cocok untuk Gamers',
    category: 'Tech',
    subCategory: 'Hardware',
    publication: 'VCGamers',
    highlight: 'Keyboard gaming karena kini sudah banyak keyboard gaming murah sehingga kamu bisa berhemat dalam mengeluarkan uang.',
    link: 'https://www.vcgamers.com/news/keyboard-gaming-murah/',
    date: '2022',
  },

  // ── Tech / Software ─────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Cara Download Video Tiktok Tanpa Watermark',
    category: 'Tech',
    subCategory: 'Software',
    publication: 'VCGamers',
    highlight: 'Mendownload video TikTok menggunakan SnapTik merupakan salah satu cara download video TikTok tanpa adanya watermark di videonya.',
    link: 'https://www.vcgamers.com/news/download-video-tiktok/',
    date: '2022',
  },

  // ── Tech / Software ─────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Simak! Berikut Aplikasi Edit Foto Terbaik di Smartphone!',
    category: 'Tech',
    subCategory: 'Software',
    publication: 'VCGamers',
    highlight: 'Menggunakan aplikasi edit foto terbaik untuk setiap fotomu dapat membuat fotomu menjadi lebih cantik dan aesthetic dari sebelumnya',
    link: 'https://www.vcgamers.com/news/aplikasi-edit-foto-terbaik/',
    date: '2022',
  },

  // ── Tech / Hardware ─────────────────────────────────────────────────────
  {
    id: 6,
    title: 'Simak! Berikut Kelebihan Hape 5G vs 4G!',
    category: 'Tech',
    subCategory: 'Hardware',
    publication: 'VCGamers',
    highlight: 'Banyak sekali perbedaan hape 5G vs 4G secara signifikan seperti latensi, kapasitas internet, cloud gaming, hingga koneksi internet',
    link: 'https://www.vcgamers.com/news/hape-5g-vs-4g/',
    date: '2022',
  },

  // ── Tech / Hardware ─────────────────────────────────────────────────────
  {
    id: 7,
    title: 'Rekomendasi Meja Gaming Terbaik Juli 2022',
    category: 'Tech',
    subCategory: 'Hardware',
    publication: 'VCGamers',
    highlight: 'Menggunakan meja gaming untuk kebutuhan gaming tentunya akan sangat bermanfaat untuk menampung semua kebutuhan kalian di meja tersebut',
    link: 'https://www.vcgamers.com/news/meja-gaming-terbaik/',
    date: '2022',
  },

  // ── Tech / Hardware ─────────────────────────────────────────────────────
  {
    id: 8,
    title: 'Simak! Berikut 5 HP 5G Murah di 2022!',
    category: 'Tech',
    subCategory: 'Hardware',
    publication: 'VCGamers',
    highlight: 'Ada banyak sekali HP 5G murah yang rilis di tahun 2022 ini dan bisa kalian gunakan untuk berbagai kebutuhan sehari-hari',
    link: 'https://www.vcgamers.com/news/hp-5g-murah/',
    date: '2022',
  },

  // ── Tech / Hardware ─────────────────────────────────────────────────────
  {
    id: 9,
    title: 'Rekomendasi Microphone Gaming Termurah, Cocok untuk Streaming!',
    category: 'Tech',
    subCategory: 'Hardware',
    publication: 'VCGamers',
    highlight: 'Menggunakan microphone gaming ketika bermain game dan live-stream merupakan hal yang sangat diperlukan untuk berinteraksi dengan penonton',
    link: 'https://www.vcgamers.com/news/microphone-gaming-terbaik/',
    date: '2022',
  },

  // ── Tech / Hardware ─────────────────────────────────────────────────────
  {
    id: 10,
    title: 'Rekomendasi Router Gaming Terbaik 2022',
    category: 'Tech',
    subCategory: 'Hardware',
    publication: 'VCGamers',
    highlight: 'Menggunakan router gaming sangatlah diperlukan agar pengalaman bermain game kalian menjadi lebih lancar tanpa adanya hambatan',
    link: 'https://www.vcgamers.com/news/router-gaming-terbaik-2022/',
    date: '2022',
  },

  // ── Tech / Hardware ─────────────────────────────────────────────────────
  {
    id: 11,
    title: 'Rekomendasi HP Gaming Terbaik 2022',
    category: 'Tech',
    subCategory: 'Hardware',
    publication: 'VCGamers',
    highlight: 'Bermain game android menggunakan HP Gaming tentunya akan menambahkan pengalaman dan sensasi bermain game yang lebih baik',
    link: 'https://www.vcgamers.com/news/hp-gaming-terbaik-2022/',
    date: '2022',
  },

  // ── Tech / Hardware ─────────────────────────────────────────────────────
  {
    id: 12,
    title: 'TV Gaming Terbaik 2022, Main Game Makin Seru!',
    category: 'Tech',
    subCategory: 'Hardware',
    publication: 'VCGamers',
    highlight: 'Bermain game dan dilengkapi dengan TV gaming tentu dapat membantu pengalaman bermain game menjadi lebih asik dan menyenangkan',
    link: 'https://www.vcgamers.com/news/tv-gaming-terbaik-2022/',
    date: '2022',
  },

  // ── Tech / Software ─────────────────────────────────────────────────────
  {
    id: 13,
    title: 'Microsoft Hentikan Dukungan Windows 8.1 Tahun Depan, Ada Apa?',
    category: 'Tech',
    subCategory: 'Software',
    publication: 'VCGamers',
    highlight: 'Microsoft baru-baru ini menginformasikan akan menghentikan dukungan Windows 8.1 pada tanggal 10 Januari 2023',
    link: 'https://www.vcgamers.com/news/microsoft-hentikan-dukungan-windows-8-1/',
    date: '2022',
  },

  // ── Tech / Software ─────────────────────────────────────────────────────
  {
    id: 14,
    title: 'Fitur Spotify Gratis, Dengarkan Sekarang!',
    category: 'Tech',
    subCategory: 'Software',
    publication: 'VCGamers',
    highlight: 'Menggunakan Spotify Gratis tentunya banyak sekali menawarkan fitur-fitur yang dapat menambahkan pengalaman dalam mendengarkan musik',
    link: 'https://www.vcgamers.com/news/spotify-gratis/',
    date: '2022',
  },

  // ── Tech / Software ─────────────────────────────────────────────────────
  {
    id: 15,
    title: 'Dapatkan Apple Music Gratis Sekarang Juga! Simak Langkahnya!',
    category: 'Tech',
    subCategory: 'Software',
    publication: 'VCGamers',
    highlight: 'Apple Music merupakan salah satu layanan streaming musik dan bisa kalian dapatkan secara gratis selama 6 bulan jika mengikuti syaratnya.',
    link: 'https://www.vcgamers.com/news/apple-music-gratis/',
    date: '2022',
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

  // ── Game / Guides ───────────────────────────────────────────────────────────
  {
    id: 7,
    title: "FIFA 23: Complete Chemistry Guide",
    category: 'Game',
    subCategory: 'Guides',
    publication: 'TheGamer',
    highlight: 'Team chemistry is a big part of football.',
    link: 'https://www.thegamer.com/fifa-23-chemistry-explained-complete-guide/',
    date: '2023',
  },

  // ── Game / Builds ─────────────────────────────────────────────────────────
  {
    id: 8,
    title: 'Cyberpunk 2077: Rebecca Berserk Build',
    category: 'Game',
    subCategory: 'Builds',
    publication: 'TheGamer',
    highlight: 'Enjoyed the Cyberpunk Edgerunners show and want to play as Rebecca in Cyberpunk 2077? Heres how to build her character.',
    link: 'https://www.thegamer.com/cyberpunk-2077-rebecca-berserk-build/',
    date: '2023',
  },

  // ── Game / Builds ─────────────────────────────────────────────────────────
  {
    id: 9,
    title: 'Marvel Future Revolution: Best Magik Build',
    category: 'Game',
    subCategory: 'Builds',
    publication: 'TheGamer',
    highlight: 'Magik can be a powerful addition to your team in Marvel Future Revolution, so heres how to build her best.',
    link: 'https://www.thegamer.com/marvel-future-revolution-best-magik-build-guide/',
    date: '2023',
  },

  // ── Game / Builds ─────────────────────────────────────────────────────────
  {
    id: 10,
    title: 'Marvel Future Revolution: Best Scarlet Witch Build',
    category: 'Game',
    subCategory: 'Builds',
    publication: 'TheGamer',
    highlight: 'Looking to use Scarlet Witch in Marvel Future Revolution? Heres the best way to utilize her power.',
    link: 'https://www.thegamer.com/marvel-future-revolution-scarlet-witch-best-build/',
    date: '2023',
  },

  // ── Game / Builds ─────────────────────────────────────────────────────────
  {
    id: 11,
    title: 'Back 4 Blood: Best Heng Build',
    category: 'Game',
    subCategory: 'Builds',
    publication: 'TheGamer',
    highlight: 'These practiced builds will make Heng one of your stand-out damage dealers and supporters.',
    link: 'https://www.thegamer.com/back-4-blood-heng-build-best/',
    date: '2023',
  },

  // ── Game / Builds ─────────────────────────────────────────────────────────
  {
    id: 12,
    title: 'Back 4 Blood: Best Holly Build',
    category: 'Game',
    subCategory: 'Builds',
    publication: 'TheGamer',
    highlight: 'Heres everything you need to know to properly build Holly in Back 4 Blood.',
    link: 'https://www.thegamer.com/back-4-blood-best-holly-build/',
    date: '2023',
  },

  // ── Game / Builds ─────────────────────────────────────────────────────────
  {
    id: 13,
    title: 'Back 4 Blood: Best Doc Build',
    category: 'Game',
    subCategory: 'Builds',
    publication: 'TheGamer',
    highlight: 'When youre playing as Doc in Back 4 Blood, youll want to use this build to best support your teammates.',
    link: 'https://www.thegamer.com/back-4-blood-best-doc-build/',
    date: '2023',
  },

  // ── Game / Builds ─────────────────────────────────────────────────────────
  {
    id: 14,
    title: 'Back 4 Blood: Best Sharice Build',
    category: 'Game',
    subCategory: 'Builds',
    publication: 'TheGamer',
    highlight: 'Fight more than just fires with this cleaner.',
    link: 'https://www.thegamer.com/back-4-blood-best-sharice-card-build-guide/',
    date: '2023',
  },

  // ── Game / Guides ─────────────────────────────────────────────────────────
  {
    id: 15,
    title: 'Phantasy Star Online 2: New Genesis - Hunter Class Guide',
    category: 'Game',
    subCategory: 'Guides',
    publication: 'TheGamer',
    highlight: 'Get to grips with the Hunter class in PSO2: NGS, from skills and weapons to how to play.',
    link: 'https://www.thegamer.com/phantasy-star-online-2-new-genesis-pso2-ngs-hunter-class-guide/',
    date: '2023',
  },

  // ── Game / Guides ─────────────────────────────────────────────────────────
  {
    id: 16,
    title: 'Phantasy Star Online 2: New Genesis - Gunnner Class Guide',
    category: 'Game',
    subCategory: 'Guides',
    publication: 'TheGamer',
    highlight: 'Heres everything you need to know to play as a Gunner in Phantasy Star Online 2: New Genesis.',
    link: 'https://www.thegamer.com/phantasy-star-online-2-new-genesis-complete-gunner-class-guide/',
    date: '2023',
  },

  // ── Game / Guides ─────────────────────────────────────────────────────────
  {
    id: 17,
    title: 'Phantasy Star Online 2: New Genesis - Ranger Class Guide',
    category: 'Game',
    subCategory: 'Guides',
    publication: 'TheGamer',
    highlight: 'Heres everything you need to know in order to play as a Ranger effectively in PSO2: New Genesis.',
    link: 'https://www.thegamer.com/phantasy-star-online-2-new-genesis-complete-ranger-class-guide/',
    date: '2023',
  },

  // ── Game / Guides ─────────────────────────────────────────────────────────
  {
    id: 18,
    title: 'Phantasy Star Online 2: New Genesis - Techter Class Guide',
    category: 'Game',
    subCategory: 'Guides',
    publication: 'TheGamer',
    highlight: 'Technology and magic are on your side with this class.',
    link: 'https://www.thegamer.com/phantasy-star-online-2-new-genesis-pso2-ngs-techter-class-guide/',
    date: '2023',
  },

  // ── Game / Guides ─────────────────────────────────────────────────────────
  {
    id: 19,
    title: 'Yu-Gi-Oh!: How To Play Kashtira',
    category: 'Game',
    subCategory: 'Guides',
    publication: 'TheGamer',
    highlight: 'Heres everything you need to know to play this deck in Yu-Gi-Oh!',
    link: 'https://www.thegamer.com/yu-gi-oh-kashtira-complete-guide/',
    date: '2023',
  },

  // ── Game / Guides ─────────────────────────────────────────────────────────
  {
    id: 20,
    title: 'Yu-Gi-Oh!: How To Play Neos',
    category: 'Game',
    subCategory: 'Guides',
    publication: 'TheGamer',
    highlight: 'Heres everything you need to know about playing a Neos deck in Yu-Gi-Oh',
    link: 'https://www.thegamer.com/yu-gi-oh-neos-complete-play-guide/',
    date: '2023',
  },

  // ── Game / Guides ─────────────────────────────────────────────────────────
  {
    id: 21,
    title: 'Yu-Gi-Oh!: How To Play Kuriboh',
    category: 'Game',
    subCategory: 'Guides',
    publication: 'TheGamer',
    highlight: 'Use these cute yet deadly creatures to overwhelm and destroy your opponents.',
    link: 'https://www.thegamer.com/yugioh-kuriboh-build-deck-how-to-play-guide/',
    date: '2023',
  },

  // ── Game / Guides ─────────────────────────────────────────────────────────
  {
    id: 22,
    title: 'Yu-Gi-Oh!: How To Play Galaxy',
    category: 'Game',
    subCategory: 'Guides',
    publication: 'TheGamer',
    highlight: 'The Galaxy archetype is a popular and powerful deck choice in the Yu-Gi-Oh! TCG. Heres how to play it.',
    link: 'https://www.thegamer.com/yu-gi-oh-galaxy-how-to-guide/',
    date: '2023',
  },

  // ── Game / Guides ─────────────────────────────────────────────────────────
  {
    id: 23,
    title: 'Yu-Gi-Oh!: How To Play Photon',
    category: 'Game',
    subCategory: 'Guides',
    publication: 'TheGamer',
    highlight: 'Photon decks in Yu-Gi-Oh! have the potential for huge damage and board control. Heres how to make one.',
    link: 'https://www.thegamer.com/yu-gi-oh-how-to-play-photon-deck-cards/',
    date: '2023',
  },

  // ── Game / Guides ─────────────────────────────────────────────────────────
  {
    id: 24,
    title: 'Yu-Gi-Oh!: How To Play Gold Pride',
    category: 'Game',
    subCategory: 'Guides',
    publication: 'TheGamer',
    highlight: 'Heres how to play a Gold Pride deck in the Yu-Gi-Oh! TCG.',
    link: 'https://www.thegamer.com/yugioh-gold-pride-how-to-play-guide/',
    date: '2023',
  },

  // ── Game / Guides ─────────────────────────────────────────────────────────
  {
    id: 25,
    title: 'Flesh And Blood: Arakni Hero Guide',
    category: 'Game',
    subCategory: 'Guides',
    publication: 'TheGamer',
    highlight: 'We take a look at how to play the Arakni in Flesh and Blood.',
    link: 'https://www.thegamer.com/flesh-and-blood-arakni-hero-guide/',
    date: '2023',
  },

  // ── Game / Guides ─────────────────────────────────────────────────────────
  {
    id: 26,
    title: 'Flesh And Blood: Uzuri Hero Guide',
    category: 'Game',
    subCategory: 'Guides',
    publication: 'TheGamer',
    highlight: 'Uzuri is one of Flesh and Bloods most adaptable, resilient heroes.',
    link: 'https://www.thegamer.com/cyberpunk-2077-david-sandevistan-build-perks-appearance-settings-items/',
    date: '2023',
  },

  // ── Game / Builds ─────────────────────────────────────────────────────────
  {
    id: 27,
    title: 'Cyberpunk 2077: Lucy Netrunner Monowire Build',
    category: 'Game',
    subCategory: 'Builds',
    publication: 'TheGamer',
    highlight: 'Heres everything you need to know to replicate this build in Cyberpunk 2077.',
    link: 'https://www.thegamer.com/cyberpunk-2077-lucy-build-guide/',
    date: '2023',
  },

  // ── Game / Updates ─────────────────────────────────────────────────────────
  {
    id: 28,
    title: 'Kenalan sama Ninja Sage, Server Ninja Saga Buatan Indonesia',
    category: 'Game',
    subCategory: 'Updates',
    publication: 'VCGamers',
    highlight: 'Game Ninja Sage merupakan private  server dari  game Ninja Saga yang dibuat oleh orang Indonesia yang baru saja dirilis Februari lalu.',
    link: 'https://www.vcgamers.com/news/ninja-sage/',
    date: '2022',
  },

  // ── Game / Updates ─────────────────────────────────────────────────────────
  {
    id: 29,
    title: 'Daftar Game Terpopuler di Roblox, Mainkan Sekarang!',
    category: 'Game',
    subCategory: 'Updates',
    publication: 'VCGamers',
    highlight: 'Ada banyak sekali game terpopuler yang terdapat di Roblox yang bisa kalian mainkan secara gratis atau berbayar untuk private server.',
    link: 'https://www.vcgamers.com/news/game-terpopuler-roblox/',
    date: '2022',
  },

  // ── Game / Updates ─────────────────────────────────────────────────────────
  {
    id: 30,
    title: 'CSGO Update Terbaru Agustus 2022',
    category: 'Game',
    subCategory: 'Updates',
    publication: 'VCGamers',
    highlight: 'Baru-baru ini salah satu game FPS terbaik di dunia yakni CSGO melakukan CSGO update dimana berbagai fitur di dalam game telah diperbarui',
    link: 'https://www.vcgamers.com/news/csgo-update-terbaru-agustus/',
    date: '2022',
  },

  // ── Game / Updates ─────────────────────────────────────────────────────────
  {
    id: 31,
    title: 'Yuk Intip Map Baru Deston PUBG!',
    category: 'Game',
    subCategory: 'Updates',
    publication: 'VCGamers',
    highlight: 'Map baru Deston merupakan map yang bisa kalian nikmati di PUBG dengan detail-detail yang menarik dan senjata dan kendaraan yang baru.',
    link: 'https://www.vcgamers.com/news/map-baru-deston-pubg/',
    date: '2022',
  },

  // ── Game / Updates ─────────────────────────────────────────────────────────
  {
    id: 32,
    title: 'Simak! Informasi Lengkap FFML Ladies Series 2022!',
    category: 'Game',
    subCategory: 'Updates',
    publication: 'VCGamers',
    highlight: 'FFML Ladies Series 2022 siap digelar pada akhir juli mendatang dan akan mempertemukan 12 tim untuk merebutkan gelar juara.',
    link: 'https://www.vcgamers.com/news/ffml-ladies-series-2022/',
    date: '2022',
  },

  // ── Pop Culture / Anime  ───────────────────────────────────────────────────
  {
    id: 9,
    title: 'Frieren, From a Proustian Perspective',
    category: 'Pop Culture',
    subCategory: 'Anime',
    publication: 'Medium',
    highlight: 'It’s funny how a 2D anime character who isn’t even real, and a writer who passed away long ago, could change the way I see time, memory, and the meaning of life.',
    link: 'https://medium.com/@moonsoaked/frieren-from-a-proustian-perspective-9f6cdc094c7d',
    date: '2025',
  },

  // ── Pop Culture / Anime ──────────────────────────────────────────
  {
    id: 10,
    title: 'Grief and Life Taste Similar',
    category: 'Pop Culture',
    subCategory: 'Anime',
    publication: 'Medium',
    highlight: 'I used to think grief would fade with time, but the older I get, the more I realize it simply learns to live beside me, or inside me.',
    link: 'https://medium.com/@moonsoaked/grief-and-life-taste-similar-213ce99a614a',
    date: '2025',
  },

  // ── Pop Culture / Anime ──────────────────────────────────────────
  {
    id: 11,
    title: 'Azula is The Villain that I Can’t Hate',
    category: 'Pop Culture',
    subCategory: 'Anime',
    publication: 'Medium',
    highlight: 'Azula is such a complex character (and well-written also). She is not a good person, but she is not a totally bad person either.',
    link: 'https://medium.com/@moonsoaked/azula-is-the-villain-that-i-cant-hate-d34e8940e080',
    date: '2020',
  },

  // ── Pop Culture / Anime ──────────────────────────────────────────
  {
    id: 12,
    title: 'Hiperrealitas, Simulacra, dan Fenomena Waifu 2D',
    category: 'Pop Culture',
    subCategory: 'Anime',
    publication: 'Medium',
    highlight: 'Melihat fenomena waifu 2 dimensi dari kacamata simulakra dan hiperrealitas Jean Baudrillard.',
    link: 'https://medium.com/@moonsoaked/hiperrealitas-simulacra-dan-fenomena-waifu-2d-aefb365005bd',
    date: '2020',
  },

  // ── Pop Culture / Anime ──────────────────────────────────────────
  {
    id: 13,
    title: 'Madara, I understand, but you’re wrong',
    category: 'Pop Culture',
    subCategory: 'Anime',
    publication: 'Medium',
    highlight: 'Breaking down one of the most deep speech by Madara Uciha',
    link: 'https://medium.com/@moonsoaked/madara-i-understand-but-youre-wrong-ed37844253a7',
    date: '2020',
  },

  // ── Pop Culture / Music ──────────────────────────────────────────
  {
    id: 14,
    title: 'Sebab Kematian adalah Puncak Tertinggi Manusia, untuk Kembali Pulang ke Pelukan-Nya',
    category: 'Pop Culture',
    subCategory: 'Music',
    publication: 'Medium',
    highlight: 'Sebuah renungan tentang kepulangan melalui lagu Putih dari Efek Rumah Kaca',
    link: 'https://medium.com/@moonsoaked/sebab-kematian-adalah-puncak-tertinggi-manusia-untuk-kembali-pulang-ke-pelukan-nya-f90c9a5d8060',
    date: '2025',
  },

  // ── Pop Culture / Music ──────────────────────────────────────────
  {
    id: 15,
    title: 'Surga yang Hampa atas Nama-Nya',
    category: 'Pop Culture',
    subCategory: 'Music',
    publication: 'Medium',
    highlight: 'Sebuah renungan atas keimanan dan kegaduhan manusia akan ketuhanan melalui lagu Kuning dari Efek Rumah Kaca',
    link: 'https://medium.com/@moonsoaked/surga-yang-hampa-atas-nama-nya-f0214c8c9d2e',
    date: '2026',
  },

  // ── Pop Culture / Music ──────────────────────────────────────────
  {
    id: 16,
    title: 'Sal, aku tidak (belum) ingin relate dengan Gala bunga matahari',
    category: 'Pop Culture',
    subCategory: 'Music',
    publication: 'Medium',
    highlight: 'Sebuah renungan tentang penerimaan saat ditinggal oleh orang yang disayang melalui lagu Gala Bunga Matahari dari Sal Priadi',
    link: 'https://medium.com/@moonsoaked/sal-aku-tidak-belum-ingin-relate-dengan-gala-bunga-matahari-c17bf0215eba',
    date: '2024',
  },

  // ── Pop Culture / Music ──────────────────────────────────────────
  {
    id: 17,
    title: 'Taylor, Thank You for Anti-Hero',
    category: 'Pop Culture',
    subCategory: 'Music',
    publication: 'Medium',
    highlight: 'Merefleksikan lagu anti-hero dari Taylor Swift',
    link: 'https://medium.com/@moonsoaked/taylor-thank-you-for-anti-hero-4e057e4bd5f7',
    date: '2022',
  },

  // ── Pop Culture / Music ──────────────────────────────────────────
  {
    id: 18,
    title: 'Remembering My Grandma through Taylor Swift’s Song — marjorie',
    category: 'Pop Culture',
    subCategory: 'Music',
    publication: 'Medium',
    highlight: 'a reflection about marjorie by Taylor Swift that heals me of my longing for my two grandmothers',
    link: 'https://medium.com/@moonsoaked/remembering-my-grandma-through-taylor-swifts-song-marjorie-f0f7f7bded57',
    date: '2022',
  },

  // ── Pop Culture / Music ──────────────────────────────────────────
  {
    id: 19,
    title: 'Meluruskan Narasi yang Usang dalam Re-Recording Taylor Swift',
    category: 'Pop Culture',
    subCategory: 'Music',
    publication: 'Medium',
    highlight: 'Membedah perilisan All Too Well (10 Minute Version) yang dipersembahkan untuk semua orang, untuk fans, untuk Swifties.',
    link: 'https://medium.com/@moonsoaked/meluruskan-narasi-yang-usang-dalam-re-recording-taylor-swift-10418075efbf',
    date: '2022',
  },

  // ── Pop Culture / Music ──────────────────────────────────────────
  {
    id: 20,
    title: 'Tentang Mengenang yang Telah Berpulang Lewat Lagu Nadin Amizah — Mendarah',
    category: 'Pop Culture',
    subCategory: 'Music',
    publication: 'Medium',
    highlight: 'Membedah lirik lagu Nadin Amizah - Mendarah.',
    link: 'https://medium.com/@moonsoaked/tentang-mengenang-yang-telah-berpulang-lewat-lagu-nadin-amizah-mendarah-e56327b827f8',
    date: '2020',
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
