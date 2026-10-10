import { District } from '../types';
import { ASSETS } from './assets';
import { RECIPES } from './recipes';

export const DISTRICTS: District[] = [
  // ==================== 1. KONKAN DIVISION (7) ====================
  {
    id: 'mumbai-city',
    name: 'Mumbai City',
    marathiName: 'मुंबई शहर',
    division: 'Konkan',
    tagline: 'The Melting Pot of Coastal Traditions and Street Food Alchemy',
    image: ASSETS.mumbaiVadaPav,
    introduction:
      'Mumbai City’s food story is a vibrant confluence of native Koli fisherfolk traditions, Irani cafes, Pathare Prabhu heritage, and the unstoppable energy of street food cart culture. It is an island where flavours from across the subcontinent arrive, cross-pollinate, and find their fastest, most soulful expressions.',
    flavoursOfRegion:
      'The foundational soul of Mumbai food alternates between the sea and the griddle. Native Koli preparations rely on fresh Bombay Duck (Bombil), pomfret, and dry shrimp powdered with bottle masala. In parallel, street food introduces spicy red garlic chutneys, tangy tamarind blends, and pav-centric carb staples.',
    famousDishes: ['Vada Pav', 'Pav Bhaji', 'Bombay Duck Fry (Bombil)', 'Koli Fish Curry', 'Bun Maska & Irani Chai', 'Prawns Koliwada'],
    ingredientsAndTechniques: {
      heroIngredients: ['Fresh Bombil', 'Koli Masala / Bottle Masala', 'Ladi Pav', 'Garlic', 'Tamarind'],
      techniques: ['Shallow rava frying on iron tawas', 'Rapid griddle bhaji mashing', 'Wet vatan grinding'],
      traditionalUtensils: ['Large flat iron tawa', 'Wooden potato masher', 'Deep cast iron kadai']
    },
    culturalTraditions:
      'Narali Purnima (Coconut Day) marks the opening of the fishing season with sweet coconut rice (Narali Bhaat). Ganeshotsav transforms every street corner with communal feasts and modaks.',
    neighbouringDistricts: ['Mumbai Suburban', 'Thane', 'Raigad'],
    recipes: RECIPES.filter((r) => r.districtId === 'mumbai-city'),
    sharedTraditionsNote:
      'While Vada Pav and Pav Bhaji developed in modern Mumbai, their influence and variations are now shared across all of urban Maharashtra.'
  },
  {
    id: 'mumbai-suburban',
    name: 'Mumbai Suburban',
    marathiName: 'मुंबई उपनगर',
    division: 'Konkan',
    tagline: 'Suburban Kitchens, East Indian Heritage, and Coastal Koli Feasts',
    image: ASSETS.mumbaiVadaPav,
    introduction:
      'Stretching from Bandra to Dahisar, Mumbai Suburban district is home to original East Indian Catholic villages, Koliwadas of Versova and Khar, and vibrant residential culinary enclaves. Here, age-old recipes preserved in family notebooks meet suburban culinary innovation.',
    flavoursOfRegion:
      'East Indian Bottle Masala—a hand-roasted, sun-dried blend of up to 30 spices stored in dark beer bottles—imparts a smoky, complex richness to duck, mutton, and vegetable curries. Coastal suburbs maintain an obsession with fresh catch, crisp rava crusts, and coconut milk broths.',
    famousDishes: ['East Indian Fugias (Sweet Bread Puffs)', 'Versova Koli Prawn Curry', 'Sorpotel & Vindaloo', 'Misal Pav', 'Rava Fried Surmai'],
    ingredientsAndTechniques: {
      heroIngredients: ['East Indian Bottle Masala', 'Fresh Surmai & Tiger Prawns', 'Toddy / Yeast', 'Grated Coconut'],
      techniques: ['Slow brass-pot braising', 'Sun drying of chillies and spices', 'Fermentation of breads'],
      traditionalUtensils: ['Hand-blown amber bottles for masala', 'Heavy copper lagan', 'Iron fish tawa']
    },
    culturalTraditions:
      'Mount Mary Basilica feast and parish celebrations bring traditional East Indian sweets like Thalie and Date Rolls. Coastal Versova celebrates its annual Koli Seafood Festival with pomp.',
    neighbouringDistricts: ['Mumbai City', 'Thane', 'Palghar'],
    recipes: RECIPES.filter((r) => r.districtId === 'mumbai-city'),
    sharedTraditionsNote:
      'Suburban cuisine shares deep coastal roots with Thane, Raigad, and Mumbai City, reflecting historical migration routes.'
  },
  {
    id: 'thane',
    name: 'Thane',
    marathiName: 'ठाणे',
    division: 'Konkan',
    tagline: 'Creek Fisherfolk Curries and Agro-Forest Agri Traditions',
    image: ASSETS.malvaniFishCurry,
    introduction:
      'Bordered by the Ulhas River and the Arabian Sea creeks, Thane blends the culinary pride of the Agri, Koli, and Maratha communities. The district’s countryside is legendary for Agri-style spicy chicken and mutton curries, cooked with distinctive stone-ground red masala.',
    flavoursOfRegion:
      'Agri cuisine is unabashedly bold, fiery, and deeply comforting. Unlike mild coastal curries, Agri meat dishes feature generous cold-pressed peanut oil, dry coconut, and a high-heat masala that produces a signature red oil slick (tarri) best soaked up with thick rice bhakris.',
    famousDishes: ['Agri Mutton Curry', 'Creek Crab (Kekda) Sukka', 'Agri Chicken Handi', 'Chawalachi Bhakri', 'Sukha Jawla (Baby Shrimp) Fry'],
    ingredientsAndTechniques: {
      heroIngredients: ['Agri Masala', 'Fresh Mud Crabs', 'Dry Jawla (Tiny Prawns)', 'Kolam Rice Flour'],
      techniques: ['Chulha clay-pot slow cooking', 'Dry roasting coconut with whole spices', 'Hand patting rice flatbreads'],
      traditionalUtensils: ['Clay handi (matka)', 'Iron tawa', 'Stone mortar and pestle']
    },
    culturalTraditions:
      'Gauri-Ganpati festivals feature elaborate traditional offerings of Pithla Bhakri, fresh creek fish curries, and steamed Modaks. Agri weddings are renowned for open-air handi cooking.',
    neighbouringDistricts: ['Mumbai Suburban', 'Palghar', 'Raigad', 'Pune', 'Nashik'],
    recipes: RECIPES.filter((r) => r.districtId === 'sindhudurg'),
    sharedTraditionsNote:
      'Agri cuisine overlaps considerably across Thane, Raigad, and Palghar districts due to shared community settlement.'
  },
  {
    id: 'palghar',
    name: 'Palghar',
    marathiName: 'पालघर',
    division: 'Konkan',
    tagline: 'Tribal Foraged Greens, Wada Kolam Rice, and Coastal Dahanu Orchards',
    image: ASSETS.solapuriJowarBhakri,
    introduction:
      'Carved from north Thane, Palghar encompasses the tranquil coast of Dahanu, lush chikoo orchards, the fertile paddy fields of Wada, and dense tribal hinterlands. Its cuisine reflects an organic connection to forest produce, creek seafood, and heirloom rice grains.',
    flavoursOfRegion:
      'Earthy, subtle, and intimately seasonal. The district is celebrated worldwide for Wada Kolam rice—a tiny, highly aromatic grain with a soft, non-sticky texture. Tribal communities prepare foraged wild monsoon greens (Ranbhajya) with simple garlic and green chilli seasonings.',
    famousDishes: ['Wada Kolam Khichdi', 'Ranbhaji (Shevala, Takla, Kartoli)', 'Dahanu Chikoo Halwa', 'Lobster Fry', 'Pauva (Rice Flake Snack)'],
    ingredientsAndTechniques: {
      heroIngredients: ['Wada Kolam Rice', 'Dahanu GI Chikoos', 'Wild Shevala greens', 'Baby lobsters & pomfret'],
      techniques: ['Earthen pot boiling', 'Steaming inside teak/banana leaves', 'Minimal spice sautéing'],
      traditionalUtensils: ['Clay steaming pots', 'Wood churners', 'Cast-iron kadai']
    },
    culturalTraditions:
      'Tarpa tribal harvest dances are celebrated with fresh paddy rice, mahua preparations, and wild tuber curries during post-monsoon months.',
    neighbouringDistricts: ['Thane', 'Nashik'],
    recipes: RECIPES.filter((r) => r.districtId === 'solapur'),
    sharedTraditionsNote:
      'Wada Kolam rice is a GI-tagged pride of Palghar, widely celebrated across Maharashtra for daily dal-bhaat meals.'
  },
  {
    id: 'raigad',
    name: 'Raigad',
    marathiName: 'रायगड',
    division: 'Konkan',
    tagline: 'Capital of the Maratha Empire, Coastal Coconut, and White Onion Curries',
    image: ASSETS.malvaniFishCurry,
    introduction:
      'Cradled between the Arabian Sea and the Sahyadri mountains, Raigad holds historical gravity as the seat of Chhatrapati Shivaji Maharaj’s capital. Its gastronomy mirrors this heritage: rustic mountain warrior sustenance meets coastal Konkan coconut abundance.',
    flavoursOfRegion:
      'Alibaug’s celebrated GI-tagged white onions (Safed Kanda) are sweet and low in sulphur, forming the luscious foundation for seafood curries and mutton sukka. Coconut, tamarind, and fresh green chillies balance the spice profile.',
    famousDishes: ['Alibaug White Onion Crab Curry', 'Surmai Rawa Fry', 'Sanja (Savory Semolina Upma)', 'Popati (Winter Clay Pot Roast)', 'Ukadiche Poha'],
    ingredientsAndTechniques: {
      heroIngredients: ['Alibaug White Onions', 'Fresh Konkan Coconut', 'Kokum', 'Val (Field Beans)'],
      techniques: ['Popati: Underground smoking in inverted clay pots with medicinal herbs', 'Clay pot fish simmering'],
      traditionalUtensils: ['Popati earthen pot', 'Shallow fish tawa', 'Brass patila']
    },
    culturalTraditions:
      'During winter harvests, families gather in farms for Popati—a ritual cooking of tender field beans, seasonal tubers, and marinated chicken inside an inverted clay pot heated by dry leaves.',
    neighbouringDistricts: ['Mumbai City', 'Thane', 'Pune', 'Satara', 'Ratnagiri'],
    recipes: RECIPES.filter((r) => r.districtId === 'sindhudurg'),
    sharedTraditionsNote:
      'Popati is an authentic regional winter tradition native to the rural belts of Raigad district.'
  },
  {
    id: 'ratnagiri',
    name: 'Ratnagiri',
    marathiName: 'रत्नागिरी',
    division: 'Konkan',
    tagline: 'The Home of Alphonso Mangoes, Kokum Ambrosia, and Pleated Modaks',
    image: ASSETS.festiveUkadicheModak,
    introduction:
      'With red laterite cliffs, swaying coconut groves, and sea-salt breezes, Ratnagiri is the poetic heart of coastal Maharashtra. It is the birthplace of the world-famous Hapus (Alphonso) mango and the gold standard for delicate Konkan home cooking.',
    flavoursOfRegion:
      'Subtle, aromatic, and tangy-sweet. Ratnagiri cooking relies heavily on freshly grated coconut, fragrant Ambemohar rice flour, sweet jaggery, and the tangy brilliance of pure sun-dried Kokum. Garlic and chillies are used with measured restraint compared to the hinterland.',
    famousDishes: ['Hapus Aamras & Puri', 'Ukadiche Modak', 'Solkadhi', 'Ghavane with Coconut Chutney', 'Kaju Usal (Tender Cashew Curry)', 'Valache Birde'],
    ingredientsAndTechniques: {
      heroIngredients: ['Hapus Mangoes', 'Kokum (Amsul)', 'Ambemohar Rice Flour', 'Fresh Coconut Milk', 'Raw Cashew Nuts (Olya Kaju)'],
      techniques: ['Ukad (steam gelatinisation of rice flour)', 'Hand-pleating delicate dumplings', 'Coconut milk cold infusion'],
      traditionalUtensils: ['Ukad steamer', 'Cast iron Ghavane tawa', 'Wooden coconut scraper (Vili)']
    },
    culturalTraditions:
      'Ganeshotsav is the ultimate culinary and spiritual celebration, where mothers and grandmothers craft handcrafted Ukadiche Modaks by the hundreds. Summer brings universal joy with chilled Aamras lunches.',
    neighbouringDistricts: ['Raigad', 'Satara', 'Sangli', 'Kolhapur', 'Sindhudurg'],
    recipes: RECIPES.filter((r) => r.districtId === 'ratnagiri'),
    sharedTraditionsNote:
      'Aamras and Solkadhi are beloved throughout the coastal belt, with Ratnagiri’s red soil providing the unmatched Alphonso aroma.'
  },
  {
    id: 'sindhudurg',
    name: 'Sindhudurg',
    marathiName: 'सिंधुदुर्ग',
    division: 'Konkan',
    tagline: 'Sovereign of Malvani Spices, Kombdi Vade, and Pristine Ocean Delights',
    image: ASSETS.malvaniFishCurry,
    introduction:
      'Sindhudurg, touching the border of Goa, represents the southernmost coastal territory of Maharashtra. Home to the sea fortress built by Shivaji Maharaj, it is universally acclaimed as the birthplace of Malvani cuisine—a complex, fiercely aromatic coastal school.',
    flavoursOfRegion:
      'Malvani Masala features up to 16 roasted spices combined with dry coconut, stone-ground with garlic and byadgi chillies. What sets Sindhudurg apart is the use of Tirphal (wild Sichuan pepper berries) and Kokum, creating a lip-smacking tang with a gentle numbing warmth.',
    famousDishes: ['Malvani Mutton / Kombdi Vade', 'Surmai Fish Curry', 'Tisrya Masala (Clam Curry)', 'Solkadhi', 'Malvani Khaja', 'Amboli with Chutney'],
    ingredientsAndTechniques: {
      heroIngredients: ['Tirphal', 'Kokum petals', 'Malvani Masala', 'Multigrain Vade Flour (Rice, Urad, Chana, Jowar)', 'Fresh Clams & Crabs'],
      techniques: ['Deep frying fermented multigrain vade', 'Cracking tirphal berries between fingertips', 'Slow clay-pot fish poaching'],
      traditionalUtensils: ['Kundal clay pots', 'Flat cast iron tawa for amboli', 'Brass mortar']
    },
    culturalTraditions:
      'Shimga (Konkan Holi) and Dashavatar folk-theatre nights are celebrated with vast midnight feasts of Kombdi Vade, sweet Puran Poli, and coconut curries.',
    neighbouringDistricts: ['Ratnagiri', 'Kolhapur'],
    recipes: RECIPES.filter((r) => r.districtId === 'sindhudurg'),
    sharedTraditionsNote:
      'Kombdi Vade is an indisputable heritage staple of Sindhudurg and the broader South Konkan maritime zone.'
  },

  // ==================== 2. PUNE DIVISION (5) ====================
  {
    id: 'pune',
    name: 'Pune',
    marathiName: 'पुणे',
    division: 'Pune',
    tagline: 'Cultural Capital of Goda Masala, Festive Puran Poli, and Balanced Misal',
    image: ASSETS.puneriMisalPav,
    introduction:
      'Pune’s culinary aesthetic mirrors its historical role as the seat of the Peshwas and the cultural capital of Maharashtra. Here, traditional Brahmin and Maratha culinary styles coexist, known for subtle balance, judicious sweetness, and masterfully blended spices.',
    flavoursOfRegion:
      'Puneri cuisine shuns gratuitous fiery heat in favour of nuanced sweetness and earthiness. Puneri Goda Masala—roasted with stone flower, sesame seeds, coriander, and cinnamon in oil—is the heartbeat of daily Amti, Matki Usal, and Masale Bhaat.',
    famousDishes: ['Puneri Misal Pav', 'Puran Poli with Katachi Amti', 'Masale Bhaat with Sajuk Tup', 'Bakharwadi', 'Puneri Pithla Bhakri', 'Amritsari Kulfi / Sujata Mastani'],
    ingredientsAndTechniques: {
      heroIngredients: ['Authentic Goda Masala', 'Chana Dal', 'Jaggery (Gul)', 'Sprouted Matki', 'Ambemohar Rice'],
      techniques: ['Phodnichi Amti (aromatic tempering in hot ghee)', 'Puran sieving through fine mesh', 'Layered misal assembly'],
      traditionalUtensils: ['Puran Yantra', 'Heavy brass kadai', 'Iron tawa']
    },
    culturalTraditions:
      'Festivals such as Gudi Padwa, Ganeshotsav, and Makar Sankranti are celebrated with grand traditional Naivedya thalis featuring Shrikhand Puri, Puran Poli, and Masale Bhaat.',
    neighbouringDistricts: ['Thane', 'Raigad', 'Satara', 'Solapur', 'Ahilyanagar'],
    recipes: RECIPES.filter((r) => r.districtId === 'pune'),
    sharedTraditionsNote:
      'Puran Poli is celebrated across all Maharashtra, but Pune’s technique of Katachi Amti pairing remains iconic.'
  },
  {
    id: 'satara',
    name: 'Satara',
    marathiName: 'सातारा',
    division: 'Pune',
    tagline: 'Land of Kandi Peda, Strawberry Valleys, and Sahyadri Mountain Curries',
    image: ASSETS.heroThali,
    introduction:
      'Dominated by the dramatic forts of Pratapgad and Ajinkyatara and the misty heights of Mahabaleshwar, Satara’s cuisine is a captivating dialogue between Sahyadri mountain pastoralism and fertile riverine sugarcane plains.',
    flavoursOfRegion:
      'Satara is globally famous for its legendary Kandi Peda—slow-caramelised milk solids simmered for hours over wood chulhas until they achieve a deep hazelnut hue and smoky sweetness. In savoury food, Satara favors hot goat meat curries paired with bajra bhakri and garlic thecha.',
    famousDishes: ['Satara Kandi Peda', 'Mahabaleshwar Strawberries & Cream', 'Ghati Mutton Curry', 'Pithla with Bajra Bhakri', 'Hirva Mirchi Thecha'],
    ingredientsAndTechniques: {
      heroIngredients: ['Buffalo Mawa (Khoya)', 'Fresh Strawberries', 'Bajra (Pearl Millet)', 'Gavran Mutton'],
      techniques: ['Slow reduction of mawa in wide iron pans', 'Open flame bhakri roasting', 'Coarse mortar pounding of green chillies'],
      traditionalUtensils: ['Massive iron karaha for peda', 'Stone Khalbatta', 'Chopdar wooden board']
    },
    culturalTraditions:
      'Village Jatras (fairs) in Satara feature open-air communal cooking of spicy mutton rassa with bajra flatbreads, followed by distribution of freshly made brown Kandi Pedas.',
    neighbouringDistricts: ['Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Solapur'],
    recipes: RECIPES.filter((r) => r.districtId === 'pune'),
    sharedTraditionsNote:
      'Satara’s Kandi Peda holds a distinctive GI status, originating from the heritage sweet shops of Rajwada.'
  },
  {
    id: 'sangli',
    name: 'Sangli',
    marathiName: 'सांगली',
    division: 'Pune',
    tagline: 'Turmeric Capital, Sweet Riverine Plains, and Bhadang Bhel',
    image: ASSETS.solapuriJowarBhakri,
    introduction:
      'Sitting peacefully along the banks of the Krishna River, Sangli is Asia’s largest turmeric trading hub. This agrarian prosperity is mirrored in its generous culinary ethos, rich in legumes, sugarcane jaggery, and legendary crunchy tea-time snacks.',
    flavoursOfRegion:
      'Sangli cuisine honours local golden turmeric, raw groundnut oil, and dried spices. The district is universally cherished for "Sangli Bhadang"—puffed rice tossed in garlic cloves, curry leaves, red chillies, and fried peanuts that leaves a delightful lingering warmth.',
    famousDishes: ['Sangli Bhadang', 'Tasgaon Grapes & Raisins', 'Pithla Bhakri with Raw Onions', 'Krishna River Fish Fry', 'Gulachi Poli'],
    ingredientsAndTechniques: {
      heroIngredients: ['Fresh Rajapuri Turmeric', 'Murmura (Puffed Rice)', 'Cold-pressed Singdana Oil', 'Sugarcane Jaggery'],
      techniques: ['Low flame crisp tempering of murmura', 'Direct pan-roasting of ground spices', 'Hand-shaping bhakri'],
      traditionalUtensils: ['Wide iron kadai', 'Earthen storage jars', 'Iron flat griddle']
    },
    culturalTraditions:
      'During Makar Sankranti and harvest festivals, women roll out Gulachi Poli (sweet jaggery, sesame, and poppy seed stuffed flatbreads) with cold-pressed ghee.',
    neighbouringDistricts: ['Satara', 'Solapur', 'Kolhapur', 'Ratnagiri'],
    recipes: RECIPES.filter((r) => r.districtId === 'solapur'),
    sharedTraditionsNote:
      'Bhadang is an authentic Sangli snack creation that is now exported to Maharashtrians worldwide.'
  },
  {
    id: 'kolhapur',
    name: 'Kolhapur',
    marathiName: 'कोल्हापूर',
    division: 'Pune',
    tagline: 'Royal Throne of Tambda & Pandhra Rassa, Wrestling Akhadas, and Misal',
    image: ASSETS.kolhapuriRassa,
    introduction:
      'Kolhapur is Maharashtra’s undisputed royal culinary capital. With its centuries-old wrestling akhadas, legendary Chhatrapati Shahu Maharaj legacy, and fiery spice markets, eating in Kolhapur is not merely sustenance—it is an act of valour and passionate celebration.',
    flavoursOfRegion:
      'The Kolhapuri palate is built on stark, poetic contrast. On one side stands Tambda Rassa (a fiery red mutton broth infused with Sankeshwari chillies and Kanda-Lasun masala), while on the other lies Pandhra Rassa (a soothing, aromatic white broth created with coconut milk, poppy seeds, and bone stock).',
    famousDishes: ['Tambda Rassa & Sukka Mutton', 'Pandhra Rassa', 'Kolhapuri Misal', 'Dhangari Mutton', 'Jowar Bhakri with Thecha', 'Kolhapuri Jaggery Sweets'],
    ingredientsAndTechniques: {
      heroIngredients: ['Sankeshwari & Lavangi Chillies', 'Kolhapuri Kanda Lasun Masala', 'Dagad Phool', 'Poppy Seeds (Khus Khus)', 'Organic Kolhapuri Jaggery'],
      techniques: ['Slow bone-stock extraction (Aalani Pani)', 'Extracting aromatic tarri oil layer', 'Wood-fired iron kadai cooking'],
      traditionalUtensils: ['Brass handi and patila', 'Silbatta stone grinder', 'Traditional katori bowls']
    },
    culturalTraditions:
      'Every Sunday and post-wrestling bout, akhadas cook communal feasts of mutton rassa. The Mahalaxmi temple festival and Navratri bring out pious yet grand vegetarian traditional spreads.',
    neighbouringDistricts: ['Sangli', 'Ratnagiri', 'Sindhudurg'],
    recipes: RECIPES.filter((r) => r.districtId === 'kolhapur'),
    sharedTraditionsNote:
      'Tambda and Pandhra Rassa are universally recognized as authentic indigenous culinary creations of Kolhapur.'
  },
  {
    id: 'solapur',
    name: 'Solapur',
    marathiName: 'सोलापूर',
    division: 'Pune',
    tagline: 'The Sorghum Heartland, Shenga Chutney, and Kadak Bhakri Traditions',
    image: ASSETS.solapuriJowarBhakri,
    introduction:
      'Positioned where Western Maharashtra greets the dry Deccan and Karnataka borders, Solapur is a land of resilient weavers, textile mills, and vast Sorghum fields. Its cuisine is stripped of pretence: rustic, fiery, high in protein, and extraordinarily flavourful.',
    flavoursOfRegion:
      'The hero of Solapur is Maldandi Jowar (sorghum) flour, baked into feather-thin Bhakris that puff gracefully on hot iron griddles. Solapuri Shenga Chutney—coarsely crushed roasted peanuts, dry garlic, and red chillies—is drizzled with raw groundnut oil and eaten daily.',
    famousDishes: ['Solapuri Shenga Chutney (Peanut Chutney)', 'Kadak Jowar Bhakri', 'Amboli with Dal', 'Shengole (Lentil Flour Dumpling Stew)', 'Chavali Chi Usal', 'Ghavane'],
    ingredientsAndTechniques: {
      heroIngredients: ['Maldandi Jowar Flour', 'Roasted Peanuts', 'Country Garlic (Gavran Lasun)', 'Cold-pressed Groundnut Oil'],
      techniques: ['Hand patting paper-thin bhakris', 'Stone mortar coarse dry pounding', 'Open flame crisping of kadak bhakri'],
      traditionalUtensils: ['Parat (wide brass kneading pan)', 'Heavy round iron tawa', 'Stone Khalbatta']
    },
    culturalTraditions:
      'Siddheshwar temple festival and Makar Sankranti witness community feasts of Jowar Bhakri, roasted brinjal mash, and peanut chutneys across Solapur.',
    neighbouringDistricts: ['Pune', 'Satara', 'Sangli', 'Ahilyanagar', 'Dharashiv'],
    recipes: RECIPES.filter((r) => r.districtId === 'solapur'),
    sharedTraditionsNote:
      'Solapuri Shenga Chutney holds GI recognition and is distributed across all 36 districts of Maharashtra.'
  },

  // ==================== 3. NASHIK DIVISION (5) ====================
  {
    id: 'nashik',
    name: 'Nashik',
    marathiName: 'नाशिक',
    division: 'Nashik',
    tagline: 'Godavari Sanctum, Spicy Nashiki Misal, and Onion Heartland',
    image: ASSETS.puneriMisalPav,
    introduction:
      'Surrounded by nine holy hills and blessed by the sacred Godavari river, Nashik is Maharashtra’s grape and onion agricultural heartland. Here, roadside misal spots enjoy cult followings, serving a dark, fiery red curry that draws crowds from across the state.',
    flavoursOfRegion:
      'Nashik Misal is distinct from Pune and Kolhapur: it frequently includes a base of spiced dry poha, boiled sprouted matki, and is flooded with a dark, oily, clove-forward spicy gravy called "Tarri", accompanied by whole fried papad and curd.',
    famousDishes: ['Nashiki Misal Pav', 'Dahi Misal with Papad', 'Khandeshi Mutton', 'Godavari River Chilapi Fish Curry', 'Grape Wine & Vineyard Platters'],
    ingredientsAndTechniques: {
      heroIngredients: ['Lasalgaon Red Onions', 'Sprouted Matki', 'Dark Kala Masala', 'Fresh Coriander', 'Thick Sev'],
      techniques: ['High-heat oil blooming for intense tarri', 'Pohe tempering as misal foundation', 'Wood charcoal broiling'],
      traditionalUtensils: ['Wide iron boiling pot', 'Brass serving ladles', 'Earthen bowls']
    },
    culturalTraditions:
      'Kumbh Mela traditions include extensive sattvic community Annadaana feasts, while local youth celebrate weekend mornings exploring historic misal joints on Gangapur Road.',
    neighbouringDistricts: ['Palghar', 'Thane', 'Pune', 'Ahilyanagar', 'Dhule', 'Jalgaon'],
    recipes: RECIPES.filter((r) => r.districtId === 'pune'),
    sharedTraditionsNote:
      'Nashik’s Misal culture is widely regarded as one of the most vibrant sub-genres of Maharashtrian breakfast food.'
  },
  {
    id: 'ahilyanagar',
    name: 'Ahilyanagar',
    marathiName: 'अहिल्यानगर',
    division: 'Nashik',
    tagline: 'Sugarcane Cooperatives, Shirdi Prasadalayam, and Peasant Curries',
    image: ASSETS.solapuriJowarBhakri,
    introduction:
      'Formerly Ahmednagar and renamed Ahilyanagar in honour of the noble queen Ahilyabai Holkar, this vast district is defined by rolling dry plateaus, Asia’s first cooperative sugar factories, and the holy pilgrimage sanctuary of Shirdi.',
    flavoursOfRegion:
      'The cuisine is hearty, grounded, and generous. The famous Shirdi Sansthan Prasadalayam serves one of the world’s largest solar-cooked community meals—wholesome dal, steamed rice, chapatis, and vegetable curries. In rural households, hot Bajra Bhakris are eaten with spicy Shev Bhaji and Methi Pithla.',
    famousDishes: ['Shirdi Temple Prasad Mahaprasad', 'Gavran Chicken Curry', 'Shev Bhaji', 'Bajra Bhakri with Thecha', 'Sugarcane Juice (Ras)'],
    ingredientsAndTechniques: {
      heroIngredients: ['Sugarcane Jaggery', 'Bajra', 'Fenugreek (Methi)', 'Garlic', 'Country Chickens'],
      techniques: ['Solar-powered massive steam cooking', 'Iron skillet slow roasting', 'Earthen pot stewing'],
      traditionalUtensils: ['Solar steam kettles', 'Cast iron tawa', 'Brass bhakri parat']
    },
    culturalTraditions:
      'Pilgrims partake in daily spiritual prasad, while agrarian sugarcane harvesting seasons culminate in sweet Gud-Dhani and hot Bhakri gatherings.',
    neighbouringDistricts: ['Nashik', 'Pune', 'Solapur', 'Chhatrapati Sambhajinagar', 'Beed', 'Thane'],
    recipes: RECIPES.filter((r) => r.districtId === 'solapur'),
    sharedTraditionsNote:
      'Shares border culinary elements with both Pune’s Desh traditions and Marathwada’s dry plateau flavours.'
  },
  {
    id: 'dhule',
    name: 'Dhule',
    marathiName: 'धुळे',
    division: 'Nashik',
    tagline: 'Khandeshi Spiciness, Rodga Feasts, and Fiery Kala Masala',
    image: ASSETS.khandeshiShevBhaji,
    introduction:
      'Lying along the Panjhra river basin in Khandesh, Dhule is an important trading town whose cuisine celebrates fiery black gravies, hard baked breads, and hearty vegetarian curries designed to sustain intense agricultural labor.',
    flavoursOfRegion:
      'Dhule shares the celebrated Khandeshi Kala Masala tradition: onions and dry coconut are charred until blackened, ground with whole spices, and simmered with red chilli oil. A beloved community tradition is "Rodga"—thick, spherical wheat dough dumplings roasted in cow-dung embers.',
    famousDishes: ['Khandeshi Rodga & Spicy Dal', 'Dhule Shev Bhaji', 'Mutton Rassa with Kala Masala', 'Jowar Bhakri', 'Ambil (Fermented Millet Drink)'],
    ingredientsAndTechniques: {
      heroIngredients: ['Khandeshi Kala Masala', 'Whole Wheat Flour', 'Gathiya Shev', 'Toor Dal', 'Dry Coconut'],
      techniques: ['Cow-dung cake ember roasting (Rodga)', 'Flame-charring aromatics', 'Fermenting finger millet / sorghum starch'],
      traditionalUtensils: ['Gobar gowri (cow dung cake embers)', 'Iron kadai', 'Brass serving lota']
    },
    culturalTraditions:
      'Rodga parties (Rodga Bhat) are held in outdoor mango orchards by large extended families to celebrate post-harvest season and social bonds.',
    neighbouringDistricts: ['Nandurbar', 'Nashik', 'Jalgaon'],
    recipes: RECIPES.filter((r) => r.districtId === 'jalgaon'),
    sharedTraditionsNote:
      'Rodga is a beloved shared heritage across Khandesh (Dhule and Jalgaon) with deep rural roots.'
  },
  {
    id: 'jalgaon',
    name: 'Jalgaon',
    marathiName: 'जळगाव',
    division: 'Nashik',
    tagline: 'The Banana City, Khandeshi Shev Bhaji, and Smoky Vangyache Bharit',
    image: ASSETS.khandeshiShevBhaji,
    introduction:
      'Jalgaon, world-renowned as India’s "Banana City" and the epicenter of Khandesh culture, is a culinary paradise for lovers of bold, unabashed flavours. Nestled along the Tapi river basin, Jalgaon takes immense pride in its smoky aubergine mash and fiery shev curries.',
    flavoursOfRegion:
      'The two pillars of Jalgaon cuisine are Vangyache Bharit (roasted giant green brinjals mashed with spring onions, garlic, green chillies, and crushed peanuts) and Khandeshi Shev Bhaji (crispy chickpea noodles bathed in an intoxicatingly dark Kala Masala tarri).',
    famousDishes: ['Khandeshi Shev Bhaji', 'Jalgaon Vangyache Bharit & Kalna Puri', 'Banana Stem Curry', 'Khandeshi Khaparachi Puran Poli', 'Patodi Rassa'],
    ingredientsAndTechniques: {
      heroIngredients: ['Jalgaon Green Brinjals', 'Khandeshi Kala Masala', 'Spring Onions & Peanuts', 'Raw Bananas', 'Kalna Flour (Jowar + Urad)'],
      techniques: ['Charring brinjals over dried cotton stalks', 'Khapar: baking thin puran poli on inverted terracotta pots', 'High-heat oil blooming'],
      traditionalUtensils: ['Khapar (inverted clay dome over wood fire)', 'Heavy iron kadai', 'Wooden pestle']
    },
    culturalTraditions:
      'Bharit parties in winter draw entire communities into fields to eat hot Bharit served with crispy Kalna Puris and sugarcane jaggery.',
    neighbouringDistricts: ['Dhule', 'Nashik', 'Chhatrapati Sambhajinagar', 'Jalna', 'Buldhana'],
    recipes: RECIPES.filter((r) => r.districtId === 'jalgaon'),
    sharedTraditionsNote:
      'Khaparachi Puran Poli (baked on inverted earthen dome) is a distinct culinary wonder unique to Jalgaon and Khandesh.'
  },
  {
    id: 'nandurbar',
    name: 'Nandurbar',
    marathiName: 'नंदुरबार',
    division: 'Nashik',
    tagline: 'Satpura Hills Tribal Kitchens, Mahua Traditions, and Red Chilli Markets',
    image: ASSETS.solapuriJowarBhakri,
    introduction:
      'Perched in the northwest tip of Maharashtra amidst the Satpura mountain ranges, Nandurbar is a predominantly tribal district bordering Gujarat and Madhya Pradesh. It is home to India’s second-largest red chilli market in Navapur.',
    flavoursOfRegion:
      'Nandurbar’s gastronomy is deeply linked to indigenous forest botany and mountain cereals like Nagli (ragi), maize, and jowar. Forest honey, Mahua flowers, wild river fish, and freshly ground red chillies form the baseline of village food.',
    famousDishes: ['Nandurbar Mirchi Thecha', 'Nagli (Ragi) Bhakri with Pitla', 'Wild Bamboo Shoot (Kille) Curry', 'Makai Chi Roti', 'Mahua Sweet Pancakes'],
    ingredientsAndTechniques: {
      heroIngredients: ['Navapur Red Chillies', 'Nagli / Ragi Flour', 'Tender Bamboo Shoots', 'Mahua Flowers', 'Forest Honey'],
      techniques: ['Clay hearth smoking', 'Stone pit grinding', 'Direct leaf wrapping'],
      traditionalUtensils: ['Earthen flat tawa', 'Stone mortar and pestle', 'Bamboo baskets']
    },
    culturalTraditions:
      'The sacred Toranmal festivals and Bhagoria tribal spring fairs celebrate the blossoming of Mahua trees with traditional sweet breads and herbal concoctions.',
    neighbouringDistricts: ['Dhule'],
    recipes: RECIPES.filter((r) => r.districtId === 'jalgaon'),
    sharedTraditionsNote:
      'Navapur chillies from Nandurbar provide the vibrant red hue and heat for spice blenders across the state.'
  },

  // ==================== 4. CHHATRAPATI SAMBHAJINAGAR DIVISION (8) ====================
  {
    id: 'chhatrapati-sambhajinagar',
    name: 'Chhatrapati Sambhajinagar',
    marathiName: 'छत्रपती संभाजीनगर',
    division: 'Chhatrapati Sambhajinagar',
    tagline: 'Heritage of Ajanta-Ellora, Royal Naan Qalia, and Himroo Kitchens',
    image: ASSETS.heroThali,
    introduction:
      'Formerly known as Aurangabad, this historic city is celebrated for the rock-cut wonders of Ajanta and Ellora, Daulatabad Fort, and a storied Deccani culinary synthesis where Maratha countryside food harmonises with Mughal and Nizam-era royal heritage.',
    flavoursOfRegion:
      'The legendary dish of the city is Naan Qalia—a velvety mutton curry cooked with dried yogurt, fried onions, and whole spices, paired with soft tandoor-baked Naan stamped with a finger lattice. In suburban villages, traditional Jowar Bhakris and garlic thecha prevail.',
    famousDishes: ['Aurangabadi Naan Qalia', 'Tawa Pulao', 'Khubani Ka Meetha', 'Jowar Bhakri with Shengdana Thecha', 'Tahari (Deccani Spiced Rice)'],
    ingredientsAndTechniques: {
      heroIngredients: ['Mutton Bone-in', 'Fried Onions (Birista)', 'Curd & Saffron', 'Spices & Rose Water', 'Jowar'],
      techniques: ['Clay tandoor naan slapping', 'Slow copper-degchi simmer (Dum)', 'Hand patting bhakri'],
      traditionalUtensils: ['Underground clay tandoor', 'Tinned copper degchi', 'Iron ladle']
    },
    culturalTraditions:
      'Weddings and community gatherings throughout Marathwada consider serving authentic Naan Qalia a matter of pride and hospitality.',
    neighbouringDistricts: ['Nashik', 'Ahilyanagar', 'Jalna', 'Beed'],
    recipes: RECIPES.filter((r) => r.districtId === 'pune'),
    sharedTraditionsNote:
      'Naan Qalia is an authentic specialty that originated during the military encampments of the Deccan plateau.'
  },
  {
    id: 'beed',
    name: 'Beed',
    marathiName: 'बीड',
    division: 'Chhatrapati Sambhajinagar',
    tagline: 'Heartland of Sugarcane Cutters, Jowar Bhakri, and Rustic Kadhi',
    image: ASSETS.solapuriJowarBhakri,
    introduction:
      'Located along the southern edge of Marathwada, Beed is a land of hardworking agrarian workers, historical stepwells, and ancient temples. The food reflects the fortitude of seasonal migrant labourers who require high-energy, drought-resilient meals.',
    flavoursOfRegion:
      'Unfussy, mineral-rich, and earthy. Sorghum (Jowar) and Bajra flatbreads are paired with thin, pungent Kadhi made from buttermilk and gram flour, seasoned with mustard seeds, curry leaves, and green chillies.',
    famousDishes: ['Beed Special Kadhi Khichdi', 'Shengoli (Spiced Flour Strands in Kadhi)', 'Jowar Bhakri with Thecha', 'Gawran Chicken Rassa', 'Kala Masala Chana'],
    ingredientsAndTechniques: {
      heroIngredients: ['Sour Buttermilk (Taak)', 'Gram Flour (Besan)', 'Maldandi Jowar', 'Roasted Garlic', 'Cumin'],
      techniques: ['Continuous kadhi whisking to prevent curdling', 'Hand-rolling shengoli dough dumplings', 'Chulha smoking'],
      traditionalUtensils: ['Clay buttermilk churner (Ravi)', 'Iron kadai', 'Earthen tawa']
    },
    culturalTraditions:
      'Sugarcane cutting harvest departure (Kojagiri Purnima to winter) is marked by rituals where women pack dry chutneys, spiced shengole, and dry bhakris.',
    neighbouringDistricts: ['Chhatrapati Sambhajinagar', 'Jalna', 'Parbhani', 'Latur', 'Dharashiv', 'Ahilyanagar'],
    recipes: RECIPES.filter((r) => r.districtId === 'solapur'),
    sharedTraditionsNote:
      'Shengoli is a cherished rustic comfort dish shared throughout Marathwada.'
  },
  {
    id: 'jalna',
    name: 'Jalna',
    marathiName: 'जालना',
    division: 'Chhatrapati Sambhajinagar',
    tagline: 'Sweet Mosambi Orchards, Seed Capital, and Spicy Dal Baati',
    image: ASSETS.heroThali,
    introduction:
      'Jalna, located right next to Chhatrapati Sambhajinagar, is known as the "Seed City of India" and the premier hub for luscious Mosambi (sweet lime) orchards. Its culinary identity bridges Maratha traditions with vibrant Rajasthani trader influences.',
    flavoursOfRegion:
      'Fresh, tangy sweet lime juices contrast with hearty peasant food. Over decades, local adaptation created a fiery Marathwada-style Dal Baati featuring dark Kala Masala tarri alongside ghee-soaked baked wheat baatis.',
    famousDishes: ['Fresh Jalna Mosambi Juice', 'Marathwada Dal Baati', 'Khandeshi-Style Pithla', 'Goda Masala Toor Dal', 'Shenga Chutney with Bhakri'],
    ingredientsAndTechniques: {
      heroIngredients: ['Jalna Sweet Limes (Mosambi)', 'Coarse Wheat Flour', 'Toor Dal', 'Peanuts', 'Red Chillies'],
      techniques: ['Ember baking of baati balls', 'Slow spice roasting', 'Citrus cold-press extraction'],
      traditionalUtensils: ['Iron baati oven / charcoal grate', 'Brass serving platter', 'Stone mortar']
    },
    culturalTraditions:
      'Post-monsoon sweet lime harvest feasts bring together farmers, and temple melas are marked by communal dal-baati cooking in vast cauldrons.',
    neighbouringDistricts: ['Chhatrapati Sambhajinagar', 'Buldhana', 'Parbhani', 'Beed'],
    recipes: RECIPES.filter((r) => r.districtId === 'pune'),
    sharedTraditionsNote:
      'Jalna’s sweet lime is a GI-tagged pride of Maharashtra, renowned for sweet, low-acid nectar.'
  },
  {
    id: 'dharashiv',
    name: 'Dharashiv',
    marathiName: 'धाराशिव',
    division: 'Chhatrapati Sambhajinagar',
    tagline: 'Sanctuary of Tulja Bhavani, Divine Gulab Jamun, and Buffalo Mawa',
    image: ASSETS.solapuriJowarBhakri,
    introduction:
      'Formerly known as Osmanabad and renamed Dharashiv, this historic plateau is revered across India for the holy shrine of Tulja Bhavani, the family deity of Chhatrapati Shivaji Maharaj. Its culinary fame rests equally on its sublime milk sweets and fiery mutton.',
    flavoursOfRegion:
      'Dharashiv’s dairy belt yields thick, unadulterated buffalo milk converted into dense golden mawa. The district is celebrated for its oversized, melt-in-the-mouth Gulab Jamuns and Mawa Pedas sold in earthen pots along pilgrimage routes.',
    famousDishes: ['Dharashivi Mawa Gulab Jamun', 'Tuljapur Mahaprasad', 'Osmanabadi Goat Curry (GI breed)', 'Jowar Kadak Bhakri', 'Hirva Mirchi Thecha'],
    ingredientsAndTechniques: {
      heroIngredients: ['Fresh Buffalo Khoya (Mawa)', 'Osmanabadi Goat Meat (lean, tender)', 'Cardamom', 'Pure Ghee', 'Sorghum'],
      techniques: ['Gentle ghee frying of khoya dumplings', 'Sugarcane syrup steeping', 'Clay pot braising of meat'],
      traditionalUtensils: ['Heavy iron frying karaha', 'Copper syrup vessel', 'Stone grinding slab']
    },
    culturalTraditions:
      'During Navratri, millions of devotees trek to Tuljapur to receive Mahaprasad and celebrate with family feasts of freshly fried Dharashiv Gulab Jamun.',
    neighbouringDistricts: ['Solapur', 'Beed', 'Latur'],
    recipes: RECIPES.filter((r) => r.districtId === 'solapur'),
    sharedTraditionsNote:
      'Osmanabadi goat is a celebrated indigenous breed known for lean, tender meat ideal for rassa curries.'
  },
  {
    id: 'latur',
    name: 'Latur',
    marathiName: 'लातूर',
    division: 'Chhatrapati Sambhajinagar',
    tagline: 'Pulse Trading Capital, Roasted Toor Dal, and Spicy Shengoli',
    image: ASSETS.solapuriJowarBhakri,
    introduction:
      'Latur is India’s major trading center for pulses and oilseeds, particularly Toor dal (pigeon peas) and soybeans. The city’s bustling grain mandis shape a diet that treats lentils and pulses with unmatched reverence and culinary inventiveness.',
    flavoursOfRegion:
      'Protein-rich, comforting, and deeply aromatic. Latur dishes celebrate unpolished toor dal slow-cooked with fresh turmeric and garlic. "Shengoli"—dumpling rings fashioned from spiced chickpea and jowar flour simmered directly inside boiling dal or spicy water—is the ultimate comfort food.',
    famousDishes: ['Latur Shengoli', 'Unpolished Toor Dal Varana', 'Soybean Keema Masala', 'Jowar Bhakri with Shengdana Chutney', 'Latur Kandi Barfi'],
    ingredientsAndTechniques: {
      heroIngredients: ['Latur Toor Dal', 'Besan & Jowar Flour', 'Ajwain (Ova)', 'Roasted Peanuts', 'Garlic'],
      techniques: ['Shaping dumpling loops by fingers', 'Direct simmering inside bubbling dal broth', 'Clay pan roasting'],
      traditionalUtensils: ['Brass amti patila', 'Wooden rolling pin', 'Stone hand-mill (Jate)']
    },
    culturalTraditions:
      'Rainy afternoons call for spontaneous pots of steaming Shengoli, enjoyed with homemade white butter and garlic thecha.',
    neighbouringDistricts: ['Dharashiv', 'Beed', 'Parbhani', 'Nanded'],
    recipes: RECIPES.filter((r) => r.districtId === 'solapur'),
    sharedTraditionsNote:
      'Latur dal is celebrated across western and central India for its sweet nutty aroma and quick cooking qualities.'
  },
  {
    id: 'nanded',
    name: 'Nanded',
    marathiName: 'नांदेड',
    division: 'Chhatrapati Sambhajinagar',
    tagline: 'Holy Hazur Sahib Gurdwara, Langar Traditions, and Telangana Border Spices',
    image: ASSETS.heroThali,
    introduction:
      'Resting on the serene banks of the Godavari, Nanded is sanctified by Takht Sachkhand Sri Hazur Abchalnagar Sahib, where Guru Gobind Singh Ji spent his final days. The cuisine is an inspiring blend of sacred Sikh Langar gastronomy and spicy Marathwada-Telangana border traditions.',
    flavoursOfRegion:
      'Langar at Hazur Sahib serves warm, soul-stirring Karah Parshad (ghee-rich whole wheat halwa), slow-simmered black dal, and chapatis cooked round the clock. Across the city, local street cuisine incorporates curry leaves, dried red chillies, and tamarind from nearby Telangana.',
    famousDishes: ['Hazur Sahib Karah Parshad', 'Langar Dal & Roti', 'Nanded Pulao', 'Zunka Bhakar with Raw Onion', 'Goda Masala Katachi Amti'],
    ingredientsAndTechniques: {
      heroIngredients: ['Pure Desi Ghee', 'Coarse Whole Wheat Flour', 'Whole Urad Dal', 'Curry Leaves', 'Tamarind'],
      techniques: ['Continuous stirring of karah prasad in giant iron cauldrons', 'Wood-fired dal simmering', 'Tempering with ghee'],
      traditionalUtensils: ['Massive iron Karahi for prasad', 'Large wooden stirrers', 'Traditional copper handis']
    },
    culturalTraditions:
      'Gurpurab celebrations bring lakhs of pilgrims to share open community langar, fostering egalitarian food sharing regardless of caste or creed.',
    neighbouringDistricts: ['Latur', 'Parbhani', 'Hingoli', 'Yavatmal'],
    recipes: RECIPES.filter((r) => r.districtId === 'pune'),
    sharedTraditionsNote:
      'The sacred Karah Parshad of Hazur Sahib is recognized globally for its exceptional texture and devotion.'
  },
  {
    id: 'parbhani',
    name: 'Parbhani',
    marathiName: 'परभणी',
    division: 'Chhatrapati Sambhajinagar',
    tagline: 'Agrarian Breadbasket, Jowar Research Heartland, and Spicy Pithla',
    image: ASSETS.solapuriJowarBhakri,
    introduction:
      'Home to Vasantrao Naik Marathwada Agricultural University, Parbhani is a premier agricultural science epicenter responsible for developing resilient hybrid Sorghum and pulse varieties. The everyday food reflects pristine rural authenticity.',
    flavoursOfRegion:
      'Robust, wholesome, and unapologetically rustic. Pithla—a golden savoury porridge of spiced gram flour tempered with mustard, cumin, green chillies, and garlic—is cooked in minutes to accompany steaming jowar flatbreads.',
    famousDishes: ['Parbhani Pithla Bhakri', 'Khara Mutton (Salt & Pepper Broth)', 'Turmeric Flower Curry', 'Gajar Halwa with Fresh Khoya', 'Thecha with Makhan'],
    ingredientsAndTechniques: {
      heroIngredients: ['Gram Flour (Besan)', 'Parbhani Jowar', 'Green Chillies', 'Homemade Cultured Butter (Loni)', 'Turmeric Stems'],
      techniques: ['Lump-free besan whisking into simmering water', 'Clay griddle baking', 'Fresh mortar thecha pounding'],
      traditionalUtensils: ['Iron kadai', 'Wooden whisk', 'Heavy iron tawa']
    },
    culturalTraditions:
      'Pola (bullock festival) is celebrated with utmost devotion, honouring farm cattle with sweet puran puris before family feasts.',
    neighbouringDistricts: ['Jalna', 'Beed', 'Latur', 'Nanded', 'Hingoli', 'Buldhana'],
    recipes: RECIPES.filter((r) => r.districtId === 'solapur'),
    sharedTraditionsNote:
      'Pithla Bhakri is the timeless soul food of rural Maharashtra, perfected in regions like Parbhani.'
  },
  {
    id: 'hingoli',
    name: 'Hingoli',
    marathiName: 'हिंगोली',
    division: 'Chhatrapati Sambhajinagar',
    tagline: 'Aundha Nagnath Jyotirlinga, Soybean Fields, and Temple Feasts',
    image: ASSETS.heroThali,
    introduction:
      'Carved out from Parbhani in 1999, Hingoli is sanctified by Aundha Nagnath, believed to be the eighth sacred Jyotirlinga temple. Surrounded by green fields of soybean, jowar, and cotton, Hingoli retains gentle, deeply traditional temple and village cooking habits.',
    flavoursOfRegion:
      'Simple, satvik temple meals contrast with hearty farm sustenance. Meals are defined by seasonal vegetables, freshly ground Goda masala, hot dal, and thick jowar flatbreads drizzled with cold-pressed oil.',
    famousDishes: ['Aundha Temple Khichdi & Kadi', 'Soybean Bhaji', 'Panchamrit (Sweet Tangy Relish)', 'Jowar Bhakri with Shengdana Chutney', 'Loni Sponge Dosas'],
    ingredientsAndTechniques: {
      heroIngredients: ['Local Jowar', 'Soybeans', 'Peanuts', 'Dry Coconut', 'Cumin & Mustard'],
      techniques: ['Earthen pot slow cooking', 'Dry roasting spices on iron tawas', 'Hand patting flatbreads'],
      traditionalUtensils: ['Clay pots', 'Stone grinder', 'Iron kadai']
    },
    culturalTraditions:
      'Mahashivratri draws thousands of devotees to Aundha Nagnath, where fasting foods (Faraal) like Sabudana Khichdi, sweet potato stir-fries, and peanut curries are prepared.',
    neighbouringDistricts: ['Parbhani', 'Nanded', 'Yavatmal', 'Washim'],
    recipes: RECIPES.filter((r) => r.districtId === 'solapur'),
    sharedTraditionsNote:
      'Aundha Nagnath temple food embodies classic ancient Maratha pilgrim food traditions.'
  },

  // ==================== 5. AMRAVATI DIVISION (5) ====================
  {
    id: 'amravati',
    name: 'Amravati',
    marathiName: 'अमरावती',
    division: 'Amravati',
    tagline: 'Melghat Tiger Forest, Sambar Vadi Delicacy, and Varhadi Spices',
    image: ASSETS.nagpurSaojiCurry,
    introduction:
      'Spanning from the misty Satpura hill station of Chikhaldara and Melghat tiger reserves to fertile cotton black-soil plains, Amravati is the cultural heart of Varhad (Western Vidarbha). Its cuisine is celebrated for aromatic rolled coriander pastries and pungent curries.',
    flavoursOfRegion:
      'Varhadi cuisine is characterized by its bold use of roasted coriander, dry coconut, poppy seeds, and garlic without excessive sourness. The signature jewel of Amravati is "Sambar Vadi"—delicate rolls of spiced gram-flour pastry stuffed with fresh winter coriander and poppy seeds, fried golden.',
    famousDishes: ['Amravati Sambar Vadi (Kothimbir Roll)', 'Varhadi Thecha', 'Patodi Rassa', 'Chikhaldara Honey & Wild Berries', 'Goli Bhaat'],
    ingredientsAndTechniques: {
      heroIngredients: ['Winter Fresh Coriander (Kothimbir)', 'Besan & Poppy Seeds', 'Dry Coconut', 'Varhadi Masala', 'Gavran Garlic'],
      techniques: ['Rolling stuffed dough into tight spirals', 'Deep golden frying', 'Slow tarri gravy simmering'],
      traditionalUtensils: ['Heavy iron kadai', 'Brass rolling pin', 'Stone mortar']
    },
    culturalTraditions:
      'Winter months celebrate Sambar Vadi season when fields overflow with fragrant coriander. Chikhaldara coffee harvests bring cozy mountain meals.',
    neighbouringDistricts: ['Akola', 'Buldhana', 'Washim', 'Yavatmal', 'Nagpur', 'Wardha'],
    recipes: RECIPES.filter((r) => r.districtId === 'nagpur'),
    sharedTraditionsNote:
      'Sambar Vadi is Amravati’s signature culinary pride, entirely distinct from South Indian sambar.'
  },
  {
    id: 'akola',
    name: 'Akola',
    marathiName: 'अकोला',
    division: 'Amravati',
    tagline: 'The Cotton City, Ghavane Breakfasts, and Spicy Varhadi Dal',
    image: ASSETS.nagpurSaojiCurry,
    introduction:
      'Situated in the fertile Purna river basin, Akola is an ancient trade hub renowned for cotton ginning and oilseed processing. The city’s palate is quintessential Varhadi: deeply savoury, grounded in black gram, roasted spices, and vibrant garlic-laden gravies.',
    flavoursOfRegion:
      'Varhadi gravies rely on dry-roasted dark spices, onions, and garlic cooked in unrefined oil to create a fiery "Rassa". "Patodi Rassa"—steamed chickpea flour rhombuses simmered in a spicy, thin curry—is a beloved weekend centerpiece.',
    famousDishes: ['Akola Patodi Rassa', 'Varhadi Mutton Sukka', 'Bajra Bhakri with Garlic Thecha', 'Moong Dal Bhajji', 'Ambil'],
    ingredientsAndTechniques: {
      heroIngredients: ['Gram Flour (Besan)', 'Varhadi Kala Masala', 'Garlic', 'Bajra', 'Cold-pressed Sesame Oil'],
      techniques: ['Cooking besan paste until glossy before cutting into diamond patodis', 'High-flame tarri separation'],
      traditionalUtensils: ['Thali for patodi setting', 'Iron kadai', 'Earthen tawa']
    },
    culturalTraditions:
      'Pola celebrations feature vibrant cattle processions and lavish home servings of sweet puran polis alongside spicy Patodi curries.',
    neighbouringDistricts: ['Amravati', 'Buldhana', 'Washim'],
    recipes: RECIPES.filter((r) => r.districtId === 'nagpur'),
    sharedTraditionsNote:
      'Patodi Rassa is a treasured heritage staple throughout the Varhad region.'
  },
  {
    id: 'buldhana',
    name: 'Buldhana',
    marathiName: 'बुलढाणा',
    division: 'Amravati',
    tagline: 'Mystic Lonar Meteorite Crater, Shegaon Kachori, and Sant Gajanan Maharaj',
    image: ASSETS.mumbaiVadaPav,
    introduction:
      'Buldhana is home to the world-renowned Lonar meteorite crater lake and the pilgrimage sanctuary of Shegaon. Its culinary fame across Western India is headlined by the irresistible, crisp Shegaon Kachori.',
    flavoursOfRegion:
      'The legendary Shegaon Kachori differs sharply from North Indian kachoris: it features an ultra-thin, flaky pastry skin packed with a spicy, non-sweet stuffing of soaked moong dal, crushed black pepper, fennel, and fiery green chillies, fried slowly to a pale golden crunch.',
    famousDishes: ['Authentic Shegaon Kachori', 'Lonar Wild Foraged Greens', 'Varhadi Pithla Bhakri', 'Chana Masala with Pohe', 'Kala Masala Chicken'],
    ingredientsAndTechniques: {
      heroIngredients: ['Yellow Moong Dal', 'Fine Flour & Ghee', 'Fennel Seeds (Saunf)', 'Black Pepper', 'Green Chillies'],
      techniques: ['Low-temperature deep frying for maximum flaky crunch', 'Dry spice pounding', 'Open hearth bhakri baking'],
      traditionalUtensils: ['Deep iron kadai', 'Slotted brass skimmer (Jharna)', 'Stone pestle']
    },
    culturalTraditions:
      'Lakhs of pilgrims visiting Shegaon carry boxes of fresh Shegaon Kachori as prasad for family and neighbours, making it an iconic culinary pilgrimage symbol.',
    neighbouringDistricts: ['Jalgaon', 'Akola', 'Washim', 'Jalna', 'Chhatrapati Sambhajinagar'],
    recipes: RECIPES.filter((r) => r.districtId === 'mumbai-city'),
    sharedTraditionsNote:
      'Shegaon Kachori is an indisputable indigenous snack innovation created in the railway town of Shegaon.'
  },
  {
    id: 'washim',
    name: 'Washim',
    marathiName: 'वाशीम',
    division: 'Amravati',
    tagline: 'Ancient Vatsagulma Vakataka Seat, Balaji Pilgrimage, and Rural Varhadi Feasts',
    image: ASSETS.solapuriJowarBhakri,
    introduction:
      'Historically revered as Vatsagulma, the ancient capital of the Vakataka dynasty, Washim is an atmospheric pilgrimage district nestled between the Penganga and Wardha rivers. Its food traditions preserve antique Vidarbha agricultural recipes.',
    flavoursOfRegion:
      'Generous, hearty, and comforting. The local kitchen revolves around whole grains like Jowar and Bajra, wild leafy greens, and comforting lentil broths enriched with freshly crushed garlic and dried red chillies.',
    famousDishes: ['Washim Balaji Mahaprasad', 'Varhadi Shengoli', 'Methi Pithla with Bhakri', 'Gavran Koli Mutton', 'Kala Chana Usal'],
    ingredientsAndTechniques: {
      heroIngredients: ['Maldandi Jowar', 'Country Garlic', 'Fresh Fenugreek (Methi)', 'Toor Dal', 'Wild Sesame Seeds'],
      techniques: ['Stone mortar crushing', 'Chulha smoke infusion', 'Direct tawa water splashing for bhakri'],
      traditionalUtensils: ['Cast iron tawa', 'Stone Khalbatta', 'Brass degchi']
    },
    culturalTraditions:
      'The annual Washim Balaji Rath Yatra brings immense communal food offerings of sweet Boondi, Shrikhand, and rustic dal-bhaat.',
    neighbouringDistricts: ['Akola', 'Amravati', 'Yavatmal', 'Hingoli', 'Buldhana'],
    recipes: RECIPES.filter((r) => r.districtId === 'solapur'),
    sharedTraditionsNote:
      'Preserves antique Varhadi village cooking styles that have remained unchanged for centuries.'
  },
  {
    id: 'yavatmal',
    name: 'Yavatmal',
    marathiName: 'यवतमाळ',
    division: 'Amravati',
    tagline: 'Cotton Heartland, Gond Tribal Heritage, and Fiery Mahua & Forest Dishes',
    image: ASSETS.nagpurSaojiCurry,
    introduction:
      'Nestled between the Penganga and Wardha river basins, Yavatmal is one of India’s premier cotton producing regions. Home to both traditional Varhadi agricultural communities and Gond and Kolam tribal populations, the cuisine weaves agrarian and forest ingredients together.',
    flavoursOfRegion:
      'Pungent, high in heat, and deeply satisfying. Varhadi chillies and garlic dominate everyday curries. Tribal communities celebrate wild tubers, bamboo shoots, foraged river snails, and tender country chicken cooked with freshly harvested raw spices.',
    famousDishes: ['Yavatmal Gavran Chicken Rassa', 'Varhadi Dal Dhokli (Shengole)', 'Roasted Bamboo Shoot Curry', 'Bajra Bhakri with Thecha', 'Mahua Ladoo'],
    ingredientsAndTechniques: {
      heroIngredients: ['Gavran Red Chillies', 'Sesame Seeds', 'Bamboo Shoots', 'Country Fowl', 'Unrefined Peanut Oil'],
      techniques: ['Open wood fire clay pot simmering', 'Direct coal embers roasting', 'Hand patting thick bajra flatbreads'],
      traditionalUtensils: ['Earthen pot (Handi)', 'Stone grinder', 'Cast iron tawa']
    },
    culturalTraditions:
      'Gond tribal festivals like Dandari celebrate forest spirits with dances and communal pots of spiced country meat and mahua sweets.',
    neighbouringDistricts: ['Amravati', 'Wardha', 'Chandrapur', 'Nanded', 'Hingoli', 'Washim'],
    recipes: RECIPES.filter((r) => r.districtId === 'nagpur'),
    sharedTraditionsNote:
      'Gavran (country) chicken rassa cooked over wood fire is a proud staple across Yavatmal.'
  },

  // ==================== 6. NAGPUR DIVISION (6) ====================
  {
    id: 'nagpur',
    name: 'Nagpur',
    marathiName: 'नागपूर',
    division: 'Nagpur',
    tagline: 'The Orange City, Legendary Saoji Cuisine, and Morning Tarri Poha',
    image: ASSETS.nagpurSaojiCurry,
    introduction:
      'The geographic heart of India and winter capital of Maharashtra, Nagpur is a culinary metropolis renowned for juicy Mandarin oranges, spicy street food, and the secretive, intensely aromatic Saoji cuisine pioneered by the Halba Koshti weaving community.',
    flavoursOfRegion:
      'Nagpur’s palate embraces fiery warmth and layered aromatics. The breakfast of Nagpur is Tarri Poha: flattened rice garnished with roasted peanuts, fresh coriander, chopped onions, and flooded with a spicy, piping-hot brown-chana curry (Tarri). At night, Saoji chicken and mutton curries reign supreme with 24 dark roasted spices.',
    famousDishes: ['Nagpur Tarri Poha', 'Saoji Chicken / Mutton Curry', 'Nagpur Orange Barfi', 'Patodi Rassa', 'Santra (Orange) Kheer', 'Goli Pulao'],
    ingredientsAndTechniques: {
      heroIngredients: ['Nagpur GI Mandarin Oranges', 'Saoji Masala (24 roasted spices)', 'Brown Chickpeas (Kala Chana)', 'Flaxseed (Javas)', 'Poha (Flattened Rice)'],
      techniques: ['Dark dry roasting of whole spices', 'Tarri flooding over tempered poha', 'Slow braising in iron kadai without tomatoes'],
      traditionalUtensils: ['Heavy black iron kadai', 'Vintage brass ladles', 'Stone spice mill']
    },
    culturalTraditions:
      'Marbat festival, unique to Nagpur, and Pola are celebrated with massive communal city feasts where Saoji curries and sweet orange desserts are shared.',
    neighbouringDistricts: ['Wardha', 'Bhandara', 'Gondia', 'Amravati', 'Chandrapur'],
    recipes: RECIPES.filter((r) => r.districtId === 'nagpur'),
    sharedTraditionsNote:
      'Saoji cuisine is a protected, proud heritage created by the Halba Koshti weavers of Nagpur.'
  },
  {
    id: 'wardha',
    name: 'Wardha',
    marathiName: 'वर्धा',
    division: 'Nagpur',
    tagline: 'Sevagram Ashram Sanctuary, Sattvic Ahimsa Traditions, and Wholesome Khichdi',
    image: ASSETS.heroThali,
    introduction:
      'Deeply sanctified by Mahatma Gandhi’s Sevagram Ashram and Acharya Vinoba Bhave’s Paramdham Ashram in Pavnar, Wardha has fostered a profound tradition of mindful, simple, sattvic vegetarian eating alongside vibrant Vidarbha rural flavours.',
    flavoursOfRegion:
      'Wardha demonstrates that simple food can be transcendent. In ashram traditions, unpolished hand-pounded grains, seasonal vegetables, minimal unrefined oil, and fresh rock salt create pure, easily digestible nourishment. Outside, rural kitchens enjoy spicy Varhadi thecha and bhakri.',
    famousDishes: ['Sevagram Ashram Sattvic Khichdi', 'Hand-pounded Jowar Bhakri', 'Goda Masala Toor Dal', 'Wild Amla Murabba', 'Tilgul Ladoo'],
    ingredientsAndTechniques: {
      heroIngredients: ['Hand-pounded Brown Rice', 'Unpolished Moong & Toor Dal', 'Amla (Indian Gooseberry)', 'Pure Cow Ghee', 'Desi Sesame'],
      techniques: ['Gentle steam cooking', 'Minimal oil tempering (Phodni)', 'Preserving natural vegetable crispness'],
      traditionalUtensils: ['Brass cooking pot with lid', 'Traditional wooden pestle', 'Iron griddle']
    },
    culturalTraditions:
      'Gandhi Jayanti and national remembrance days are marked by communal interfaith prayers and collective dining of simple wholesome meals.',
    neighbouringDistricts: ['Nagpur', 'Amravati', 'Yavatmal', 'Chandrapur'],
    recipes: RECIPES.filter((r) => r.districtId === 'pune'),
    sharedTraditionsNote:
      'Wardha’s Gandhian ashram diet is an important historic milestone in modern Indian nutritional thought.'
  },
  {
    id: 'bhandara',
    name: 'Bhandara',
    marathiName: 'भंडारा',
    division: 'Nagpur',
    tagline: 'District of Lakes, Chinnor Fragrant Rice, and Freshwater Fish Feasts',
    image: ASSETS.malvaniFishCurry,
    introduction:
      'Known as the "Brass City" for its historic metal utensil craft and the "District of Lakes" with thousands of traditional irrigation tanks (Malguzari tanks), Bhandara is the fragrant rice bowl of Vidarbha, home to the prized GI-tagged Chinnor rice.',
    flavoursOfRegion:
      'Aromatic, delicate, and deeply oceanic despite being inland, thanks to an abundance of freshwater lake fish like Rohu, Katla, and freshwater prawns (Jhinga). Steaming bowls of slender, fragrant Chinnor rice are paired with light fish curries spiced with mustard, garlic, and fresh coriander.',
    famousDishes: ['Bhandara Chinnor Rice Bhaat', 'Freshwater Lake Fish Curry', 'Brass Pot Mutton Handi', 'Chana Dal Vada', 'Tilkut with Rice'],
    ingredientsAndTechniques: {
      heroIngredients: ['Chinnor Fragrant Rice', 'Freshwater Rohu / Katla', 'Mustard Seeds', 'Garlic', 'Turmeric'],
      techniques: ['Slow boiling fragrant rice in traditional brass pots', 'Light fish poaching in thin coriander gravy', 'Brass metal tempering'],
      traditionalUtensils: ['Handcrafted Bhandara brass handi', 'Brass serving spoon', 'Clay pot']
    },
    culturalTraditions:
      'Bhandara’s historic brass utensil artisans still hand-craft cooking handis believed to impart therapeutic qualities to rice and dal preparations.',
    neighbouringDistricts: ['Nagpur', 'Gondia', 'Chandrapur'],
    recipes: RECIPES.filter((r) => r.districtId === 'nagpur'),
    sharedTraditionsNote:
      'Chinnor rice is a GI-tagged heritage grain of Bhandara, renowned for intoxicating sweet fragrance and soft texture.'
  },
  {
    id: 'gondia',
    name: 'Gondia',
    marathiName: 'गोंदिया',
    division: 'Nagpur',
    tagline: 'The Rice City, Navegaon Forest Sanctuaries, and Mahua Delicacies',
    image: ASSETS.solapuriJowarBhakri,
    introduction:
      'Adjoining Chhattisgarh and Madhya Pradesh amidst the dense sal forests of Navegaon National Park, Gondia is hailed as the "Rice City" of Maharashtra due to its hundreds of busy rice mills and rich tribal culinary legacy.',
    flavoursOfRegion:
      'The cuisine blends indigenous Gond forest gastronomy with eastern Maharashtra rice farming staples. Rice flours are fashioned into steamed dumplings, crispy pan-cakes (Chila), and sweet steamed rolls, complemented by foraged woodland mushrooms (Kukurmutta) and Mahua delicacies.',
    famousDishes: ['Gondia Rice Chila', 'Wild Forest Mushroom Curry', 'Mahua Flower Halwa', 'Bamboo Shoot Stew', 'Poha Chivda'],
    ingredientsAndTechniques: {
      heroIngredients: ['Paddy Rice Flour', 'Wild Forest Mushrooms', 'Mahua Blossoms', 'Mustard Oil', 'Dry Red Chillies'],
      techniques: ['Shallow pan crisping of rice batter', 'Clay pot mushroom sautéing', 'Leaf wrapping and steaming'],
      traditionalUtensils: ['Cast iron chila tawa', 'Earthen cooking bowl', 'Sal leaf platters (Patravali)']
    },
    culturalTraditions:
      'Tribal harvest festivals (Hareli) celebrate the blessing of farming implements and bullocks, accompanied by community banquets of rice chilas.',
    neighbouringDistricts: ['Bhandara', 'Nagpur', 'Chandrapur', 'Gadchiroli'],
    recipes: RECIPES.filter((r) => r.districtId === 'solapur'),
    sharedTraditionsNote:
      'Rice chila is a cherished everyday breakfast tradition shared across Gondia and eastern Vidarbha.'
  },
  {
    id: 'chandrapur',
    name: 'Chandrapur',
    marathiName: 'चंद्रपूर',
    division: 'Nagpur',
    tagline: 'Tadoba Tiger Realm, Ancient Gond Forts, and Fiery Coalbelt Curries',
    image: ASSETS.nagpurSaojiCurry,
    introduction:
      'Famed for Tadoba Andhari Tiger Reserve and vast coal and limestone mines, Chandrapur has a storied past as the capital of the Gond kings. The food of Chandrapur is vigorous, bold, and crafted to fuel mine workers and forest dwellers alike.',
    flavoursOfRegion:
      'Bold garlic notes, coarse red chillies, and rich oil layers characterize Chandrapur’s local non-vegetarian and vegetarian curries. A beloved regional sweet is "Gond Sweet Ladoo" made from edible acacia gum (dink) and dry fruits, eaten for vigour and warmth.',
    famousDishes: ['Chandrapur Saoji Mutton', 'Edible Gum (Dink/Gond) Ladoo', 'Tadoba Camp Chicken Curry', 'Jowar Bhakri with Thecha', 'Roasted Corn Butta with Lime Thecha'],
    ingredientsAndTechniques: {
      heroIngredients: ['Edible Gum (Dink)', 'Saoji Spice Mix', 'Country Mutton', 'Jowar', 'Garlic'],
      techniques: ['Slow coal pot simmering', 'Frying edible gum into crisp crystals in ghee', 'Hand patting bhakri'],
      traditionalUtensils: ['Iron kadai', 'Earthen pot', 'Stone grinding slab']
    },
    culturalTraditions:
      'The grand Mahakali Temple fair in Chandrapur brings millions of devotees from Maharashtra, Telangana, and Chhattisgarh, celebrated with huge community feasts.',
    neighbouringDistricts: ['Wardha', 'Nagpur', 'Bhandara', 'Gondia', 'Gadchiroli', 'Yavatmal'],
    recipes: RECIPES.filter((r) => r.districtId === 'nagpur'),
    sharedTraditionsNote:
      'Chandrapur shares the Saoji culinary tradition with Nagpur, with local variations featuring extra rustic garlic.'
  },
  {
    id: 'gadchiroli',
    name: 'Gadchiroli',
    marathiName: 'गडचिरोली',
    division: 'Nagpur',
    tagline: 'Dense Teak Forests, Pranhita River Confluence, and Tribal Botanical Kitchens',
    image: ASSETS.solapuriJowarBhakri,
    introduction:
      'Covered over 75% by dense tropical forests along the Wainganga and Pranhita rivers, Gadchiroli is Maharashtra’s eastern frontier. The Madia and Gond tribes maintain ancient botanical culinary wisdom focused on nature’s seasonal rhythms and unadulterated forest foods.',
    flavoursOfRegion:
      'The cuisine is completely free of industrial preservatives, artificial gravies, or heavy dairy. Wild tubers, tender bamboo shoots (Wastur), foraged greens, small river fish, and millets like Kodo and Kutki are cooked gently with cold-pressed mahua or mustard oil.',
    famousDishes: ['Wastur (Tender Bamboo Shoot) Curry', 'Kodo Millet Khichdi', 'Foraged Forest Greens Fry', 'River Fish Broth', 'Mahua & Sesame Patties'],
    ingredientsAndTechniques: {
      heroIngredients: ['Tender Bamboo Shoots (Wastur)', 'Kodo & Kutki Millets', 'Wild River Fish', 'Mahua Oil', 'Wild Turmeric'],
      techniques: ['Cooking inside green bamboo hollows over fire', 'Sun drying forest tubers', 'Earthen leaf steaming'],
      traditionalUtensils: ['Fresh green bamboo segments', 'Clay handi', 'Stone pestle']
    },
    culturalTraditions:
      'Community hunting and gathering rituals are accompanied by collective songs and forest cookouts, where food is shared equally among all families of the village clan.',
    neighbouringDistricts: ['Chandrapur', 'Gondia', 'Bhandara'],
    recipes: RECIPES.filter((r) => r.districtId === 'solapur'),
    sharedTraditionsNote:
      'Gadchiroli’s bamboo cooking techniques represent some of India’s most ancient surviving indigenous culinary practices.'
  }
];
