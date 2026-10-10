import { Recipe } from '../types';
import { ASSETS } from './assets';

export const RECIPES: Recipe[] = [
  {
    id: 'kolhapuri-tambda-rassa',
    title: 'Kolhapuri Tambda Rassa',
    marathiTitle: 'कोल्हापुरी तांबडा रस्सा',
    districtId: 'kolhapur',
    districtName: 'Kolhapur',
    division: 'Pune',
    category: 'Main Course',
    dietary: 'Non-Vegetarian',
    spiceLevel: 'Kolhapuri Fire',
    image: ASSETS.kolhapuriRassa,
    prepTime: '25 mins',
    cookTime: '45 mins',
    totalTime: '70 mins',
    defaultServings: 4,
    difficulty: 'Moderate',
    introduction:
      'Kolhapuri Tambda Rassa is a thin, intensely aromatic, fiery red mutton broth that forms the backbone of the historic Kolhapuri thali. Unlike thick North Indian gravies, Tambda Rassa is a soup-like broth (rassa) designed to be eaten with hot jowar or bajra bhakri.',
    culturalBackground:
      'Born in the royal wrestling akhadas and Maratha military encampments of Kolhapur, the broth drew its punch from the indigenous Lavangi and Sankeshwari chillies and the revered Kolhapuri Kanda-Lasun Masala. The red colour (tambda) comes not from artificial dyes but from low-heat tempering of powdered dry chillies and stone-ground vatan.',
    ingredients: [
      { name: 'Mutton (bone-in goat meat, tender cuts)', quantity: 500, unit: 'g', category: 'Lentils & Meat', notes: 'Bones release crucial collagen for the broth' },
      { name: 'Onions (finely sliced for boiling + tempering)', quantity: 2, unit: 'whole', category: 'Produce' },
      { name: 'Ginger-garlic paste', quantity: 2, unit: 'tbsp', category: 'Spices & Aromatics' },
      { name: 'Turmeric powder', quantity: 1, unit: 'tsp', category: 'Spices & Aromatics' },
      { name: 'Kolhapuri Kanda Lasun Masala (or spicy Goda Masala)', quantity: 2.5, unit: 'tbsp', category: 'Spices & Aromatics' },
      { name: 'Dry coconut (sukha khobro), grated & roasted golden', quantity: 4, unit: 'tbsp', category: 'Produce' },
      { name: 'Sesame seeds (til) & poppy seeds (khus khus)', quantity: 1, unit: 'tbsp', category: 'Spices & Aromatics' },
      { name: 'Stone flower (Dagad Phool)', quantity: 1, unit: 'piece', category: 'Spices & Aromatics', notes: 'Key Maratha aroma note' },
      { name: 'Whole spices (cinnamon, cloves, black cardamom)', quantity: 1, unit: 'tbsp', category: 'Spices & Aromatics' },
      { name: 'Peanut or sesame oil (cold pressed)', quantity: 3, unit: 'tbsp', category: 'Dairy & Oils' },
      { name: 'Fresh coriander leaves', quantity: 0.5, unit: 'cup', category: 'Produce' },
      { name: 'Sea salt', quantity: 1.5, unit: 'tsp', category: 'Spices & Aromatics' },
      { name: 'Hot water', quantity: 5, unit: 'cups', category: 'Produce' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Boil the Mutton Stock (Aalani Pani)',
        text: 'In a heavy pot, heat 1 tbsp oil. Sauté 1 sliced onion until translucent. Add ginger-garlic paste, turmeric, and mutton pieces with salt. Sear for 4 minutes until juices seal. Pour 5 cups hot water, cover, and simmer for 30–35 minutes until meat is fork-tender. Strain and preserve the clear golden mutton broth (Aalani Pani).'
      },
      {
        step: 2,
        title: 'Prepare the Kolhapuri Kala Vatan',
        text: 'On an iron tawa, dry roast grated coconut, sliced onions, poppy seeds, sesame seeds, and dagad phool until deeply browned and fragrant. Grind with fresh coriander stems and a splash of water on a silbatta or stone blender into a smooth paste.'
      },
      {
        step: 3,
        title: 'Bloom the Masala and Extract the Rogan',
        text: 'Heat remaining oil in a deep brass or cast-iron patila until shimmering. Add crushed cloves and cinnamon, followed by Kolhapuri Kanda Lasun Masala. Fry on low heat for 30 seconds until the aromatic red chilli oil (tarri/tavang) rises to the surface without burning.'
      },
      {
        step: 4,
        title: 'Simmer the Red Broth',
        text: 'Stir in 3 tablespoons of the roasted vatan paste and cook for 3 minutes until oil separates. Slowly pour in the strained mutton stock (Aalani Pani). Bring to a rolling boil, then lower the flame to a gentle simmer for 10 minutes.'
      },
      {
        step: 5,
        title: 'Finish and Serve',
        text: 'Garnish with freshly chopped cilantro. The signature bright red oil slick (tavang) must float on top. Serve piping hot alongside tender mutton pieces (sukka), Pandhra Rassa, and fresh jowar bhakri.'
      }
    ],
    traditionalVsHome: {
      traditional: 'Simmered overnight over smouldering cow-dung cake or wood chulhas in unlined heavy brass patilas.',
      modernHome: 'Use a heavy-bottomed Dutch oven or stainless-steel pressure cooker to boil the stock, then simmer uncovered in a deep saucepan.'
    },
    substitutions: [
      { original: 'Dagad Phool (Stone Flower)', substitute: 'A pinch of mace (javitri) and black cardamom', note: 'Essential for traditional earthy aroma.' },
      { original: 'Kolhapuri Kanda Lasun Masala', substitute: 'Equal parts Kashmiri chilli powder + Goda masala + roasted garlic powder', note: 'Provides balanced color and bite.' }
    ],
    cookingTips: [
      'Never boil the broth vigorously after adding the oil layer, or the signature "tavang" (floating red sheen) will emulsify and vanish.',
      'Always use hot water when boiling the mutton to keep the broth crystal-clear.',
      'Kolhapuri rassa must remain watery-thin and drinkable like a soup.'
    ],
    servingSuggestions: [
      'Serve in a deep katori alongside hot Jowar Bhakri, fresh lemon wedges, raw sliced onion rings, and a glass of Pandhra Rassa.'
    ],
    storageGuidance: 'Broth deepens in flavour overnight. Refrigerate for up to 3 days in an airtight glass container. Reheat gently on low heat.'
  },
  {
    id: 'khandeshi-shev-bhaji',
    title: 'Khandeshi Shev Bhaji',
    marathiTitle: 'खानदेशी शेव भाजी',
    districtId: 'jalgaon',
    districtName: 'Jalgaon',
    division: 'Nashik',
    category: 'Main Course',
    dietary: 'Vegetarian',
    spiceLevel: 'Fiery',
    image: ASSETS.khandeshiShevBhaji,
    prepTime: '20 mins',
    cookTime: '30 mins',
    totalTime: '50 mins',
    defaultServings: 4,
    difficulty: 'Moderate',
    introduction:
      'Khandeshi Shev Bhaji is the quintessential rustic curry of North Maharashtra (Jalgaon, Dhule, Nandurbar). It pairs thick, crisp chickpea-flour noodles (tikhat gathiya shev) with an unforgettably spicy, deeply charred black gravy known as Kala Masala Tarri.',
    culturalBackground:
      'Originating from the agrarian dhabas and roadside eateries along the Tapi river basin, this dish was designed to satisfy hardworking cotton and banana farmers who demanded pungent, sweat-inducing meals paired with thick Bajra Bhakri or Kalna Puri.',
    ingredients: [
      { name: 'Khandeshi Bhavnagri or spicy thick gathiya shev', quantity: 200, unit: 'g', category: 'Grains & Flours' },
      { name: 'Dry coconut (khobra), halved and directly flame-charred', quantity: 0.5, unit: 'cup', category: 'Produce', notes: 'Charred directly on open flame for dark tone' },
      { name: 'Medium red onions, halved and griddle-charred', quantity: 2, unit: 'whole', category: 'Produce' },
      { name: 'Ginger & garlic cloves', quantity: 2, unit: 'tbsp', category: 'Spices & Aromatics' },
      { name: 'Authentic Khandeshi Kala Masala', quantity: 2, unit: 'tbsp', category: 'Spices & Aromatics', notes: 'Roasted with dark spices and dry coconut' },
      { name: 'Coriander seeds & cumin', quantity: 1, unit: 'tsp', category: 'Spices & Aromatics' },
      { name: 'Groundnut oil (singdana tel)', quantity: 4, unit: 'tbsp', category: 'Dairy & Oils' },
      { name: 'Red chilli powder (Lavangi + Bedgi blend)', quantity: 1.5, unit: 'tbsp', category: 'Spices & Aromatics' },
      { name: 'Warm water', quantity: 3.5, unit: 'cups', category: 'Produce' },
      { name: 'Salt to taste', quantity: 1, unit: 'tsp', category: 'Spices & Aromatics' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Char the Aromatics for Khandeshi Kala Vatan',
        text: 'Hold coconut halves directly over a medium gas flame with tongs until the exterior is black-charred. Roast sliced onions on a dry cast-iron tawa until black spots appear. Cool and blend with roasted garlic, ginger, and cumin into a dark, coarse paste.'
      },
      {
        step: 2,
        title: 'Sauté the Kala Vatan in Groundnut Oil',
        text: 'Heat generous groundnut oil in an iron kadai. Add the ground black paste and sauté on medium-low flame for 6 to 8 minutes until aromatic oil releases and pools around the edges.'
      },
      {
        step: 3,
        title: 'Add Spices and Create the Tarri',
        text: 'Stir in Khandeshi Kala Masala, red chilli powder, turmeric, and salt. Cook for 1 minute before pouring in warm water. Bring to a vigorous rolling boil, then lower the heat and let the spicy red-black oil layer (tarri) float to the top.'
      },
      {
        step: 4,
        title: 'Assemble Just Before Eating',
        text: 'Never cook the shev inside the gravy pot! Place a generous mound of thick crisp shev in a wide bowl, ladle the steaming hot bubbling tarri gravy all over it, top with chopped onions, fresh cilantro, and a squeeze of lime.'
      }
    ],
    traditionalVsHome: {
      traditional: 'Cooked in seasoned black iron kadai on wood fire; coconut and whole onions charred directly in glowing charcoal embers.',
      modernHome: 'Char coconut and onions over open gas burners or cast-iron skillet on high heat.'
    },
    substitutions: [
      { original: 'Khandeshi Kala Masala', substitute: 'Dark roasted Goda Masala with 1 tsp extra roasted coriander and dry chilli', note: 'Simulates the deep smoky notes.' },
      { original: 'Khandeshi Gathiya Shev', substitute: 'Thick unflavoured ratlami or bhavnagri sev', note: 'Do not use fine nylon sev as it dissolves instantly.' }
    ],
    cookingTips: [
      'Always serve gravy in a separate bowl or pour over shev at the dining table so the shev retains its partial crisp crunch.',
      'The dark color must come from roasted coconut and onions, never burnt garlic or bitter spices.'
    ],
    servingSuggestions: [
      'Serve alongside steaming hot Bajra Bhakri, raw onion quarters, and spicy curd.'
    ],
    storageGuidance: 'The rassa (gravy) stores excellently for up to 3 days. Reheat gravy until bubbling before pouring over fresh shev.'
  },
  {
    id: 'puneri-misal-pav',
    title: 'Puneri Misal Pav',
    marathiTitle: 'पुणेरी मिसळ पाव',
    districtId: 'pune',
    districtName: 'Pune',
    division: 'Pune',
    category: 'Breakfast',
    dietary: 'Vegetarian',
    spiceLevel: 'Medium',
    image: ASSETS.puneriMisalPav,
    prepTime: '20 mins',
    cookTime: '30 mins',
    totalTime: '50 mins',
    defaultServings: 4,
    difficulty: 'Moderate',
    introduction:
      'Puneri Misal represents the refined, balanced school of Maharashtra’s favourite street food. Unlike the tongue-numbing heat of Kolhapur or the raw onion pungency of Nashik, Pune’s misal balances spiced sprouted moth beans (matki) with a fragrant goda-masala-infused kat (tarri) and crunchy farsan.',
    culturalBackground:
      'Puneri misal traces its pedigree back to the iconic breakfast institutions of Sadashiv Peth and Deccan Gymkhana. Traditional Pune families serve it with a milder sprouted matki usal layer at the bottom, crisp chiwda/farsan in the middle, and hot red kat poured over at table.',
    ingredients: [
      { name: 'Sprouted moth beans (matki)', quantity: 2, unit: 'cups', category: 'Lentils & Meat' },
      { name: 'Boiled potato cubes', quantity: 1, unit: 'whole', category: 'Produce' },
      { name: 'Puneri Goda Masala', quantity: 2, unit: 'tbsp', category: 'Spices & Aromatics' },
      { name: 'Finely chopped onions', quantity: 2, unit: 'whole', category: 'Produce' },
      { name: 'Tomatoes, pureed', quantity: 2, unit: 'whole', category: 'Produce' },
      { name: 'Grated fresh coconut', quantity: 3, unit: 'tbsp', category: 'Produce' },
      { name: 'Ginger-garlic paste', quantity: 1.5, unit: 'tbsp', category: 'Spices & Aromatics' },
      { name: 'Kashmiri red chilli powder', quantity: 1, unit: 'tbsp', category: 'Spices & Aromatics' },
      { name: 'Mustard seeds & hing', quantity: 1, unit: 'tsp', category: 'Spices & Aromatics' },
      { name: 'Mixed spicy farsan / chiwda', quantity: 1.5, unit: 'cups', category: 'Grains & Flours' },
      { name: 'Fresh soft Ladi Pav', quantity: 8, unit: 'whole', category: 'Grains & Flours' },
      { name: 'Oil', quantity: 3, unit: 'tbsp', category: 'Dairy & Oils' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Cook the Sprouted Matki Usal',
        text: 'In a saucepan, temper mustard seeds, curry leaves, and turmeric in 1 tbsp oil. Add sprouted matki, boiled potato cubes, half tsp goda masala, salt, and 1 cup water. Simmer covered for 8–10 minutes until tender but retaining shape.'
      },
      {
        step: 2,
        title: 'Prepare the Puneri Kat (Tarri)',
        text: 'Roast coconut, sliced onion, ginger, and garlic on a tawa until golden brown. Blend into a smooth paste. In a separate pot, heat 2 tbsp oil, add the paste and fry until aromatic. Add tomato puree, goda masala, chilli powder, and salt. Sauté until oil separates.'
      },
      {
        step: 3,
        title: 'Simmer the Kat for Oil Float',
        text: 'Pour 3 cups of boiling water into the masala pot. Simmer on low flame for 12 minutes until a vibrant red sheen (kat) separates on top of the broth.'
      },
      {
        step: 4,
        title: 'Layer the Authentic Puneri Bowl',
        text: 'In deep bowls, first spoon a warm layer of cooked matki usal. Add a layer of crunchy farsan. Ladle piping hot kat around the bowl so the farsan stays partially crunchy. Top with minced red onion, cilantro, and lemon wedge. Serve with ladi pav.'
      }
    ],
    traditionalVsHome: {
      traditional: 'Served with Pohe at the base in heritage Wada restaurants of old Pune, alongside extra kat in small metal jugs.',
      modernHome: 'Can be made easily with store-bought sprouted matki and packaged Puneri chiwda.'
    },
    substitutions: [
      { original: 'Goda Masala', substitute: 'Maharashtrian Kala Masala with 1 pinch roasted cinnamon', note: 'Maintains authentic sweet-spicy undertones.' },
      { original: 'Moth beans (Matki)', substitute: 'Sprouted brown chickpeas (kala chana) or green moong', note: 'Different texture but tasty.' }
    ],
    cookingTips: [
      'Do not boil sprouted matki in a pressure cooker for too long or it becomes mushy mush.',
      'Always use boiling water for the kat to produce the distinctive oily rogan layer.'
    ],
    servingSuggestions: [
      'Serve with warm butter-toasted Ladi Pav, cut lemon wedges, extra bowl of red kat, and thick chilled curd or Solkadhi.'
    ],
    storageGuidance: 'Store the matki usal and kat separately in refrigerator. Assemble with fresh farsan only when ready to eat.'
  },
  {
    id: 'malvani-surmai-curry',
    title: 'Malvani Surmai Fish Curry',
    marathiTitle: 'मालवणी सुरमई कढी',
    districtId: 'sindhudurg',
    districtName: 'Sindhudurg',
    division: 'Konkan',
    category: 'Main Course',
    dietary: 'Non-Vegetarian',
    spiceLevel: 'Fiery',
    image: ASSETS.malvaniFishCurry,
    prepTime: '20 mins',
    cookTime: '20 mins',
    totalTime: '40 mins',
    defaultServings: 4,
    difficulty: 'Moderate',
    introduction:
      'Malvani Surmai (Kingfish) Curry is coastal Maharashtra’s culinary magnum opus. Hailing from the pristine Konkan coast of Sindhudurg and Malvan, it weaves freshly ground wet coconut, sun-dried kokum (amsul), and homemade Malvani Masala into a luscious, ruby-hued gravy.',
    culturalBackground:
      'The fisherfolk communities of Malvan and Vengurla prepare this curry in handmade earthenware pots (matka). Kokum acts as the indigenous souring agent that cuts through the rich oils of ocean kingfish, while avoiding tomato or tamarind.',
    ingredients: [
      { name: 'Fresh Surmai (Kingfish) steaks', quantity: 500, unit: 'g', category: 'Lentils & Meat' },
      { name: 'Freshly grated coconut (Naral)', quantity: 1.5, unit: 'cups', category: 'Produce' },
      { name: 'Malvani Masala (roasted 16-spice blend)', quantity: 2, unit: 'tbsp', category: 'Spices & Aromatics' },
      { name: 'Kokum petals (amsul), soaked in 3 tbsp warm water', quantity: 5, unit: 'whole', category: 'Produce' },
      { name: 'Garlic cloves with peel (lasun)', quantity: 8, unit: 'whole', category: 'Produce' },
      { name: 'Green chillies', quantity: 2, unit: 'whole', category: 'Produce' },
      { name: 'Tirphal (Sichuan pepper cousin native to Konkan)', quantity: 5, unit: 'piece', category: 'Spices & Aromatics', notes: 'Lightly crushed for citrus-woody fragrance' },
      { name: 'Turmeric powder', quantity: 1, unit: 'tsp', category: 'Spices & Aromatics' },
      { name: 'Coconut oil or peanut oil', quantity: 2, unit: 'tbsp', category: 'Dairy & Oils' },
      { name: 'Warm water', quantity: 2, unit: 'cups', category: 'Produce' },
      { name: 'Rock salt to taste', quantity: 1, unit: 'tsp', category: 'Spices & Aromatics' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Marinate the Fish',
        text: 'Rinse fish steaks gently. Coat with 0.5 tsp turmeric, 0.5 tsp salt, and 1 tsp lemon juice or kokum extract. Set aside for 15 minutes.'
      },
      {
        step: 2,
        title: 'Grind the Malvani Coconut Vatan',
        text: 'In a blender, grind grated fresh coconut, garlic cloves, green chillies, and Malvani masala with half a cup of water into a rich, silky paste.'
      },
      {
        step: 3,
        title: 'Simmer the Coconut Gravy in Clay Pot',
        text: 'Heat oil in an earthenware pot. Add crushed garlic and curry leaves until fragrant. Add the coconut paste and gently sauté for 3 minutes without browning. Add 1.5 cups warm water, soaked kokum petals with their liquid, and lightly crushed tirphal berries. Bring to a gentle simmer.'
      },
      {
        step: 4,
        title: 'Poach the Surmai Steaks',
        text: 'Gently slip the marinated Surmai steaks into the bubbling gravy. Cook uncovered on medium-low heat for 6–7 minutes until fish turns opaque and flaky. Swirl the pot gently by the handles rather than using a hard ladle to avoid breaking the delicate steaks.'
      },
      {
        step: 5,
        title: 'Rest and Serve',
        text: 'Let the curry rest for 10 minutes so fish absorbs the kokum and coconut gravy. Garnish with chopped coriander and serve.'
      }
    ],
    traditionalVsHome: {
      traditional: 'Simmered in earthen Kundal pots over wood fire; tirphal berries crushed between fingertips with a drop of coconut water.',
      modernHome: 'Use a wide non-stick or cast-iron shallow pan with gentle swirling.'
    },
    substitutions: [
      { original: 'Kokum (Amsul)', substitute: 'Raw mango slices or dried amchur petals', note: 'Never use vinegar or excessive tomatoes.' },
      { original: 'Tirphal', substitute: 'Lightly cracked green peppercorn with lemon zest', note: 'Replicates the citrus-numbing undertone.' },
      { original: 'Surmai (Kingfish)', substitute: 'Pomfret (Paplet), Bangda (Mackerel), or Prawns', note: 'Standard coastal variations.' }
    ],
    cookingTips: [
      'Do not boil the fish for more than 7–8 minutes; kingfish dries out rapidly if overcooked.',
      'Allowing the curry to sit for an hour before eating allows the fish oils to mingle with the kokum sourness.'
    ],
    servingSuggestions: [
      'Serve with steamed Kolam rice, crisp fried fish, Solkadhi, and sweet roasted onion salad.'
    ],
    storageGuidance: 'Fish curries taste even richer the next morning as kokum tenderises the meat. Consume within 24 hours.'
  },
  {
    id: 'ukadiche-modak',
    title: 'Traditional Ukadiche Modak',
    marathiTitle: 'उकडीचे मोदक',
    districtId: 'ratnagiri',
    districtName: 'Ratnagiri',
    division: 'Konkan',
    category: 'Dessert & Sweets',
    dietary: 'Vegetarian',
    spiceLevel: 'Mild',
    image: ASSETS.festiveUkadicheModak,
    prepTime: '35 mins',
    cookTime: '20 mins',
    totalTime: '55 mins',
    defaultServings: 6,
    difficulty: 'Advanced',
    introduction:
      'Ukadiche Modak is Maharashtra’s revered steamed sweet dumpling, intimately consecrated to Lord Ganesha during Ganeshotsav. Translucent pleated rice dough envelopes a molten filling of freshly scraped coconut, sticky organic jaggery, nutmeg, and cardamom.',
    culturalBackground:
      'Tracing centuries of Konkani tradition, the technique of "Ukad" (steamed rice dough) requires precise moisture control. Konkan’s fragrant Basmati or Ambemohar rice flour is hand-kneaded hot, hand-pleated with 21 exquisite folds (pari), and steamed on a turmeric leaf.',
    ingredients: [
      { name: 'Fine Ambemohar rice flour (or good quality Basmati flour)', quantity: 2, unit: 'cups', category: 'Grains & Flours' },
      { name: 'Water', quantity: 2, unit: 'cups', category: 'Produce' },
      { name: 'Freshly grated coconut (Naral)', quantity: 2, unit: 'cups', category: 'Produce' },
      { name: 'Sticky organic jaggery (Gul), grated', quantity: 1, unit: 'cup', category: 'Dairy & Oils' },
      { name: 'Pure cow ghee (Tup)', quantity: 2, unit: 'tbsp', category: 'Dairy & Oils' },
      { name: 'Fresh cardamom powder & freshly grated nutmeg (Jaiphal)', quantity: 1, unit: 'tsp', category: 'Spices & Aromatics' },
      { name: 'Pinch of sea salt', quantity: 0.25, unit: 'tsp', category: 'Spices & Aromatics' },
      { name: 'Saffron strands soaked in 1 tbsp warm milk', quantity: 1, unit: 'tbsp', category: 'Dairy & Oils' },
      { name: 'Poppy seeds (khus khus)', quantity: 1, unit: 'tsp', category: 'Spices & Aromatics' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Prepare the Saran (Coconut-Jaggery Filling)',
        text: 'In a heavy brass pan, heat 1 tbsp ghee. Lightly roast poppy seeds, then add grated fresh coconut and grated jaggery. Cook on low heat stirring constantly for 7–8 minutes until jaggery melts and mixture thickens. Stir in cardamom and nutmeg powder. Cool completely.'
      },
      {
        step: 2,
        title: 'Make the Ukad (Steamed Dough)',
        text: 'In a deep pot, bring 2 cups water, 1 tsp ghee, and a pinch of salt to a rolling boil. Lower heat and slowly sprinkle the rice flour while stirring continuously to avoid lumps. Cover and steam on lowest heat for 3 minutes. Turn off heat and keep covered for 10 minutes.'
      },
      {
        step: 3,
        title: 'Knead the Hot Dough',
        text: 'Transfer hot dough to a wide brass thali. While still hot to warm, dip fingers in cold water and knead vigorously for 6–7 minutes into a glossy, crack-free dough ball. Cover with a damp muslin cloth.'
      },
      {
        step: 4,
        title: 'Shape and Pleat the Modak (Pari)',
        text: 'Pinch a lime-sized ball of dough. Roll between palms with greased hands. Press thumb into center and thin out edges into a cup shape. Pinch 7 to 11 vertical pleats along the rim. Spoon 1.5 tsp filling into the center. Carefully bring pleat tips together towards the apex and seal gently.'
      },
      {
        step: 5,
        title: 'Steam the Modaks',
        text: 'Line a steamer basket with a banana leaf or damp cloth. Dip modak bottoms in water, place in steamer, and steam for 10–12 minutes until glossy and firm to touch. Drizzle with warm cow ghee and saffron milk.'
      }
    ],
    traditionalVsHome: {
      traditional: 'Hand-pleated with 21 tiny delicate petals without moulds and steamed on fragrant haldi (turmeric) leaves.',
      modernHome: 'Can use a brass modak mould if hand pleating is challenging, lining steamer with parchment paper.'
    },
    substitutions: [
      { original: 'Ambemohar Rice Flour', substitute: 'Fine Asian sticky rice flour or good idiyappam flour', note: 'Provides the soft malleable elasticity.' },
      { original: 'Cardamom & Nutmeg', substitute: 'Cardamom only', note: 'Nutmeg provides traditional earthy sweet note.' }
    ],
    cookingTips: [
      'Do not overcook the coconut-jaggery saran, or it will turn hard and chewy like candy when cooled.',
      'Always knead the dough while it is still warm; cold rice dough becomes brittle and cracks when shaped.'
    ],
    servingSuggestions: [
      'Serve warm with a generous pour of warm homemade cow ghee (Sajuk Tup) pooled in the apex.'
    ],
    storageGuidance: 'Best eaten fresh within 24 hours. Can be reheated in a steamer for 2 minutes.'
  },
  {
    id: 'nagpur-saoji-curry',
    title: 'Nagpur Saoji Chicken Curry',
    marathiTitle: 'नागपूर सावजी चिकन',
    districtId: 'nagpur',
    districtName: 'Nagpur',
    division: 'Nagpur',
    category: 'Main Course',
    dietary: 'Non-Vegetarian',
    spiceLevel: 'Fiery',
    image: ASSETS.nagpurSaojiCurry,
    prepTime: '25 mins',
    cookTime: '45 mins',
    totalTime: '70 mins',
    defaultServings: 4,
    difficulty: 'Moderate',
    introduction:
      'Nagpur’s Saoji cuisine is one of the most guarded culinary treasures of India. Created by the Halba Koshti weaving community of Vidarbha, Saoji curries are famous for their dark, pungent spice paste and signature floating oil layer.',
    culturalBackground:
      'Unlike commercially spicy curries spiced only with red chilli powder, Saoji uses an artisanal roast of 24 whole spices, char-roasted onions, and linseeds (javis) that impart a slow, deep warmth rather than a sharp burning sensation.',
    ingredients: [
      { name: 'Country chicken (Gavran chicken, bone-in)', quantity: 700, unit: 'g', category: 'Lentils & Meat' },
      { name: 'Onions, thinly sliced & roasted till dark brown', quantity: 3, unit: 'whole', category: 'Produce' },
      { name: 'Ginger & garlic paste', quantity: 2.5, unit: 'tbsp', category: 'Spices & Aromatics' },
      { name: 'Saoji Masala (coriander seeds, black pepper, stone flower, mace, cloves, star anise, poppy seeds)', quantity: 3, unit: 'tbsp', category: 'Spices & Aromatics' },
      { name: 'Flaxseed / Linseed powder (Javas)', quantity: 1, unit: 'tsp', category: 'Grains & Flours', notes: 'Gives the thick dark body and healthy shine' },
      { name: 'Dry coconut, roasted dark', quantity: 3, unit: 'tbsp', category: 'Produce' },
      { name: 'Mustard oil or groundnut oil', quantity: 4, unit: 'tbsp', category: 'Dairy & Oils' },
      { name: 'Vidarbha spicy red chilli powder', quantity: 2, unit: 'tbsp', category: 'Spices & Aromatics' },
      { name: 'Warm water', quantity: 3, unit: 'cups', category: 'Produce' },
      { name: 'Salt', quantity: 1.5, unit: 'tsp', category: 'Spices & Aromatics' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Dry Roast and Grind Saoji Masala',
        text: 'In an iron pan, slow roast whole black pepper, cloves, shahi jeera, star anise, dagad phool, cinnamon, coriander seeds, and dry coconut until fragrant and dark mahogany. Grind into a fine aromatic spice blend.'
      },
      {
        step: 2,
        title: 'Sear the Chicken',
        text: 'In a deep handi, heat 2 tbsp oil. Sauté 1 sliced onion and ginger-garlic paste. Add chicken pieces with turmeric and salt. Brown for 7–8 minutes on high heat until the juices seal.'
      },
      {
        step: 3,
        title: 'Cook the Dark Saoji Gravy',
        text: 'Add remaining oil, roasted dark onion paste, Saoji spice blend, and linseed powder. Sauté on medium flame for 5 minutes until dark oil (tarri) beads and separates.'
      },
      {
        step: 4,
        title: 'Simmer to Perfection',
        text: 'Pour 3 cups warm water into the handi. Cover and simmer on low heat for 25–30 minutes until chicken is tender and the deep reddish-black tarri floats freely.'
      }
    ],
    traditionalVsHome: {
      traditional: 'Cooked in dark iron karahis on coal chulhas in Saoji Bhojanalayas, simmered for hours.',
      modernHome: 'Use heavy-bottomed cast iron Dutch oven or pressure cooker.'
    },
    substitutions: [
      { original: 'Gavran (Country) Chicken', substitute: 'Mutton bone-in or broiler chicken', note: 'Adjust cooking time accordingly.' },
      { original: 'Javas (Flaxseed)', substitute: 'Toasted sesame powder', note: 'Maintains viscosity and roasted flavor.' }
    ],
    cookingTips: [
      'The roast of spices must be dark mahogany without charring to black ash, which causes bitterness.',
      'Saoji food does not contain tomatoes, cashews, or cream.'
    ],
    servingSuggestions: [
      'Serve piping hot with Nagpur Tarri Poha, hot Bajra Bhakri, boiled eggs, and lemon wedges.'
    ],
    storageGuidance: 'Flavours improve dramatically over 24 hours in refrigerator as spices penetrate the meat.'
  },
  {
    id: 'mumbai-vada-pav',
    title: 'Iconic Mumbai Vada Pav',
    marathiTitle: 'मुंबई वडा पाव',
    districtId: 'mumbai-city',
    districtName: 'Mumbai City',
    division: 'Konkan',
    category: 'Snacks',
    dietary: 'Vegetarian',
    spiceLevel: 'Medium',
    image: ASSETS.mumbaiVadaPav,
    prepTime: '20 mins',
    cookTime: '20 mins',
    totalTime: '40 mins',
    defaultServings: 4,
    difficulty: 'Easy',
    introduction:
      'The democratic pulse of Mumbai, Vada Pav was born outside Dadar railway station in the late 1960s. A spiced potato mash patty (batata vada) enrobed in golden gram-flour batter is deep-fried crisp and tucked into soft bakery pav with fierce dry garlic chutney.',
    culturalBackground:
      'Created by Ashok Vaidya to feed textile mill workers heading to and from the suburban railways, Vada Pav became the definitive working-class culinary symbol of Mumbai and Maharashtra.',
    ingredients: [
      { name: 'Potatoes (batata), boiled, peeled and mashed', quantity: 4, unit: 'whole', category: 'Produce' },
      { name: 'Gram flour (besan)', quantity: 1.5, unit: 'cups', category: 'Grains & Flours' },
      { name: 'Rice flour (for crispness)', quantity: 2, unit: 'tbsp', category: 'Grains & Flours' },
      { name: 'Green chillies & garlic, coarsely pounded', quantity: 2, unit: 'tbsp', category: 'Spices & Aromatics' },
      { name: 'Mustard seeds (rai) & hing', quantity: 1, unit: 'tsp', category: 'Spices & Aromatics' },
      { name: 'Fresh curry leaves (kadi patta)', quantity: 10, unit: 'piece', category: 'Produce' },
      { name: 'Turmeric powder', quantity: 1, unit: 'tsp', category: 'Spices & Aromatics' },
      { name: 'Dry Red Lasun Chutney (garlic, roasted peanuts, chilli powder)', quantity: 4, unit: 'tbsp', category: 'Spices & Aromatics' },
      { name: 'Fresh soft Ladi Pav', quantity: 6, unit: 'whole', category: 'Grains & Flours' },
      { name: 'Oil for deep frying', quantity: 3, unit: 'cups', category: 'Dairy & Oils' },
      { name: 'Green chillies, slit and salted (fried for garnish)', quantity: 6, unit: 'whole', category: 'Produce' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Make the Potato Filling (Batata Bhaji)',
        text: 'Heat 1 tbsp oil in a pan. Splutter mustard seeds, hing, and curry leaves. Add crushed ginger, garlic, and green chillies. Sauté for 1 minute. Add turmeric, salt, and mashed potatoes. Mix well, cook for 3 minutes, then cool and shape into 6 smooth round balls.'
      },
      {
        step: 2,
        title: 'Whisk the Crispy Besan Batter',
        text: 'In a bowl, mix besan, rice flour, turmeric, a pinch of hing, salt, and a pinch of baking soda. Whisk in water to create a smooth, ribbon-consistency batter that evenly coats the back of a spoon.'
      },
      {
        step: 3,
        title: 'Deep Fry the Vadas',
        text: 'Heat oil in a kadai to 180°C. Dip each potato ball into the batter, coating completely, and gently slide into hot oil. Fry for 4–5 minutes, turning occasionally, until golden and crisp. Drain on paper towels.'
      },
      {
        step: 4,
        title: 'Assemble the Mumbai Way',
        text: 'Slit each pav three-quarters through. Liberally sprinkle the fiery dry garlic chutney (and optional sweet tamarind chutney). Place a steaming hot batata vada inside, gently press down, and serve with fried salted green chillies.'
      }
    ],
    traditionalVsHome: {
      traditional: 'Fried in massive iron kadhais with hot oil droplets creating crunchy "chura" bits blended into the dry garlic chutney.',
      modernHome: 'Can be shallow-fried in an appe pan for a healthier version, or deep fried in a standard kitchen kadai.'
    },
    substitutions: [
      { original: 'Dry Lasun Chutney', substitute: 'Chilli flakes with fried garlic and peanut powder', note: 'Provides identical savory crunch.' },
      { original: 'Ladi Pav', substitute: 'Soft brioche buns or dinner rolls', note: 'Soft crumb is essential.' }
    ],
    cookingTips: [
      'Do not make the potato mash completely smooth; small potato lumps give the signature artisanal texture.',
      'Adding 2 tbsp hot oil to the besan batter makes the outer crust remarkably crisp without absorbing excess grease.'
    ],
    servingSuggestions: [
      'Serve hot with fried salted green chillies and a hot cup of Mumbai cutting chai.'
    ],
    storageGuidance: 'Vadas must be eaten immediately while crisp and hot. Unfried potato balls can be refrigerated for 2 days.'
  },
  {
    id: 'solapuri-jowar-bhakri-thecha',
    title: 'Solapuri Kadak Jowar Bhakri with Shenga Chutney & Thecha',
    marathiTitle: 'सोलापूर कडक ज्वारी भाकरी आणि शेंगदाणा चटणी',
    districtId: 'solapur',
    districtName: 'Solapur',
    division: 'Pune',
    category: 'Main Course',
    dietary: 'Vegetarian',
    spiceLevel: 'Fiery',
    image: ASSETS.solapuriJowarBhakri,
    prepTime: '15 mins',
    cookTime: '20 mins',
    totalTime: '35 mins',
    defaultServings: 4,
    difficulty: 'Moderate',
    introduction:
      'Solapur is the grain heartland of Maharashtra, revered across the state for its feather-light puffed Jowar Bhakris and crumbly peanut garlic chutney (Shenga Chutney). Served with fiery green chilli thecha pounded in stone mortars, this meal defines peasant nutrition and flavour.',
    culturalBackground:
      'In the arid, sun-baked landscape of Solapur and Osmanabad, Sorghum (Jowar) is the drought-resistant miracle grain. Farmhands carry crisp "Kadak Bhakri" (sun-dried or crisp-baked flatbreads) that survive weeks without spoiling, accompanied by oil-drenched dry chutney.',
    ingredients: [
      { name: 'Freshly milled Solapuri Maldandi Jowar flour', quantity: 2, unit: 'cups', category: 'Grains & Flours' },
      { name: 'Warm water', quantity: 1.25, unit: 'cups', category: 'Produce' },
      { name: 'Roasted peanuts (shengdana), peeled', quantity: 1, unit: 'cup', category: 'Produce' },
      { name: 'Dry garlic cloves', quantity: 12, unit: 'whole', category: 'Produce' },
      { name: 'Fresh green chillies (Lavangi)', quantity: 8, unit: 'whole', category: 'Produce' },
      { name: 'Cumin seeds', quantity: 1, unit: 'tsp', category: 'Spices & Aromatics' },
      { name: 'Cold pressed groundnut oil', quantity: 3, unit: 'tbsp', category: 'Dairy & Oils' },
      { name: 'Rock salt to taste', quantity: 1, unit: 'tsp', category: 'Spices & Aromatics' },
      { name: 'Fresh thick buffalo curd', quantity: 1, unit: 'cup', category: 'Dairy & Oils' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Knead the Jowar Dough Portion by Portion',
        text: 'In a wide flat brass platter (parat), take half cup jowar flour for each bhakri. Gradually sprinkle warm water and knead vigorously with the base of your palm for 3 minutes until smooth, pliable, and elastic.'
      },
      {
        step: 2,
        title: 'Pat the Bhakri by Hand',
        text: 'Dust the board with dry flour. Flatten the dough ball and gently pat outward using rhythmic flat-palm movements, rotating with your left hand until a thin, uniform circular flatbread forms without tearing.'
      },
      {
        step: 3,
        title: 'Roast and Puff on Iron Tawa',
        text: 'Transfer carefully onto a screaming hot iron tawa, flour side up. Quickly splash cold water over the top surface and smooth with your palm. When water evaporates, flip and cook the other side for 1 minute. Transfer directly onto open flame or push with a cloth until it puffs like a balloon.'
      },
      {
        step: 4,
        title: 'Pound the Solapuri Shenga Chutney and Thecha',
        text: 'For Shenga Chutney: Coarsely pulse roasted peanuts, garlic cloves, red chilli powder, cumin, and salt. For Thecha: Lightly roast green chillies and garlic with a drop of oil on an iron tawa, then coarsely crush in a stone mortar with rock salt and a drizzle of raw groundnut oil.'
      }
    ],
    traditionalVsHome: {
      traditional: 'Patted by hand on a wooden chopdar board and roasted over dried wood and cow dung fire on earthen or iron tawa.',
      modernHome: 'Can roll gently between two parchment sheets if hand patting requires practice.'
    },
    substitutions: [
      { original: 'Maldandi Jowar Flour', substitute: 'Fresh white sorghum flour or Bajra flour', note: 'Use fresh flour; older flour lacks moisture.' }
    ],
    cookingTips: [
      'Always use warm water for kneading jowar flour to release its natural starches since jowar contains zero gluten.',
      'Never knead dough for all bhakris together; always knead portion by portion just before patting.'
    ],
    servingSuggestions: [
      'Serve with a puddle of cold-pressed groundnut oil poured over the chutney, sliced raw onion, fresh curd, and hot dal.'
    ],
    storageGuidance: 'Fresh bhakris stay soft wrapped in cotton cloth for 24 hours. Kadak (crisp) bhakris keep for months in dry tins.'
  },
  {
    id: 'puneri-puran-poli-katachi-amti',
    title: 'Traditional Puran Poli with Katachi Amti',
    marathiTitle: 'पारंपरिक पुरणपोळी आणि कटाची आमटी',
    districtId: 'pune',
    districtName: 'Pune',
    division: 'Pune',
    category: 'Dessert & Sweets',
    dietary: 'Vegetarian',
    spiceLevel: 'Mild',
    image: ASSETS.heroThali,
    prepTime: '30 mins',
    cookTime: '40 mins',
    totalTime: '70 mins',
    defaultServings: 6,
    difficulty: 'Advanced',
    introduction:
      'Puran Poli is the crowning glory of Maharashtrian festive tables, celebrated during Holi, Gudi Padwa, and Diwali. A thin, translucent whole wheat crust holds a melt-in-mouth filling of chana dal sweetened with jaggery and fragrant with nutmeg.',
    culturalBackground:
      'Nothing in a traditional Marathi kitchen goes to waste: the leftover strained water from boiling chana dal (Kat) is miraculously transformed into the spicy, sweet-tangy Katachi Amti, creating the quintessential contrasting meal.',
    ingredients: [
      { name: 'Chana dal (Bengal gram), rinsed', quantity: 2, unit: 'cups', category: 'Lentils & Meat' },
      { name: 'Organic jaggery (Gul), grated', quantity: 2, unit: 'cups', category: 'Dairy & Oils' },
      { name: 'Cardamom powder & nutmeg powder', quantity: 1, unit: 'tsp', category: 'Spices & Aromatics' },
      { name: 'Whole wheat flour (atta)', quantity: 1.5, unit: 'cups', category: 'Grains & Flours' },
      { name: 'All-purpose flour (maida) for stretch', quantity: 0.5, unit: 'cup', category: 'Grains & Flours' },
      { name: 'Pure cow ghee', quantity: 0.5, unit: 'cup', category: 'Dairy & Oils' },
      { name: 'Goda Masala (for Katachi Amti)', quantity: 1.5, unit: 'tbsp', category: 'Spices & Aromatics' },
      { name: 'Dry coconut, roasted & ground', quantity: 2, unit: 'tbsp', category: 'Produce' },
      { name: 'Tamarind pulp & jaggery piece', quantity: 1, unit: 'tbsp', category: 'Produce' },
      { name: 'Turmeric and salt', quantity: 1, unit: 'tsp', category: 'Spices & Aromatics' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Cook Chana Dal and Strain the Kat',
        text: 'Boil chana dal with 4 cups water, a pinch of turmeric, and 1 tsp ghee until tender but intact. Strain over a bowl to collect the golden broth (Kat). Keep the liquid aside for Katachi Amti.'
      },
      {
        step: 2,
        title: 'Make the Sweet Puran Filling',
        text: 'In a thick pan, combine the boiled dal and grated jaggery. Cook on medium-low heat, stirring continuously as jaggery melts and mixture thickens. When a spoon stands upright in the center, turn off heat. Add nutmeg and cardamom. Pass while hot through a Puran Yantra or fine sieve into a silky paste.'
      },
      {
        step: 3,
        title: 'Knead the Kanik (Dough)',
        text: 'Knead wheat flour, maida, pinch of turmeric, and water into an ultra-soft, pliable dough. Douse with 3 tbsp oil and let rest covered for 1 hour until highly elastic.'
      },
      {
        step: 4,
        title: 'Roll and Roast the Puran Poli',
        text: 'Take a ball of dough, expand into a cup, place double the quantity of Puran filling inside, and pinch close. Roll very gently with light dusting into a thin, translucent circle. Roast on a hot tawa with generous ghee on both sides until golden spots appear and it puffs up.'
      },
      {
        step: 5,
        title: 'Prepare the Katachi Amti',
        text: 'In a pot, temper mustard seeds, hing, curry leaves, and green chillies in ghee. Add ground roasted coconut paste, goda masala, chilli powder, and salt. Pour in the reserved chana dal broth (Kat). Add tamarind pulp and jaggery piece. Simmer for 10 minutes until aromatic.'
      }
    ],
    traditionalVsHome: {
      traditional: 'Puran is sieved through a heavy brass manual Puran Yantra or brass puran chalni to achieve zero graininess.',
      modernHome: 'Can blend the cooled dal-jaggery mixture in a high-powered mixer grinder.'
    },
    substitutions: [
      { original: 'Jaggery (Gul)', substitute: 'Granulated sugar (Sakhar)', note: 'Traditionally jaggery provides earthy richness; sugar makes it lighter.' }
    ],
    cookingTips: [
      'The dough (kanik) must be as soft as the puran filling; if the dough is firmer than the filling, it will tear during rolling.',
      'Always serve puran poli with a generous pool of hot melted ghee.'
    ],
    servingSuggestions: [
      'Serve hot Puran Poli topped with pure cow ghee alongside a bowl of steaming Katachi Amti, Kurdai, and fragrant steamed rice.'
    ],
    storageGuidance: 'Puran Polis stay soft for 2–3 days at room temperature. Puran mixture can be frozen for up to a month.'
  }
];
