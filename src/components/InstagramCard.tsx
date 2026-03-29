import { PortfolioItem, CATEGORY_BADGE } from '../data/portfolioData';
import { ExternalLink, Sparkles } from 'lucide-react';

interface Props {
  item: PortfolioItem;
}

export default function InstagramCard({ item }: Props) {
  const badgeClass = CATEGORY_BADGE[item.category] || 'badge-tech'; // fallback

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-glass p-5 flex flex-col gap-3 cursor-pointer group block"
    >
      {/* Top row: category badge + year */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`skill-pill text-xs font-semibold border flex-shrink-0 ${badgeClass}`}>
            {item.category}
          </span>
          {/* We omit subCategory here since user requested no subcategories */}
        </div>
        <span className="text-xs text-gray-600 font-medium tabular-nums flex-shrink-0">{item.date}</span>
      </div>

      {/* Image Preview */}
      <div className="w-full aspect-square mt-1 mb-1 rounded-md overflow-hidden bg-gray-800/50 border border-gray-700/50 relative flex items-center justify-center">
        {item.image ? (
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <span className="text-gray-600 text-xs">No Image</span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-gray-100 leading-snug group-hover:text-green-400 transition-colors duration-200 line-clamp-2">
        {item.title}
      </h3>

      {/* Caption Preview */}
      {item.caption ? (
        <div className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
          {item.caption}
        </div>
      ) : item.highlight ? (
        <div className="flex items-start gap-2 text-sm text-gray-400">
          <Sparkles size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
          <span className="leading-relaxed line-clamp-3">{item.highlight}</span>
        </div>
      ) : null}

      {/* Footer: publication + arrow */}
      <div className="flex items-center justify-between pt-3 mt-auto border-t border-gray-800/60">
        <span className="text-xs text-gray-500 font-medium">{item.publication}</span>
        <span className="flex items-center gap-1 text-xs text-gray-600 group-hover:text-green-400 transition-colors duration-200 font-medium">
          View Post <ExternalLink size={11} />
        </span>
      </div>
    </a>
  );
}
