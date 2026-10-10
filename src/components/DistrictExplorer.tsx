import React, { useState, useMemo } from 'react';
import { Search, Compass, MapPin, ArrowRight, Filter } from 'lucide-react';
import { District, RevenueDivision } from '../types';
import { DISTRICTS } from '../data/districts';

interface DistrictExplorerProps {
  onSelectDistrict: (district: District) => void;
}

const DIVISIONS: { id: 'All' | RevenueDivision; label: string; count: number; description: string }[] = [
  { id: 'All', label: 'All Districts', count: 36, description: 'Complete 36 revenue districts across Maharashtra' },
  { id: 'Konkan', label: 'Konkan', count: 7, description: 'Maritime coastline, coconut gravies, kokum, fresh catch' },
  { id: 'Pune', label: 'Pune (Desh)', count: 5, description: 'Goda masala, wrestling broths, festive puran poli, jowar' },
  { id: 'Nashik', label: 'Nashik (Khandesh)', count: 5, description: 'Smoky Kala masala, fire-charred coconut, shev bhaji' },
  { id: 'Chhatrapati Sambhajinagar', label: 'Chhatrapati Sambhajinagar', count: 8, description: 'Deccan pulses, shengoli, mawa sweets, drought-resilient millets' },
  { id: 'Amravati', label: 'Amravati (Varhad)', count: 5, description: 'Varhadi coriander sambar vadi, patodi rassa, cotton belt meals' },
  { id: 'Nagpur', label: 'Nagpur (Vidarbha)', count: 6, description: '24-spice Saoji curries, morning tarri poha, fragrant Chinnor rice' }
];

export const DistrictExplorer: React.FC<DistrictExplorerProps> = ({ onSelectDistrict }) => {
  const [selectedDivision, setSelectedDivision] = useState<'All' | RevenueDivision>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDistricts = useMemo(() => {
    return DISTRICTS.filter((district) => {
      const matchesDivision = selectedDivision === 'All' || district.division === selectedDivision;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesDivision;

      const matchesName = district.name.toLowerCase().includes(q) || district.marathiName.includes(q);
      const matchesDish = district.famousDishes.some((d) => d.toLowerCase().includes(q));
      const matchesIngredient = district.ingredientsAndTechniques.heroIngredients.some((i) => i.toLowerCase().includes(q));
      const matchesDivisionName = district.division.toLowerCase().includes(q);

      return matchesDivision && (matchesName || matchesDish || matchesIngredient || matchesDivisionName);
    });
  }, [selectedDivision, searchQuery]);

  return (
    <section id="districts" className="py-16 sm:py-24 bg-[#F8F5EF] border-t border-[#352A23]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A44735] font-semibold">
            <Compass className="w-4 h-4" />
            <span>The Core Archive</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#352A23]">
            Explore Maharashtra by District
          </h2>
          <p className="text-sm sm:text-base text-[#352A23]/75 leading-relaxed font-normal">
            Covering all 36 administrative districts organised across 6 revenue divisions. Select any district to examine its native food heritage, signature spices, cooking techniques, and detailed recipe blogs.
          </p>
        </div>

        {/* Search & Division Filter Controls */}
        <div className="space-y-6 mb-12">
          
          {/* Live Search Input */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-[#72775B] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by district name, dish (e.g. Rassa, Shev Bhaji), or ingredient..."
              className="w-full pl-12 pr-10 py-3 bg-white border border-[#352A23]/20 rounded-lg text-sm text-[#352A23] placeholder:text-[#352A23]/40 focus:outline-none focus:border-[#A44735] focus:ring-1 focus:ring-[#A44735] transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#352A23]/50 hover:text-[#352A23] p-1 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Division Filter Buttons (Segmented Controls) */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {DIVISIONS.map((div) => {
              const isActive = selectedDivision === div.id;
              return (
                <button
                  key={div.id}
                  onClick={() => setSelectedDivision(div.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#352A23] text-white shadow-xs'
                      : 'bg-[#E9E0D3]/60 hover:bg-[#E9E0D3] text-[#352A23]/80 hover:text-[#352A23] border border-[#352A23]/10'
                  }`}
                >
                  <span>{div.label}</span>
                  <span className={`ml-1.5 text-[11px] ${isActive ? 'text-white/70' : 'text-[#72775B]'}`}>
                    ({div.count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Division Overview Summary */}
          {selectedDivision !== 'All' && (
            <div className="max-w-3xl mx-auto p-4 bg-[#E9E0D3]/30 border border-[#352A23]/10 rounded-lg text-center text-xs text-[#352A23]/80">
              <span className="font-semibold text-[#A44735]">
                {DIVISIONS.find((d) => d.id === selectedDivision)?.label} Division:
              </span>{' '}
              {DIVISIONS.find((d) => d.id === selectedDivision)?.description}
            </div>
          )}

        </div>

        {/* Results Count Strip */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#352A23]/60 font-medium">
          <span>
            Showing {filteredDistricts.length} of 36 districts
            {selectedDivision !== 'All' && ` in ${selectedDivision} Division`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          <span className="hidden sm:inline text-[#72775B]">
            Click any district to view dedicated culinary archive
          </span>
        </div>

        {/* District Grid (36 Districts) */}
        {filteredDistricts.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-lg border border-[#352A23]/15 space-y-3">
            <Compass className="w-8 h-8 text-[#A44735] mx-auto opacity-70" />
            <h3 className="font-serif text-lg font-medium text-[#352A23]">No districts found</h3>
            <p className="text-xs text-[#352A23]/70">
              No district matched your search "{searchQuery}". Try searching for "Kolhapur", "Misal", "Kokum", or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDivision('All');
              }}
              className="mt-2 text-xs font-semibold text-[#A44735] underline cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDistricts.map((district) => (
              <div
                key={district.id}
                onClick={() => onSelectDistrict(district)}
                className="group cursor-pointer bg-white border border-[#352A23]/10 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#A44735]/40 flex flex-col justify-between"
              >
                {/* District Card Header & Image */}
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-[#E9E0D3]">
                    <img
                      src={district.image}
                      alt={`${district.name} food`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#352A23]/85 backdrop-blur-xs text-white text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-medium">
                      {district.division}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-lg font-bold text-[#352A23] group-hover:text-[#A44735] transition-colors">
                        {district.name}
                      </h3>
                      <span className="font-serif text-xs text-[#72775B] font-medium">
                        {district.marathiName}
                      </span>
                    </div>

                    <p className="text-xs text-[#352A23]/70 line-clamp-2 leading-relaxed">
                      {district.tagline}
                    </p>

                    {/* Top 3 Dishes List */}
                    <div className="pt-2 border-t border-[#352A23]/5 space-y-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#72775B] font-semibold block">
                        Signature Specialities
                      </span>
                      <div className="text-xs text-[#352A23]/80 line-clamp-2 leading-snug">
                        {district.famousDishes.slice(0, 3).join(', ')}
                        {district.famousDishes.length > 3 && '...'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="px-5 py-3 border-t border-[#352A23]/10 bg-[#F8F5EF]/50 flex items-center justify-between text-xs font-medium text-[#A44735] group-hover:bg-[#E9E0D3]/30 transition-colors">
                  <span>Explore District Page</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
