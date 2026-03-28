import { ExternalLink } from 'lucide-react';
import { type Category, CATEGORY_INFO, CATEGORY_BADGE } from '../data/portfolioData';

interface Props {
  category: Category;
}

export default function CategoryInfoPanel({ category }: Props) {
  const info = CATEGORY_INFO[category];
  const badgeClass = CATEGORY_BADGE[category];

  return (
    <div className="mb-6 p-5 bg-gray-900/60 border border-gray-800 rounded-xl animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-start gap-5">

        {/* Left: text content */}
        <div className="flex-1 min-w-0">
          {/* Category label + tagline */}
          <div className="flex items-center gap-3 mb-2">
            <span className={`skill-pill text-xs font-semibold border flex-shrink-0 ${badgeClass}`}>
              {category}
            </span>
            <p className="text-sm font-semibold text-gray-200 leading-snug">
              {info.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed">
            {info.description}
          </p>
        </div>

        {/* Right: navigation links */}
        {info.links.length > 0 && (
          <div className="flex-shrink-0">
            <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-2 sm:text-right">
              Published In
            </p>
            <div className="flex flex-wrap sm:flex-col gap-2">
              {info.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium
                             border border-gray-700 text-gray-400 rounded-lg
                             hover:border-green-400/60 hover:text-green-400
                             transition-all duration-200 whitespace-nowrap"
                >
                  {link.label}
                  <ExternalLink size={10} className="opacity-60" />
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
