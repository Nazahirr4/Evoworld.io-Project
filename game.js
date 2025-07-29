// ============================
// Account System Configuration
// ============================

// Default player data
let player = {
    email: null,
    username: "Guest_" + Math.floor(Math.random() * 100000),
    level: 1,
    gems: 0,
    premium: false,
    skin: "Basic Fly"
};

// List of all skins including limited ones
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
    "Fire Titan",
    "Galaxy Warrior",
    "Royal Knight",
    "Ancient Pharaoh",
    "Dark Mage"
];

// Function to update the display on screen
function updateUI() {
    document.getElementById("username").textContent = player.username;
    document.querySelector(".level-text").textContent = "Level: " + player.level;

    if (player.level === 999) {
        document.querySelector(".player-image").src = "grim-reaper.png"; // your Grim Reaper image
        document.querySelector(".level-display").textContent = "Level 999 - Grim Reaper";
    } else {
        document.querySelector(".player-image").src = "basic-fly.png"; // normal fly image
        document.querySelector(".level-display").textContent = "Level " + player.level;
    }
}

// Simulated Google login (replace with real Google Sign-In API later)
function googleLogin() {
    // Ask for email (simulating Google Sign-In)
    const email = prompt("Enter your Google email:");
    // Attach Google login to button
document.getElementById("google-login").addEventListener("click", googleLogin);

    if (email) {
        player.email = email;

        if (email === "yandelfumbur@gmail.com") {
            // Owner account perks
            player.level = 999;
            player.gems = 100000;
            player.premium = true;
            player.skin = "Grim Reaper";
            alert("Welcome back, Owner! All skins unlocked, Level 999, Premium active.");
        } else {
            // Normal player account
            player.level = 1;
            player.gems = 0;
            player.premium = false;
            player.skin = "Basic Fly";
            alert("Welcome, " + player.username + "! Starting at Level 1.");
        }

        updateUI();
    }
}

// Handle Play button click
document.getElementById("play-btn").addEventListener("click", function () {
    alert("Starting game as " + player.skin + " at Level " + player.level);
});

// Run UI update on page load
updateUI();
