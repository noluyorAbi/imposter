# 🎭 Imposter Word Game

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Play_Now-brightgreen?style=flat)](https://imposter.adatepe.dev)

A social deduction word game where players must identify the imposter among them. Built with Next.js, TypeScript, and Tailwind CSS.

**🌐 Live Demo:** [https://imposter.adatepe.dev](https://imposter.adatepe.dev)

## 🎯 Motivation

This project was born from a passion for creating engaging social experiences that bring people together. The motivation behind the Imposter Word Game stems from several key principles:

### 🤝 **Social Connection**

- **Bridging Digital and Physical**: In an increasingly digital world, creating games that encourage real human interaction and conversation
- **Universal Appeal**: A game that transcends language barriers and cultural differences through simple, intuitive gameplay
- **Accessibility**: No downloads, no registration, just pure gaming enjoyment accessible to everyone

### 🧠 **Cognitive Challenge**

- **Strategic Thinking**: Players must balance deception with believability, creating a unique psychological challenge
- **Communication Skills**: Encourages clear, concise communication and active listening
- **Social Intelligence**: Develops skills in reading people and understanding group dynamics

### 💻 **Technical Excellence**

- **Modern Web Technologies**: Showcasing the power and capabilities of Next.js, React, and TypeScript
- **Performance**: Optimized for smooth gameplay across all devices and network conditions
- **User Experience**: Intuitive design that puts the focus on the game, not the interface

### 🌍 **Global Reach**

- **Multi-language Support**: Breaking down language barriers to create a truly global gaming experience
- **Cultural Inclusivity**: Word categories that resonate across different cultures and backgrounds
- **Community Building**: Creating shared experiences that bring diverse groups together

The goal is to demonstrate that web applications can be both technically sophisticated and genuinely fun, proving that modern web technologies are capable of creating experiences that rival traditional gaming platforms.

## ✨ Features

- 🌍 **Multi-language Support** - English, German, and Turkish
- 🎯 **15 Word Categories** - Food, Animals, Movies & TV, Sports & Games, Places, Jobs & Professions, Objects & Things, Vehicles, Holidays, School, Silly & Random, Fantasy, Technology, Nature, and Music
- ⏱️ **Timer System** - Elapsed time tracking during gameplay
- 🎭 **Imposter Mechanics** - Hidden roles with strategic gameplay
- 🎨 **Modern UI** - Clean design with smooth animations
- 📱 **Responsive Design** - Works on desktop and mobile
- 🌙 **Dark/Light Mode** - Theme switching support
- 🎮 **3+ Players** - Designed for group gameplay

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/noluyorAbi/imposter.git
cd imposter

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Start the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the game in your browser.

**🌐 Live Demo:** [https://imposter.adatepe.dev](https://imposter.adatepe.dev)

## 🎯 How to Play

1. **Setup**: Choose your language (English, German, or Turkish) and add players
2. **Word Selection**: Pick a category and word for the round
3. **Role Assignment**: Players receive cards - most get the same word, one gets "IMPOSTER"
4. **Clue Phase**: Players give one-word clues about their word
5. **Discussion**: Players discuss and try to identify the imposter
6. **Voting**: Vote for who you think is the imposter
7. **Scoring**: Points awarded based on correct identification

## 🛠️ Tech Stack

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-Primitives-161618?style=flat&logo=radix-ui)](https://www.radix-ui.com/)
[![Lucide React](https://img.shields.io/badge/Lucide_React-Icons-000000?style=flat&logo=lucide)](https://lucide.dev/)

### Core Dependencies

- **Framework**: Next.js 15.2.4
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.9
- **Components**: Radix UI Primitives
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Themes**: Next Themes
- **Animations**: Tailwind CSS Animate

## 📁 Project Structure

```
imposter-word-game/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main game component
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── game-setup.tsx    # Game setup screen
│   ├── game-play.tsx     # Main gameplay
│   ├── game-end.tsx      # Game end screen
│   ├── card-distribution.tsx # Card distribution
│   ├── language-selector.tsx # Language selection
│   ├── theme-provider.tsx # Theme provider
│   └── welcome-screen.tsx # Welcome screen
├── lib/                  # Utility functions
│   ├── translation.ts    # Multi-language support
│   ├── word-categories.ts # Word categories and data
│   ├── word-clues.ts     # Clue generation
│   └── utils.ts          # Helper functions
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## 🌍 Supported Languages

The game currently supports:

- **English** 🇺🇸 (Default)
- **German** 🇩🇪
- **Turkish** 🇹🇷

## 🎨 Design Features

- **Modern UI**: Clean, flat design with smooth animations
- **Responsive Layout**: Mobile-first design approach
- **Theme Support**: Dark and light mode switching
- **Typography**: Modern, readable fonts
- **Spacing**: Consistent spacing system
- **Animations**: Subtle transitions and hover effects

## 🚀 Deployment

### Live Demo

The game is currently deployed and available at: **https://imposter.adatepe.dev**

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/noluyorAbi/imposter)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by popular social deduction games
- Built with modern web technologies
- Community-driven development

## 📞 Support

If you have any questions or need help, please:

- [Open an issue](https://github.com/noluyorAbi/imposter/issues)
- [Start a discussion](https://github.com/noluyorAbi/imposter/discussions)

---

<div align="center">

**Made with ❤️ by the Imposter Game Team**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Play_Now-brightgreen?style=flat)](https://imposter.adatepe.dev)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/noluyorAbi/imposter)
[![Issues](https://img.shields.io/badge/Issues-Open-orange?style=flat)](https://github.com/noluyorAbi/imposter/issues)
[![Stars](https://img.shields.io/badge/Stars-⭐-yellow?style=flat)](https://github.com/noluyorAbi/imposter/stargazers)

</div>
