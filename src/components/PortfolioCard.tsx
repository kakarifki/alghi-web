import { PortfolioItem, CATEGORY_BADGE } from '../data/portfolioData';
import { ExternalLink, Sparkles } from 'lucide-react';

interface Props {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: Props) {
  const badgeClass = CATEGORY_BADGE[item.category];

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-glass p-5 flex flex-col gap-3 cursor-pointer group block"
    >
      {/* Top row: badge + year */}
      <div className="flex items-center justify-between">
        <span className={`skill-pill text-xs font-semibold border ${badgeClass}`}>
          {item.category}
        </span>
        <span className="text-xs text-gray-600 font-medium tabular-nums">{item.date}</span>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-gray-100 leading-snug group-hover:text-amber-400 transition-colors duration-200 line-clamp-2">
        {item.title}
      </h3>

      {/* Highlight */}
      <div className="flex items-start gap-2 text-sm text-gray-400">
        <Sparkles size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
        <span className="leading-relaxed">{item.highlight}</span>
      </div>

      {/* Footer: publication + arrow */}
      <div className="flex items-center justify-between pt-1 mt-auto border-t border-gray-800/60">
        <span className="text-xs text-gray-500 font-medium">{item.publication}</span>
        <span className="flex items-center gap-1 text-xs text-gray-600 group-hover:text-amber-400 transition-colors duration-200 font-medium">
          Read <ExternalLink size={11} />
        </span>
      </div>
    </a>
  );
}
