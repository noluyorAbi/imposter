export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
];

const UI_TRANSLATIONS = {
  // Welcome Screen
  "Imposter Word Game": {
    de: "Imposter Wort Spiel",
    tr: "Sahtekar Kelime Oyunu",
  },
  "The ultimate social deduction experience where wit meets deception. One player hides in plain sight—can you expose the imposter?":
    {
      de: "Das ultimative soziale Deduktionserlebnis, bei dem Witz auf Täuschung trifft. Ein Spieler versteckt sich in aller Öffentlichkeit—kannst du den Betrüger entlarven?",
      tr: "Zekanın aldatmayla buluştuğu nihai sosyal çıkarım deneyimi. Bir oyuncu gözler önünde saklanıyor—sahtekarı ifşa edebilir misin?",
    },
  "Premium Social Deduction Experience": {
    de: "Premium Soziale Deduktions-Erfahrung",
    tr: "Premium Sosyal Çıkarım Deneyimi",
  },
  "The Art of Deception": {
    de: "Die Kunst der Täuschung",
    tr: "Aldatma Sanatı",
  },
  "The Informed": {
    de: "Die Informierten",
    tr: "Bilgilendirilmiş",
  },
  "Give clever one-word clues about the secret word without being too obvious":
    {
      de: "Gib clevere Ein-Wort-Hinweise über das geheime Wort, ohne zu offensichtlich zu sein",
      tr: "Çok açık olmadan gizli kelime hakkında zekice tek kelimelik ipuçları ver",
    },
  "The Imposter": {
    de: "Der Betrüger",
    tr: "Sahtekar",
  },
  "Blend seamlessly while knowing nothing—pure psychological warfare": {
    de: "Verschmelze nahtlos, während du nichts weißt—reine psychologische Kriegsführung",
    tr: "Hiçbir şey bilmeden kusursuzca kaynaş—saf psikolojik savaş",
  },
  "The Revelation": {
    de: "Die Enthüllung",
    tr: "Açığa Çıkarma",
  },
  "Vote to expose the imposter or watch them attempt the impossible guess": {
    de: "Stimme ab, um den Betrüger zu entlarven oder beobachte, wie er den unmöglichen Versuch unternimmt",
    tr: "Sahtekarı ifşa etmek için oy ver veya imkansız tahmini yapmaya çalışmasını izle",
  },
  "Premium Features": {
    de: "Premium-Funktionen",
    tr: "Premium Özellikler",
  },
  "3+ Players": {
    de: "3+ Spieler",
    tr: "3+ Oyuncu",
  },
  "15-30 min": {
    de: "15-30 Min",
    tr: "15-30 dk",
  },
  "15 curated categories with 450+ premium words": {
    de: "15 kuratierte Kategorien mit 450+ Premium-Wörtern",
    tr: "450+ premium kelime ile 15 özenle seçilmiş kategori",
  },
  "Elegant card-based reveal system": {
    de: "Elegantes kartenbasiertes Enthüllungssystem",
    tr: "Zarif kart tabanlı açığa çıkarma sistemi",
  },
  "Seamless mobile-first experience": {
    de: "Nahtlose Mobile-First-Erfahrung",
    tr: "Kusursuz mobil öncelikli deneyim",
  },
  "Built-in timer and session management": {
    de: "Eingebauter Timer und Sitzungsverwaltung",
    tr: "Yerleşik zamanlayıcı ve oturum yönetimi",
  },
  "Begin the Game": {
    de: "Spiel beginnen",
    tr: "Oyunu Başlat",
  },
  "No registration • No downloads • Pure sophistication": {
    de: "Keine Registrierung • Keine Downloads • Pure Raffinesse",
    tr: "Kayıt yok • İndirme yok • Saf sofistikasyon",
  },
  "Sophisticated Play": {
    de: "Raffiniertes Spiel",
    tr: "Sofistike Oyun",
  },
  "Designed for discerning players who appreciate elegant gameplay": {
    de: "Entwickelt für anspruchsvolle Spieler, die elegantes Gameplay schätzen",
    tr: "Zarif oynanışı takdir eden seçici oyuncular için tasarlandı",
  },
  "Instant Access": {
    de: "Sofortiger Zugang",
    tr: "Anında Erişim",
  },
  "Premium experience without the premium wait time": {
    de: "Premium-Erlebnis ohne die Premium-Wartezeit",
    tr: "Premium bekleme süresi olmadan premium deneyim",
  },
  "Endless Intrigue": {
    de: "Endlose Intrige",
    tr: "Sonsuz Entrika",
  },
  "Carefully curated words ensure every round feels fresh and challenging": {
    de: "Sorgfältig kuratierte Wörter sorgen dafür, dass sich jede Runde frisch und herausfordernd anfühlt",
    tr: "Özenle seçilmiş kelimeler her turun taze ve zorlu hissettirmesini sağlar",
  },
  "Made with Care": {
    de: "Mit Sorgfalt gemacht",
    tr: "Özenle Yapıldı",
  },
  "Crafted by me for you": {
    de: "Von mir für dich gemacht",
    tr: "Benden sana yapıldı",
  },
  "Because great games shouldn't be locked behind app stores, subscriptions, or paywalls. This is what happens when you build something purely for the joy of playing together.":
    {
      de: "Weil großartige Spiele nicht hinter App-Stores, Abonnements oder Bezahlschranken eingesperrt sein sollten. Das passiert, wenn man etwas rein für die Freude am gemeinsamen Spielen baut.",
      tr: "Çünkü harika oyunlar uygulama mağazaları, abonelikler veya ücretli duvarların arkasında kilitli kalmamalı. Sadece birlikte oynama keyfı için bir şey inşa ettiğinizde olan budur.",
    },

  // Game Setup
  "Game Setup": {
    de: "Spiel-Setup",
    tr: "Oyun Kurulumu",
  },
  Players: {
    de: "Spieler",
    tr: "Oyuncular",
  },
  "Add Player": {
    de: "Spieler hinzufügen",
    tr: "Oyuncu Ekle",
  },
  Imposters: {
    de: "Betrüger",
    tr: "Sahtekarlar",
  },
  "How many imposters?": {
    de: "Wie viele Betrüger?",
    tr: "Kaç sahtekar?",
  },
  "Word Category": {
    de: "Wort-Kategorie",
    tr: "Kelime Kategorisi",
  },
  "Random Word": {
    de: "Zufälliges Wort",
    tr: "Rastgele Kelime",
  },
  "Start Game": {
    de: "Spiel starten",
    tr: "Oyunu Başlat",
  },
  Back: {
    de: "Zurück",
    tr: "Geri",
  },
  "Minimum 3 players required": {
    de: "Mindestens 3 Spieler erforderlich",
    tr: "En az 3 oyuncu gerekli",
  },
  "At least 1 imposter required": {
    de: "Mindestens 1 Betrüger erforderlich",
    tr: "En az 1 sahtekar gerekli",
  },
  "Cannot have more imposters than players": {
    de: "Kann nicht mehr Betrüger als Spieler haben",
    tr: "Oyunculardan fazla sahtekar olamaz",
  },
  "Configure players and select category": {
    de: "Spieler konfigurieren und Kategorie auswählen",
    tr: "Oyuncuları yapılandır ve kategori seç",
  },
  of: {
    de: "von",
    tr: "/",
  },
  configured: {
    de: "konfiguriert",
    tr: "yapılandırıldı",
  },
  "Add 3+ players. No upper limit!": {
    de: "3+ Spieler hinzufügen. Keine Obergrenze!",
    tr: "3+ oyuncu ekle. Üst sınır yok!",
  },
  Player: {
    de: "Spieler",
    tr: "Oyuncu",
  },
  Category: {
    de: "Kategorie",
    tr: "Kategori",
  },
  "Choose theme": {
    de: "Thema wählen",
    tr: "Tema seç",
  },
  "Select your game theme": {
    de: "Wähle dein Spielthema",
    tr: "Oyun temanı seç",
  },
  words: {
    de: "Wörter",
    tr: "kelime",
  },
  "Preview:": {
    de: "Vorschau:",
    tr: "Önizleme:",
  },
  "Surprise Me": {
    de: "Überrasche mich",
    tr: "Sürpriz Yap",
  },
  "Begin Game": {
    de: "Spiel beginnen",
    tr: "Oyunu Başlat",
  },
  "Ready to begin? Ensure you have:": {
    de: "Bereit zu beginnen? Stelle sicher, dass du hast:",
    tr: "Başlamaya hazır mısın? Şunlara sahip olduğundan emin ol:",
  },
  "3+ named players": {
    de: "3+ benannte Spieler",
    tr: "3+ isimli oyuncu",
  },
  "Valid imposters": {
    de: "Gültige Betrüger",
    tr: "Geçerli sahtekarlar",
  },
  "Category selected": {
    de: "Kategorie ausgewählt",
    tr: "Kategori seçildi",
  },
  "Range:": {
    de: "Bereich:",
    tr: "Aralık:",
  },
  to: {
    de: "bis",
    tr: "ile",
  },
  vs: {
    de: "gegen",
    tr: "karşı",
  },

  // Card Distribution
  "Card Distribution": {
    de: "Karten-Verteilung",
    tr: "Kart Dağıtımı",
  },
  "Pass the device around. Each player should tap to reveal their card privately, then pass to the next player.":
    {
      de: "Geben Sie das Gerät weiter. Jeder Spieler sollte tippen, um seine Karte privat aufzudecken, und dann an den nächsten Spieler weitergeben.",
      tr: "Cihazı dolaştırın. Her oyuncu kartını özel olarak görmek için dokunmalı, sonra bir sonraki oyuncuya geçmeli.",
    },
  "Tap to reveal your card": {
    de: "Tippen Sie, um Ihre Karte aufzudecken",
    tr: "Kartınızı görmek için dokunun",
  },
  "Hide card and pass device": {
    de: "Karte verstecken und Gerät weitergeben",
    tr: "Kartı gizle ve cihazı geçir",
  },
  "All players have seen their cards": {
    de: "Alle Spieler haben ihre Karten gesehen",
    tr: "Tüm oyuncular kartlarını gördü",
  },
  "Start Discussion": {
    de: "Diskussion beginnen",
    tr: "Tartışmayı Başlat",
  },
  "Discussion will start with a random player": {
    de: "Die Diskussion beginnt mit einem zufälligen Spieler",
    tr: "Tartışma rastgele bir oyuncu ile başlayacak",
  },
  "Anyone can start, including imposters": {
    de: "Jeder kann anfangen, einschließlich der Betrüger",
    tr: "Herkes başlayabilir, sahtekarlar dahil",
  },
  "Discussion starts with:": {
    de: "Die Diskussion beginnt mit:",
    tr: "Tartışma şununla başlıyor:",
  },
  "They can begin the discussion whenever ready": {
    de: "Sie können die Diskussion beginnen, wann sie bereit sind",
    tr: "Hazır olduklarında tartışmayı başlatabilirler",
  },
  "New Word": {
    de: "Neues Wort",
    tr: "Yeni Kelime",
  },
  "Play with Clue": {
    de: "Mit Hinweis spielen",
    tr: "İpucu ile Oyna",
  },
  "Play without Clue": {
    de: "Ohne Hinweis spielen",
    tr: "İpucu Olmadan Oyna",
  },
  "Clue for Imposter": {
    de: "Hinweis für den Betrüger",
    tr: "Sahtekar için İpucu",
  },
  "You are the imposter. Here's a clue about the word:": {
    de: "Du bist der Betrüger. Hier ist ein Hinweis zum Wort:",
    tr: "Sen sahtekarsın. İşte kelime hakkında bir ipucu:",
  },
  "The imposter will get a clue about the word": {
    de: "Der Betrüger bekommt einen Hinweis zum Wort",
    tr: "Sahtekar kelime hakkında ipucu alacak",
  },
  "No clues will be given": {
    de: "Keine Hinweise werden gegeben",
    tr: "Hiç ipucu verilmeyecek",
  },
  "Pass the device to each player": {
    de: "Geben Sie das Gerät an jeden Spieler weiter",
    tr: "Cihazı her oyuncuya geçirin",
  },

  completed: {
    de: "abgeschlossen",
    tr: "tamamlandı",
  },
  remaining: {
    de: "verbleibend",
    tr: "kalan",
  },
  "'s Turn": {
    de: "'s Runde",
    tr: "'nin Sırası",
  },
  "Pass the device to": {
    de: "Geben Sie das Gerät an",
    tr: "Cihazı şuna geçirin:",
  },
  '. They should tap "Reveal Card" to see their role privately.': {
    de: '. Sie sollten auf "Karte aufdecken" tippen, um ihre Rolle privat zu sehen.',
    tr: '. Rolünü özel olarak görmek için "Kartı Göster"e dokunmalı.',
  },
  "Reveal Card": {
    de: "Karte aufdecken",
    tr: "Kartı Göster",
  },
  "You are an": {
    de: "Du bist ein",
    tr: "Sen bir",
  },
  "You don't know the word. Listen carefully and try to blend in!": {
    de: "Du kennst das Wort nicht. Höre genau zu und versuche dich einzufügen!",
    tr: "Kelimeyi bilmiyorsun. Dikkatlice dinle ve kaynaşmaya çalış!",
  },
  "Listen carefully and blend in!": {
    de: "Höre genau zu und füge dich ein!",
    tr: "Dikkatli dinle ve uyum sağla!",
  },
  "The word is:": {
    de: "Das Wort ist:",
    tr: "Kelime:",
  },
  "Give clues about this word, but watch out for the imposter": {
    de: "Gib Hinweise zu diesem Wort, aber pass auf den Betrüger auf",
    tr: "Bu kelime hakkında ipuçları ver, ama sahtekara dikkat et",
  },
  s: {
    de: "s",
    tr: "lar",
  },
  "!": {
    de: "!",
    tr: "!",
  },
  Previous: {
    de: "Zurück",
    tr: "Önceki",
  },
  Prev: {
    de: "Zurück",
    tr: "Önceki",
  },
  "Next Player": {
    de: "Nächster Spieler",
    tr: "Sonraki Oyuncu",
  },
  Next: {
    de: "Weiter",
    tr: "Sonraki",
  },
  "How it works:": {
    de: "So funktioniert es:",
    tr: "Nasıl çalışır:",
  },
  "Pass the device to each player in turn": {
    de: "Geben Sie das Gerät der Reihe nach an jeden Spieler weiter",
    tr: "Cihazı sırayla her oyuncuya geçirin",
  },
  'Each player taps "Reveal Card" to see their role privately': {
    de: 'Jeder Spieler tippt auf "Karte aufdecken", um seine Rolle privat zu sehen',
    tr: 'Her oyuncu rolünü özel olarak görmek için "Kartı Göster"e dokunur',
  },
  "One player is secretly the imposter and won't see the word": {
    de: "Ein Spieler ist heimlich der Betrüger und wird das Wort nicht sehen",
    tr: "Bir oyuncu gizlice sahtekardır ve kelimeyi görmeyecek",
  },
  "players are secretly imposters and won't see the word": {
    de: "Spieler sind heimlich Betrüger und werden das Wort nicht sehen",
    tr: "oyuncu gizlice sahtekardır ve kelimeyi görmeyecek",
  },
  "Everyone else sees the secret word": {
    de: "Alle anderen sehen das geheime Wort",
    tr: "Diğer herkes gizli kelimeyi görür",
  },
  "Once everyone has seen their card, the discussion begins!": {
    de: "Sobald jeder seine Karte gesehen hat, beginnt die Diskussion!",
    tr: "Herkes kartını gördükten sonra tartışma başlar!",
  },
  IMPOSTER: {
    de: "BETRÜGER",
    tr: "SAHTEKAR",
  },
  "You don't know the secret word. Try to blend in by listening to others' clues and giving vague responses.":
    {
      de: "Du kennst das geheime Wort nicht. Versuche dich einzufügen, indem du auf die Hinweise anderer hörst und vage Antworten gibst.",
      tr: "Gizli kelimeyi bilmiyorsun. Diğerlerinin ipuçlarını dinleyerek ve belirsiz cevaplar vererek kaynaşmaya çalış.",
    },
  imposter: {
    de: "Betrüger",
    tr: "sahtekar",
  },
  imposters: {
    de: "Betrüger",
    tr: "sahtekar",
  },

  // Game Play
  "Round in Progress": {
    de: "Runde läuft",
    tr: "Tur Devam Ediyor",
  },
  "Discuss and find the imposter(s)!": {
    de: "Diskutiert und findet den/die Betrüger!",
    tr: "Tartışın ve sahtekar(lar)ı bulun!",
  },
  "End Round": {
    de: "Runde beenden",
    tr: "Turu Bitir",
  },
  "The investigation begins. Trust no one. Question everything.": {
    de: "Die Untersuchung beginnt. Vertraue niemandem. Hinterfrage alles.",
    tr: "Araştırma başlıyor. Kimseye güvenme. Her şeyi sorgula.",
  },
  "Active Players": {
    de: "Aktive Spieler",
    tr: "Aktif Oyuncular",
  },
  "Discuss, deduce, and discover the truth": {
    de: "Diskutiere, schließe und entdecke die Wahrheit",
    tr: "Tartış, çıkarım yap ve gerçeği keşfet",
  },
  "One among you knows nothing. Find them through careful questioning and observation.":
    {
      de: "Einer unter euch weiß nichts. Findet ihn durch sorgfältiges Befragen und Beobachten.",
      tr: "Aranızda biri hiçbir şey bilmiyor. Dikkatli sorgulama ve gözlemle onu bulun.",
    },
  Participant: {
    de: "Teilnehmer",
    tr: "Katılımcı",
  },
  "Conclude Investigation": {
    de: "Untersuchung abschließen",
    tr: "Araştırmayı Sonlandır",
  },
  "Ready to reveal the truth? End the round when consensus is reached.": {
    de: "Bereit, die Wahrheit zu enthüllen? Beende die Runde, wenn Einigkeit erreicht ist.",
    tr: "Gerçeği açığa çıkarmaya hazır mısın? Fikir birliği sağlandığında turu bitir.",
  },

  // Game End
  "Round Complete": {
    de: "Runde abgeschlossen",
    tr: "Tur Tamamlandı",
  },
  "Great game everyone!": {
    de: "Tolles Spiel, alle zusammen!",
    tr: "Herkese harika oyun!",
  },
  "Play Again (Same Players)": {
    de: "Nochmal spielen (Gleiche Spieler)",
    tr: "Tekrar Oyna (Aynı Oyuncular)",
  },
  "New Game": {
    de: "Neues Spiel",
    tr: "Yeni Oyun",
  },
  "Game Complete": {
    de: "Spiel beendet",
    tr: "Oyun Tamamlandı",
  },
  "The truth has been revealed": {
    de: "Die Wahrheit wurde enthüllt",
    tr: "Gerçek ortaya çıktı",
  },
  "Final Results": {
    de: "Endergebnisse",
    tr: "Final Sonuçlar",
  },
  "The mystery is solved": {
    de: "Das Rätsel ist gelöst",
    tr: "Gizem çözüldü",
  },
  "The Secret Word Was": {
    de: "Das geheime Wort war",
    tr: "Gizli Kelime",
  },
  from: {
    de: "aus",
    tr: "kategorisinden",
  },
  "The Imposter Was": {
    de: "Der Betrüger war",
    tr: "Sahtekar",
  },
  "Successfully infiltrated": {
    de: "Erfolgreich infiltriert",
    tr: "Başarıyla sızdı",
  },
  "players participated in this round": {
    de: "Spieler nahmen an dieser Runde teil",
    tr: "oyuncu bu turda yer aldı",
  },
  "Play Again": {
    de: "Nochmal spielen",
    tr: "Tekrar Oyna",
  },
  "New Setup": {
    de: "Neues Setup",
    tr: "Yeni Kurulum",
  },

  // Word Categories - updating existing ones and adding missing ones
  Food: {
    de: "Essen",
    tr: "Yemek",
  },
  Animals: {
    de: "Tiere",
    tr: "Hayvanlar",
  },
  "Movies & TV": {
    de: "Filme & TV",
    tr: "Film & TV",
  },
  "Sports & Games": {
    de: "Sport & Spiele",
    tr: "Spor & Oyunlar",
  },
  Places: {
    de: "Orte",
    tr: "Yerler",
  },
  "Jobs & Professions": {
    de: "Jobs & Berufe",
    tr: "İş & Meslekler",
  },
  "Objects & Things": {
    de: "Objekte & Dinge",
    tr: "Nesneler & Şeyler",
  },
  Vehicles: {
    de: "Fahrzeuge",
    tr: "Araçlar",
  },
  Holidays: {
    de: "Feiertage",
    tr: "Tatiller",
  },
  School: {
    de: "Schule",
    tr: "Okul",
  },
  "Silly & Random": {
    de: "Albern & Zufällig",
    tr: "Saçma & Rastgele",
  },
  Fantasy: {
    de: "Fantasy",
    tr: "Fantastik",
  },
  Technology: {
    de: "Technologie",
    tr: "Teknoloji",
  },
  Nature: {
    de: "Natur",
    tr: "Doğa",
  },
  Music: {
    de: "Musik",
    tr: "Müzik",
  },
};

const WORD_TRANSLATIONS = {
  // Food
  Pizza: { de: "Pizza", tr: "Pizza" },
  Apple: { de: "Apfel", tr: "Elma" },
  Bread: { de: "Brot", tr: "Ekmek" },
  Cake: { de: "Kuchen", tr: "Kek" },
  "Ice Cream": { de: "Eis", tr: "Dondurma" },
  Banana: { de: "Banane", tr: "Muz" },
  Sandwich: { de: "Sandwich", tr: "Sandviç" },
  Milk: { de: "Milch", tr: "Süt" },
  Cookie: { de: "Keks", tr: "Kurabiye" },
  Cheese: { de: "Käse", tr: "Peynir" },
  Spaghetti: { de: "Spaghetti", tr: "Spagetti" },
  Hamburger: { de: "Hamburger", tr: "Hamburger" },
  Popcorn: { de: "Popcorn", tr: "Patlamış Mısır" },
  Salad: { de: "Salat", tr: "Salata" },
  Muffin: { de: "Muffin", tr: "Muffin" },
  Taco: { de: "Taco", tr: "Taco" },
  Yogurt: { de: "Joghurt", tr: "Yoğurt" },
  Cereal: { de: "Müsli", tr: "Tahıl" },
  "Peanut Butter": { de: "Erdnussbutter", tr: "Fıstık Ezmesi" },
  Chicken: { de: "Huhn", tr: "Tavuk" },
  Croissant: { de: "Croissant", tr: "Kruvasan" },
  Quiche: { de: "Quiche", tr: "Kiş" },
  Sushi: { de: "Sushi", tr: "Suşi" },
  Ravioli: { de: "Ravioli", tr: "Ravioli" },
  Guacamole: { de: "Guacamole", tr: "Guakamole" },
  Eggplant: { de: "Aubergine", tr: "Patlıcan" },
  Avocado: { de: "Avocado", tr: "Avokado" },
  Falafel: { de: "Falafel", tr: "Falafel" },
  Pomegranate: { de: "Granatapfel", tr: "Nar" },
  Wasabi: { de: "Wasabi", tr: "Wasabi" },

  // Animals
  Dog: { de: "Hund", tr: "Köpek" },
  Cat: { de: "Katze", tr: "Kedi" },
  Cow: { de: "Kuh", tr: "İnek" },
  Fish: { de: "Fisch", tr: "Balık" },
  Horse: { de: "Pferd", tr: "At" },
  Duck: { de: "Ente", tr: "Ördek" },
  Bird: { de: "Vogel", tr: "Kuş" },
  Pig: { de: "Schwein", tr: "Domuz" },
  Rabbit: { de: "Kaninchen", tr: "Tavşan" },
  Lion: { de: "Löwe", tr: "Aslan" },
  Elephant: { de: "Elefant", tr: "Fil" },
  Giraffe: { de: "Giraffe", tr: "Zürafa" },
  Kangaroo: { de: "Känguru", tr: "Kanguru" },
  Panda: { de: "Panda", tr: "Panda" },
  Penguin: { de: "Pinguin", tr: "Penguen" },
  Zebra: { de: "Zebra", tr: "Zebra" },
  Bear: { de: "Bär", tr: "Ayı" },
  Monkey: { de: "Affe", tr: "Maymun" },
  Snake: { de: "Schlange", tr: "Yılan" },
  Dolphin: { de: "Delfin", tr: "Yunus" },
  Armadillo: { de: "Gürteltier", tr: "Armadillo" },
  Platypus: { de: "Schnabeltier", tr: "Ornitorenk" },
  Narwhal: { de: "Narwal", tr: "Narval" },
  Chameleon: { de: "Chamäleon", tr: "Bukalemun" },
  Wombat: { de: "Wombat", tr: "Vombat" },
  Axolotl: { de: "Axolotl", tr: "Aksolotl" },
  Sloth: { de: "Faultier", tr: "Tembel Hayvan" },
  Tarantula: { de: "Vogelspinne", tr: "Tarantula" },
  Iguana: { de: "Leguan", tr: "İguana" },
  Hedgehog: { de: "Igel", tr: "Kirpi" },

  // Movies & TV
  Frozen: { de: "Frozen", tr: "Karlar Ülkesi" },
  "Toy Story": { de: "Toy Story", tr: "Oyuncak Hikayesi" },
  "Spider-Man": { de: "Spider-Man", tr: "Örümcek Adam" },
  Batman: { de: "Batman", tr: "Batman" },
  "Star Wars": { de: "Star Wars", tr: "Yıldız Savaşları" },
  "Harry Potter": { de: "Harry Potter", tr: "Harry Potter" },
  "Lion King": { de: "König der Löwen", tr: "Aslan Kral" },
  "Finding Nemo": { de: "Findet Nemo", tr: "Kayıp Balık Nemo" },
  Titanic: { de: "Titanic", tr: "Titanik" },
  "Home Alone": { de: "Kevin Allein zu Haus", tr: "Evde Tek Başına" },
  Minions: { de: "Minions", tr: "Minyonlar" },
  Cars: { de: "Cars", tr: "Arabalar" },
  Moana: { de: "Vaiana", tr: "Moana" },
  Shrek: { de: "Shrek", tr: "Shrek" },
  "Jurassic Park": { de: "Jurassic Park", tr: "Jurassic Park" },
  "Black Panther": { de: "Black Panther", tr: "Kara Panter" },
  Aladdin: { de: "Aladdin", tr: "Aladdin" },
  "E.T.": { de: "E.T.", tr: "E.T." },
  Cinderella: { de: "Aschenputtel", tr: "Külkedisi" },
  Encanto: { de: "Encanto", tr: "Encanto" },
  Up: { de: "Oben", tr: "Yukarı" },
  Inception: { de: "Inception", tr: "Başlangıç" },
  Casablanca: { de: "Casablanca", tr: "Kazablanka" },
  "The Godfather": { de: "Der Pate", tr: "Baba" },
  Parasite: { de: "Parasit", tr: "Parazit" },
  Interstellar: { de: "Interstellar", tr: "Yıldızlararası" },
  "Schindler's List": { de: "Schindlers Liste", tr: "Schindler'in Listesi" },
  Amélie: { de: "Die fabelhafte Welt der Amélie", tr: "Amélie" },
  Jaws: { de: "Der weiße Hai", tr: "Çeneler" },
  "La La Land": { de: "La La Land", tr: "La La Land" },

  // Sports & Games
  Soccer: { de: "Fußball", tr: "Futbol" },
  Basketball: { de: "Basketball", tr: "Basketbol" },
  Baseball: { de: "Baseball", tr: "Beyzbol" },
  Football: { de: "American Football", tr: "Amerikan Futbolu" },
  Tennis: { de: "Tennis", tr: "Tenis" },
  Hockey: { de: "Hockey", tr: "Hokey" },
  Golf: { de: "Golf", tr: "Golf" },
  Swimming: { de: "Schwimmen", tr: "Yüzme" },
  Running: { de: "Laufen", tr: "Koşu" },
  Volleyball: { de: "Volleyball", tr: "Voleybol" },
  Badminton: { de: "Badminton", tr: "Badminton" },
  Bowling: { de: "Bowling", tr: "Bowling" },
  Rugby: { de: "Rugby", tr: "Ragbi" },
  Skateboarding: { de: "Skateboard", tr: "Kaykay" },
  Surfing: { de: "Surfen", tr: "Sörf" },
  Lacrosse: { de: "Lacrosse", tr: "Lakros" },
  Karate: { de: "Karate", tr: "Karate" },
  Gymnastics: { de: "Gymnastik", tr: "Jimnastik" },
  Archery: { de: "Bogenschießen", tr: "Okçuluk" },
  Dodgeball: { de: "Völkerball", tr: "Yakar Top" },
  Polo: { de: "Polo", tr: "Polo" },
  Curling: { de: "Curling", tr: "Körling" },
  Fencing: { de: "Fechten", tr: "Eskrim" },
  Equestrian: { de: "Reiten", tr: "Binicilik" },
  Biathlon: { de: "Biathlon", tr: "Biatlon" },
  Triathlon: { de: "Triathlon", tr: "Triatlon" },
  Javelin: { de: "Speerwurf", tr: "Cirit" },
  Bocce: { de: "Boccia", tr: "Bocce" },
  Squash: { de: "Squash", tr: "Squash" },
  Cricket: { de: "Cricket", tr: "Kriket" },

  // Places
  School: { de: "Schule", tr: "Okul" },
  Park: { de: "Park", tr: "Park" },
  Beach: { de: "Strand", tr: "Plaj" },
  Home: { de: "Zuhause", tr: "Ev" },
  Zoo: { de: "Zoo", tr: "Hayvanat Bahçesi" },
  Farm: { de: "Bauernhof", tr: "Çiftlik" },
  Hospital: { de: "Krankenhaus", tr: "Hastane" },
  Library: { de: "Bibliothek", tr: "Kütüphane" },
  Restaurant: { de: "Restaurant", tr: "Restoran" },
  Castle: { de: "Schloss", tr: "Kale" },
  Playground: { de: "Spielplatz", tr: "Oyun Alanı" },
  Mall: { de: "Einkaufszentrum", tr: "AVM" },
  "City Hall": { de: "Rathaus", tr: "Belediye Binası" },
  Stadium: { de: "Stadion", tr: "Stadyum" },
  Airport: { de: "Flughafen", tr: "Havalimanı" },
  Theater: { de: "Theater", tr: "Tiyatro" },
  Aquarium: { de: "Aquarium", tr: "Akvaryum" },
  Museum: { de: "Museum", tr: "Müze" },
  Mountain: { de: "Berg", tr: "Dağ" },
  Bridge: { de: "Brücke", tr: "Köprü" },
  Pyramids: { de: "Pyramiden", tr: "Piramitler" },
  "Eiffel Tower": { de: "Eiffelturm", tr: "Eyfel Kulesi" },
  "Great Wall": { de: "Chinesische Mauer", tr: "Çin Seddi" },
  "Taj Mahal": { de: "Taj Mahal", tr: "Tac Mahal" },
  Colosseum: { de: "Kolosseum", tr: "Kolezyum" },
  "Machu Picchu": { de: "Machu Picchu", tr: "Machu Picchu" },
  Stonehenge: { de: "Stonehenge", tr: "Stonehenge" },
  "Sydney Opera House": { de: "Sydney Opera House", tr: "Sidney Opera Binası" },
  "Statue of Liberty": { de: "Freiheitsstatue", tr: "Özgürlük Heykeli" },
  "Mount Everest": { de: "Mount Everest", tr: "Everest Dağı" },

  // Jobs & Professions
  Teacher: { de: "Lehrer", tr: "Öğretmen" },
  Doctor: { de: "Arzt", tr: "Doktor" },
  Chef: { de: "Koch", tr: "Aşçı" },
  Farmer: { de: "Bauer", tr: "Çiftçi" },
  Nurse: { de: "Krankenschwester", tr: "Hemşire" },
  Firefighter: { de: "Feuerwehrmann", tr: "İtfaiyeci" },
  "Police Officer": { de: "Polizist", tr: "Polis" },
  Singer: { de: "Sänger", tr: "Şarkıcı" },
  Pilot: { de: "Pilot", tr: "Pilot" },
  Engineer: { de: "Ingenieur", tr: "Mühendis" },
  Librarian: { de: "Bibliothekar", tr: "Kütüphaneci" },
  Lawyer: { de: "Anwalt", tr: "Avukat" },
  Dancer: { de: "Tänzer", tr: "Dansçı" },
  Mechanic: { de: "Mechaniker", tr: "Tamirci" },
  Scientist: { de: "Wissenschaftler", tr: "Bilim İnsanı" },
  Actor: { de: "Schauspieler", tr: "Aktör" },
  Author: { de: "Autor", tr: "Yazar" },
  Soldier: { de: "Soldat", tr: "Asker" },
  Baker: { de: "Bäcker", tr: "Fırıncı" },
  Archaeologist: { de: "Archäologe", tr: "Arkeolog" },
  Astronomer: { de: "Astronom", tr: "Astronom" },
  Mathematician: { de: "Mathematiker", tr: "Matematikçi" },
  "Fashion Designer": { de: "Modedesigner", tr: "Moda Tasarımcısı" },
  Diplomat: { de: "Diplomat", tr: "Diplomat" },
  Geologist: { de: "Geologe", tr: "Jeolog" },
  Biologist: { de: "Biologe", tr: "Biyolog" },
  Sculptor: { de: "Bildhauer", tr: "Heykeltıraş" },
  Politician: { de: "Politiker", tr: "Politikacı" },
  Architect: { de: "Architekt", tr: "Mimar" },

  // Objects & Things
  Ball: { de: "Ball", tr: "Top" },
  Chair: { de: "Stuhl", tr: "Sandalye" },
  Book: { de: "Buch", tr: "Kitap" },
  Phone: { de: "Telefon", tr: "Telefon" },
  Bed: { de: "Bett", tr: "Yatak" },
  Table: { de: "Tisch", tr: "Masa" },
  Shoes: { de: "Schuhe", tr: "Ayakkabı" },
  Hat: { de: "Hut", tr: "Şapka" },
  Pen: { de: "Stift", tr: "Kalem" },
  Clock: { de: "Uhr", tr: "Saat" },
  Backpack: { de: "Rucksack", tr: "Sırt Çantası" },
  Camera: { de: "Kamera", tr: "Kamera" },
  Guitar: { de: "Gitarre", tr: "Gitar" },
  Bicycle: { de: "Fahrrad", tr: "Bisiklet" },
  Umbrella: { de: "Regenschirm", tr: "Şemsiye" },
  Mirror: { de: "Spiegel", tr: "Ayna" },
  Radio: { de: "Radio", tr: "Radyo" },
  Blanket: { de: "Decke", tr: "Battaniye" },
  Suitcase: { de: "Koffer", tr: "Bavul" },
  Microwave: { de: "Mikrowelle", tr: "Mikrodalga" },
  Telescope: { de: "Teleskop", tr: "Teleskop" },
  Typewriter: { de: "Schreibmaschine", tr: "Daktilo" },
  Microscope: { de: "Mikroskop", tr: "Mikroskop" },
  Projector: { de: "Projektor", tr: "Projektör" },
  Compass: { de: "Kompass", tr: "Pusula" },
  Thermometer: { de: "Thermometer", tr: "Termometre" },
  Accordion: { de: "Akkordeon", tr: "Akordeon" },
  Saxophone: { de: "Saxophon", tr: "Saksofon" },
  "Sewing Machine": { de: "Nähmaschine", tr: "Dikiş Makinesi" },
  Drone: { de: "Drohne", tr: "Drone" },

  // Vehicles
  Car: { de: "Auto", tr: "Araba" },
  Bus: { de: "Bus", tr: "Otobüs" },
  Bike: { de: "Fahrrad", tr: "Bisiklet" },
  Boat: { de: "Boot", tr: "Tekne" },
  Truck: { de: "Lastwagen", tr: "Kamyon" },
  Train: { de: "Zug", tr: "Tren" },
  Plane: { de: "Flugzeug", tr: "Uçak" },
  Taxi: { de: "Taxi", tr: "Taksi" },
  Helicopter: { de: "Hubschrauber", tr: "Helikopter" },
  Motorcycle: { de: "Motorrad", tr: "Motosiklet" },
  Van: { de: "Lieferwagen", tr: "Minibüs" },
  Scooter: { de: "Roller", tr: "Skuter" },
  Sailboat: { de: "Segelboot", tr: "Yelkenli" },
  Tractor: { de: "Traktor", tr: "Traktör" },
  Submarine: { de: "U-Boot", tr: "Denizaltı" },
  Jeep: { de: "Jeep", tr: "Cip" },
  Limousine: { de: "Limousine", tr: "Limuzin" },
  "Hot Air Balloon": { de: "Heißluftballon", tr: "Sıcak Hava Balonu" },
  Skateboard: { de: "Skateboard", tr: "Kaykay" },
  Rocket: { de: "Rakete", tr: "Roket" },
  Segway: { de: "Segway", tr: "Segway" },
  Monorail: { de: "Einschienenbahn", tr: "Tek Raylı Tren" },
  Rickshaw: { de: "Rikscha", tr: "Rikşa" },
  Gondola: { de: "Gondel", tr: "Gondol" },
  Hovercraft: { de: "Luftkissenfahrzeug", tr: "Hovercraft" },
  "Cable Car": { de: "Seilbahn", tr: "Teleferik" },
  Zeppelin: { de: "Zeppelin", tr: "Zeplin" },
  "Tuk Tuk": { de: "Tuk Tuk", tr: "Tuk Tuk" },
  Snowmobile: { de: "Schneemobil", tr: "Kar Motosikleti" },
  "Amphibious Vehicle": { de: "Amphibienfahrzeug", tr: "Amfibi Araç" },

  // Holidays
  Birthday: { de: "Geburtstag", tr: "Doğum Günü" },
  Christmas: { de: "Weihnachten", tr: "Noel" },
  Halloween: { de: "Halloween", tr: "Cadılar Bayramı" },
  Easter: { de: "Ostern", tr: "Paskalya" },
  "New Year": { de: "Neujahr", tr: "Yeni Yıl" },
  Thanksgiving: { de: "Erntedankfest", tr: "Şükran Günü" },
  Wedding: { de: "Hochzeit", tr: "Düğün" },
  "Valentine's Day": { de: "Valentinstag", tr: "Sevgililer Günü" },
  Party: { de: "Party", tr: "Parti" },
  "Santa Claus": { de: "Weihnachtsmann", tr: "Noel Baba" },
  Graduation: { de: "Abschlussfeier", tr: "Mezuniyet" },
  Fireworks: { de: "Feuerwerk", tr: "Havai Fişek" },
  Parade: { de: "Parade", tr: "Geçit Töreni" },
  Pumpkin: { de: "Kürbis", tr: "Balkabağı" },
  Costume: { de: "Kostüm", tr: "Kostüm" },
  Gift: { de: "Geschenk", tr: "Hediye" },
  Balloon: { de: "Luftballon", tr: "Balon" },
  Turkey: { de: "Truthahn", tr: "Hindi" },
  Piñata: { de: "Piñata", tr: "Piñata" },
  Diwali: { de: "Diwali", tr: "Diwali" },
  Ramadan: { de: "Ramadan", tr: "Ramazan" },
  Kwanzaa: { de: "Kwanzaa", tr: "Kwanzaa" },
  "Lantern Festival": { de: "Laternenfest", tr: "Fener Festivali" },
  Oktoberfest: { de: "Oktoberfest", tr: "Ekim Festivali" },
  "Mardi Gras": { de: "Mardi Gras", tr: "Mardi Gras" },
  Passover: { de: "Passah", tr: "Hamursuz Bayramı" },
  Holi: { de: "Holi", tr: "Holi" },
  "Cinco de Mayo": { de: "Cinco de Mayo", tr: "Cinco de Mayo" },

  // Technology
  Laptop: { de: "Laptop", tr: "Dizüstü" },
  TV: { de: "Fernseher", tr: "Televizyon" },
  Tablet: { de: "Tablet", tr: "Tablet" },
  Mouse: { de: "Maus", tr: "Fare" },
  Keyboard: { de: "Tastatur", tr: "Klavye" },
  Watch: { de: "Uhr", tr: "Saat" },
  Remote: { de: "Fernbedienung", tr: "Kumanda" },
  Robot: { de: "Roboter", tr: "Robot" },
  Headphones: { de: "Kopfhörer", tr: "Kulaklık" },
  Printer: { de: "Drucker", tr: "Yazıcı" },
  Microphone: { de: "Mikrofon", tr: "Mikrofon" },
  Smartwatch: { de: "Smartwatch", tr: "Akıllı Saat" },
  "Video Game": { de: "Videospiel", tr: "Video Oyunu" },
  Calculator: { de: "Taschenrechner", tr: "Hesap Makinesi" },
  Flashlight: { de: "Taschenlampe", tr: "El Feneri" },
  "3D Printer": { de: "3D-Drucker", tr: "3D Yazıcı" },
  "Virtual Reality": { de: "Virtuelle Realität", tr: "Sanal Gerçeklik" },
  "Quantum Computer": { de: "Quantencomputer", tr: "Kuantum Bilgisayar" },
  Satellite: { de: "Satellit", tr: "Uydu" },
  Supercomputer: { de: "Supercomputer", tr: "Süper Bilgisayar" },
  Nanobot: { de: "Nanobot", tr: "Nanobot" },
  Hoverboard: { de: "Hoverboard", tr: "Hoverboard" },
  "AI Assistant": { de: "KI-Assistent", tr: "Yapay Zeka Asistanı" },
  Hologram: { de: "Hologramm", tr: "Hologram" },

  // Nature
  Tree: { de: "Baum", tr: "Ağaç" },
  Rock: { de: "Fels", tr: "Kaya" },
  River: { de: "Fluss", tr: "Nehir" },
  Sun: { de: "Sonne", tr: "Güneş" },
  Moon: { de: "Mond", tr: "Ay" },
  Flower: { de: "Blume", tr: "Çiçek" },
  Ocean: { de: "Ozean", tr: "Okyanus" },
  Rainbow: { de: "Regenbogen", tr: "Gökkuşağı" },
  Storm: { de: "Sturm", tr: "Fırtına" },
  Grass: { de: "Gras", tr: "Çimen" },
  Cloud: { de: "Wolke", tr: "Bulut" },
  Leaf: { de: "Blatt", tr: "Yaprak" },
  Volcano: { de: "Vulkan", tr: "Volkan" },
  Glacier: { de: "Gletscher", tr: "Buzul" },
  Canyon: { de: "Schlucht", tr: "Kanyon" },
  Desert: { de: "Wüste", tr: "Çöl" },
  Jungle: { de: "Dschungel", tr: "Orman" },
  Waterfall: { de: "Wasserfall", tr: "Şelale" },
  Cave: { de: "Höhle", tr: "Mağara" },
  "Aurora Borealis": { de: "Aurora Borealis", tr: "Kuzey Işıkları" },
  Tsunami: { de: "Tsunami", tr: "Tsunami" },
  Earthquake: { de: "Erdbeben", tr: "Deprem" },
  Meteor: { de: "Meteor", tr: "Meteor" },
  Eclipse: { de: "Finsternis", tr: "Tutulma" },
  "Black Hole": { de: "Schwarzes Loch", tr: "Kara Delik" },
  Sandstorm: { de: "Sandsturm", tr: "Kum Fırtınası" },
  Tornado: { de: "Tornado", tr: "Kasırga" },
  "Coral Reef": { de: "Korallenriff", tr: "Mercan Resifi" },
  Fossil: { de: "Fossil", tr: "Fosil" },

  // Music
  Piano: { de: "Klavier", tr: "Piyano" },
  Song: { de: "Lied", tr: "Şarkı" },
  Dance: { de: "Tanz", tr: "Dans" },
  Drum: { de: "Trommel", tr: "Davul" },
  Violin: { de: "Geige", tr: "Keman" },
  Trumpet: { de: "Trompete", tr: "Trompet" },
  Orchestra: { de: "Orchester", tr: "Orkestra" },
  Karaoke: { de: "Karaoke", tr: "Karaoke" },
  Movie: { de: "Film", tr: "Film" },
  Game: { de: "Spiel", tr: "Oyun" },
  Stage: { de: "Bühne", tr: "Sahne" },
  Musical: { de: "Musical", tr: "Müzikal" },
  Audience: { de: "Publikum", tr: "İzleyici" },
  Didgeridoo: { de: "Didgeridoo", tr: "Didgeridoo" },
  Harpsichord: { de: "Cembalo", tr: "Klavesin" },
  Theremin: { de: "Theremin", tr: "Theremin" },
  Sitar: { de: "Sitar", tr: "Sitar" },
  Bagpipes: { de: "Dudelsack", tr: "Gayda" },
  Sousaphone: { de: "Sousaphon", tr: "Sousafon" },
  Ballet: { de: "Ballett", tr: "Bale" },
  Opera: { de: "Oper", tr: "Opera" },
  Mime: { de: "Mime", tr: "Pandomim" },
  Shakespeare: { de: "Shakespeare", tr: "Shakespeare" },

  // Fantasy
  Dragon: { de: "Drache", tr: "Ejder" },
  Fairy: { de: "Fee", tr: "Peri" },
  Wizard: { de: "Zauberer", tr: "Büyücü" },
  Unicorn: { de: "Einhorn", tr: "Tek Boynuzlu At" },
  Knight: { de: "Ritter", tr: "Şövalye" },
  Witch: { de: "Hexe", tr: "Cadı" },
  Giant: { de: "Riese", tr: "Dev" },
  Mermaid: { de: "Meerjungfrau", tr: "Denizkızı" },
  Elf: { de: "Elf", tr: "Elf" },
  Vampire: { de: "Vampir", tr: "Vampir" },
  Troll: { de: "Troll", tr: "Trol" },
  Griffin: { de: "Greif", tr: "Griffin" },
  Phoenix: { de: "Phönix", tr: "Anka" },
  Centaur: { de: "Zentaur", tr: "Sentor" },
  Minotaur: { de: "Minotaurus", tr: "Minotaur" },
  Pegasus: { de: "Pegasus", tr: "Pegasus" },
  Cyclops: { de: "Zyklop", tr: "Kiklop" },
  Goblin: { de: "Kobold", tr: "Goblin" },
  Genie: { de: "Dschinn", tr: "Cin" },
  Werewolf: { de: "Werwolf", tr: "Kurt Adam" },
  Chimera: { de: "Chimäre", tr: "Khimera" },
  Kraken: { de: "Kraken", tr: "Kraken" },
  Basilisk: { de: "Basilisk", tr: "Basilisk" },
  Hydra: { de: "Hydra", tr: "Hidra" },
  Leviathan: { de: "Leviathan", tr: "Leviathan" },
  Banshee: { de: "Banshee", tr: "Banshee" },
  Sphinx: { de: "Sphinx", tr: "Sfenks" },
  Thunderbird: { de: "Donnervogel", tr: "Gökkuşu" },
  Golem: { de: "Golem", tr: "Golem" },
  Djinn: { de: "Dschinn", tr: "Cin" },

  // School
  Desk: { de: "Schreibtisch", tr: "Sıra" },
  Pencil: { de: "Bleistift", tr: "Kalem" },
  Eraser: { de: "Radiergummi", tr: "Silgi" },
  Notebook: { de: "Notizbuch", tr: "Defter" },
  Ruler: { de: "Lineal", tr: "Cetvel" },
  Lunch: { de: "Mittagessen", tr: "Öğle Yemeği" },
  Globe: { de: "Globus", tr: "Dünya Küresi" },
  Blackboard: { de: "Tafel", tr: "Kara Tahta" },
  Test: { de: "Test", tr: "Sınav" },
  Science: { de: "Wissenschaft", tr: "Bilim" },
  History: { de: "Geschichte", tr: "Tarih" },
  Dictionary: { de: "Wörterbuch", tr: "Sözlük" },
  Marker: { de: "Marker", tr: "Kalem" },
  Recess: { de: "Pause", tr: "Teneffüs" },
  Homework: { de: "Hausaufgaben", tr: "Ev Ödevi" },
  Thesis: { de: "Abschlussarbeit", tr: "Tez" },
  Laboratory: { de: "Laboratorium", tr: "Laboratuvar" },
  Debate: { de: "Debatte", tr: "Tartışma" },
  Scholarship: { de: "Stipendium", tr: "Burs" },
  "Periodic Table": { de: "Periodensystem", tr: "Periyodik Tablo" },
  Geometry: { de: "Geometrie", tr: "Geometri" },
  Physics: { de: "Physik", tr: "Fizik" },
  Biology: { de: "Biologie", tr: "Biyoloji" },

  // Silly & Random
  "Banana Peel": { de: "Bananenschale", tr: "Muz Kabuğu" },
  Slime: { de: "Schleim", tr: "Balçık" },
  "Chicken Nugget": { de: "Hähnchennugget", tr: "Tavuk Nugget" },
  Bubble: { de: "Blase", tr: "Baloncuk" },
  Pickle: { de: "Gurke", tr: "Turşu" },
  Mustache: { de: "Schnurrbart", tr: "Bıyık" },
  Toilet: { de: "Toilette", tr: "Tuvalet" },
  "Rubber Chicken": { de: "Gummihuhn", tr: "Lastik Tavuk" },
  "Disco Ball": { de: "Discokugel", tr: "Disko Topu" },
  Llama: { de: "Lama", tr: "Lama" },
  Kazoo: { de: "Kazoo", tr: "Kazoo" },
  Waffle: { de: "Waffel", tr: "Vafel" },
  Flamingo: { de: "Flamingo", tr: "Flamingo" },
  Donut: { de: "Donut", tr: "Çörek" },
  Pirate: { de: "Pirat", tr: "Korsan" },
  "Dinosaur Costume": { de: "Dinosaurierkostüm", tr: "Dinozor Kostümü" },
  "Taco Truck": { de: "Tacolaster", tr: "Taco Kamyonu" },
  "Whoopee Cushion": { de: "Furzpolster", tr: "Pırt Koltuk" },
  "Loch Ness Monster": { de: "Loch Ness Monster", tr: "Loch Ness Canavarı" },
  Yeti: { de: "Yeti", tr: "Yeti" },
  "Marshmallow Cannon": { de: "Marshmallow-Kanone", tr: "Hatmi Topu" },
  "Giant Rubber Duck": { de: "Riesengummiente", tr: "Dev Lastik Ördek" },
  Sasquatch: { de: "Sasquatch", tr: "Sasquatch" },
  UFO: { de: "UFO", tr: "UFO" },
  "Time Machine": { de: "Zeitmaschine", tr: "Zaman Makinesi" },
};

export function translateText(text: string, targetLanguage: string): string {
  if (targetLanguage === "en") return text;

  const translation = UI_TRANSLATIONS[text as keyof typeof UI_TRANSLATIONS];
  if (translation && translation[targetLanguage as keyof typeof translation]) {
    return translation[targetLanguage as keyof typeof translation];
  }

  const wordTranslation =
    WORD_TRANSLATIONS[text as keyof typeof WORD_TRANSLATIONS];
  if (
    wordTranslation &&
    wordTranslation[targetLanguage as keyof typeof wordTranslation]
  ) {
    return wordTranslation[targetLanguage as keyof typeof wordTranslation];
  }

  return text;
}

export function translateWordList(
  words: string[],
  targetLanguage: string
): string[] {
  if (targetLanguage === "en") return words;

  return words.map((word) => translateText(word, targetLanguage));
}
