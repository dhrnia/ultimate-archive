import { useRef, useEffect } from 'react';

export default function PagesView({
  pagesData,
  pagesCategories,
  pagesAccessTiers,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedPricing,
  setSelectedPricing,
  showOnlyFavorites,
  setShowOnlyFavorites,
  favorites,
  toggleFavorite,
  onBackToHome
}) {
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredPages = pagesData.filter(page => {
    // Category match
    const matchesCategory = selectedCategory === 'All' || 
      page.categories.includes(selectedCategory);

    // Pricing / Access match
    const matchesPricing = selectedPricing === 'All' || page.pricing === selectedPricing;

    // Search match
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || 
      page.name.toLowerCase().includes(q) || 
      page.description.toLowerCase().includes(q) ||
      page.type.toLowerCase().includes(q) ||
      page.categories.some(c => c.toLowerCase().includes(q));

    // Favorites match
    const matchesFavorites = !showOnlyFavorites || favorites.includes(page.id);

    return matchesCategory && matchesPricing && matchesSearch && matchesFavorites;
  });

  const getPricingClass = (pricing) => {
    if (!pricing) return "";
    if (pricing === 'Free') return 'pricing-free';
    if (pricing === 'Freemium') return 'pricing-partly';
    if (pricing === 'Metered Free') return 'pricing-metered';
    if (pricing === 'Subscription') return 'pricing-sub';
    return '';
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Documentation': return '📘';
      case 'Magazine': return '📰';
      case 'Journal': return '🔬';
      case 'Library': return '🏛️';
      case 'Essay Collection': return '📜';
      default: return '📑';
    }
  };

  const handleTagClick = (e, cat) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedCategory(cat);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedPricing('All');
    setShowOnlyFavorites(false);
  };

  return (
    <div className="view-container pages-theme-container">
      <header className="header pages-header">
        <div className="view-top-bar">
          <button className="back-home-btn" onClick={onBackToHome}>
            ← Back to Home
          </button>
          <div className="view-badge emerald-badge">
            📑 PAGESARCHIVE • {filteredPages.length} OF {pagesData.length}
          </div>
        </div>

        <h1 className="title pages-title">
          Pages<span className="emerald-text">Archive</span>
        </h1>
        <p className="subtitle">
          Press <kbd>/</kbd> to search. The curated index of official programming language documentation, 
          intellectual magazines, scientific journals, and philosophical essays.
        </p>
        
        <div className="filters-container">
          <div className="search-input-wrapper">
            <input 
              type="text" 
              ref={searchInputRef}
              className="filter-input search-bar pages-search-bar" 
              placeholder="Search documentation, magazines, or topics (e.g. Python, Aeon, Rust, New Yorker)... 🔍" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="input-clear-btn"
                onClick={() => setSearchQuery('')}
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <select 
            className="filter-input select-box"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {pagesCategories.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>

          <select 
            className="filter-input select-box"
            value={selectedPricing}
            onChange={(e) => setSelectedPricing(e.target.value)}
          >
            {pagesAccessTiers.map(tier => (
              <option key={tier} value={tier}>
                {tier === 'All' ? 'All Access Tiers' : tier}
              </option>
            ))}
          </select>

          <button 
            className={`filter-input fav-filter-btn ${showOnlyFavorites ? 'active' : ''}`}
            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
            title="Toggle Favorites"
          >
            {showOnlyFavorites ? `⭐ Favorites (${favorites.length})` : '☆ Show All'}
          </button>

          {(searchQuery || selectedCategory !== 'All' || selectedPricing !== 'All' || showOnlyFavorites) && (
            <button 
              className="filter-input reset-btn" 
              onClick={handleResetFilters}
              title="Reset all filters"
            >
              Reset ✕
            </button>
          )}
        </div>
      </header>

      <main className="main-content">
        <section className="tools-grid">
          {filteredPages.map(page => (
            <a 
              href={page.url || "#"} 
              target="_blank" 
              rel="noreferrer" 
              className="tool-card-link" 
              key={page.id}
            >
              <div className="tool-card pages-tool-card">
                <button 
                  className={`fav-btn ${favorites.includes(page.id) ? 'active' : ''}`}
                  onClick={(e) => toggleFavorite(e, page.id)}
                  title="Toggle Favorite"
                  type="button"
                >
                  {favorites.includes(page.id) ? '⭐' : '☆'}
                </button>
                <div className="tool-header">
                  <div className="tool-header-top">
                    <h3 className="tool-name">
                      <span className="type-icon pages-icon" title={page.type}>
                        {getTypeIcon(page.type)}
                      </span>
                      {page.name}
                    </h3>
                    <span className={`pricing-badge ${getPricingClass(page.pricing)}`}>
                      {page.pricing}
                    </span>
                  </div>
                </div>
                <p className="tool-desc">{page.description}</p>
                
                <div className="tool-footer pages-tool-footer">
                  <div className="category-tags">
                    {page.categories.map(cat => (
                      <span 
                        key={cat} 
                        className={`tag pages-tag ${cat === selectedCategory ? 'highlight' : ''}`}
                        onClick={(e) => handleTagClick(e, cat)}
                        title={`Filter by ${cat}`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <span className="visit-pill pages-visit-pill">
                    Read ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
          {filteredPages.length === 0 && (
            <div className="no-results">
              <h3>No publications or documentation found matching your criteria.</h3>
              <p>Try adjusting your search query or selecting a different category/access filter.</p>
              <button className="reset-filter-btn" onClick={handleResetFilters}>
                Clear All Filters
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
