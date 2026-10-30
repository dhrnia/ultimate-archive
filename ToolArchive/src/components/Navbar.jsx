export default function Navbar({ activeView, setActiveView, toolsCount, aiCount }) {
  return (
    <nav className="global-navbar">
      <div className="nav-container">
        <button 
          className="nav-brand-btn" 
          onClick={() => setActiveView('home')}
          title="Go to Home"
        >
          <span className="brand-prefix">&gt;</span>
          <span className="brand-title">ULTIMATE<span className="brand-highlight">ARCHIVE</span></span>
          <span className="brand-version">v2.0</span>
        </button>

        <div className="nav-links">
          <button 
            className={`nav-tab-btn ${activeView === 'home' ? 'active' : ''}`}
            onClick={() => setActiveView('home')}
          >
            <span className="nav-icon">⌂</span>
            <span className="nav-text">Home</span>
            <kbd className="nav-shortcut">H</kbd>
          </button>

          <button 
            className={`nav-tab-btn ${activeView === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveView('tools')}
          >
            <span className="nav-icon">🧰</span>
            <span className="nav-text">Tools Archive</span>
            <span className="nav-badge">{toolsCount}</span>
            <kbd className="nav-shortcut">T</kbd>
          </button>

          <button 
            className={`nav-tab-btn ${activeView === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveView('ai')}
          >
            <span className="nav-icon">🤖</span>
            <span className="nav-text">MapMyAI</span>
            <span className="nav-badge purple">{aiCount}</span>
            <kbd className="nav-shortcut">A</kbd>
          </button>
        </div>

        <div className="nav-status">
          <span className="status-dot"></span>
          <span className="status-text">SYSTEM ONLINE</span>
        </div>
      </div>
    </nav>
  );
}
