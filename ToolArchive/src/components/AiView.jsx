import { useRef, useEffect } from 'react';

export default function AiView({
  aiTools,
  aiCategories,
  aiPricingTiers,
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

  const filteredAi = aiTools.filter(tool => {
    // Category match
    const matchesCategory = selectedCategory === 'All' || 
      tool.categories.includes(selectedCategory);

    // Pricing match
    let matchesPricing = true;
    if (selectedPricing !== 'All') {
      if (selectedPricing === 'Free') {
        matchesPricing = tool.pricing === 'Free';
      } else if (selectedPricing === 'Freemium') {
        matchesPricing = tool.pricing === 'Freemium';
      } else if (selectedPricing === 'Limited Prompts') {
        matchesPricing = tool.pricing.includes('Limited');
      } else if (selectedPricing === 'Subscription') {
        matchesPricing = tool.pricing === 'Subscription';
      } else {
        matchesPricing = tool.pricing === selectedPricing;
      }
    }

    // Search match
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || 
      tool.name.toLowerCase().includes(q) || 
      tool.description.toLowerCase().includes(q) ||
      tool.categories.some(c => c.toLowerCase().includes(q));

    // Favorites match
    const matchesFavorites = !showOnlyFavorites || favorites.includes(tool.id);

    return matchesCategory && matchesPricing && matchesSearch && matchesFavorites;
  });

  const getPricingClass = (pricing) => {
    if (!pricing) return "";
    if (pricing === 'Free' || (pricing.includes('Free') && pricing !== 'Freemium')) return 'pricing-free';
    if (pricing === 'Freemium') return 'pricing-partly';
    if (pricing.includes('Limited')) return 'pricing-limited';
    if (pricing === 'Subscription') return 'pricing-sub';
    return '';
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
    <div className="view-container ai-theme-container">
      <header className="header ai-header">
        <div className="view-top-bar">
          <button className="back-home-btn" onClick={onBackToHome}>
            ← Back to Home
          </button>
          <div className="view-badge purple-badge">
            🤖 MAPMYAI • {filteredAi.length} OF {aiTools.length}
          </div>
        </div>

        <h1 className="title ai-title">MapMyAI</h1>
        <p className="subtitle">Press <kbd>/</kbd> to search. Discover and explore the artificial intelligence ecosystem.</p>
        
        <div className="filters-container">
          <div className="search-input-wrapper">
            <input 
              type="text" 
              ref={searchInputRef}
              className="filter-input search-bar ai-search-bar" 
              placeholder="Search AI by name, prompt, or task (e.g. ChatGPT, Image, Voice)... 🔍" 
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
            {aiCategories.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>

          <select 
            className="filter-input select-box"
            value={selectedPricing}
            onChange={(e) => setSelectedPricing(e.target.value)}
          >
            {aiPricingTiers.map(tier => (
              <option key={tier} value={tier}>
                {tier === 'All' ? 'All Pricing Types' : tier}
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
          {filteredAi.map(tool => (
            <a 
              href={tool.url || "#"} 
              target="_blank" 
              rel="noreferrer" 
              className="tool-card-link" 
              key={tool.id}
            >
              <div className="tool-card ai-tool-card">
                <button 
                  className={`fav-btn ${favorites.includes(tool.id) ? 'active' : ''}`}
                  onClick={(e) => toggleFavorite(e, tool.id)}
                  title="Toggle Favorite"
                  type="button"
                >
                  {favorites.includes(tool.id) ? '⭐' : '☆'}
                </button>
                <div className="tool-header">
                  <div className="tool-header-top">
                    <h3 className="tool-name">
                      <span className="type-icon ai-icon" title="Artificial Intelligence Tool">
                        🤖
                      </span>
                      {tool.name}
                    </h3>
                    <span className={`pricing-badge ${getPricingClass(tool.pricing)}`}>
                      {tool.pricing}
                    </span>
                  </div>
                </div>
                <p className="tool-desc">{tool.description}</p>
                
                <div className="tool-footer ai-tool-footer">
                  <div className="category-tags">
                    {tool.categories.map(cat => (
                      <span 
                        key={cat} 
                        className={`tag ai-tag ${cat === selectedCategory ? 'highlight' : ''}`}
                        onClick={(e) => handleTagClick(e, cat)}
                        title={`Filter by ${cat}`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <span className="visit-pill">
                    Visit ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
          {filteredAi.length === 0 && (
            <div className="no-results">
              <h3>No AI platforms found matching your criteria.</h3>
              <p>Try adjusting your search query or selecting a different category/pricing filter.</p>
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
