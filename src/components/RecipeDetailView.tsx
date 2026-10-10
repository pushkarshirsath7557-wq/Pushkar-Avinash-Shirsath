import React, { useState } from 'react';
import {
  ArrowLeft,
  Clock,
  Users,
  Flame,
  Printer,
  Sparkles,
  Info,
  CheckCircle,
  Bookmark,
  Share2,
  ChefHat
} from 'lucide-react';
import { Recipe } from '../types';
import { RECIPES } from '../data/recipes';

interface RecipeDetailViewProps {
  recipe: Recipe;
  onBack: () => void;
  onSelectRecipe: (recipe: Recipe) => void;
  onNavigateToDistrict?: (districtId: string) => void;
}

export const RecipeDetailView: React.FC<RecipeDetailViewProps> = ({
  recipe,
  onBack,
  onSelectRecipe,
  onNavigateToDistrict
}) => {
  // Interactive Servings State
  const [servings, setServings] = useState<number>(recipe.defaultServings);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('moap_saved_recipes');
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) && parsed.includes(recipe.id);
      }
    } catch (e) {}
    return false;
  });

  const handleToggleBookmark = () => {
    try {
      const saved = localStorage.getItem('moap_saved_recipes');
      let arr: string[] = saved ? JSON.parse(saved) : [];
      if (isBookmarked) {
        arr = arr.filter((id) => id !== recipe.id);
        setIsBookmarked(false);
      } else {
        arr.push(recipe.id);
        setIsBookmarked(true);
      }
      localStorage.setItem('moap_saved_recipes', JSON.stringify(arr));
    } catch (e) {}
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Scaling factor for ingredients
  const scalingFactor = servings / recipe.defaultServings;

  const otherRecipes = RECIPES.filter((r) => r.id !== recipe.id).slice(0, 3);

  return (
    <article className="py-8 sm:py-12 bg-[#F8F5EF] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Top Bar */}
        <div className="flex items-center justify-between border-b border-[#352A23]/10 pb-4 no-print">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#352A23] hover:text-[#A44735] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Recipes / District</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleBookmark}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-[#A44735] text-white border-[#A44735]'
                  : 'bg-white text-[#352A23] border-[#352A23]/15 hover:bg-[#E9E0D3]'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{isBookmarked ? 'Saved' : 'Save Recipe'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-white text-[#352A23] border border-[#352A23]/15 hover:bg-[#E9E0D3] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#A44735]" />
              <span>Print Card</span>
            </button>
          </div>
        </div>

        {/* Printable Card Container */}
        <div className="printable-recipe space-y-10">
          
          {/* Article Header */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#72775B] font-medium uppercase tracking-wider">
              <span>{recipe.districtName} District</span>
              <span aria-hidden="true">·</span>
              <span>{recipe.division} Division</span>
              <span aria-hidden="true">·</span>
              <span>{recipe.category}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#352A23] leading-tight">
              {recipe.title}
            </h1>

            <p className="font-serif text-xl sm:text-2xl text-[#72775B] italic">
              {recipe.marathiTitle}
            </p>

            <p className="text-base sm:text-lg text-[#352A23]/80 leading-relaxed font-normal">
              {recipe.introduction}
            </p>
          </header>

          {/* Large Hero Photography */}
          <div className="rounded-xl overflow-hidden border border-[#352A23]/15 shadow-sm bg-[#E9E0D3]">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-auto aspect-16/10 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-3 bg-[#E9E0D3]/40 border-t border-[#352A23]/10 text-xs text-[#352A23]/70 italic font-serif flex items-center justify-between">
              <span>Authentic presentation of {recipe.title} ({recipe.districtName})</span>
              <span className="not-italic uppercase tracking-widest font-sans text-[10px] text-[#A44735]">
                {recipe.dietary}
              </span>
            </div>
          </div>

          {/* Recipe Metadata Bar (Single level) */}
          <div className="p-5 bg-white border border-[#352A23]/10 rounded-xl grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#72775B] font-semibold block">
                Prep Time
              </span>
              <span className="font-serif text-base sm:text-lg font-medium text-[#352A23]">
                {recipe.prepTime}
              </span>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#72775B] font-semibold block">
                Cook Time
              </span>
              <span className="font-serif text-base sm:text-lg font-medium text-[#352A23]">
                {recipe.cookTime}
              </span>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#72775B] font-semibold block">
                Total Time
              </span>
              <span className="font-serif text-base sm:text-lg font-medium text-[#352A23]">
                {recipe.totalTime}
              </span>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#72775B] font-semibold block">
                Difficulty
              </span>
              <span className="font-serif text-base sm:text-lg font-medium text-[#352A23]">
                {recipe.difficulty}
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="text-[11px] uppercase tracking-wider text-[#72775B] font-semibold block">
                Spice Intensity
              </span>
              <span className="font-serif text-base sm:text-lg font-medium text-[#A44735]">
                {recipe.spiceLevel}
              </span>
            </div>
          </div>

          {/* Cultural Background Note */}
          <div className="p-6 bg-[#E9E0D3]/35 border-l-2 border-[#A44735] rounded-r-lg space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#A44735] font-semibold block">
              Cultural Background & Provenance
            </span>
            <p className="text-sm sm:text-base text-[#352A23]/85 leading-relaxed font-normal">
              {recipe.culturalBackground}
            </p>
          </div>

          {/* Interactive Ingredients Section with Servings Calculator */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-[#352A23]/10">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-[#352A23]">
                  Ingredients
                </h2>
                <p className="text-xs text-[#352A23]/60">
                  Accurate proportions measured in authentic culinary units.
                </p>
              </div>

              {/* Interactive Servings Calculator Controls */}
              <div className="inline-flex items-center gap-2 p-1 bg-white border border-[#352A23]/15 rounded-lg">
                <span className="text-xs text-[#72775B] font-medium pl-2 pr-1">Servings:</span>
                {[2, 4, 6, 8].map((num) => (
                  <button
                    key={num}
                    onClick={() => setServings(num)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                      servings === num
                        ? 'bg-[#352A23] text-white'
                        : 'text-[#352A23]/70 hover:bg-[#E9E0D3]'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Ingredients Table / List */}
            <div className="bg-white border border-[#352A23]/10 rounded-xl overflow-hidden divide-y divide-[#352A23]/10">
              {recipe.ingredients.map((item, idx) => {
                const calculatedQty = (item.quantity * scalingFactor);
                // Clean display of scaled numbers
                const formattedQty = calculatedQty % 1 === 0 ? calculatedQty : calculatedQty.toFixed(1);

                return (
                  <div key={idx} className="p-4 flex items-baseline justify-between gap-4 hover:bg-[#F8F5EF]/60 transition-colors">
                    <div className="space-y-0.5">
                      <span className="text-sm font-medium text-[#352A23]">{item.name}</span>
                      {item.notes && (
                        <span className="block text-xs text-[#72775B] italic">
                          Note: {item.notes}
                        </span>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-mono text-sm font-semibold text-[#A44735] tabular-nums">
                        {formattedQty}
                      </span>{' '}
                      <span className="text-xs text-[#352A23]/70">{item.unit}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Numbered Step-by-Step Instructions */}
          <section className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-[#352A23] pb-2 border-b border-[#352A23]/10">
              Step-by-Step Method
            </h2>

            <div className="space-y-6">
              {recipe.instructions.map((step) => (
                <div
                  key={step.step}
                  className="p-6 bg-white border border-[#352A23]/10 rounded-xl space-y-2 hover:border-[#352A23]/25 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#352A23] text-white text-xs font-serif font-bold flex items-center justify-center shrink-0">
                      {step.step}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-[#352A23]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#352A23]/80 leading-relaxed font-normal pl-10">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Traditional vs Home Kitchen Methods */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-5 bg-white border border-[#352A23]/10 rounded-xl space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#A44735] font-semibold block">
                Traditional Method
              </span>
              <p className="text-xs sm:text-sm text-[#352A23]/80 leading-relaxed">
                {recipe.traditionalVsHome.traditional}
              </p>
            </div>

            <div className="p-5 bg-white border border-[#352A23]/10 rounded-xl space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#72775B] font-semibold block">
                Modern Home Kitchen Alternative
              </span>
              <p className="text-xs sm:text-sm text-[#352A23]/80 leading-relaxed">
                {recipe.traditionalVsHome.modernHome}
              </p>
            </div>
          </section>

          {/* Substitutions & Cooking Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Substitutions */}
            <div className="p-5 bg-white border border-[#352A23]/10 rounded-xl space-y-3">
              <h3 className="font-serif text-base font-semibold text-[#352A23]">
                Ingredient Substitutions
              </h3>
              <div className="space-y-3">
                {recipe.substitutions.map((sub, i) => (
                  <div key={i} className="text-xs space-y-1 pb-2 border-b border-[#352A23]/5 last:border-none">
                    <div className="font-semibold text-[#352A23]">
                      {sub.original} <span className="text-[#A44735]">→</span> {sub.substitute}
                    </div>
                    <div className="text-[#352A23]/70">{sub.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cooking Tips */}
            <div className="p-5 bg-white border border-[#352A23]/10 rounded-xl space-y-3">
              <h3 className="font-serif text-base font-semibold text-[#352A23]">
                Chef's Tips & Common Pitfalls
              </h3>
              <ul className="text-xs sm:text-sm text-[#352A23]/80 space-y-2 list-disc list-inside leading-relaxed">
                {recipe.cookingTips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* Serving & Storage Guidance */}
          <div className="p-5 bg-[#E9E0D3]/30 border border-[#352A23]/10 rounded-xl space-y-3">
            <h3 className="font-serif text-base font-semibold text-[#352A23]">
              Serving Suggestions & Storage
            </h3>
            <p className="text-xs sm:text-sm text-[#352A23]/80 leading-relaxed">
              <strong>Serving:</strong> {recipe.servingSuggestions.join(' ')}
            </p>
            <p className="text-xs sm:text-sm text-[#352A23]/80 leading-relaxed">
              <strong>Storage:</strong> {recipe.storageGuidance}
            </p>
          </div>

        </div>

        {/* Related Recipes & District Exploration (No-Print) */}
        <section className="pt-10 border-t border-[#352A23]/10 space-y-6 no-print">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#352A23]">
              Explore More Traditional Recipes
            </h3>
            <span className="text-xs text-[#72775B]">From across Maharashtra</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherRecipes.map((r) => (
              <div
                key={r.id}
                onClick={() => {
                  onSelectRecipe(r);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group cursor-pointer bg-white border border-[#352A23]/10 rounded-lg overflow-hidden hover:shadow-md hover:border-[#A44735] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-16/10 overflow-hidden bg-[#E9E0D3]">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#72775B] font-semibold">
                      {r.districtName}
                    </span>
                    <h4 className="font-serif text-base font-bold text-[#352A23] group-hover:text-[#A44735] transition-colors leading-snug">
                      {r.title}
                    </h4>
                  </div>
                </div>
                <div className="p-4 pt-0 text-xs text-[#A44735] font-medium flex items-center justify-between">
                  <span>View Recipe</span>
                  <span className="text-[#352A23]/50">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
};
