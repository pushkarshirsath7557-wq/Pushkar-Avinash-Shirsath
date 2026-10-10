import React, { useState, useMemo } from 'react';
import { Utensils, ArrowRight, Flame, Clock } from 'lucide-react';
import { Recipe, DietaryType, MealCategory } from '../types';
import { RECIPES } from '../data/recipes';

interface RecipesIndexSectionProps {
  onSelectRecipe: (recipe: Recipe) => void;
}

export const RecipesIndexSection: React.FC<RecipesIndexSectionProps> = ({ onSelectRecipe }) => {
  const [dietaryFilter, setDietaryFilter] = useState<'All' | DietaryType>('All');
  const [categoryFilter, setCategoryFilter] = useState<'All' | MealCategory>('All');

  const filteredRecipes = useMemo(() => {
    return RECIPES.filter((recipe) => {
      const matchDietary = dietaryFilter === 'All' || recipe.dietary === dietaryFilter;
      const matchCategory = categoryFilter === 'All' || recipe.category === categoryFilter;
      return matchDietary && matchCategory;
    });
  }, [dietaryFilter, categoryFilter]);

  return (
    <section id="recipes" className="py-16 sm:py-24 bg-[#F8F5EF] border-t border-[#352A23]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-4 border-b border-[#352A23]/10">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#A44735] font-semibold mb-1">
              Tested Regional Kitchen Formulas
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#352A23]">
              Featured Recipe Articles
            </h2>
          </div>
          <p className="text-sm text-[#352A23]/70 max-w-md">
            Complete editorial guides with step-by-step methods, traditional cookware guidance, and interactive portion calculators.
          </p>
        </div>

        {/* Filter Controls (Segmented controls) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          
          {/* Dietary Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#352A23]/10 rounded-lg">
            {(['All', 'Vegetarian', 'Non-Vegetarian'] as const).map((diet) => (
              <button
                key={diet}
                onClick={() => setDietaryFilter(diet)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  dietaryFilter === diet
                    ? 'bg-[#352A23] text-white shadow-xs'
                    : 'text-[#352A23]/70 hover:text-[#352A23]'
                }`}
              >
                {diet}
              </button>
            ))}
          </div>

          {/* Meal Category Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#352A23]/10 rounded-lg overflow-x-auto max-w-full">
            {(['All', 'Breakfast', 'Main Course', 'Snacks', 'Dessert & Sweets'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  categoryFilter === cat
                    ? 'bg-[#A44735] text-white shadow-xs'
                    : 'text-[#352A23]/70 hover:text-[#352A23]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <article
              key={recipe.id}
              onClick={() => onSelectRecipe(recipe)}
              className="group cursor-pointer bg-white border border-[#352A23]/10 rounded-xl overflow-hidden hover:shadow-md hover:border-[#A44735] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-[#E9E0D3]">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#352A23]/85 text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded font-medium">
                    {recipe.districtName}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 text-[#352A23] text-[10px] font-medium px-2 py-0.5 rounded border border-[#352A23]/10">
                    {recipe.dietary}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#72775B] font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{recipe.totalTime}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#A44735] font-semibold">{recipe.spiceLevel}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#352A23] group-hover:text-[#A44735] transition-colors leading-snug">
                    {recipe.title}
                  </h3>

                  <p className="font-serif text-xs text-[#72775B] italic">
                    {recipe.marathiTitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#352A23]/70 line-clamp-3 leading-relaxed">
                    {recipe.introduction}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#352A23]/5 flex items-center justify-between text-xs font-medium text-[#A44735] mt-4">
                <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                  <span>View Recipe & Instructions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[11px] text-[#352A23]/40">
                  Serves {recipe.defaultServings}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
