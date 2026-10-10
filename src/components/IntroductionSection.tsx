import React from 'react';
import { Waves, Mountain, Sun, Sparkles } from 'lucide-react';

export const IntroductionSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 border-t border-b border-[#352A23]/10 bg-[#F8F5EF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A44735] font-semibold">
          <span>The Geography of Taste</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#352A23] leading-tight text-balance">
          A State, Told Through Its Food
        </h2>

        <div className="text-base sm:text-lg text-[#352A23]/80 leading-relaxed space-y-5 text-left font-normal max-w-3xl mx-auto">
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#A44735]">
            Maharashtra’s culinary canvas cannot be reduced to a single flavour, spice mix, or flagship curry. Spanning over three hundred thousand square kilometres, the state is a dramatic topography of microclimates: from the wave-battered laterite cliffs of the Konkan coast and mist-shrouded Sahyadri summits to the black cotton soils of Khandesh, the sun-baked sorghum plains of Marathwada, and the mineral-dense teak forests of Vidarbha.
          </p>
          <p>
            Where rainfall is relentless along the 720-kilometre coastline, cooking is defined by wet scraped coconut, tangy purple kokum (amsul), wild tirphal berries, and ocean kingfish. Climb east across the ghats onto the Deccan plateau (Desh), and the palate transforms: coconut yields to roasted groundnuts, coastal rice flour becomes hand-patted Jowar and Bajra bhakris, and mild tempering turns to the deep, smoky elegance of Goda and Kanda-Lasun masalas.
          </p>
          <p>
            Further north and east, Khandesh and Vidarbha reveal an untamed passion for intense heat and artisanal roasting: pitch-black flame-charred gravies in Jalgaon, and the secretive twenty-four spice alchemy of Nagpur’s Halba Koshti Saoji weavers. Across all thirty-six districts, each kitchen preserves an intimate memory of its soil, water, seasonal harvest, and ancient hearths.
          </p>
        </div>

        {/* 4 Geographic Terroirs Grid */}
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="p-5 bg-[#E9E0D3]/30 border border-[#352A23]/10 rounded-lg space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#A44735] font-semibold block">01 · Konkan Coast</span>
            <h3 className="font-serif text-base font-semibold text-[#352A23]">Maritime & Coconut</h3>
            <p className="text-xs text-[#352A23]/70 leading-relaxed">
              Fresh sea fish, Kokum, Tirphal, Ambemohar rice, and coconut milk broths across 7 districts.
            </p>
          </div>

          <div className="p-5 bg-[#E9E0D3]/30 border border-[#352A23]/10 rounded-lg space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#72775B] font-semibold block">02 · Western Desh</span>
            <h3 className="font-serif text-base font-semibold text-[#352A23]">The Golden Plateau</h3>
            <p className="text-xs text-[#352A23]/70 leading-relaxed">
              Goda masala, festive puran poli, peanut thechas, and royal Kolhapuri rassa across 5 districts.
            </p>
          </div>

          <div className="p-5 bg-[#E9E0D3]/30 border border-[#352A23]/10 rounded-lg space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#A44735] font-semibold block">03 · Khandesh & North</span>
            <h3 className="font-serif text-base font-semibold text-[#352A23]">Charred Kala Masala</h3>
            <p className="text-xs text-[#352A23]/70 leading-relaxed">
              Flame-charred coconut gravies, gathiya shev bhaji, and fire-roasted brinjal bharit across 5 districts.
            </p>
          </div>

          <div className="p-5 bg-[#E9E0D3]/30 border border-[#352A23]/10 rounded-lg space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#72775B] font-semibold block">04 · Vidarbha & Marathwada</span>
            <h3 className="font-serif text-base font-semibold text-[#352A23]">Saoji & Dry Grain</h3>
            <p className="text-xs text-[#352A23]/70 leading-relaxed">
              Bold 24-spice Saoji curries, morning tarri poha, and drought-resilient shengole across 19 districts.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
