import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroductionSection } from './components/IntroductionSection';
import { FeaturedStories } from './components/FeaturedStories';
import { DistrictExplorer } from './components/DistrictExplorer';
import { DistrictDetailView } from './components/DistrictDetailView';
import { RecipesIndexSection } from './components/RecipesIndexSection';
import { RecipeDetailView } from './components/RecipeDetailView';
import { SeasonalSection } from './components/SeasonalSection';
import { AboutSection } from './components/AboutSection';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { District, Recipe } from './types';
import { DISTRICTS } from './data/districts';
import { RECIPES } from './data/recipes';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'district' | 'recipe'>('home');
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Global keyboard shortcut for Cmd+K / Ctrl+K search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigateToSection = (sectionId: string) => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleSelectDistrict = (district: District) => {
    setSelectedDistrict(district);
    setActiveView('district');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDistrictByName = (districtName: string) => {
    const found = DISTRICTS.find(
      (d) => d.name.toLowerCase() === districtName.toLowerCase() || d.id === districtName.toLowerCase().replace(/\s+/g, '-')
    );
    if (found) {
      setSelectedDistrict(found);
      setActiveView('district');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setActiveView('recipe');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDistricts = () => {
    setActiveView('home');
    setTimeout(() => {
      const el = document.getElementById('districts');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleBackFromRecipe = () => {
    if (selectedDistrict) {
      setActiveView('district');
    } else {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById('recipes');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#352A23] flex flex-col font-sans selection:bg-[#A44735]/20 selection:text-[#352A23]">
      
      {/* Top Editorial Navbar */}
      <Navbar
        onNavigate={handleNavigateToSection}
        onOpenSearch={() => setSearchModalOpen(true)}
        activeView={activeView}
        onBackToHome={() => {
          setActiveView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            {/* Section A & B: Hero */}
            <Hero
              onExploreDistricts={() => handleNavigateToSection('districts')}
              onExploreStories={() => handleNavigateToSection('stories')}
            />

            {/* Section C: Introduction */}
            <IntroductionSection />

            {/* Section D: Featured Food Stories */}
            <FeaturedStories onSelectDistrictByName={handleSelectDistrictByName} />

            {/* Section E: Explore Maharashtra by District (All 36 Districts) */}
            <DistrictExplorer onSelectDistrict={handleSelectDistrict} />

            {/* Recipes Hub Section */}
            <RecipesIndexSection onSelectRecipe={handleSelectRecipe} />

            {/* Section F: Seasonal and Regional Food */}
            <SeasonalSection />

            {/* Section G: About the Project */}
            <AboutSection />
          </>
        )}

        {/* Dedicated District Page View */}
        {activeView === 'district' && selectedDistrict && (
          <DistrictDetailView
            district={selectedDistrict}
            onBack={handleBackToDistricts}
            onSelectRecipe={handleSelectRecipe}
            onSelectDistrictByName={handleSelectDistrictByName}
          />
        )}

        {/* Dedicated Recipe Article Page View */}
        {activeView === 'recipe' && selectedRecipe && (
          <RecipeDetailView
            recipe={selectedRecipe}
            onBack={handleBackFromRecipe}
            onSelectRecipe={handleSelectRecipe}
            onNavigateToDistrict={(districtId) => {
              const d = DISTRICTS.find((dist) => dist.id === districtId);
              if (d) handleSelectDistrict(d);
            }}
          />
        )}
      </main>

      {/* Section H: Footer */}
      <Footer onNavigate={handleNavigateToSection} />

      {/* Instant Live Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectDistrict={handleSelectDistrict}
        onSelectRecipe={handleSelectRecipe}
      />

    </div>
  );
}
