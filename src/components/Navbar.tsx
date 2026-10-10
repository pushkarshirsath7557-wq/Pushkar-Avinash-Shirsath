import React, { useState } from 'react';
import { Search, Menu, X, Compass, BookOpen, Utensils, Info } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenSearch: () => void;
  activeView: 'home' | 'district' | 'recipe';
  onBackToHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  onOpenSearch,
  activeView,
  onBackToHome
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (activeView !== 'home' && onBackToHome) {
      onBackToHome();
      setTimeout(() => {
        onNavigate(sectionId);
      }, 100);
    } else {
      onNavigate(sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F5EF]/95 backdrop-blur-md border-b border-[#352A23]/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => {
              if (onBackToHome) onBackToHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left group cursor-pointer focus:outline-none"
          >
            <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#352A23] group-hover:text-[#A44735] transition-colors whitespace-nowrap">
              MAHARASHTRA ON A PLATE
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-[#72775B] font-medium">
              Every District Has a Taste
            </span>
          </button>

          {/* Zone 2: Navigation Links (Single Line) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#352A23]/80">
            <button
              onClick={() => handleNavClick('hero')}
              className="hover:text-[#A44735] transition-colors whitespace-nowrap py-1 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('districts')}
              className="hover:text-[#A44735] transition-colors whitespace-nowrap py-1 cursor-pointer"
            >
              Explore Districts
            </button>
            <button
              onClick={() => handleNavClick('stories')}
              className="hover:text-[#A44735] transition-colors whitespace-nowrap py-1 cursor-pointer"
            >
              Food Stories
            </button>
            <button
              onClick={() => handleNavClick('recipes')}
              className="hover:text-[#A44735] transition-colors whitespace-nowrap py-1 cursor-pointer"
            >
              Recipes
            </button>
            <button
              onClick={() => handleNavClick('seasonal')}
              className="hover:text-[#A44735] transition-colors whitespace-nowrap py-1 cursor-pointer"
            >
              Seasonal Food
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-[#A44735] transition-colors whitespace-nowrap py-1 cursor-pointer"
            >
              About
            </button>
          </nav>

          {/* Zone 3: Search Action & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSearch}
              aria-label="Search districts and recipes"
              className="flex items-center gap-2 text-xs font-medium text-[#352A23] hover:text-[#A44735] bg-[#E9E0D3]/50 hover:bg-[#E9E0D3] border border-[#352A23]/10 px-3 py-2 rounded-md transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4 text-[#A44735]" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden lg:inline text-[10px] bg-white/70 px-1.5 py-0.5 rounded text-[#352A23]/60 border border-[#352A23]/10 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#352A23] hover:text-[#A44735] focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#352A23]/10 bg-[#F8F5EF] px-5 py-4 space-y-3">
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 w-full text-left py-2 text-[#352A23] font-medium hover:text-[#A44735]"
          >
            <span>Home</span>
          </button>
          <button
            onClick={() => handleNavClick('districts')}
            className="flex items-center gap-3 w-full text-left py-2 text-[#352A23] font-medium hover:text-[#A44735]"
          >
            <Compass className="w-4 h-4 text-[#A44735]" />
            <span>Explore Districts (All 36)</span>
          </button>
          <button
            onClick={() => handleNavClick('stories')}
            className="flex items-center gap-3 w-full text-left py-2 text-[#352A23] font-medium hover:text-[#A44735]"
          >
            <BookOpen className="w-4 h-4 text-[#A44735]" />
            <span>Food Stories</span>
          </button>
          <button
            onClick={() => handleNavClick('recipes')}
            className="flex items-center gap-3 w-full text-left py-2 text-[#352A23] font-medium hover:text-[#A44735]"
          >
            <Utensils className="w-4 h-4 text-[#A44735]" />
            <span>Traditional Recipes</span>
          </button>
          <button
            onClick={() => handleNavClick('seasonal')}
            className="flex items-center gap-3 w-full text-left py-2 text-[#352A23] font-medium hover:text-[#A44735]"
          >
            <span>Seasonal Food Calendar</span>
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="flex items-center gap-3 w-full text-left py-2 text-[#352A23] font-medium hover:text-[#A44735]"
          >
            <Info className="w-4 h-4 text-[#A44735]" />
            <span>About The Project</span>
          </button>
        </div>
      )}
    </header>
  );
};
