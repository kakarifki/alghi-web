import { EMAIL, LINKEDIN_URL, GDRIVE_PORTFOLIO_URL } from '../data/portfolioData';
import { Mail, FolderOpen, ArrowUpRight } from 'lucide-react';

// Inline LinkedIn SVG (lucide-react v0.x doesn't export Linkedin in all versions)
function LinkedInIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="section-label">Contact</p>
        <h2 className="section-title mb-4">
          Let's work{' '}
          <span className="text-green-400">together</span>.
        </h2>
        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          Looking for a writer who crafts content that ranks <em>and</em> reads well?
          Let's talk — whether it's a long-form article, landing page copy, or a full content strategy.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href={`mailto:${EMAIL}`}
            className="btn-primary w-full sm:w-auto justify-center text-base px-8 py-3.5"
          >
            <Mail size={17} />
            Send Email
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto justify-center text-base px-8 py-3.5"
          >
            <LinkedInIcon size={17} />
            LinkedIn
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Secondary CTA: Google Drive Portfolio */}
        <div className="mt-4">
          <a
            href={GDRIVE_PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-400 transition-colors duration-200 border-b border-dashed border-gray-700 hover:border-purple-400 pb-0.5"
          >
            <FolderOpen size={15} />
            Or browse full portfolio on Google Drive
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
