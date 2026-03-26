import { LINKEDIN_URL } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 border-t border-gray-800/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
        <p>
          © {year}{' '}
          <span className="text-gray-400 font-semibold">
            alghi<span className="text-amber-400">.</span>
          </span>{' '}
          All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-gray-800">·</span>
          <span>Built with React &amp; ♥</span>
        </div>
      </div>
    </footer>
  );
}
