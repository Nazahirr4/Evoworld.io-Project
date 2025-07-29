// =========================
// Player Information
// =========================
let player = {
    email: "", // This will store your Google account email after login
    username: "Guest_" + Math.floor(Math.random() * 100000), // Random guest username
    level: 1,  // Default starting level for all new players
    exp: 0,    // Experience points
    gems: 0,   // Gems count (currency, but purchase disabled)
    premium: false, // Premium status (not used yet)
    skin: "Basic Fly" // Default skin
};

// =========================
// All Available Skins (includes limited ones)
// =========================
const allSkins = [
    "Grim Reaper",
    "Pumpkin Reaper",
    "Ghostly Reaper",
    "Ghost",
    "Golden Dragon",
    "Shadow Ninja",
    "Cyber Samurai",
    "Pumpkin King",
    "Ice Phantom",
    "Legendary Phoenix"
];

// =========================
// Google Login Simulation
// =========================
function loginWithGoogle(email) {
    player.email = email;

    // If the email is your account, auto-set level 999 and unlock all skins
    if (email === "yandelfumbur@gmail.com") {
        player.level = 999;
        player.exp = 9999999; // Max EXP
        player.skin = "Grim Reaper";
        player.gems = Infinity; // Unlimited gems
        player.premium = true;
        alert("Welcome back, Yandel! Level 999 and all skins unlocked.");
    } else {
        alert("Logged in as " + email);
    }

    updateUI();
}

// =========================
// Missions System
// =========================
const missionTemplates = [
    { text: "Play for X minutes", baseExp: 3000 },
    { text: "Evolve Y times", baseExp: 1500 },
    { text: "Defeat Z players", baseExp: 2000 },
    { text: "Survive for W minutes", baseExp: 2500 }
];

function generateMission() {
    const randomMission = missionTemplates[Math.floor(Math.random() * missionTemplates.length)];
    const missionExp = Math.floor(randomMission.baseExp * (1 + player.level / 100)); // scales with level
    return {
        description: randomMission.text,
        rewardExp: missionExp
    };
}

// Display current mission
let currentMission = generateMission();

// =========================
// Update the UI
// =========================
function updateUI() {
    // Player level
    const levelDisplay = document.querySelector(".level-display");
    if (levelDisplay) levelDisplay.innerText = `Level ${player.level}`;

    // Player skin
    const skinImage = document.querySelector(".player-image");
    if (skinImage) skinImage.alt = player.skin;

    // Missions
    const missionElement = document.querySelector(".mission");
    if (missionElement) missionElement.innerText = `${currentMission.description} (+${currentMission.rewardExp} EXP)`;
}

// =========================
// Event Listeners
// =========================
document.getElementById("google-login")?.addEventListener("click", function () {
    const emailInput = prompt("Enter your Google account email:");
    if (emailInput) loginWithGoogle(emailInput);
});

document.getElementById("play-btn")?.addEventListener("click", function () {
    alert("Starting game with skin: " + player.skin + " at level " + player.level);
});
