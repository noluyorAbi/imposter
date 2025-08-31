const { createCanvas } = require("canvas");

// Create a 1200x630 canvas for the OG image
const canvas = createCanvas(1200, 630);
const ctx = canvas.getContext("2d");

// Background gradient
const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
gradient.addColorStop(0, "#1a1a1a");
gradient.addColorStop(1, "#4f46e5");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 1200, 630);

// Add some geometric shapes for visual interest
ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
ctx.beginPath();
ctx.arc(1000, 150, 100, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(150, 500, 80, 0, Math.PI * 2);
ctx.fill();

// Main title
ctx.fillStyle = "#ffffff";
ctx.font = "bold 72px Arial";
ctx.textAlign = "center";
ctx.fillText("Imposter Word Game", 600, 200);

// Subtitle
ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
ctx.font = "32px Arial";
ctx.fillText("Social Deduction Word Game", 600, 260);

// Features
ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
ctx.font = "24px Arial";
ctx.textAlign = "left";
ctx.fillText("🎭 Multi-language Support", 100, 350);
ctx.fillText("🎯 15+ Word Categories", 100, 390);
ctx.fillText("⏱️ Timer System", 100, 430);
ctx.fillText("📱 Responsive Design", 100, 470);

// Eye icon (representing the imposter theme)
ctx.fillStyle = "#4f46e5";
ctx.beginPath();
ctx.arc(900, 400, 60, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.arc(900, 400, 30, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = "#1a1a1a";
ctx.beginPath();
ctx.arc(900, 400, 15, 0, Math.PI * 2);
ctx.fill();

// Save the image
const fs = require("fs");
const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("public/og-image.png", buffer);

console.log("OG image generated successfully!");
