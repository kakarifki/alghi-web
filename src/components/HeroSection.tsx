import { ArrowDown, Dot } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16 overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      {/* Radial glow center */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(74,222,128,0.06) 0%, rgba(168,85,247,0.05) 60%, transparent 100%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6 animate-slide-up">

        {/* Open to Work badge
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-400 font-medium animate-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          Open to Work
        </div> */}

        {/* Eyebrow */}
        <p className="section-label !mb-0 text-sm">
          Copywriter | Content Strategist | Creative Project Manager
        </p>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-100 leading-tight tracking-tight">
          Content that{' '}
          <span className="text-green-400">ranks</span>,<br />
          resonates<span className="text-purple-500">,</span>{' '}
          and{' '}
          <span className="text-green-400">converts</span>.
        </h1>

        {/* Sub-headline */}
        {/* <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
          Spesialis konten <strong className="text-gray-300">Tech, Finance, Game &amp; Pop Culture</strong> yang
          menulis untuk mesin pencari <em>dan</em> manusia — readable, rankable, dan unforgettable.
        </p> */}

        <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
          A versatile and experienced writer with a passion for storytelling and a talent for crafting compelling content.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <a href="#works" className="btn-primary text-base px-8 py-3.5">
            View My Work
            <ArrowDown size={16} className="ml-1" />
          </a>
        </div>

        {/* Stat pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-500">
          <span className="flex items-center gap-1"><Dot className="text-green-400" size={18} />3+ Years Experience</span>
          <span className="flex items-center gap-1"><Dot className="text-purple-400" size={18} />6 Niches</span>
          <span className="flex items-center gap-1"><Dot className="text-green-400" size={18} />Multiple Publications</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
