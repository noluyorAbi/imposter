"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, RotateCcw, Plus, Crown, Users } from "lucide-react";
import type { GameData } from "@/app/page";
import { translateText } from "@/lib/translation";

interface GameEndProps {
  gameData: GameData;
  onPlayAgain: () => void;
  onNewGame: () => void;
  language?: string;
}

export function GameEnd({
  gameData,
  onPlayAgain,
  onNewGame,
  language = "en",
}: GameEndProps) {
  const imposter = gameData.players.find((p) => p.isImposter);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-foreground text-background rounded-full mb-8 shadow-2xl animate-scale-in">
            <Crown className="h-12 w-12" />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
            {translateText("Game Complete", language)}
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            {translateText("The truth has been revealed", language)}
          </p>
        </div>

        <div className="mb-16 animate-slide-up">
          <Card className="border border-border bg-card shadow-2xl hover:shadow-3xl transition-all duration-500 animate-luxury-hover">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-4 text-3xl font-bold">
                <div className="p-4 bg-foreground text-background rounded-lg">
                  <Trophy className="h-8 w-8" />
                </div>
                <div>
                  <div>{translateText("Final Results", language)}</div>
                  <div className="text-lg font-normal text-muted-foreground">
                    {translateText("The mystery is solved", language)}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center p-8 bg-background border border-border rounded-xl shadow-inner">
                <div className="text-2xl font-light text-muted-foreground mb-4">
                  {translateText("The Secret Word Was", language)}
                </div>
                <div className="text-6xl sm:text-7xl font-bold text-foreground tracking-tight mb-2">
                  {translateText(gameData.currentWord, language)}
                </div>
                <div className="text-lg text-muted-foreground font-light">
                  {translateText("from", language)}{" "}
                  {translateText(gameData.category, language)}
                </div>
              </div>

              <div className="text-center p-8 bg-card border border-border rounded-xl">
                <div className="text-2xl font-light text-muted-foreground mb-6">
                  {translateText("The Imposter Was", language)}
                </div>
                <div className="inline-flex items-center gap-4 p-6 bg-background border border-border rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center text-2xl font-bold">
                    {imposter?.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-bold text-foreground">
                      {imposter?.name}
                    </div>
                    <div className="text-lg text-muted-foreground font-light">
                      {translateText("Successfully infiltrated", language)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <div className="flex items-center justify-center gap-3 text-lg text-muted-foreground">
                  <Users className="h-5 w-5" />
                  <span>
                    {gameData.players.length}{" "}
                    {translateText(
                      "players participated in this round",
                      language
                    )}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-scale-in">
          <Button
            onClick={onPlayAgain}
            size="lg"
            className="text-xl px-10 py-8 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 bg-foreground text-background hover:bg-foreground/90 hover:scale-105 group animate-luxury-hover animate-button-ripple animate-button-pulse font-semibold"
          >
            <RotateCcw className="h-6 w-6 mr-3 group-hover:rotate-180 group-hover:scale-110 transition-all duration-500" />
            {translateText("Play Again", language)}
          </Button>
          <Button
            onClick={onNewGame}
            variant="outline"
            size="lg"
            className="text-xl px-10 py-8 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 bg-card border-border hover:border-foreground hover:bg-foreground hover:text-background hover:scale-105 group animate-luxury-hover animate-button-ripple animate-button-float font-semibold"
          >
            <Plus className="h-6 w-6 mr-3 group-hover:rotate-90 group-hover:scale-110 transition-all duration-300" />
            {translateText("New Setup", language)}
          </Button>
        </div>
      </div>
    </div>
  );
}
