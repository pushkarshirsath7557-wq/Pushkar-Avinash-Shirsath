import React from 'react';
import { Compass, BookOpen, Utensils, Heart } from 'lucide-react';
import { RevenueDivision } from '../types';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onFilterDivision?: (division: RevenueDivision) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onFilterDivision }) => {
  return (
    <footer className="bg-[#352A23] text-[#F8F5EF] pt-16 pb-12 border-t border-[#352A23] no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-[#F8F5EF]">
              MAHARASHTRA ON A PLATE
            </h3>
            <p className="font-serif text-sm italic text-[#E9E0D3]/80">
              “Every District Has a Taste.”
            </p>
            <p className="text-xs text-[#E9E0D3]/70 leading-relaxed max-w-sm">
              An editorial culinary archive celebrating the regional food identities, heirloom recipes, indigenous spices, and cooking techniques of all 36 districts of Maharashtra, India.
            </p>
            <div className="pt-2 text-[11px] text-[#E9E0D3]/50">
              Researched & published for academic regional food documentation.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#A44735] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-[#E9E0D3]/80">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('districts')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Explore Districts (All 36)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('stories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Food Stories & Essays
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('recipes')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Traditional Recipes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('seasonal')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Seasonal Produce Calendar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About the Project
                </button>
              </li>
            </ul>
          </div>

          {/* Revenue Divisions */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#72775B] font-semibold block">
              6 Divisions
            </span>
            <ul className="space-y-2 text-xs text-[#E9E0D3]/80">
              <li>
                <button
                  onClick={() => onNavigate('districts')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Konkan Division (7 Districts)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('districts')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Pune Division (5 Districts)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('districts')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Nashik Division (5 Districts)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('districts')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Chhatrapati Sambhajinagar (8)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('districts')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Amravati Division (5 Districts)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('districts')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Nagpur Division (6 Districts)
                </button>
              </li>
            </ul>
          </div>

          {/* Key Heritage Staples */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#E9E0D3]/60 font-semibold block">
              Culinary Staples
            </span>
            <ul className="space-y-2 text-xs text-[#E9E0D3]/70">
              <li>Puran Poli & Katachi Amti</li>
              <li>Tambda & Pandhra Rassa</li>
              <li>Khandeshi Shev Bhaji</li>
              <li>Nagpur Saoji Chicken</li>
              <li>Malvani Surmai Curry</li>
              <li>Solapuri Jowar Bhakri</li>
              <li>Handcrafted Ukadiche Modak</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Fine Rule */}
        <div className="pt-8 border-t border-[#F8F5EF]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E9E0D3]/60">
          <div>
            © 2026 Maharashtra on a Plate. Every District Has a Taste. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Preserving Indian Regional Culinary Biodiversity</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
