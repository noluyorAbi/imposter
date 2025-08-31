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
import {
  Users,
  Clock,
  Target,
  Lightbulb,
  Play,
  Sparkles,
  Heart,
} from "lucide-react";
import { LanguageSelector } from "./language-selector";
import {
  SUPPORTED_LANGUAGES,
  type Language,
  translateText,
} from "@/lib/translation";

interface WelcomeScreenProps {
  onStart: (language: Language) => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    SUPPORTED_LANGUAGES[0]
  );
  const [translations, setTranslations] = useState<{ [key: string]: string }>(
    {}
  );
  const [isTranslating, setIsTranslating] = useState(false);

  const textKeys = {
    title: "Imposter Word Game",
    subtitle:
      "The ultimate social deduction experience where wit meets deception. One player hides in plain sight—can you expose the imposter?",
    premiumExperience: "Premium Social Deduction Experience",
    artOfDeception: "The Art of Deception",
    theInformed: "The Informed",
    informedDesc:
      "Give clever one-word clues about the secret word without being too obvious",
    theImposter: "The Imposter",
    imposterDesc:
      "Blend seamlessly while knowing nothing—pure psychological warfare",
    theRevelation: "The Revelation",
    revelationDesc:
      "Vote to expose the imposter or watch them attempt the impossible guess",
    premiumFeatures: "Premium Features",
    players: "3+ Players",
    duration: "15-30 min",
    feature1: "15 curated categories with 450+ premium words",
    feature2: "Elegant card-based reveal system",
    feature3: "Seamless mobile-first experience",
    feature4: "Built-in timer and session management",
    beginGame: "Begin the Game",
    noRegistration: "No registration • No downloads • Pure sophistication",
    sophisticatedPlay: "Sophisticated Play",
    sophisticatedDesc:
      "Designed for discerning players who appreciate elegant gameplay",
    instantAccess: "Instant Access",
    instantDesc: "Premium experience without the premium wait time",
    endlessIntrigue: "Endless Intrigue",
    endlessDesc:
      "Carefully curated words ensure every round feels fresh and challenging",
    madeWithCare: "Made with Care",
    craftedBy: "Crafted by alpi for you",
    craftedDesc:
      "Because great games shouldn't be locked behind app stores, subscriptions, or paywalls. This is what happens when you build something purely for the joy of playing together.",
  };

  useEffect(() => {
    if (selectedLanguage.code === "en") {
      setTranslations({});
      return;
    }

    const translateUI = async () => {
      setIsTranslating(true);
      const newTranslations: { [key: string]: string } = {};

      for (const [key, text] of Object.entries(textKeys)) {
        try {
          newTranslations[key] = await translateText(
            text,
            selectedLanguage.code
          );
        } catch (error) {
          newTranslations[key] = text;
        }
      }

      setTranslations(newTranslations);
      setIsTranslating(false);
    };

    translateUI();
  }, [selectedLanguage]);

  const t = (key: keyof typeof textKeys) => {
    return translations[key] || textKeys[key];
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <div className="container mx-auto px-4 py-12 sm:py-16 max-w-6xl">
        <div className="flex justify-end mb-8">
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />
        </div>

        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground animate-luxury-hover">
            <Sparkles className="w-4 h-4" />
            {t("premiumExperience")}
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-foreground mb-8 text-balance tracking-tight leading-none">
            {t("title").split(" ")[0]}
            <br />
            <span className="text-muted">
              {t("title").split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed font-light">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20 animate-slide-up">
          <Card className="border border-border hover:shadow-2xl transition-all duration-500 bg-card animate-luxury-hover group">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-4 text-2xl font-bold">
                <div className="p-3 bg-foreground text-background rounded-lg">
                  <Target className="h-6 w-6" />
                </div>
                {t("artOfDeception")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-base">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-foreground text-background rounded-full text-sm font-bold flex-shrink-0 mt-1">
                    1
                  </span>
                  <div>
                    <p className="font-semibold mb-1">{t("theInformed")}</p>
                    <p className="text-muted-foreground">{t("informedDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-foreground text-background rounded-full text-sm font-bold flex-shrink-0 mt-1">
                    2
                  </span>
                  <div>
                    <p className="font-semibold mb-1">{t("theImposter")}</p>
                    <p className="text-muted-foreground">{t("imposterDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-foreground text-background rounded-full text-sm font-bold flex-shrink-0 mt-1">
                    3
                  </span>
                  <div>
                    <p className="font-semibold mb-1">{t("theRevelation")}</p>
                    <p className="text-muted-foreground">
                      {t("revelationDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border hover:shadow-2xl transition-all duration-500 bg-card animate-luxury-hover group">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-4 text-2xl font-bold">
                <div className="p-3 bg-foreground text-background rounded-lg">
                  <Lightbulb className="h-6 w-6" />
                </div>
                {t("premiumFeatures")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-base">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-foreground" />
                  <span className="font-medium">{t("players")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-foreground" />
                  <span className="font-medium">{t("duration")}</span>
                </div>
              </div>
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-foreground rounded-full"></span>
                  {t("feature1")}
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-foreground rounded-full"></span>
                  {t("feature2")}
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-foreground rounded-full"></span>
                  {t("feature3")}
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-foreground rounded-full"></span>
                  {t("feature4")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-20 animate-scale-in">
          <Button
            onClick={() => onStart(selectedLanguage)}
            disabled={isTranslating}
            size="lg"
            className="relative text-xl px-16 py-10 h-auto bg-gradient-to-r from-foreground via-foreground to-foreground/90 text-background hover:from-foreground/90 hover:via-foreground hover:to-foreground transition-all duration-500 shadow-2xl hover:shadow-3xl group font-semibold disabled:opacity-50 animate-button-pulse animate-button-glow animate-button-float overflow-hidden rounded-full border-0"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full"></div>

            {/* Sparkle effects */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-300"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500 delay-200"></div>

            {/* Ripple effect on click */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-white/20 transform scale-0 group-active:scale-100 transition-transform duration-300 ease-out"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center">
              <Play className="h-6 w-6 mr-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 group-hover:text-yellow-300" />
              <span className="group-hover:tracking-wider transition-all duration-300">
                {isTranslating ? "Loading..." : t("beginGame")}
              </span>
            </div>

            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
          </Button>
          <p className="text-muted-foreground mt-6 text-lg font-light">
            {t("noRegistration")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 animate-slide-up">
          <Card className="text-center border border-border hover:shadow-xl transition-all duration-500 bg-card animate-luxury-hover group">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-card border border-border rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎭</span>
              </div>
              <CardTitle className="text-xl font-bold">
                {t("sophisticatedPlay")}
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                {t("sophisticatedDesc")}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center border border-border hover:shadow-xl transition-all duration-500 bg-card animate-luxury-hover group">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-card border border-border rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-3xl">⚡</span>
              </div>
              <CardTitle className="text-xl font-bold">
                {t("instantAccess")}
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                {t("instantDesc")}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center border border-border hover:shadow-xl transition-all duration-500 bg-card animate-luxury-hover group sm:col-span-2 lg:col-span-1">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-card border border-border rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-3xl">♾️</span>
              </div>
              <CardTitle className="text-xl font-bold">
                {t("endlessIntrigue")}
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                {t("endlessDesc")}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center animate-fade-in">
          <Card className="border border-border bg-card shadow-lg max-w-2xl mx-auto">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-center gap-3 text-xl font-bold">
                <div className="p-2 bg-foreground text-background rounded-lg">
                  <Heart className="h-5 w-5" />
                </div>
                {t("madeWithCare")}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-base text-muted-foreground font-light">
                Crafted by <span className="font-bold">alpi</span> for{" "}
                <span className="font-bold">you</span>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("craftedDesc")}
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                <span>Free Forever</span>
                <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                <span>No Ads</span>
                <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                <span>Open Source Spirit</span>
                <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
