export type RevenueDivision =
  | 'Konkan'
  | 'Pune'
  | 'Nashik'
  | 'Chhatrapati Sambhajinagar'
  | 'Amravati'
  | 'Nagpur';

export type DietaryType = 'Vegetarian' | 'Non-Vegetarian';
export type SpiceLevel = 'Mild' | 'Medium' | 'Fiery' | 'Kolhapuri Fire';
export type MealCategory =
  | 'Breakfast'
  | 'Main Course'
  | 'Snacks'
  | 'Dessert & Sweets'
  | 'Accompaniment & Chutney';

export interface IngredientItem {
  name: string;
  quantity: number;
  unit: string;
  category: 'Produce' | 'Spices & Aromatics' | 'Grains & Flours' | 'Dairy & Oils' | 'Lentils & Meat';
  notes?: string;
}

export interface InstructionStep {
  step: number;
  title: string;
  text: string;
}

export interface RecipeSubstitution {
  original: string;
  substitute: string;
  note: string;
}

export interface Recipe {
  id: string;
  title: string;
  marathiTitle: string;
  districtId: string;
  districtName: string;
  division: RevenueDivision;
  category: MealCategory;
  dietary: DietaryType;
  spiceLevel: SpiceLevel;
  image: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  defaultServings: number;
  difficulty: 'Easy' | 'Moderate' | 'Advanced';
  introduction: string;
  culturalBackground: string;
  ingredients: IngredientItem[];
  instructions: InstructionStep[];
  traditionalVsHome: {
    traditional: string;
    modernHome: string;
  };
  substitutions: RecipeSubstitution[];
  cookingTips: string[];
  servingSuggestions: string[];
  storageGuidance: string;
  relatedRecipeIds?: string[];
}

export interface District {
  id: string;
  name: string;
  marathiName: string;
  division: RevenueDivision;
  tagline: string;
  image: string;
  introduction: string;
  flavoursOfRegion: string;
  famousDishes: string[];
  ingredientsAndTechniques: {
    heroIngredients: string[];
    techniques: string[];
    traditionalUtensils: string[];
  };
  culturalTraditions: string;
  neighbouringDistricts: string[];
  recipes: Recipe[];
  sharedTraditionsNote?: string;
}

export interface FoodStory {
  id: string;
  title: string;
  marathiTitle?: string;
  districtName: string;
  division: RevenueDivision;
  image: string;
  readTime: string;
  excerpt: string;
  body: string[];
  quote: string;
  highlightDishes: string[];
}

export interface SeasonalItem {
  season: 'Monsoon' | 'Summer' | 'Winter' | 'Festive';
  marathiName: string;
  timing: string;
  description: string;
  heroDishes: string[];
  keyProduce: string[];
  culturalNote: string;
}
