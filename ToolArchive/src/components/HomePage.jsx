import { useState, useRef, useEffect } from 'react';

export default function HomePage({ 
  onSelectView, 
  toolsData, 
  aiTools,
  setToolsSearch,
  setAiSearch,
  setToolsCategory,
  setAiCategory 
}) {
  const [globalSearch, setGlobalSearch] = useState('');
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

  const trimmedQuery = globalSearch.trim().toLowerCase();

  const matchingTools = trimmedQuery 
    ? toolsData.filter(t => 
        t.name.toLowerCase().includes(trimmedQuery) || 
        t.description.toLowerCase().includes(trimmedQuery) ||
        t.categories.some(c => c.toLowerCase().includes(trimmedQuery))
      ).slice(0, 4)
    : [];

  const matchingAi = trimmedQuery
    ? aiTools.filter(t => 
        t.name.toLowerCase().includes(trimmedQuery) || 
        t.description.toLowerCase().includes(trimmedQuery) ||
        t.categories.some(c => c.toLowerCase().includes(trimmedQuery))
      ).slice(0, 4)
    : [];

  const totalMatches = matchingTools.length + matchingAi.length;

  const handleLaunchTools = (query = '', category = 'All') => {
    if (query) setToolsSearch(query);
    if (category) setToolsCategory(category);
    onSelectView('tools');
  };

  const handleLaunchAi = (query = '', category = 'All') => {
    if (query) setAiSearch(query);
    if (category) setAiCategory(category);
    onSelectView('ai');
  };

  return (
    <div className="home-page-container">
      {/* Hero Header */}
      <section className="home-hero">
        <div className="terminal-chip">
          <span className="chip-prefix">//</span>
          <span className="chip-text">ULTIMATE DIRECTORY SUITE</span>
          <span className="chip-indicator">●</span>
        </div>

        <h1 className="home-title">
          <span className="title-bracket">&gt;</span> ULTIMATE ARCHIVE
        </h1>

        <p className="home-subtitle">
          Two comprehensive directories unified into one sleek cyberpunk terminal.
          Access over <strong>{toolsData.length + aiTools.length}</strong> curated software utilities, dev tools, and AI platforms.
        </p>

        {/* Global Instant Search */}
        <div className="global-search-wrapper">
          <div className="global-search-box">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              ref={searchInputRef}
              className="global-search-input"
              placeholder="Search across all tools and AI models... (Press '/' to focus)"
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
            />
            {globalSearch && (
              <button 
                className="clear-search-btn"
                onClick={() => setGlobalSearch('')}
                title="Clear search"
              >
                ✕
              </button>
            )}
            <kbd className="search-shortcut-kbd">/</kbd>
          </div>

          {/* Quick Search Dropdown Results */}
          {trimmedQuery && (
            <div className="global-search-results">
              <div className="results-meta-header">
                <span>FOUND {totalMatches} TOP MATCHES FOR "{globalSearch}"</span>
                <span className="results-tip">Click any item to visit or jump to full archive</span>
              </div>

              {totalMatches === 0 ? (
                <div className="no-quick-results">
                  <p>No tools or AI platforms matched "{globalSearch}". Try another term.</p>
                </div>
              ) : (
                <div className="results-columns">
                  {/* Matching Tools */}
                  <div className="results-col">
                    <div className="results-col-header">
                      <span className="col-badge tools-col-badge">🧰 TOOLS ARCHIVE</span>
                      <button 
                        className="see-all-btn"
                        onClick={() => handleLaunchTools(globalSearch)}
                      >
                        View all in Tools →
                      </button>
                    </div>
                    {matchingTools.length === 0 ? (
                      <p className="col-empty">No tools matched</p>
                    ) : (
                      matchingTools.map(item => (
                        <div key={item.id} className="quick-result-card">
                          <div className="quick-card-top">
                            <a 
                              href={item.url} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="quick-card-name"
                            >
                              {item.name} ↗
                            </a>
                            <span className="quick-price">{item.pricing}</span>
                          </div>
                          <p className="quick-card-desc">{item.description}</p>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Matching AI */}
                  <div className="results-col">
                    <div className="results-col-header">
                      <span className="col-badge ai-col-badge">🤖 MAPMYAI</span>
                      <button 
                        className="see-all-btn"
                        onClick={() => handleLaunchAi(globalSearch)}
                      >
                        View all in AI →
                      </button>
                    </div>
                    {matchingAi.length === 0 ? (
                      <p className="col-empty">No AI models matched</p>
                    ) : (
                      matchingAi.map(item => (
                        <div key={item.id} className="quick-result-card">
                          <div className="quick-card-top">
                            <a 
                              href={item.url} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="quick-card-name ai-name"
                            >
                              {item.name} ↗
                            </a>
                            <span className="quick-price">{item.pricing}</span>
                          </div>
                          <p className="quick-card-desc">{item.description}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Main Portals Grid */}
      <section className="portals-section">
        <div className="portals-grid">
          {/* CARD 1: ToolArchive */}
          <div className="portal-card tools-portal-card" onClick={() => handleLaunchTools()}>
            <div className="portal-glow-line tools-glow"></div>
            <div className="portal-header">
              <div className="portal-icon-box tools-icon-box">
                <span className="portal-icon">🧰</span>
              </div>
              <div className="portal-badges">
                <span className="portal-status-badge">DIRECTORY 01</span>
                <span className="portal-count-badge cyan-badge">{toolsData.length}+ TOOLS</span>
              </div>
            </div>

            <h2 className="portal-title">
              Tool<span className="cyan-text">Archive</span>
            </h2>

            <p className="portal-desc">
              Discover the finest software tools, development utilities, browsers, creative suites, 
              and startup launchpads categorized across 90+ professional disciplines.
            </p>

            <ul className="portal-feature-list">
              <li>
                <span className="feature-check cyan-check">✓</span>
                <span>Browsers, Code Editors, 3D Suites &amp; Creative Softwares</span>
              </li>
              <li>
                <span className="feature-check cyan-check">✓</span>
                <span>DevOps, Startup Builders, Databases &amp; UX Systems</span>
              </li>
              <li>
                <span className="feature-check cyan-check">✓</span>
                <span>Filter by Fully Free, Freemium, or Subscription</span>
              </li>
              <li>
                <span className="feature-check cyan-check">✓</span>
                <span>Offline bookmarking &amp; keyboard-driven search</span>
              </li>
            </ul>

            <div className="portal-popular-tags">
              <span className="tags-label">Popular Categories:</span>
              <div className="tag-chips">
                {['Coding', 'Graphic Design', 'Game Dev', 'UI/UX Design', 'Media', 'DevOps'].map(tag => (
                  <span 
                    key={tag} 
                    className="portal-chip"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLaunchTools('', tag);
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <button 
              className="portal-action-btn tools-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleLaunchTools();
              }}
            >
              <span>ENTER TOOLS ARCHIVE</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>

          {/* CARD 2: MapMyAI */}
          <div className="portal-card ai-portal-card" onClick={() => handleLaunchAi()}>
            <div className="portal-glow-line ai-glow"></div>
            <div className="portal-header">
              <div className="portal-icon-box ai-icon-box">
                <span className="portal-icon">🤖</span>
              </div>
              <div className="portal-badges">
                <span className="portal-status-badge">DIRECTORY 02</span>
                <span className="portal-count-badge purple-badge">{aiTools.length}+ AI MODELS</span>
              </div>
            </div>

            <h2 className="portal-title">
              MapMy<span className="purple-text">AI</span>
            </h2>

            <p className="portal-desc">
              The definitive ecosystem map of modern Artificial Intelligence. 
              Find and filter the top LLMs, image creators, neural voice engines, dev copilots, and autonomous agents.
            </p>

            <ul className="portal-feature-list">
              <li>
                <span className="feature-check purple-check">✓</span>
                <span>LLMs, Image Synthesizers, Voice Cloning &amp; Video Generators</span>
              </li>
              <li>
                <span className="feature-check purple-check">✓</span>
                <span>Dev Copilots, Data Analysis, Research &amp; Productivity</span>
              </li>
              <li>
                <span className="feature-check purple-check">✓</span>
                <span>Filter by Free, Freemium, Limited Prompts &amp; Paid</span>
              </li>
              <li>
                <span className="feature-check purple-check">✓</span>
                <span>Direct portal links and categorized capability tags</span>
              </li>
            </ul>

            <div className="portal-popular-tags">
              <span className="tags-label">Popular Categories:</span>
              <div className="tag-chips">
                {['Text', 'Image', 'Code', 'Video', 'Audio', 'Productivity'].map(cat => (
                  <span 
                    key={cat} 
                    className="portal-chip purple-chip"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLaunchAi('', cat);
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <button 
              className="portal-action-btn ai-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleLaunchAi();
              }}
            >
              <span>ENTER MAPMYAI</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="home-stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">{toolsData.length + aiTools.length}</span>
            <span className="stat-label">TOTAL CURATED ENTRIES</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{toolsData.length}</span>
            <span className="stat-label">SOFTWARE &amp; DEV TOOLS</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{aiTools.length}</span>
            <span className="stat-label">ARTIFICIAL INTELLIGENCE ENGINES</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">FREE / FREEMIUM FRIENDLY</span>
          </div>
        </div>
      </section>

      {/* Terminal Footer */}
      <footer className="home-footer">
        <p>&gt; ULTIMATE ARCHIVE TERMINAL — POWERED BY TOOLARCHIVE &amp; MAPMYAI DATA</p>
      </footer>
    </div>
  );
}
