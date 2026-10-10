import React, { useState } from 'react';
import { BookOpen, X, ArrowRight, Quote } from 'lucide-react';
import { FoodStory } from '../types';
import { FOOD_STORIES } from '../data/stories';

interface FeaturedStoriesProps {
  onSelectDistrictByName?: (districtName: string) => void;
}

export const FeaturedStories: React.FC<FeaturedStoriesProps> = ({ onSelectDistrictByName }) => {
  const [selectedStory, setSelectedStory] = useState<FoodStory | null>(null);

  return (
    <section id="stories" className="py-16 sm:py-24 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-[#352A23]/10">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#72775B] font-semibold mb-1">
              Curated Culinary Essays
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#352A23]">
              Featured Food Stories
            </h2>
          </div>
          <p className="text-sm text-[#352A23]/70 max-w-md">
            In-depth dispatches exploring how trade, ecology, community heritage, and climate shaped Maharashtra’s most iconic regional dishes.
          </p>
        </div>

        {/* 6 Stories Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FOOD_STORIES.map((story) => (
            <article
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="group cursor-pointer flex flex-col bg-white border border-[#352A23]/10 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#A44735]/40"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#E9E0D3]/40">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#352A23]/80 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded font-medium">
                  {story.districtName}
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#72775B] font-medium">
                    <span>{story.division} Division</span>
                    <span aria-hidden="true">·</span>
                    <span>{story.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#352A23] group-hover:text-[#A44735] transition-colors leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#352A23]/70 leading-relaxed line-clamp-3">
                    {story.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#352A23]/10 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#A44735] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] text-[#352A23]/50 italic">
                    {story.highlightDishes[0]}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Story Reading Modal / Drawer */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#F8F5EF] w-full max-w-3xl rounded-xl shadow-2xl border border-[#352A23]/20 overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#352A23]/10 bg-[#E9E0D3]/40">
              <div className="flex items-center gap-2 text-xs text-[#72775B] font-medium">
                <BookOpen className="w-4 h-4 text-[#A44735]" />
                <span>{selectedStory.districtName} · {selectedStory.division} Division</span>
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="p-1.5 rounded-md text-[#352A23]/60 hover:text-[#352A23] hover:bg-[#352A23]/10 transition-colors cursor-pointer"
                aria-label="Close story"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-semibold text-[#A44735] uppercase tracking-wider">
                  {selectedStory.readTime}
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#352A23] leading-snug">
                  {selectedStory.title}
                </h2>
                {selectedStory.marathiTitle && (
                  <p className="text-sm font-serif text-[#72775B] italic">
                    {selectedStory.marathiTitle}
                  </p>
                )}
              </div>

              {/* Story Photograph */}
              <div className="rounded-lg overflow-hidden border border-[#352A23]/10 aspect-16/9 bg-[#E9E0D3]">
                <img
                  src={selectedStory.image}
                  alt={selectedStory.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Pull Quote */}
              <blockquote className="my-6 py-4 px-6 bg-[#E9E0D3]/40 border-y border-[#352A23]/15 text-[#352A23] italic font-serif text-lg leading-relaxed flex gap-3">
                <Quote className="w-6 h-6 text-[#A44735] shrink-0" />
                <span>"{selectedStory.quote}"</span>
              </blockquote>

              {/* Body Paragraphs */}
              <div className="space-y-4 text-base text-[#352A23]/85 leading-relaxed font-normal">
                {selectedStory.body.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Key Associated Dishes */}
              <div className="pt-6 border-t border-[#352A23]/10 space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#72775B] font-semibold block">
                  Key Regional Dishes Associated
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedStory.highlightDishes.map((dish, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#E9E0D3] text-[#352A23] px-3 py-1.5 rounded font-medium"
                    >
                      {dish}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-[#352A23]/10 bg-[#E9E0D3]/30 flex items-center justify-between">
              <span className="text-xs text-[#352A23]/60">
                Maharashtra on a Plate · Editorial Archives
              </span>
              <button
                onClick={() => setSelectedStory(null)}
                className="px-4 py-2 bg-[#352A23] text-white text-xs font-medium rounded hover:bg-[#A44735] transition-colors cursor-pointer"
              >
                Close Story
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
