import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, MapPin, Utensils, ArrowRight, Sparkles } from 'lucide-react';
import { District, Recipe } from '../types';
import { DISTRICTS } from '../data/districts';
import { RECIPES } from '../data/recipes';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDistrict: (district: District) => void;
  onSelectRecipe: (recipe: Recipe) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectDistrict,
  onSelectRecipe
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Parent triggers open
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return { districts: [], recipes: [], dishes: [] };

    const matchingDistricts = DISTRICTS.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.marathiName.includes(q) ||
        d.division.toLowerCase().includes(q) ||
        d.famousDishes.some((dish) => dish.toLowerCase().includes(q)) ||
        d.ingredientsAndTechniques.heroIngredients.some((ing) => ing.toLowerCase().includes(q))
    ).slice(0, 6);

    const matchingRecipes = RECIPES.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.marathiTitle.includes(q) ||
        r.districtName.toLowerCase().includes(q) ||
        r.ingredients.some((i) => i.name.toLowerCase().includes(q))
    ).slice(0, 4);

    return {
      districts: matchingDistricts,
      recipes: matchingRecipes
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 animate-in fade-in duration-150">
      <div className="bg-[#F8F5EF] w-full max-w-2xl rounded-xl shadow-2xl border border-[#352A23]/20 overflow-hidden flex flex-col">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#352A23]/10 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#A44735] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all 36 districts, regional dishes, or ingredients..."
            className="w-full bg-transparent text-sm text-[#352A23] placeholder:text-[#352A23]/40 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#352A23]/50 hover:text-[#352A23] p-1 cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#352A23]/50 hover:text-[#352A23] hover:bg-[#352A23]/10 transition-colors cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {!query ? (
            <div className="py-8 text-center space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#72775B] font-semibold block">
                Quick Explorer
              </span>
              <p className="text-xs text-[#352A23]/60">
                Type any district name (e.g. Kolhapur, Nagpur, Ratnagiri, Jalgaon), dish (e.g. Rassa, Shev Bhaji, Modak, Misal), or ingredient (e.g. Kokum, Goda Masala).
              </p>
              <div className="pt-3 flex flex-wrap justify-center gap-2">
                {['Kolhapur', 'Nagpur', 'Sindhudurg', 'Jalgaon', 'Solapur', 'Pune', 'Tambda Rassa', 'Saoji', 'Modak'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-2.5 py-1 bg-white hover:bg-[#E9E0D3] border border-[#352A23]/10 rounded text-xs text-[#352A23] transition-colors cursor-pointer"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : (
            <>
              {/* Matching Districts */}
              {searchResults.districts.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#72775B] font-semibold px-2 block">
                    Districts ({searchResults.districts.length})
                  </span>
                  <div className="space-y-1">
                    {searchResults.districts.map((d) => (
                      <div
                        key={d.id}
                        onClick={() => {
                          onSelectDistrict(d);
                          onClose();
                        }}
                        className="p-3 bg-white hover:bg-[#E9E0D3]/50 border border-[#352A23]/10 rounded-lg cursor-pointer flex items-center justify-between transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-[#A44735] shrink-0" />
                          <div>
                            <div className="text-sm font-semibold text-[#352A23] group-hover:text-[#A44735] transition-colors">
                              {d.name}{' '}
                              <span className="font-serif text-xs text-[#72775B] font-normal">
                                ({d.marathiName})
                              </span>
                            </div>
                            <div className="text-xs text-[#352A23]/60">
                              {d.division} Division · {d.famousDishes.slice(0, 2).join(', ')}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#352A23]/40 group-hover:text-[#A44735] group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matching Recipes */}
              {searchResults.recipes.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#A44735] font-semibold px-2 block">
                    Recipe Articles ({searchResults.recipes.length})
                  </span>
                  <div className="space-y-1">
                    {searchResults.recipes.map((r) => (
                      <div
                        key={r.id}
                        onClick={() => {
                          onSelectRecipe(r);
                          onClose();
                        }}
                        className="p-3 bg-white hover:bg-[#E9E0D3]/50 border border-[#352A23]/10 rounded-lg cursor-pointer flex items-center justify-between transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <Utensils className="w-4 h-4 text-[#72775B] shrink-0" />
                          <div>
                            <div className="text-sm font-semibold text-[#352A23] group-hover:text-[#A44735] transition-colors">
                              {r.title}
                            </div>
                            <div className="text-xs text-[#352A23]/60">
                              {r.districtName} · {r.category} · {r.dietary}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#352A23]/40 group-hover:text-[#A44735] group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {searchResults.districts.length === 0 && searchResults.recipes.length === 0 && (
                <div className="py-8 text-center space-y-1">
                  <p className="text-sm font-medium text-[#352A23]">No results found for "{query}"</p>
                  <p className="text-xs text-[#352A23]/60">
                    Try another search term or check spelling.
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#E9E0D3]/30 border-t border-[#352A23]/10 text-center text-[11px] text-[#352A23]/60 flex items-center justify-between px-4">
          <span>Search spans 36 districts, 6 divisions & authentic recipes</span>
          <kbd className="bg-white/80 px-2 py-0.5 rounded border border-[#352A23]/15 font-mono text-[10px]">
            ESC to close
          </kbd>
        </div>

      </div>
    </div>
  );
};
