# Coffee Personality Quiz - Basecamp Coffee

## Project Status: COMPLETED

**Live URL:** Deployed on Vercel
**Repository:** https://github.com/EVCB82/coffee-quiz

---

## Features Implemented

### Quiz Flow
- Welcome screen with Basecamp Coffee logo and branding
- 8 personality questions shown one at a time
- Progress bar showing current question number
- Result screen with personalized coffee recommendation
- "Take Quiz Again" button to restart

### Social Sharing
- Share to X (Twitter) with pre-filled text
- Share to Facebook
- Copy link to clipboard
- Native share button (mobile devices)

---

## Personality → Coffee Pairings (10 total)

| Personality | Coffee | Tagline |
|-------------|--------|---------|
| The Adventurer | Cold Brew | "Bold, smooth, and ready for anything." |
| The Classic | Americano | "Timeless elegance in every sip." |
| The Creative | Lavender Oat Latte | "Where imagination meets inspiration." |
| The Socialite | Cappuccino | "Life is better shared." |
| The Intellectual | Pour Over | "Savoring the details." |
| The Minimalist | Espresso | "Less is more." |
| The Romantic | Mocha | "Sweetness in every moment." |
| The Energizer | Red Eye | "Unstoppable energy." |
| The Nurturer | Vanilla Latte | "Comfort in a cup." |
| The Trendsetter | Matcha Latte | "Always ahead of the curve." |

---

## Quiz Questions (8 total)

### Q1: How do you prefer to spend your ideal Saturday morning?
- 🌄 Exploring a new hiking trail → Adventurer
- 📚 Curled up with a good book → Intellectual
- 🥂 Brunch with friends → Socialite
- 🎨 Working on a creative project → Creative

### Q2: Which word best describes your personal style?
- 👔 Timeless and elegant → Classic
- ✨ Bold and unique → Trendsetter
- 🧘 Comfortable and simple → Minimalist
- 🧣 Warm and inviting → Nurturer

### Q3: What's your go-to way to recharge?
- 🌙 A quiet evening alone → Minimalist
- 💪 An intense workout → Energizer
- 💬 Deep conversations with loved ones → Nurturer
- 🎢 Trying something new and exciting → Adventurer

### Q4: How do you approach making decisions?
- ❤️ Trust my gut instinct → Romantic
- 🔍 Research and analyze thoroughly → Intellectual
- 👥 Ask friends for their opinions → Socialite
- 🌟 Go with whatever feels fresh and new → Trendsetter

### Q5: What type of music gets you in the best mood?
- 🎷 Jazz or classical → Classic
- 🎧 Upbeat pop or electronic → Energizer
- 🎸 Indie or alternative → Creative
- 🎹 Romantic ballads → Romantic

### Q6: What's your ideal vacation destination?
- 🏙️ A bustling city full of culture → Socialite
- 🏔️ A remote mountain retreat → Adventurer
- 🏡 A cozy countryside cottage → Nurturer
- ✈️ Wherever the latest trend takes me → Trendsetter

### Q7: How would your friends describe you?
- 🤝 The reliable one → Classic
- 🎉 The life of the party → Energizer
- 💭 The dreamer → Creative
- 🌻 The caretaker → Nurturer

### Q8: What draws you to a coffee shop?
- 🕯️ The aesthetic and ambiance → Romantic
- ☕ The quality of the beans → Intellectual
- 📋 A simple, no-fuss menu → Minimalist
- 🧪 Unique and creative drinks → Creative

---

## Visual Style

**Theme:** Warm & Cozy

**Colors:**
- Background: #fffbf7 (warm cream)
- Primary: #8b5e3c (coffee brown)
- Secondary: #f5ebe0 (warm beige)
- Accent: #d4a574 (caramel)
- Text: #3d2914 (dark brown)
- Muted text: #7a6352

**Typography:**
- Headers: Libre Baskerville (serif)
- Body: Lato (sans-serif)

**UI Elements:**
- Rounded corners (1rem - 1.5rem)
- Soft shadows with warm brown tint
- Hover effects with subtle animations
- Pill-shaped buttons

---

## Branding

**Company:** Basecamp Coffee
**Logo:** Custom SVG with mountain peaks and brand name
**Voice:** Warm, authentic, community-focused (per BRAND-VOICE.md)

**Brand Copy Used:**
- "At Basecamp Coffee, we believe your coffee should be as unique as you are."
- "Pop into your local Basecamp and try your perfect match!"
- "Your Basecamp Order: [coffee name]"

---

## Tech Stack

- **Framework:** Next.js 16 (React)
- **Language:** TypeScript
- **Styling:** CSS with Tailwind imports
- **Fonts:** Google Fonts (next/font)
- **Deployment:** Vercel (auto-deploy from GitHub)
- **Version Control:** Git + GitHub

---

## Files Structure

```
app/
├── page.tsx              # Main quiz component (welcome, quiz, result screens)
├── layout.tsx            # Root layout with Google Fonts
├── globals.css           # Custom warm theme styles
└── data/
    └── quizData.ts       # Questions and personality mappings

public/
└── basecamp-logo.svg     # Brand logo
```

---

## Future Enhancements (Not Implemented)

- [ ] Analytics tracking (quiz starts, completions, popular results)
- [ ] Illustrated images for each coffee result
- [ ] Animated transitions between questions
- [ ] Save/share specific result via unique URL
- [ ] Email capture for Basecamp Rewards program
