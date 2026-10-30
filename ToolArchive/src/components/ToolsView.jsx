import { useRef, useEffect } from 'react';

export default function ToolsView({
  toolsData,
  allCategories,
  pricingTiers,
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

  const filteredTools = toolsData.filter(tool => {
    const matchesCategory = selectedCategory === 'All' || tool.categories.includes(selectedCategory);
    const matchesPricing = selectedPricing === 'All' || tool.pricing === selectedPricing;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.categories.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFavorites = !showOnlyFavorites || favorites.includes(tool.id);
    
    return matchesCategory && matchesPricing && matchesSearch && matchesFavorites;
  });

  const getPricingClass = (pricing) => {
    if (!pricing) return "";
    if (pricing.includes("Fully Free")) return "pricing-free";
    if (pricing.includes("Freemium")) return "pricing-partly";
    if (pricing.includes("Subscription")) return "pricing-sub";
    return "";
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
    <div className="view-container">
      <header className="header">
        <div className="view-top-bar">
          <button className="back-home-btn" onClick={onBackToHome}>
            ← Back to Home
          </button>
          <div className="view-badge cyan-badge">
            🧰 TOOLS ARCHIVE • {filteredTools.length} OF {toolsData.length}
          </div>
        </div>

        <h1 className="title">ToolArchive</h1>
        <p className="subtitle">Press <kbd>/</kbd> to search. Discover the best tools across multiple disciplines.</p>
        
        <div className="filters-container">
          <div className="search-input-wrapper">
            <input 
              type="text" 
              ref={searchInputRef}
              className="filter-input search-bar" 
              placeholder="Search resources by name or description... 🔍" 
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
            <option value="All">All Categories ({allCategories.length})</option>
            {allCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select 
            className="filter-input select-box"
            value={selectedPricing}
            onChange={(e) => setSelectedPricing(e.target.value)}
          >
            <option value="All">All Pricing</option>
            {pricingTiers.map(tier => (
              <option key={tier} value={tier}>{tier}</option>
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
          {filteredTools.map(tool => (
            <a 
              href={tool.url || "#"} 
              target="_blank" 
              rel="noreferrer" 
              className="tool-card-link" 
              key={tool.id}
            >
              <div className="tool-card">
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
                      <span className="type-icon" title={tool.type === "Website" ? "Website" : "Software Tool"}>
                        {tool.type === "Website" ? "🌐" : "🧰"}
                      </span>
                      {tool.name}
                    </h3>
                    <span className={`pricing-badge ${getPricingClass(tool.pricing)}`}>
                      {tool.pricing}
                    </span>
                  </div>
                </div>
                <p className="tool-desc">{tool.description}</p>
                
                <div className="tool-footer">
                  <div className="category-tags">
                    {tool.categories.map(cat => (
                      <span 
                        key={cat} 
                        className={`tag ${cat === selectedCategory ? 'highlight' : ''}`}
                        onClick={(e) => handleTagClick(e, cat)}
                        title={`Filter by ${cat}`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
          {filteredTools.length === 0 && (
            <div className="no-results">
              <h3>No resources found matching your criteria.</h3>
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
