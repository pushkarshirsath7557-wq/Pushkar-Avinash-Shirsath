import React from 'react';
import { BookOpen, Award, CheckCircle, Shield, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-[#352A23]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#72775B] font-semibold">
            <BookOpen className="w-4 h-4 text-[#A44735]" />
            <span>Curatorial Statement</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#352A23]">
            About “Maharashtra on a Plate”
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#352A23]/70">
            “Every District Has a Taste.”
          </p>
        </div>

        <div className="text-base sm:text-lg text-[#352A23]/80 leading-relaxed space-y-6 font-normal">
          <p>
            <strong>Maharashtra on a Plate</strong> is an independent academic and editorial documentation project created to celebrate the rich, multi-layered culinary traditions across all 36 administrative districts of Maharashtra, India.
          </p>
          <p>
            Too often, regional Indian cooking is flattened by commercial menus into a handful of ubiquitous items. In mainstream perception, Maharashtrian cuisine is frequently reduced solely to Mumbai street food (Vada Pav and Pav Bhaji) or Misal. While beloved, these dishes represent only a tiny fraction of the state’s agricultural and historical reality.
          </p>
          <p>
            This publication seeks to restore geographic rigor and cultural depth to food documentation. By cataloguing the micro-cuisines of all six revenue divisions—Konkan, Pune, Nashik, Chhatrapati Sambhajinagar, Amravati, and Nagpur—we honor the distinct soil, heirloom seeds, seasonal cycles, and community memories of each district.
          </p>
        </div>

        {/* Core Editorial Tenets */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="p-5 bg-[#F8F5EF] border border-[#352A23]/10 rounded-lg space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A44735] block">
              01 · Exhaustive Coverage
            </span>
            <h3 className="font-serif text-base font-semibold text-[#352A23]">All 36 Districts</h3>
            <p className="text-xs text-[#352A23]/70 leading-relaxed">
              Every current official revenue district is catalogued with authentic regional dishes, hero botanicals, and cooking techniques.
            </p>
          </div>

          <div className="p-5 bg-[#F8F5EF] border border-[#352A23]/10 rounded-lg space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#72775B] block">
              02 · Authenticity & Honesty
            </span>
            <h3 className="font-serif text-base font-semibold text-[#352A23]">Shared Terroirs</h3>
            <p className="text-xs text-[#352A23]/70 leading-relaxed">
              We distinguish between native birthplace and widely shared regional staples, refusing to invent artificial monopolies over shared heritage.
            </p>
          </div>

          <div className="p-5 bg-[#F8F5EF] border border-[#352A23]/10 rounded-lg space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#352A23] block">
              03 · Living Archive
            </span>
            <h3 className="font-serif text-base font-semibold text-[#352A23]">Accessible to Youth</h3>
            <p className="text-xs text-[#352A23]/70 leading-relaxed">
              Heirloom recipes are translated into modern home measurements, complete with portion calculators and printable recipe cards.
            </p>
          </div>
        </div>

        {/* Academic Credit Box */}
        <div className="p-6 bg-[#E9E0D3]/35 border border-[#352A23]/15 rounded-xl text-center space-y-2">
          <p className="text-xs uppercase tracking-widest text-[#72775B] font-semibold">
            Academic Food Studies Project
          </p>
          <p className="text-sm font-serif text-[#352A23]/80">
            Researched and built as a comprehensive regional culinary assignment dedicated to preserving indigenous Maharashtrian foodways.
          </p>
        </div>

      </div>
    </section>
  );
};
