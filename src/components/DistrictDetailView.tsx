import React from 'react';
import { ArrowLeft, MapPin, Sparkles, ChefHat, Flame, BookOpen, Compass, ArrowRight } from 'lucide-react';
import { District, Recipe } from '../types';
import { DISTRICTS } from '../data/districts';
import { RECIPES } from '../data/recipes';

interface DistrictDetailViewProps {
  district: District;
  onBack: () => void;
  onSelectRecipe: (recipe: Recipe) => void;
  onSelectDistrictByName: (districtName: string) => void;
}

export const DistrictDetailView: React.FC<DistrictDetailViewProps> = ({
  district,
  onBack,
  onSelectRecipe,
  onSelectDistrictByName
}) => {
  // Find recipes for this district, or matching division/region if primary recipe is shared
  const districtRecipes = RECIPES.filter(
    (r) => r.districtId === district.id || r.districtName.toLowerCase() === district.name.toLowerCase()
  );

  // Fallback shared recipes from same division if no exclusive single recipe
  const relevantRecipes = districtRecipes.length > 0 
    ? districtRecipes 
    : RECIPES.filter((r) => r.division === district.division).slice(0, 2);

  return (
    <article className="py-8 sm:py-12 bg-[#F8F5EF] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Breadcrumb / Back button */}
        <div className="flex items-center justify-between border-b border-[#352A23]/10 pb-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#352A23] hover:text-[#A44735] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All 36 Districts</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-[#72775B] font-medium">
            <MapPin className="w-3.5 h-3.5" />
            <span>{district.division} Revenue Division</span>
          </div>
        </div>

        {/* District Hero Title & Tagline */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A44735] font-semibold">
            <span>District Culinary Archive</span>
            <span aria-hidden="true">·</span>
            <span>{district.division} Division</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#352A23]">
              {district.name}
            </h1>
            <span className="font-serif text-2xl sm:text-3xl text-[#72775B]">
              {district.marathiName}
            </span>
          </div>

          <p className="font-serif italic text-lg sm:text-xl text-[#352A23]/80 leading-relaxed max-w-3xl">
            "{district.tagline}"
          </p>
        </div>

        {/* High-Quality Relevant Food Photograph */}
        <div className="rounded-xl overflow-hidden border border-[#352A23]/15 shadow-sm bg-[#E9E0D3]">
          <img
            src={district.image}
            alt={`Culinary heritage of ${district.name}`}
            className="w-full h-auto aspect-16/9 sm:aspect-21/9 object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="p-3 bg-[#E9E0D3]/40 border-t border-[#352A23]/10 text-xs text-[#352A23]/70 italic font-serif flex items-center justify-between">
            <span>Representative regional cooking of {district.name} and {district.division} Division</span>
            <span className="text-[11px] uppercase tracking-wider font-sans not-italic text-[#72775B]">Documented Heritage</span>
          </div>
        </div>

        {/* Section 1: Introduction to Local Food Culture */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#352A23] border-b border-[#352A23]/10 pb-2">
            Local Food Culture & Heritage
          </h2>
          <p className="text-base sm:text-lg text-[#352A23]/80 leading-relaxed font-normal">
            {district.introduction}
          </p>
        </section>

        {/* Section 2: The Flavours of This Region */}
        <section className="p-6 sm:p-8 bg-white border border-[#352A23]/10 rounded-xl space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A44735] font-semibold">
            <Flame className="w-4 h-4 text-[#A44735]" />
            <span>Sensory Profile</span>
          </div>
          <h2 className="font-serif text-2xl font-semibold text-[#352A23]">
            The Flavours of This Region
          </h2>
          <p className="text-sm sm:text-base text-[#352A23]/80 leading-relaxed font-normal">
            {district.flavoursOfRegion}
          </p>
        </section>

        {/* Section 3: Famous & Locally Associated Dishes */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-[#352A23] border-b border-[#352A23]/10 pb-2">
            Famous & Locally Associated Dishes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {district.famousDishes.map((dish, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#E9E0D3]/30 border border-[#352A23]/10 rounded-lg flex items-center gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-[#A44735]/10 text-[#A44735] text-xs font-semibold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-sm font-medium text-[#352A23]">{dish}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Local Ingredients & Cooking Techniques */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-white border border-[#352A23]/10 rounded-lg space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#72775B] font-semibold block">
              Hero Ingredients
            </span>
            <ul className="text-xs sm:text-sm text-[#352A23]/80 space-y-1.5 list-disc list-inside">
              {district.ingredientsAndTechniques.heroIngredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p-5 bg-white border border-[#352A23]/10 rounded-lg space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#A44735] font-semibold block">
              Cooking Techniques
            </span>
            <ul className="text-xs sm:text-sm text-[#352A23]/80 space-y-1.5 list-disc list-inside">
              {district.ingredientsAndTechniques.techniques.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p-5 bg-white border border-[#352A23]/10 rounded-lg space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#352A23]/80 font-semibold block">
              Traditional Utensils
            </span>
            <ul className="text-xs sm:text-sm text-[#352A23]/80 space-y-1.5 list-disc list-inside">
              {district.ingredientsAndTechniques.traditionalUtensils.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 5: Cultural & Festive Food Traditions */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-[#352A23] border-b border-[#352A23]/10 pb-2">
            Festive & Community Food Traditions
          </h2>
          <p className="text-sm sm:text-base text-[#352A23]/80 leading-relaxed font-normal">
            {district.culturalTraditions}
          </p>
        </section>

        {/* Section 6: Shared Traditions & Authenticity Note */}
        {district.sharedTraditionsNote && (
          <div className="p-4 bg-[#72775B]/10 border border-[#72775B]/20 rounded-lg text-xs text-[#352A23]/80 space-y-1">
            <span className="font-semibold text-[#72775B] uppercase tracking-wider block">
              Culinary Authenticity Note
            </span>
            <p>{district.sharedTraditionsNote}</p>
          </div>
        )}

        {/* Section 7: Detailed Recipe Articles for this District */}
        <section className="space-y-6 pt-4 border-t border-[#352A23]/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#A44735] font-semibold">
                Kitchen Documentation
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#352A23]">
                Detailed Recipe Articles
              </h2>
            </div>
            <span className="text-xs text-[#352A23]/60">
              Interactive Servings & Print Card Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relevantRecipes.map((recipe) => (
              <div
                key={recipe.id}
                onClick={() => onSelectRecipe(recipe)}
                className="group cursor-pointer bg-white border border-[#352A23]/15 rounded-xl overflow-hidden hover:shadow-md hover:border-[#A44735] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-[#E9E0D3]">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#352A23]/85 text-white text-[10px] px-2 py-0.5 rounded font-medium">
                      {recipe.category}
                    </div>
                    <div className="absolute top-2.5 right-2.5 bg-white/90 text-[#352A23] text-[10px] px-2 py-0.5 rounded font-medium border border-[#352A23]/10">
                      {recipe.dietary}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-serif text-lg font-bold text-[#352A23] group-hover:text-[#A44735] transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="text-xs text-[#72775B] font-serif italic">
                      {recipe.marathiTitle}
                    </p>
                    <p className="text-xs text-[#352A23]/70 line-clamp-2 leading-relaxed">
                      {recipe.introduction}
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3 border-t border-[#352A23]/10 bg-[#F8F5EF]/60 flex items-center justify-between text-xs font-medium text-[#A44735]">
                  <span>Read Full Recipe & Instructions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Neighbouring Districts Navigation */}
        <section className="pt-6 border-t border-[#352A23]/10 space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#72775B] font-semibold">
            <Compass className="w-4 h-4" />
            <span>Culinary Geography</span>
          </div>
          <h2 className="font-serif text-xl font-semibold text-[#352A23]">
            Neighbouring Districts & Shared Traditions
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {district.neighbouringDistricts.map((neighborName, idx) => (
              <button
                key={idx}
                onClick={() => onSelectDistrictByName(neighborName)}
                className="px-4 py-2 bg-white hover:bg-[#E9E0D3] border border-[#352A23]/15 text-[#352A23] text-xs font-medium rounded-md transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>{neighborName}</span>
                <ArrowRight className="w-3 h-3 text-[#A44735]" />
              </button>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
};
