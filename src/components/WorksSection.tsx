import { useState, useMemo } from 'react';
import { portfolioItems, FILTER_CATEGORIES, type Category } from '../data/portfolioData';
import PortfolioCard from './PortfolioCard';

export default function WorksSection() {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');

  const filtered = useMemo(
    () =>
      activeFilter === 'All'
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-12">
          <p className="section-label">Works</p>
          <h2 className="section-title">
            Selected{' '}
            <span className="text-amber-400">Portfolio</span>
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg">
            Artikel dan proyek copywriting yang telah diterbitkan — klik untuk membaca langsung.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-amber-400 text-gray-950 border-amber-400 shadow-md shadow-amber-400/20'
                  : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className={`ml-1.5 text-xs ${activeFilter === cat ? 'text-gray-800' : 'text-gray-600'}`}>
                  ({portfolioItems.filter((i) => i.category === cat).length})
                </span>
              )}
            </button>
          ))}
          {/* Count display */}
          <span className="ml-auto self-center text-sm text-gray-600 hidden sm:block">
            {filtered.length} item{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Card Grid */}
        <div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in"
        >
          {filtered.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-600">
            No items in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
