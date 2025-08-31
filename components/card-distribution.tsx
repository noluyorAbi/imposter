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
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Users,
  Play,
  ChevronLeft,
  ChevronRight,
  Shuffle,
} from "lucide-react";
import { getRandomWordFromRandomCategory } from "@/lib/word-categories";
import { translateText } from "@/lib/translation";
import { getClueForWord } from "@/lib/word-clues";
import type { GameData } from "@/app/page";

interface CardDistributionProps {
  gameData: GameData;
  onStartPlaying: () => void;
  onBack: () => void;
  onUpdateGameData: (newGameData: GameData) => void;
  language?: string;
}

export function CardDistribution({
  gameData,
  onStartPlaying,
  onBack,
  onUpdateGameData,
  language = "en",
}: CardDistributionProps) {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [cardRevealed, setCardRevealed] = useState(false);
  const [playersWhoSawCard, setPlayersWhoSawCard] = useState<Set<number>>(
    new Set(),
  );

  const currentPlayer = gameData.players[currentPlayerIndex];
  const isImposter = currentPlayer?.isImposter;
  const allPlayersSawCards = playersWhoSawCard.size === gameData.players.length;

  const handleNewWord = () => {
    const { word, category } = getRandomWordFromRandomCategory();
    const newGameData = {
      ...gameData,
      currentWord: word,
      category: category,
    };
    onUpdateGameData(newGameData);
    // Reset card distribution state
    setCurrentPlayerIndex(0);
    setCardRevealed(false);
    setPlayersWhoSawCard(new Set());
  };

  const handleRevealCard = () => {
    setCardRevealed(true);
    setPlayersWhoSawCard((prev) => new Set(prev).add(currentPlayerIndex));
  };

  const handleNextPlayer = () => {
    setCardRevealed(false);
    if (currentPlayerIndex < gameData.players.length - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    }
  };

  const handlePreviousPlayer = () => {
    setCardRevealed(false);
    if (currentPlayerIndex > 0) {
      setCurrentPlayerIndex(currentPlayerIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-2xl">
        <div className="flex items-center gap-3 sm:gap-4 mb-8">
          <Button
            variant="outline"
            onClick={onBack}
            size="sm"
            className="shrink-0 bg-transparent"
          >
            <ArrowLeft className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">
              {translateText("Back", language)}
            </span>
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              {translateText("Card Distribution", language)}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {translateText("Pass the device to each player", language)}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Progress Indicator */}
          <Card className="border border-border">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-primary/10 rounded-lg">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-sm">
                    {translateText("Player", language)} {currentPlayerIndex + 1}{" "}
                    {translateText("of", language)} {gameData.players.length}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex gap-1">
                  {gameData.players.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                        playersWhoSawCard.has(index)
                          ? "bg-green-500"
                          : index === currentPlayerIndex
                            ? "bg-primary"
                            : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>
                    {playersWhoSawCard.size}{" "}
                    {translateText("completed", language)}
                  </span>
                  <span>
                    {gameData.players.length - playersWhoSawCard.size}{" "}
                    {translateText("remaining", language)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Player Card */}
          <Card className="text-center border border-border shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl sm:text-2xl">
                {currentPlayer?.name}
                {translateText("'s Turn", language)}
              </CardTitle>
              <CardDescription className="text-sm">
                {translateText("Pass the device to", language)}{" "}
                <strong>{currentPlayer?.name}</strong>.{" "}
                {translateText(
                  '. They should tap "Reveal Card" to see their role privately.',
                  language,
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!cardRevealed ? (
                <div className="space-y-6">
                  <div className="w-40 h-56 sm:w-48 sm:h-64 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-xl shadow-lg flex items-center justify-center">
                    <EyeOff className="h-12 w-12 sm:h-16 sm:w-16 text-primary-foreground opacity-80" />
                  </div>
                  <Button
                    onClick={handleRevealCard}
                    size="lg"
                    className="w-full h-12 text-base shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Eye className="h-5 w-5 mr-2" />
                    {translateText("Reveal Card", language)}
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="w-40 h-56 sm:w-48 sm:h-64 mx-auto rounded-xl shadow-lg flex flex-col items-center justify-center p-4 text-center transition-all duration-300 bg-gradient-to-br from-gray-900 to-gray-800 text-white border border-gray-700 overflow-hidden">
                    {isImposter ? (
                      <>
                        <div className="text-2xl sm:text-3xl mb-2">🕵️</div>
                        <div className="text-sm font-medium mb-1 text-gray-100">
                          {translateText("You are an", language)}
                        </div>
                        <div className="text-xl sm:text-2xl font-bold mb-2 text-white">
                          {translateText("IMPOSTER", language)}
                        </div>
                        {gameData.useClue && (
                          <div className="text-sm opacity-90 leading-relaxed mb-2 p-2 bg-gradient-to-r from-blue-900/60 to-purple-900/60 rounded-lg border border-blue-500/50 shadow-lg backdrop-blur-sm">
                            <div className="flex items-center mb-2">
                              <div className="text-yellow-300 mr-2 text-sm">
                                💡
                              </div>
                              <div className="font-semibold text-white text-xs">
                                {translateText(
                                  "You are the imposter. Here's a clue about the word:",
                                  language,
                                )}
                              </div>
                            </div>
                            <div className="italic text-white bg-black/50 p-2 rounded-lg border-l-4 border-blue-400 shadow-inner">
                              <div className="text-xs leading-relaxed">
                                "
                                {getClueForWord(gameData.currentWord, language)}
                                "
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="text-xs opacity-90 leading-relaxed text-gray-100 text-center px-2">
                          {translateText(
                            "Listen carefully and blend in!",
                            language,
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-2xl sm:text-3xl mb-3">📝</div>
                        <div className="text-sm font-medium mb-2 text-gray-100">
                          {translateText("The word is:", language)}
                        </div>
                        <div className="text-xl sm:text-2xl font-bold mb-3 px-2 py-1 bg-white/20 rounded-lg text-white">
                          {translateText(gameData.currentWord, language)}
                        </div>
                        <div className="text-xs opacity-90 leading-relaxed text-gray-100">
                          {translateText(
                            "Give clues about this word, but watch out for the imposter",
                            language,
                          )}
                          {gameData.imposterCount > 1
                            ? translateText("s", language)
                            : ""}
                          {translateText("!", language)}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {currentPlayerIndex > 0 && (
                      <Button
                        variant="outline"
                        onClick={handlePreviousPlayer}
                        className="flex-1 h-12 bg-transparent"
                      >
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        <span className="hidden sm:inline">
                          {translateText("Previous", language)}
                        </span>
                        <span className="sm:hidden">
                          {translateText("Prev", language)}
                        </span>
                      </Button>
                    )}
                    {currentPlayerIndex < gameData.players.length - 1 ? (
                      <Button
                        onClick={handleNextPlayer}
                        className="flex-1 h-12"
                      >
                        <span className="hidden sm:inline">
                          {translateText("Next Player", language)}
                        </span>
                        <span className="sm:hidden">
                          {translateText("Next", language)}
                        </span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    ) : (
                      <Button
                        onClick={onStartPlaying}
                        className={`flex-1 h-12 shadow-lg hover:shadow-xl transition-all duration-300 animate-button-ripple ${
                          allPlayersSawCards
                            ? "animate-button-pulse animate-button-glow"
                            : ""
                        }`}
                        disabled={!allPlayersSawCards}
                      >
                        <Play className="h-4 w-4 mr-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                        {translateText("Start Discussion", language)}
                      </Button>
                    )}
                  </div>

                  <div className="flex gap-3 mt-3">
                    <Button
                      onClick={handleNewWord}
                      variant="outline"
                      className="flex-1 h-12 bg-card border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-200"
                    >
                      <Shuffle className="h-4 w-4 mr-2" />
                      {translateText("New Word", language)}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className="border border-border/50">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3 text-sm">
                {translateText("How it works:", language)}
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>
                    {translateText(
                      "Pass the device to each player in turn",
                      language,
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>
                    {translateText(
                      'Each player taps "Reveal Card" to see their role privately',
                      language,
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>
                    {gameData.imposterCount === 1
                      ? translateText(
                          "One player is secretly the imposter and won't see the word",
                          language,
                        )
                      : `${gameData.imposterCount} ${translateText(
                          "players are secretly imposters and won't see the word",
                          language,
                        )}`}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>
                    {translateText(
                      "Everyone else sees the secret word",
                      language,
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>
                    {translateText(
                      "Once everyone has seen their card, the discussion begins!",
                      language,
                    )}
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
