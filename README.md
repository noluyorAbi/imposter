# 🎭 Imposter Word Game

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat)](https://github.com/noluyorAbi/imposter)

A modern, interactive word game where players must identify the imposter among them. Built with Next.js, TypeScript, and Tailwind CSS for a seamless gaming experience.

## ✨ Features

- 🎮 **Multi-language Support** - Play in multiple languages
- 🎯 **Multiple Categories** - Food, Animals, Movies & TV, Sports & Games, and more
- ⏱️ **Timer System** - Dynamic countdown for each round
- 🎭 **Imposter Mechanics** - Hidden roles with strategic gameplay
- 🎨 **Modern UI** - Clean, flat design with smooth animations
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- 🌙 **Dark/Light Mode** - Automatic theme switching
- 🎵 **Sound Effects** - Immersive audio feedback

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

## 🎯 How to Play

1. **Setup**: Choose your language and add players
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
│   └── welcome-screen.tsx # Welcome screen
├── lib/                  # Utility functions
│   ├── translation.ts    # Multi-language support
│   ├── word-categories.ts # Word categories and data
│   ├── word-clues.ts     # Clue generation
│   └── utils.ts          # Helper functions
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## 🎨 Design System

The game features a modern, flat design with:

- **Color Palette**: Clean, accessible colors
- **Typography**: Modern, readable fonts
- **Spacing**: Consistent spacing system
- **Animations**: Smooth, subtle transitions
- **Responsive**: Mobile-first design approach

## 🌍 Internationalization

The game supports multiple languages through a comprehensive translation system:

- English (default)
- Turkish
- Spanish
- French
- German
- And more...

## 🚀 Deployment

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
- [Check the documentation](https://github.com/noluyorAbi/imposter/wiki)

---

<div align="center">

**Made with ❤️ by the Imposter Game Team**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/noluyorAbi/imposter)
[![Issues](https://img.shields.io/badge/Issues-Open-orange?style=flat)](https://github.com/noluyorAbi/imposter/issues)
[![Stars](https://img.shields.io/badge/Stars-⭐-yellow?style=flat)](https://github.com/noluyorAbi/imposter/stargazers)

</div>
