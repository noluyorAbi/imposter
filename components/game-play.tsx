"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MessageCircle, Eye } from "lucide-react";
import type { GameData } from "@/app/page";
import { translateText } from "@/lib/translation";

interface GamePlayProps {
  gameData: GameData;
  setGameData: (data: GameData) => void;
  onEndGame: (winner: "group" | "imposter") => void;
  language?: string;
}

export function GamePlay({
  gameData,
  setGameData,
  onEndGame,
  language = "en",
}: GamePlayProps) {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-foreground to-foreground/80 text-background rounded-full mb-8 shadow-2xl animate-pulse">
            <Eye className="h-12 w-12" />
          </div>
          <div className="relative">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text">
              {translateText("Round in Progress", language)}
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-foreground/5 to-transparent blur-xl"></div>
          </div>
          <p className="text-xl sm:text-2xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            {translateText(
              "The investigation begins. Trust no one. Question everything.",
              language,
            )}
          </p>

          <div className="flex items-center justify-center">
            <Badge
              variant="outline"
              className="text-xl px-8 py-4 bg-background border-border shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Clock className="h-6 w-6 mr-3" />
              {formatTime(elapsedTime)}
            </Badge>
          </div>
        </div>

        <div className="mb-12 animate-slide-up">
          <Card className="border border-border bg-card shadow-2xl hover:shadow-3xl transition-all duration-500 animate-luxury-hover">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-4 text-2xl font-bold">
                <div className="p-3 bg-foreground text-background rounded-lg">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <div>{translateText("Active Players", language)}</div>
                  <div className="text-base font-normal text-muted-foreground">
                    {translateText(
                      "Discuss, deduce, and discover the truth",
                      language,
                    )}
                  </div>
                </div>
              </CardTitle>
              <CardDescription className="text-base font-light">
                {translateText(
                  "One among you knows nothing. Find them through careful questioning and observation.",
                  language,
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gameData.players.map((player, index) => (
                  <div
                    key={player.id}
                    className="group flex items-center gap-4 p-6 rounded-xl bg-background border border-border hover:border-foreground hover:shadow-lg transition-all duration-300 animate-luxury-hover"
                  >
                    <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-lg font-bold group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                      {player.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-lg text-foreground">
                        {player.name}
                      </div>
                      <div className="text-sm text-muted-foreground font-light">
                        {translateText("Participant", language)} #{index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center animate-scale-in">
          <Button
            onClick={() => onEndGame("group")}
            size="lg"
            variant="outline"
            className="text-xl px-12 py-8 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 bg-card border-border hover:border-foreground hover:bg-foreground hover:text-background hover:scale-105 group animate-luxury-hover animate-button-ripple animate-button-float font-semibold"
          >
            <MessageCircle className="h-6 w-6 mr-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            {translateText("Conclude Investigation", language)}
          </Button>
          <p className="text-sm text-muted-foreground mt-4 font-light">
            {translateText(
              "Ready to reveal the truth? End the round when consensus is reached.",
              language,
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
