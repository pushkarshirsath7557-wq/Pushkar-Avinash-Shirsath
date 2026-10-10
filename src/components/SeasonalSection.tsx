import React, { useState } from 'react';
import { Calendar, Sun, CloudRain, Snowflake, Sparkles } from 'lucide-react';
import { SeasonalItem } from '../types';
import { SEASONAL_TRADITIONS } from '../data/seasonal';

export const SeasonalSection: React.FC = () => {
  const [activeSeason, setActiveSeason] = useState<string>('Monsoon');

  const currentItem = SEASONAL_TRADITIONS.find((s) => s.season === activeSeason) || SEASONAL_TRADITIONS[0];

  const seasonIcons: Record<string, React.ReactNode> = {
    Monsoon: <CloudRain className="w-4 h-4 text-[#72775B]" />,
    Summer: <Sun className="w-4 h-4 text-[#A44735]" />,
    Winter: <Snowflake className="w-4 h-4 text-[#352A23]" />,
    Festive: <Sparkles className="w-4 h-4 text-[#A44735]" />
  };

  return (
    <section id="seasonal" className="py-16 sm:py-24 bg-[#E9E0D3]/20 border-t border-[#352A23]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#72775B] font-semibold">
            <Calendar className="w-4 h-4" />
            <span>The Agricultural Calendar</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#352A23]">
            Seasonal & Regional Food Cycles
          </h2>
          <p className="text-sm sm:text-base text-[#352A23]/75 font-normal leading-relaxed">
            In Maharashtra, cooking is governed by nature’s calendar: torrential monsoon deluges, scorching summer mango winds, harvest winter bonfires, and ancient festive celebrations.
          </p>
        </div>

        {/* Season Selector Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {SEASONAL_TRADITIONS.map((item) => {
            const isActive = activeSeason === item.season;
            return (
              <button
                key={item.season}
                onClick={() => setActiveSeason(item.season)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#352A23] text-white shadow-xs'
                    : 'bg-white hover:bg-[#E9E0D3] text-[#352A23] border border-[#352A23]/15'
                }`}
              >
                {seasonIcons[item.season]}
                <span>{item.season}</span>
                <span className={`text-[10px] font-serif ${isActive ? 'text-white/80' : 'text-[#72775B]'}`}>
                  ({item.marathiName.split(' ')[0]})
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Season Display Card */}
        <div className="bg-white border border-[#352A23]/15 rounded-xl p-6 sm:p-10 shadow-xs max-w-4xl mx-auto space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#352A23]/10 pb-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#A44735] font-semibold">
                {currentItem.timing}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#352A23] mt-1">
                {currentItem.season} in Maharashtra
              </h3>
            </div>
            <span className="font-serif text-xl sm:text-2xl text-[#72775B]">
              {currentItem.marathiName}
            </span>
          </div>

          <p className="text-base sm:text-lg text-[#352A23]/80 leading-relaxed font-normal">
            {currentItem.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Hero Dishes */}
            <div className="p-5 bg-[#F8F5EF] border border-[#352A23]/10 rounded-lg space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#A44735] font-semibold block">
                Signature Seasonal Specialities
              </span>
              <ul className="text-xs sm:text-sm text-[#352A23]/85 space-y-2 list-disc list-inside">
                {currentItem.heroDishes.map((dish, i) => (
                  <li key={i}>{dish}</li>
                ))}
              </ul>
            </div>

            {/* Key Produce */}
            <div className="p-5 bg-[#F8F5EF] border border-[#352A23]/10 rounded-lg space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#72775B] font-semibold block">
                Key Harvest & Forest Produce
              </span>
              <ul className="text-xs sm:text-sm text-[#352A23]/85 space-y-2 list-disc list-inside">
                {currentItem.keyProduce.map((prod, i) => (
                  <li key={i}>{prod}</li>
                ))}
              </ul>
            </div>

          </div>

          <div className="p-4 bg-[#E9E0D3]/30 border-l-2 border-[#72775B] rounded-r-lg text-xs text-[#352A23]/80 space-y-1">
            <span className="font-semibold text-[#72775B] uppercase tracking-wider block">
              Ritual & Community Note
            </span>
            <p>{currentItem.culturalNote}</p>
          </div>

        </div>

      </div>
    </section>
  );
};
