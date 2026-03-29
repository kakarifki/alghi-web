import { useState, useMemo } from 'react';
import { portfolioItems, STRATEGIST_CATEGORIES, WRITING_CATEGORIES, CATEGORY_SUBS, type Category } from '../data/portfolioData';
import PortfolioCard from './PortfolioCard';
import CategoryInfoPanel from './CategoryInfoPanel';

interface PortfolioBlockProps {
  label: string;
  titleSpan1: string;
  titleSpan2: string;
  description: string;
  categories: Array<Category | 'All'>;
}

function PortfolioBlock({ label, titleSpan1, titleSpan2, description, categories }: PortfolioBlockProps) {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');
  const [activeSubFilter, setActiveSubFilter] = useState<string>('All');

  // When category changes, reset sub-filter
  const handleCategoryChange = (cat: Category | 'All') => {
    setActiveFilter(cat);
    setActiveSubFilter('All');
  };

  // Available subcategories for the selected category
  const subCategories = activeFilter !== 'All' ? CATEGORY_SUBS[activeFilter] : [];

  const filtered = useMemo(() => {
    // Note: Only show items that belong to the current categories list!
    // "All" should only show items from these categories.
    let items = portfolioItems.filter(item => categories.includes(item.category));

    if (activeFilter !== 'All') {
      items = items.filter((item) => item.category === activeFilter);
    }

    if (activeSubFilter !== 'All') {
      items = items.filter((item) => item.subCategory === activeSubFilter);
    }

    return items;
  }, [activeFilter, activeSubFilter, categories]);

  return (
    <div className="mb-24">
      {/* Section header */}
      <div className="mb-12">
        <p className="section-label">{label}</p>
        <h2 className="section-title">
          {titleSpan1}{' '}
          <span className="text-green-400">{titleSpan2}</span>
        </h2>
        <p className="mt-3 text-gray-400 max-w-lg">
          {description}
        </p>
      </div>

      {/* ── Category Filter (Level 1) ── */}
      <div className="flex flex-wrap gap-2 mb-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
              activeFilter === cat
                ? 'bg-green-400 text-gray-950 border-green-400 shadow-md shadow-green-400/20'
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
      </div>

      {/* ── Category Info Panel ── */}
      {activeFilter !== 'All' && (
        <CategoryInfoPanel category={activeFilter} />
      )}

      {/* ── Subcategory Filter (Level 2) ── */}
      {activeFilter !== 'All' && (
        <div className="flex flex-wrap items-center gap-2 mb-8 pl-1 animate-fade-in">
          {/* Indented connector line */}
          <div className="flex items-center gap-2 text-gray-700 text-xs mr-1 hidden sm:flex">
            <div className="w-4 h-px bg-gray-700" />
            <span className="uppercase tracking-wider">Sub</span>
            <div className="w-2 h-px bg-gray-700" />
          </div>

          {/* "All" sub-filter */}
          <button
            onClick={() => setActiveSubFilter('All')}
            className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
              activeSubFilter === 'All'
                ? 'bg-purple-500 text-white border-purple-500 shadow-sm shadow-purple-500/20'
                : 'border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-300'
            }`}
          >
            All {activeFilter}
          </button>

          {/* Dynamic sub-category pills */}
          {subCategories && subCategories.map((sub) => {
            const count = portfolioItems.filter(
              (i) => i.category === activeFilter && i.subCategory === sub
            ).length;
            return (
              <button
                key={sub}
                onClick={() => setActiveSubFilter(sub)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
                  activeSubFilter === sub
                    ? 'bg-purple-500 text-white border-purple-500 shadow-sm shadow-purple-500/20'
                    : 'border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-300'
                }`}
              >
                {sub}
                <span className={`ml-1 ${activeSubFilter === sub ? 'text-purple-200' : 'text-gray-600'}`}>
                  ({count})
                </span>
              </button>
            );
          })}

          {/* Item count */}
          <span className="ml-auto text-sm text-gray-600 hidden sm:block">
            {filtered.length} item{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      )}

      {/* Item count when no sub-filter row */}
      {activeFilter === 'All' && (
        <div className="flex justify-end mb-8">
          <span className="text-sm text-gray-600">
            {filtered.length} item{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      )}

      {/* ── Card Grid ── */}
      <div
        key={`${activeFilter}-${activeSubFilter}`}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in"
      >
        {filtered.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-600">
          No items in this subcategory yet.
        </div>
      )}
    </div>
  );
}

export default function WorksSection() {
  return (
    <section id="works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <PortfolioBlock
          label="WORKS"
          titleSpan1="Content Strategist"
          titleSpan2="Selected Portfolio"
          description="I managed creative projects from planning and scheduling to collaboration, working with copywriters, designers, and animators to produce clear, engaging content."
          categories={STRATEGIST_CATEGORIES}
        />

        <PortfolioBlock
          label="WORKS"
          titleSpan1="Content Writing"
          titleSpan2="Selected Portfolio"
          description="A glimpse of my writing across pop culture, psychology, technology, finance, and personal development over the years."
          categories={WRITING_CATEGORIES}
        />
      </div>
    </section>
  );
}
