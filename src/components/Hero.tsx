import React from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/assets';

interface HeroProps {
  onExploreDistricts: () => void;
  onExploreStories: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreDistricts, onExploreStories }) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Magazine Editorial Typography */}
          <div className="lg:col-span-6 space-y-6 lg:pr-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#72775B] font-semibold">
              <span className="w-6 h-px bg-[#72775B]/40" />
              <span>A Culinary Archive of 36 Districts</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#352A23] leading-[1.15] text-balance">
              Every District Has a Taste.
            </h1>

            <p className="text-base sm:text-lg text-[#352A23]/80 leading-relaxed font-normal max-w-xl">
              Discover Maharashtra through the food we cook, the flavours we inherit, and the stories we share. From coastal coconut curries to fiery Vidarbha Saoji broths and sweet Desh puran polis.
            </p>

            {/* Restrained CTAs: 1 Primary + 1 Secondary Text Link */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <button
                onClick={onExploreDistricts}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#A44735] hover:bg-[#8e3a2b] text-white text-sm font-medium rounded-md transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                <Compass className="w-4 h-4" />
                <span>Explore the Districts</span>
              </button>

              <button
                onClick={onExploreStories}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#352A23] hover:text-[#A44735] underline underline-offset-4 decoration-[#352A23]/30 hover:decoration-[#A44735] transition-colors cursor-pointer whitespace-nowrap py-2"
              >
                <span>Discover Our Food Stories</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Editorial Metadata Strip (Zero pills) */}
            <div className="pt-6 border-t border-[#352A23]/10 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#352A23]/70 font-medium">
              <span>6 Revenue Divisions</span>
              <span aria-hidden="true">·</span>
              <span>36 Complete Districts</span>
              <span aria-hidden="true">·</span>
              <span>Heirloom Family Recipes</span>
              <span aria-hidden="true">·</span>
              <span>Zero-Waste Culinary Traditions</span>
            </div>
          </div>

          {/* Right Column: Editorial Hero Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-[#352A23]/15 shadow-sm bg-[#E9E0D3]/40 group">
              <img
                src={ASSETS.heroThali}
                alt="Authentic traditional Maharashtrian Thali with Puran Poli, Tambda Rassa, Bhakri, and Solkadhi"
                className="w-full h-auto aspect-16/10 object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#352A23]/80 via-[#352A23]/40 to-transparent text-white">
                <p className="text-xs font-serif italic tracking-wide text-white/90">
                  Fig. 1 — Heirloom brass thali with Puran Poli, Tambda Rassa, Jowar Bhakri, and pink Solkadhi.
                </p>
                <p className="text-[11px] uppercase tracking-wider text-white/70 mt-0.5">
                  The quintessential confluence of Western Maharashtra and Konkan flavours.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
