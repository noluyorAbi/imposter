const { createCanvas } = require("canvas");

// Create a 1200x630 canvas for the OG image
const canvas = createCanvas(1200, 630);
const ctx = canvas.getContext("2d");

/*
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                    Modern Minimalistic OG Image Design                       ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

// Sophisticated background with multiple gradients
const bgGradient = ctx.createLinearGradient(0, 0, 1200, 630);
bgGradient.addColorStop(0, "#0f0f23");
bgGradient.addColorStop(0.3, "#1a1a2e");
bgGradient.addColorStop(0.7, "#16213e");
bgGradient.addColorStop(1, "#0f3460");
ctx.fillStyle = bgGradient;
ctx.fillRect(0, 0, 1200, 630);

// Add subtle geometric patterns
ctx.fillStyle = "rgba(79, 70, 229, 0.1)";
for (let i = 0; i < 8; i++) {
  ctx.beginPath();
  ctx.arc(200 + i * 120, 100 + (i % 2) * 50, 30 + i * 5, 0, Math.PI * 2);
  ctx.fill();
}

// Add floating particles
ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
for (let i = 0; i < 20; i++) {
  ctx.beginPath();
  ctx.arc(
    100 + Math.random() * 1000,
    50 + Math.random() * 500,
    2 + Math.random() * 3,
    0,
    Math.PI * 2
  );
  ctx.fill();
}

// Main title with enhanced typography
ctx.fillStyle = "#ffffff";
ctx.font = "bold 80px 'Arial Black', Arial, sans-serif";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

// Add text shadow for depth
ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.fillText("IMPOSTER", 600, 180);

// Reset shadow for subtitle
ctx.shadowColor = "transparent";
ctx.shadowBlur = 0;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;

// Subtitle with gradient
const textGradient = ctx.createLinearGradient(400, 220, 800, 220);
textGradient.addColorStop(0, "#4f46e5");
textGradient.addColorStop(0.5, "#7c3aed");
textGradient.addColorStop(1, "#4f46e5");
ctx.fillStyle = textGradient;
ctx.font = "bold 48px Arial";
ctx.fillText("WORD GAME", 600, 250);

// Tagline
ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
ctx.font = "28px Arial";
ctx.fillText(
  "Social Deduction • Multi-Language • Premium Experience",
  600,
  300
);

// Feature highlights with icons
const features = [
  { icon: "🎭", text: "Multi-Language", x: 150, y: 380 },
  { icon: "🎯", text: "15+ Categories", x: 400, y: 380 },
  { icon: "⏱️", text: "Timer System", x: 650, y: 380 },
  { icon: "📱", text: "Responsive", x: 900, y: 380 },
];

ctx.font = "24px Arial";
ctx.textAlign = "center";
features.forEach((feature) => {
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  ctx.fillText(feature.icon, feature.x, feature.y);
  ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
  ctx.fillText(feature.text, feature.x, feature.y + 30);
});

// Sophisticated eye icon
const eyeX = 900;
const eyeY = 400;

// Outer glow
ctx.shadowColor = "rgba(79, 70, 229, 0.6)";
ctx.shadowBlur = 20;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;

// Eye background
ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
ctx.beginPath();
ctx.arc(eyeX, eyeY, 80, 0, Math.PI * 2);
ctx.fill();

// Eye iris
ctx.fillStyle = "#4f46e5";
ctx.beginPath();
ctx.arc(eyeX, eyeY, 60, 0, Math.PI * 2);
ctx.fill();

// Eye pupil
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.arc(eyeX, eyeY, 40, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = "#1a1a1a";
ctx.beginPath();
ctx.arc(eyeX, eyeY, 25, 0, Math.PI * 2);
ctx.fill();

// Eye highlight
ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
ctx.beginPath();
ctx.arc(eyeX - 15, eyeY - 15, 8, 0, Math.PI * 2);
ctx.fill();

// Reset shadow
ctx.shadowColor = "transparent";
ctx.shadowBlur = 0;

// Add subtle border
ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
ctx.lineWidth = 2;
ctx.strokeRect(10, 10, 1180, 610);

// Save the image
const fs = require("fs");
const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("public/og-image.png", buffer);

console.log("Enhanced OG image generated successfully!");
