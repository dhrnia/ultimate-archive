import { useState, useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ToolsView from './components/ToolsView';
import AiView from './components/AiView';

import { toolsData, allCategories, pricingTiers } from './data';
import { aiTools, aiCategories, aiPricingTiers } from './aiData';

function getHashView() {
  const hash = window.location.hash.toLowerCase().replace('#', '').replace('/', '');
  if (hash === 'tools' || hash === 'toolarchive') return 'tools';
  if (hash === 'ai' || hash === 'mapmyai') return 'ai';
  return 'home';
}

function App() {
  const [activeView, setActiveView] = useState(getHashView);

  // Tools Archive Filter State
  const [toolsSearch, setToolsSearch] = useState('');
  const [toolsCategory, setToolsCategory] = useState('All');
  const [toolsPricing, setToolsPricing] = useState('All');
  const [toolsOnlyFavs, setToolsOnlyFavs] = useState(false);
  const [toolsFavorites, setToolsFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('toolArchiveFavorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // MapMyAI Filter State
  const [aiSearch, setAiSearch] = useState('');
  const [aiCategory, setAiCategory] = useState('All');
  const [aiPricing, setAiPricing] = useState('All');
  const [aiOnlyFavs, setAiOnlyFavs] = useState(false);
  const [aiFavorites, setAiFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('mapMyAiFavorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Synchronize tools favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('toolArchiveFavorites', JSON.stringify(toolsFavorites));
    } catch (e) {
      console.error(e);
    }
  }, [toolsFavorites]);

  // Synchronize AI favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('mapMyAiFavorites', JSON.stringify(aiFavorites));
    } catch (e) {
      console.error(e);
    }
  }, [aiFavorites]);

  // Synchronize active view with hash
  const changeView = (view) => {
    setActiveView(view);
    window.location.hash = view === 'home' ? '' : `#${view}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      setActiveView(getHashView());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Global Keyboard Navigation (when not typing in inputs)
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      const isInput = ['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement?.tagName);
      if (isInput) return;

      if (e.key === 'h' || e.key === 'H' || e.key === '1') {
        changeView('home');
      } else if (e.key === 't' || e.key === 'T' || e.key === '2') {
        changeView('tools');
      } else if (e.key === 'a' || e.key === 'A' || e.key === 'm' || e.key === 'M' || e.key === '3') {
        changeView('ai');
      } else if (e.key === 'Escape') {
        if (activeView !== 'home') {
          changeView('home');
        }
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [activeView]);

  const toggleToolsFavorite = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setToolsFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const toggleAiFavorite = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setAiFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  return (
    <div className="app-container">
      {/* Persistent Global Cyber Navbar */}
      <Navbar 
        activeView={activeView}
        setActiveView={changeView}
        toolsCount={toolsData.length}
        aiCount={aiTools.length}
      />

      {/* Dynamic View Content */}
      {activeView === 'home' && (
        <HomePage 
          onSelectView={changeView}
          toolsData={toolsData}
          aiTools={aiTools}
          setToolsSearch={setToolsSearch}
          setAiSearch={setAiSearch}
          setToolsCategory={setToolsCategory}
          setAiCategory={setAiCategory}
        />
      )}

      {activeView === 'tools' && (
        <ToolsView 
          toolsData={toolsData}
          allCategories={allCategories}
          pricingTiers={pricingTiers}
          searchQuery={toolsSearch}
          setSearchQuery={setToolsSearch}
          selectedCategory={toolsCategory}
          setSelectedCategory={setToolsCategory}
          selectedPricing={toolsPricing}
          setSelectedPricing={setToolsPricing}
          showOnlyFavorites={toolsOnlyFavs}
          setShowOnlyFavorites={setToolsOnlyFavs}
          favorites={toolsFavorites}
          toggleFavorite={toggleToolsFavorite}
          onBackToHome={() => changeView('home')}
        />
      )}

      {activeView === 'ai' && (
        <AiView 
          aiTools={aiTools}
          aiCategories={aiCategories}
          aiPricingTiers={aiPricingTiers}
          searchQuery={aiSearch}
          setSearchQuery={setAiSearch}
          selectedCategory={aiCategory}
          setSelectedCategory={setAiCategory}
          selectedPricing={aiPricing}
          setSelectedPricing={setAiPricing}
          showOnlyFavorites={aiOnlyFavs}
          setShowOnlyFavorites={setAiOnlyFavs}
          favorites={aiFavorites}
          toggleFavorite={toggleAiFavorite}
          onBackToHome={() => changeView('home')}
        />
      )}
    </div>
  );
}

export default App;
