"use client";

import { useState } from "react";
import { GameSetup } from "@/components/game-setup";
import { GamePlay } from "@/components/game-play";
import { GameEnd } from "@/components/game-end";
import { WelcomeScreen } from "@/components/welcome-screen";
import { CardDistribution } from "@/components/card-distribution";
import { getRandomWordFromRandomCategory } from "@/lib/word-categories";
import { type Language, SUPPORTED_LANGUAGES } from "@/lib/translation";

export type GameState = "welcome" | "setup" | "cards" | "playing" | "ended";

export interface Player {
  id: string;
  name: string;
  score: number;
  isImposter?: boolean;
}

export interface GameData {
  players: Player[];
  currentWord: string;
  category: string;
  round: number;
  maxRounds: number;
  currentPlayerIndex: number;
  clues: string[];
  timeRemaining: number;
  gameState: GameState;
  imposterCount: number;
  language: Language; // Added language to game data
  useClue: boolean; // Added clue option
}

export default function ImposterWordGame() {
  const [gameState, setGameState] = useState<GameState>("welcome");
  const [gameData, setGameData] = useState<GameData>({
    players: [],
    currentWord: "",
    category: "",
    round: 1,
    maxRounds: 3,
    currentPlayerIndex: 0,
    clues: [],
    timeRemaining: 300,
    gameState: "welcome",
    imposterCount: 1,
    language: SUPPORTED_LANGUAGES[0], // Default to English
    useClue: false, // Default to no clue
  });

  const startSetup = (language: Language) => {
    setGameData((prev) => ({ ...prev, language }));
    setGameState("setup");
  };

  const startGame = (
    players: Player[],
    word: string,
    category: string,
    imposterCount: number,
    useClue: boolean
  ) => {
    const imposterIndices = new Set<number>();
    while (imposterIndices.size < imposterCount) {
      const randomIndex = Math.floor(Math.random() * players.length);
      imposterIndices.add(randomIndex);
    }

    const updatedPlayers = players.map((player, index) => ({
      ...player,
      isImposter: imposterIndices.has(index),
    }));

    setGameData({
      ...gameData,
      players: updatedPlayers,
      currentWord: word,
      category,
      round: 1,
      clues: [],
      currentPlayerIndex: 0,
      timeRemaining: 300,
      imposterCount,
      useClue,
    });
    setGameState("cards");
  };

  const startPlaying = () => {
    setGameState("playing");
  };

  const endGame = (winner: "group" | "imposter") => {
    setGameState("ended");
  };

  const resetGame = () => {
    setGameData({
      players: [],
      currentWord: "",
      category: "",
      round: 1,
      maxRounds: 3,
      currentPlayerIndex: 0,
      clues: [],
      timeRemaining: 300,
      gameState: "welcome",
      imposterCount: 1,
      language: SUPPORTED_LANGUAGES[0], // Reset language to English
      useClue: false, // Reset clue option
    });
    setGameState("welcome");
  };

  const playAgain = () => {
    const { word, category } = getRandomWordFromRandomCategory();

    const imposterIndices = new Set<number>();
    while (imposterIndices.size < gameData.imposterCount) {
      const randomIndex = Math.floor(Math.random() * gameData.players.length);
      imposterIndices.add(randomIndex);
    }

    const updatedPlayers = gameData.players.map((player, index) => ({
      ...player,
      isImposter: imposterIndices.has(index),
      score: 0,
    }));

    setGameData({
      ...gameData,
      players: updatedPlayers,
      currentWord: word,
      category,
      round: 1,
      clues: [],
      currentPlayerIndex: 0,
      timeRemaining: 300,
    });
    setGameState("cards");
  };

  return (
    <div className="min-h-screen bg-background">
      {gameState === "welcome" && <WelcomeScreen onStart={startSetup} />}

      {gameState === "setup" && (
        <GameSetup
          onStartGame={startGame}
          onBack={() => setGameState("welcome")}
          language={gameData.language.code}
        />
      )}

      {gameState === "cards" && (
        <CardDistribution
          gameData={gameData}
          onStartPlaying={startPlaying}
          onBack={() => setGameState("setup")}
          onUpdateGameData={setGameData}
          language={gameData.language.code}
        />
      )}

      {gameState === "playing" && (
        <GamePlay
          gameData={gameData}
          setGameData={setGameData}
          onEndGame={endGame}
          language={gameData.language.code}
        />
      )}

      {gameState === "ended" && (
        <GameEnd
          gameData={gameData}
          onPlayAgain={playAgain}
          onNewGame={() => setGameState("setup")}
          language={gameData.language.code}
        />
      )}
    </div>
  );
}
