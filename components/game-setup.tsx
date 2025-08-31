"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Plus,
  Minus,
  Shuffle,
  Users,
  Grid3X3,
  Dices,
  Sparkles,
} from "lucide-react";
import type { Player } from "@/app/page";
import {
  wordCategories,
  getRandomWordFromRandomCategory,
} from "@/lib/word-categories";
import { translateText } from "@/lib/translation";

interface GameSetupProps {
  onStartGame: (
    players: Player[],
    word: string,
    category: string,
    imposterCount: number,
    useClue: boolean,
  ) => void;
  onBack: () => void;
  language?: string;
}

export function GameSetup({
  onStartGame,
  onBack,
  language = "en",
}: GameSetupProps) {
  const [players, setPlayers] = useState<Player[]>([
    { id: "1", name: "", score: 0 },
    { id: "2", name: "", score: 0 },
    { id: "3", name: "", score: 0 },
    { id: "4", name: "", score: 0 },
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [imposterCount, setImposterCount] = useState<number>(1);
  const [useClue, setUseClue] = useState<boolean>(false);

  const addPlayer = () => {
    setPlayers([
      ...players,
      {
        id: Date.now().toString(),
        name: "",
        score: 0,
      },
    ]);
  };

  const removePlayer = (id: string) => {
    if (players.length > 3) {
      setPlayers(players.filter((p) => p.id !== id));
    }
  };

  const updatePlayerName = (id: string, name: string) => {
    setPlayers(players.map((p) => (p.id === id ? { ...p, name } : p)));
  };

  const getRandomWord = (category: string) => {
    const categoryWords = wordCategories[category];
    if (!categoryWords) return "";
    return categoryWords[Math.floor(Math.random() * categoryWords.length)];
  };

  const handleRandomWord = () => {
    const { word, category } = getRandomWordFromRandomCategory();
    const validPlayers = players.filter((p) => p.name.trim() !== "");
    if (validPlayers.length >= 3) {
      onStartGame(validPlayers, word, category, imposterCount, useClue);
    }
  };

  const handleStartGame = () => {
    if (!selectedCategory) return;

    const validPlayers = players.filter((p) => p.name.trim() !== "");
    if (validPlayers.length < 3) return;

    const word = getRandomWord(selectedCategory);
    onStartGame(validPlayers, word, selectedCategory, imposterCount, useClue);
  };

  const validPlayerCount = players.filter((p) => p.name.trim() !== "").length;
  const maxImposters = Math.max(1, validPlayerCount - 1);

  const canStart =
    selectedCategory &&
    validPlayerCount >= 3 &&
    imposterCount >= 1 &&
    imposterCount < validPlayerCount;
  const canStartRandom =
    validPlayerCount >= 3 &&
    imposterCount >= 1 &&
    imposterCount < validPlayerCount;

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-8 lg:py-12 max-w-7xl">
        <div className="flex items-start gap-3 mb-6 sm:mb-8 lg:mb-12 animate-slide-up">
          <Button
            variant="outline"
            onClick={onBack}
            size="sm"
            className="shrink-0 bg-card border-border hover:shadow-lg animate-luxury-hover h-10 w-10 sm:h-auto sm:w-auto p-2 sm:px-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline sm:ml-2">
              {translateText("Back", language)}
            </span>
          </Button>
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground tracking-tight leading-tight">
              {translateText("Game Setup", language)}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mt-1 sm:mt-2 font-light">
              {translateText("Configure players and select category", language)}
            </p>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0 animate-slide-up">
          {/* Players Setup */}
          <Card className="border border-border hover:shadow-2xl transition-all duration-500 bg-card animate-luxury-hover group">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl font-bold">
                <div className="p-2 sm:p-3 bg-foreground text-background rounded-lg shrink-0">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div>{translateText("Players", language)}</div>
                  <div className="text-sm sm:text-base font-normal text-muted-foreground">
                    {validPlayerCount} {translateText("of", language)}{" "}
                    {players.length} {translateText("configured", language)}
                  </div>
                </div>
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                {translateText("Add 3+ players. No upper limit!", language)}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {players.map((player, index) => (
                <div
                  key={player.id}
                  className="flex items-center gap-3 group/player"
                >
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-card border border-border rounded-full text-xs sm:text-sm font-semibold shrink-0 group-hover/player:bg-foreground group-hover/player:text-background transition-all duration-300">
                    {index + 1}
                  </div>
                  <Input
                    value={player.name}
                    onChange={(e) =>
                      updatePlayerName(player.id, e.target.value)
                    }
                    placeholder={`${translateText("Player", language)} ${
                      index + 1
                    }`}
                    className="flex-1 h-10 sm:h-12 bg-background border-border focus:border-foreground focus:ring-foreground/20 text-sm sm:text-base"
                  />
                  {players.length > 3 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removePlayer(player.id)}
                      className="shrink-0 h-10 w-10 sm:h-12 sm:w-12 p-0 border-border hover:border-destructive hover:bg-destructive hover:text-background"
                    >
                      <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  )}
                </div>
              ))}

              <Button
                variant="outline"
                onClick={addPlayer}
                className="w-full h-10 sm:h-12 border-dashed border-border hover:bg-foreground hover:text-background hover:border-foreground bg-transparent text-foreground animate-luxury-hover text-sm sm:text-base"
              >
                <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                {translateText("Add Player", language)}
              </Button>

              <div className="pt-4 sm:pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">
                      {translateText("Imposters", language)}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {imposterCount} {translateText("of", language)}{" "}
                      {validPlayerCount}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setImposterCount(Math.max(1, imposterCount - 1))
                      }
                      disabled={imposterCount <= 1}
                      className="h-8 w-8 sm:h-10 sm:w-10 p-0 border-border hover:border-foreground hover:bg-foreground hover:text-background"
                    >
                      <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>

                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-foreground text-background rounded-full text-sm sm:text-base font-bold">
                      {imposterCount}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setImposterCount(
                          Math.min(maxImposters, imposterCount + 1),
                        )
                      }
                      disabled={imposterCount >= maxImposters}
                      className="h-8 w-8 sm:h-10 sm:w-10 p-0 border-border hover:border-foreground hover:bg-foreground hover:text-background"
                    >
                      <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground text-center">
                  {translateText("Range:", language)} 1{" "}
                  {translateText("to", language)} {maxImposters} •{" "}
                  {validPlayerCount - imposterCount}{" "}
                  {translateText("vs", language)} {imposterCount}
                </div>
              </div>

              {/* Clue Option */}
              <div className="pt-4 sm:pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">
                      {translateText("Clue for Imposter", language)}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {useClue
                        ? translateText("Play with Clue", language)
                        : translateText("Play without Clue", language)}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setUseClue(!useClue)}
                    className={`h-8 w-8 sm:h-10 sm:w-10 p-0 border-border transition-all duration-300 ${
                      useClue
                        ? "bg-foreground text-background"
                        : "hover:border-foreground hover:bg-foreground hover:text-background"
                    }`}
                  >
                    {useClue ? "✓" : "○"}
                  </Button>
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground text-center">
                  {useClue
                    ? translateText(
                        "The imposter will get a clue about the word",
                        language,
                      )
                    : translateText("No clues will be given", language)}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 sm:pt-4 text-xs sm:text-sm text-muted-foreground">
                <span>Min: 3</span>
                <span>Max: ∞</span>
              </div>
            </CardContent>
          </Card>

          {/* Category Selection */}
          <Card className="border border-border hover:shadow-2xl transition-all duration-500 bg-card animate-luxury-hover group">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl font-bold">
                <div className="p-2 sm:p-3 bg-foreground text-background rounded-lg shrink-0">
                  <Grid3X3 className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div>{translateText("Category", language)}</div>
                  <div className="text-sm sm:text-base font-normal text-muted-foreground truncate">
                    {selectedCategory
                      ? translateText(selectedCategory, language)
                      : translateText("Choose theme", language)}
                  </div>
                </div>
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                {translateText("Select your game theme", language)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 sm:gap-3">
                {Object.keys(wordCategories).map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                    className={`text-left justify-start h-auto p-3 sm:p-4 transition-all duration-300 animate-luxury-hover ${
                      selectedCategory === category
                        ? "bg-foreground text-background shadow-xl scale-[1.02]"
                        : "bg-background border-border hover:border-foreground hover:bg-card hover:scale-[1.02]"
                    }`}
                  >
                    <div className="w-full">
                      <div className="font-semibold text-sm">
                        {translateText(category, language)}
                      </div>
                      <div className="text-xs opacity-70 mt-1">
                        {wordCategories[category].length}{" "}
                        {translateText("words", language)}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>

              {selectedCategory && (
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-card border border-border rounded-lg animate-scale-in">
                  <h4 className="font-semibold mb-2 sm:mb-3 text-sm flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-foreground" />
                    {translateText("Preview:", language)}
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {wordCategories[selectedCategory]
                      .slice(0, 4)
                      .map((word) => (
                        <Badge
                          key={word}
                          variant="secondary"
                          className="text-xs bg-card border border-border text-foreground px-2 py-1"
                        >
                          {translateText(word, language)}
                        </Badge>
                      ))}
                    {wordCategories[selectedCategory].length > 4 && (
                      <Badge
                        variant="outline"
                        className="text-xs border-border text-muted-foreground px-2 py-1"
                      >
                        +{wordCategories[selectedCategory].length - 4}
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 animate-scale-in">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 items-center justify-center">
              <Button
                onClick={handleRandomWord}
                disabled={!canStartRandom}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base sm:text-xl px-6 sm:px-10 py-6 sm:py-8 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 bg-card border-border hover:border-foreground hover:bg-foreground hover:text-background hover:scale-105 group disabled:opacity-50 disabled:hover:scale-100 animate-luxury-hover animate-button-ripple font-semibold"
              >
                <Dices className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                {translateText("Surprise Me", language)}
              </Button>

              <Button
                onClick={handleStartGame}
                disabled={!canStart}
                size="lg"
                className={`w-full sm:w-auto text-base sm:text-xl px-6 sm:px-10 py-6 sm:py-8 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 bg-foreground text-background hover:bg-foreground/90 hover:scale-105 group disabled:opacity-50 disabled:hover:scale-100 animate-luxury-hover animate-button-ripple font-semibold ${
                  canStart ? "animate-button-pulse animate-button-glow" : ""
                }`}
              >
                <Shuffle className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                {translateText("Begin Game", language)}
              </Button>
            </div>

            {!canStart && !canStartRandom && (
              <div className="text-sm sm:text-base text-muted-foreground space-y-2 sm:space-y-3 animate-fade-in px-4">
                <p className="font-light">
                  {translateText("Ready to begin? Ensure you have:", language)}
                </p>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-6 text-xs sm:text-sm">
                  <span
                    className={`flex items-center gap-2 transition-colors font-medium ${
                      validPlayerCount >= 3
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {validPlayerCount >= 3 ? "✓" : "○"}{" "}
                    {translateText("3+ named players", language)}
                  </span>
                  <span
                    className={`flex items-center gap-2 transition-colors font-medium ${
                      imposterCount >= 1 && imposterCount < validPlayerCount
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {imposterCount >= 1 && imposterCount < validPlayerCount
                      ? "✓"
                      : "○"}{" "}
                    {translateText("Valid imposters", language)}
                  </span>
                  <span
                    className={`flex items-center gap-2 transition-colors font-medium ${
                      selectedCategory
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {selectedCategory ? "✓" : "○"}{" "}
                    {translateText("Category selected", language)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
