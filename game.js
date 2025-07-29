// Game settings
let playerLevel = 999; // Max level
let allSkinsUnlocked = true; // Unlock all skins
let gems = 0; // Disable gem currency
let gemPurchasesEnabled = false; // No real money purchases

// List of all skins including limited ones
const skins = [
    "Golden Dragon",
    "Shadow Ninja",
    "Cyber Samurai",
    "Pumpkin King",
    "Ice Phantom",
    "Fire Titan",
    "Galaxy Warrior",
    "Royal Knight",
    "Ancient Pharaoh",
    "Dark Mage"
    // Add more skins here later if needed
];

// Show player level
document.getElementById("player-level").innerHTML = `Your Level: <span>${playerLevel}</span>`;

// Handle button click to view all skins
document.getElementById("view-skins").addEventListener("click", function () {
    const skinsList = document.getElementById("skins-list");

    if (skinsList.classList.contains("hidden")) {
        skinsList.classList.remove("hidden");
        skinsList.innerHTML = "<h3>Unlocked Skins:</h3><ul>" +
            skins.map(skin => `<li>${skin}</li>`).join("") +
            "</ul>";
    } else {
        skinsList.classList.add("hidden");
    }
});

// Block gem purchases completely
function attemptPurchase() {
    if (!gemPurchasesEnabled) {
        alert("Gem purchases are disabled in this version!");
    }
}
