"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, ChevronDown } from "lucide-react";
import { SUPPORTED_LANGUAGES, type Language } from "@/lib/translation";

interface LanguageSelectorProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export function LanguageSelector({
  selectedLanguage,
  onLanguageChange,
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-card border-border hover:bg-card/80 transition-all duration-300"
      >
        <Globe className="h-4 w-4" />
        <span className="text-lg">{selectedLanguage.flag}</span>
        <span className="font-medium">{selectedLanguage.name}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </Button>

      {isOpen && (
        <Card className="absolute top-full mt-2 right-0 z-50 w-64 border border-border shadow-xl animate-slide-up">
          <CardContent className="p-2">
            <div className="grid grid-cols-1 gap-1 max-h-64 overflow-y-auto">
              {SUPPORTED_LANGUAGES.map((language) => (
                <Button
                  key={language.code}
                  variant="ghost"
                  onClick={() => {
                    onLanguageChange(language);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 justify-start p-3 h-auto hover:bg-muted/50 transition-all duration-200 ${
                    selectedLanguage.code === language.code ? "bg-muted" : ""
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="font-medium">{language.name}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
