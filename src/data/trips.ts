export interface Trip {
  id: string;
  destination: string;
  image: string;
  duration: string;
  budget: number;
  budgetLabel: string;
  category: "low" | "mid" | "high";
  description: string;
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  transport: { mode: string; cost: string }[];
  stays: string[];
  foodCost: string;
  localTransport: string;
  entryCosts: string;
  totalBudget: string;
  tips: string[];
  hiddenPlaces: string[];
}

export const trips: Trip[] = [
  {
    id: "rishikesh-adventure",
    destination: "Rishikesh",
    image: "trip-rishikesh",
    duration: "3 Days / 2 Nights",
    budget: 6000,
    budgetLabel: "₹6,000",
    category: "low",
    description: "White-water rafting, yoga, and mountain vibes on a shoestring budget.",
    itinerary: [
      { day: 1, title: "Arrive & Explore Laxman Jhula", description: "Take a bus from Delhi, check into hostel, explore Laxman Jhula and Ram Jhula." },
      { day: 2, title: "Rafting & Adventure", description: "16km river rafting, cliff jumping, bungee watching. Evening at Ganga Aarti." },
      { day: 3, title: "Beatles Ashram & Return", description: "Visit Beatles Ashram, explore cafes, depart evening." },
    ],
    transport: [{ mode: "Bus from Delhi", cost: "₹500–₹800" }, { mode: "Local auto", cost: "₹200" }],
    stays: ["Hostel dorm: ₹400–₹600/night", "Budget guesthouse: ₹800/night"],
    foodCost: "₹500–₹800/day",
    localTransport: "₹200–₹400 total",
    entryCosts: "₹150 (Beatles Ashram)",
    totalBudget: "₹5,500–₹7,000",
    tips: ["Book bus tickets on RedBus for best prices", "Carry a reusable water bottle", "Negotiate rafting packages at Shivpuri"],
    hiddenPlaces: ["Neer Garh Waterfall", "Kunjapuri Temple sunrise", "Secret Beach near Shivpuri"],
  },
  {
    id: "goa-beach-vibes",
    destination: "Goa",
    image: "trip-goa",
    duration: "4 Days / 3 Nights",
    budget: 12000,
    budgetLabel: "₹12,000",
    category: "mid",
    description: "Sun, sand, seafood, and sunsets — the classic Goan experience on a budget.",
    itinerary: [
      { day: 1, title: "Arrive & North Goa Beaches", description: "Fly/train in, check into hostel, hit Anjuna and Vagator beaches." },
      { day: 2, title: "Old Goa & Spice Farms", description: "Visit Se Cathedral, Basilica of Bom Jesus, spice plantation tour." },
      { day: 3, title: "South Goa Serenity", description: "Palolem beach, kayaking, Cabo de Rama fort." },
      { day: 4, title: "Markets & Departure", description: "Saturday Night Market or Anjuna Flea Market, depart evening." },
    ],
    transport: [{ mode: "Train from Mumbai", cost: "₹800–₹1,500" }, { mode: "Scooter rental", cost: "₹350/day" }],
    stays: ["Hostel: ₹500–₹800/night", "Beach hut: ₹1,200/night"],
    foodCost: "₹600–₹1,000/day",
    localTransport: "₹1,000 (scooter 3 days)",
    entryCosts: "₹200–₹500 total",
    totalBudget: "₹10,000–₹14,000",
    tips: ["Rent a scooter for maximum freedom", "Eat at local Goan thaalis for ₹100", "Visit beaches early morning for peace"],
    hiddenPlaces: ["Butterfly Beach", "Divar Island", "Abandoned Rachol Seminary"],
  },
  {
    id: "manali-mountains",
    destination: "Manali",
    image: "trip-manali",
    duration: "5 Days / 4 Nights",
    budget: 9000,
    budgetLabel: "₹9,000",
    category: "low",
    description: "Snow-capped peaks, cozy cafes, and mountain trails for budget travelers.",
    itinerary: [
      { day: 1, title: "Arrival & Old Manali", description: "Overnight bus from Delhi, explore Old Manali cafes and Manu Temple." },
      { day: 2, title: "Solang Valley", description: "Paragliding, zorbing, snow activities in Solang Valley." },
      { day: 3, title: "Jogini Waterfall Trek", description: "Trek to Jogini Falls, visit Vashisht hot springs." },
      { day: 4, title: "Kasol Day Trip", description: "Visit Kasol, Manikaran Sahib, riverside walk." },
      { day: 5, title: "Mall Road & Departure", description: "Shopping, Hadimba Temple, evening departure." },
    ],
    transport: [{ mode: "Volvo bus from Delhi", cost: "₹1,000–₹1,500" }],
    stays: ["Hostel: ₹300–₹500/night", "Guesthouse: ₹700/night"],
    foodCost: "₹400–₹600/day",
    localTransport: "₹500 total",
    entryCosts: "₹200 total",
    totalBudget: "₹7,500–₹10,000",
    tips: ["Book HRTC Volvo for comfort", "Carry warm layers even in summer", "Try Siddu and Dham local cuisine"],
    hiddenPlaces: ["Sethan Village", "Hamta Pass viewpoint", "Jana Waterfall"],
  },
  {
    id: "kerala-backwaters",
    destination: "Kerala",
    image: "trip-kerala",
    duration: "5 Days / 4 Nights",
    budget: 18000,
    budgetLabel: "₹18,000",
    category: "mid",
    description: "Backwaters, tea gardens, and Ayurvedic bliss in God's Own Country.",
    itinerary: [
      { day: 1, title: "Kochi Arrival", description: "Explore Fort Kochi, Chinese fishing nets, art galleries." },
      { day: 2, title: "Alleppey Houseboat", description: "Board a houseboat, cruise through backwaters, sunset views." },
      { day: 3, title: "Munnar Tea Gardens", description: "Drive to Munnar, visit tea plantations and Eravikulam National Park." },
      { day: 4, title: "Munnar Exploration", description: "Top Station, Mattupetty Dam, Echo Point." },
      { day: 5, title: "Return to Kochi", description: "Spice market shopping, Kerala Sadhya lunch, departure." },
    ],
    transport: [{ mode: "Flight to Kochi", cost: "₹3,000–₹5,000" }, { mode: "KSRTC buses", cost: "₹500" }],
    stays: ["Homestay: ₹800–₹1,200/night", "Houseboat shared: ₹2,500"],
    foodCost: "₹500–₹800/day",
    localTransport: "₹1,500 total",
    entryCosts: "₹500 total",
    totalBudget: "₹15,000–₹20,000",
    tips: ["Book shared houseboats for budget savings", "Try local toddy shops", "Visit Munnar on weekdays"],
    hiddenPlaces: ["Marari Beach", "Vagamon meadows", "Athirappilly Falls"],
  },
  {
    id: "rajasthan-royal",
    destination: "Rajasthan",
    image: "trip-rajasthan",
    duration: "6 Days / 5 Nights",
    budget: 25000,
    budgetLabel: "₹25,000",
    category: "high",
    description: "Forts, deserts, and royal heritage — the grand Rajasthani circuit.",
    itinerary: [
      { day: 1, title: "Jaipur - Pink City", description: "Hawa Mahal, City Palace, Jantar Mantar." },
      { day: 2, title: "Jaipur - Amber Fort", description: "Amber Fort, Nahargarh sunset, Chokhi Dhani dinner." },
      { day: 3, title: "Jodhpur - Blue City", description: "Mehrangarh Fort, blue city walk, Umaid Bhawan." },
      { day: 4, title: "Jaisalmer - Golden City", description: "Jaisalmer Fort, Patwon Ki Haveli, Gadisar Lake." },
      { day: 5, title: "Sam Sand Dunes", description: "Desert safari, camel ride, overnight camping under stars." },
      { day: 6, title: "Return Journey", description: "Morning dune sunrise, departure." },
    ],
    transport: [{ mode: "Train (Jaipur-Jodhpur-Jaisalmer)", cost: "₹1,500" }, { mode: "Flight to Jaipur", cost: "₹3,000–₹5,000" }],
    stays: ["Haveli guesthouse: ₹800–₹1,500/night", "Desert camp: ₹2,000"],
    foodCost: "₹600–₹900/day",
    localTransport: "₹2,000 total",
    entryCosts: "₹1,500 total",
    totalBudget: "₹22,000–₹28,000",
    tips: ["Book trains early on IRCTC", "Carry sunscreen and hats", "Bargain at markets — start at 50%"],
    hiddenPlaces: ["Bundi step-wells", "Kuldhara abandoned village", "Ranakpur Jain Temple"],
  },
  {
    id: "darjeeling-tea-trails",
    destination: "Darjeeling",
    image: "trip-darjeeling",
    duration: "4 Days / 3 Nights",
    budget: 10000,
    budgetLabel: "₹10,000",
    category: "mid",
    description: "Tea gardens, toy trains, and Himalayan sunrises in the Queen of Hills.",
    itinerary: [
      { day: 1, title: "Arrive & Mall Road", description: "Reach via NJP/Bagdogra, toy train ride, explore Mall Road." },
      { day: 2, title: "Tiger Hill Sunrise", description: "4am trip to Tiger Hill for Kanchenjunga view, Batasia Loop, Peace Pagoda." },
      { day: 3, title: "Tea Estate & Monastery", description: "Happy Valley Tea Estate tour, Ghoom Monastery, rock garden." },
      { day: 4, title: "Shopping & Departure", description: "Buy Darjeeling tea, Tibetan market, depart." },
    ],
    transport: [{ mode: "Train to NJP", cost: "₹800–₹1,500" }, { mode: "Shared jeep to Darjeeling", cost: "₹200" }],
    stays: ["Budget hotel: ₹600–₹1,000/night"],
    foodCost: "₹400–₹600/day",
    localTransport: "₹800 total",
    entryCosts: "₹300 total",
    totalBudget: "₹8,000–₹12,000",
    tips: ["Book toy train tickets in advance", "Layer up — it's cold even in summer", "Try momos at Keventer's"],
    hiddenPlaces: ["Sandakphu Trek base", "Lamahatta", "Lepchajagat forest"],
  },
];

export const hiddenGems = [
  {
    id: "meghalaya",
    name: "Meghalaya",
    image: "gem-meghalaya",
    tagline: "Living Root Bridges & Crystal Rivers",
    budget: "₹8,000–₹12,000",
    description: "Walk across ancient living root bridges, swim in crystal-clear rivers, and explore caves in India's wettest state. Meghalaya is raw, untouched, and magical.",
  },
  {
    id: "spiti-valley",
    name: "Spiti Valley",
    image: "gem-spiti",
    tagline: "India's Own Moon Valley",
    budget: "₹10,000–₹15,000",
    description: "Barren moonscapes, ancient monasteries perched on cliffs, and star-filled skies. Spiti is for the adventurous soul seeking solitude and grandeur.",
  },
  {
    id: "hampi",
    name: "Hampi",
    image: "gem-hampi",
    tagline: "Boulders, Ruins & Sunsets",
    budget: "₹4,000–₹7,000",
    description: "Giant boulders, magnificent temple ruins, and hippie island vibes. Hampi feels like stepping into another era — at almost no cost.",
  },
];
