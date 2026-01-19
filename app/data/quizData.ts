export type PersonalityType =
  | "adventurer"
  | "classic"
  | "creative"
  | "socialite"
  | "intellectual"
  | "minimalist"
  | "romantic"
  | "energizer"
  | "nurturer"
  | "trendsetter";

export interface Answer {
  text: string;
  icon: string;
  personality: PersonalityType;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export interface CoffeeResult {
  personality: PersonalityType;
  title: string;
  coffee: string;
  tagline: string;
  description: string;
  icon: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "How do you prefer to spend your ideal Saturday morning?",
    answers: [
      { text: "Exploring a new hiking trail", icon: "🌄", personality: "adventurer" },
      { text: "Curled up with a good book", icon: "📚", personality: "intellectual" },
      { text: "Brunch with friends", icon: "🥂", personality: "socialite" },
      { text: "Working on a creative project", icon: "🎨", personality: "creative" },
    ],
  },
  {
    id: 2,
    question: "Which word best describes your personal style?",
    answers: [
      { text: "Timeless and elegant", icon: "👔", personality: "classic" },
      { text: "Bold and unique", icon: "✨", personality: "trendsetter" },
      { text: "Comfortable and simple", icon: "🧘", personality: "minimalist" },
      { text: "Warm and inviting", icon: "🧣", personality: "nurturer" },
    ],
  },
  {
    id: 3,
    question: "What's your go-to way to recharge?",
    answers: [
      { text: "A quiet evening alone", icon: "🌙", personality: "minimalist" },
      { text: "An intense workout", icon: "💪", personality: "energizer" },
      { text: "Deep conversations with loved ones", icon: "💬", personality: "nurturer" },
      { text: "Trying something new and exciting", icon: "🎢", personality: "adventurer" },
    ],
  },
  {
    id: 4,
    question: "How do you approach making decisions?",
    answers: [
      { text: "Trust my gut instinct", icon: "❤️", personality: "romantic" },
      { text: "Research and analyze thoroughly", icon: "🔍", personality: "intellectual" },
      { text: "Ask friends for their opinions", icon: "👥", personality: "socialite" },
      { text: "Go with whatever feels fresh and new", icon: "🌟", personality: "trendsetter" },
    ],
  },
  {
    id: 5,
    question: "What type of music gets you in the best mood?",
    answers: [
      { text: "Jazz or classical", icon: "🎷", personality: "classic" },
      { text: "Upbeat pop or electronic", icon: "🎧", personality: "energizer" },
      { text: "Indie or alternative", icon: "🎸", personality: "creative" },
      { text: "Romantic ballads", icon: "🎹", personality: "romantic" },
    ],
  },
  {
    id: 6,
    question: "What's your ideal vacation destination?",
    answers: [
      { text: "A bustling city full of culture", icon: "🏙️", personality: "socialite" },
      { text: "A remote mountain retreat", icon: "🏔️", personality: "adventurer" },
      { text: "A cozy countryside cottage", icon: "🏡", personality: "nurturer" },
      { text: "Wherever the latest trend takes me", icon: "✈️", personality: "trendsetter" },
    ],
  },
  {
    id: 7,
    question: "How would your friends describe you?",
    answers: [
      { text: "The reliable one", icon: "🤝", personality: "classic" },
      { text: "The life of the party", icon: "🎉", personality: "energizer" },
      { text: "The dreamer", icon: "💭", personality: "creative" },
      { text: "The caretaker", icon: "🌻", personality: "nurturer" },
    ],
  },
  {
    id: 8,
    question: "What draws you to a coffee shop?",
    answers: [
      { text: "The aesthetic and ambiance", icon: "🕯️", personality: "romantic" },
      { text: "The quality of the beans", icon: "☕", personality: "intellectual" },
      { text: "A simple, no-fuss menu", icon: "📋", personality: "minimalist" },
      { text: "Unique and creative drinks", icon: "🧪", personality: "creative" },
    ],
  },
];

export const coffeeResults: Record<PersonalityType, CoffeeResult> = {
  adventurer: {
    personality: "adventurer",
    title: "The Adventurer",
    coffee: "Cold Brew",
    tagline: "Bold, smooth, and ready for anything.",
    description:
      "You're always seeking the next thrill. Cold brew matches your bold spirit - strong, refreshing, and perfect for life on the go.",
    icon: "🏔️",
  },
  classic: {
    personality: "classic",
    title: "The Classic",
    coffee: "Americano",
    tagline: "Timeless elegance in every sip.",
    description:
      "You appreciate the finer things done right. An Americano reflects your refined taste - simple, sophisticated, and never out of style.",
    icon: "👔",
  },
  creative: {
    personality: "creative",
    title: "The Creative",
    coffee: "Lavender Oat Latte",
    tagline: "Where imagination meets inspiration.",
    description:
      "You see the world differently. A lavender oat latte matches your artistic soul - unique, inspired, and beautifully unconventional.",
    icon: "🎨",
  },
  socialite: {
    personality: "socialite",
    title: "The Socialite",
    coffee: "Cappuccino",
    tagline: "Life is better shared.",
    description:
      "You light up every room you enter. A cappuccino is your perfect match - warm, inviting, and always the center of attention.",
    icon: "🥂",
  },
  intellectual: {
    personality: "intellectual",
    title: "The Intellectual",
    coffee: "Pour Over",
    tagline: "Savoring the details.",
    description:
      "You appreciate depth and complexity. A pour over reflects your thoughtful nature - carefully crafted and full of nuance.",
    icon: "📚",
  },
  minimalist: {
    personality: "minimalist",
    title: "The Minimalist",
    coffee: "Espresso",
    tagline: "Less is more.",
    description:
      "You find beauty in simplicity. An espresso is your soulmate - pure, powerful, and perfectly uncomplicated.",
    icon: "🧘",
  },
  romantic: {
    personality: "romantic",
    title: "The Romantic",
    coffee: "Mocha",
    tagline: "Sweetness in every moment.",
    description:
      "You lead with your heart. A mocha captures your essence - warm, sweet, and full of passion.",
    icon: "💕",
  },
  energizer: {
    personality: "energizer",
    title: "The Energizer",
    coffee: "Red Eye",
    tagline: "Unstoppable energy.",
    description:
      "You bring the energy wherever you go. A red eye matches your intensity - powerful, bold, and always ready for action.",
    icon: "⚡",
  },
  nurturer: {
    personality: "nurturer",
    title: "The Nurturer",
    coffee: "Vanilla Latte",
    tagline: "Comfort in a cup.",
    description:
      "You make everyone feel at home. A vanilla latte reflects your warmth - comforting, sweet, and always welcoming.",
    icon: "🌻",
  },
  trendsetter: {
    personality: "trendsetter",
    title: "The Trendsetter",
    coffee: "Matcha Latte",
    tagline: "Always ahead of the curve.",
    description:
      "You define what's next. A matcha latte matches your forward-thinking style - fresh, vibrant, and effortlessly cool.",
    icon: "🌿",
  },
};
