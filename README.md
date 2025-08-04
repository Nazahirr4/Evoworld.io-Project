# EvoWorld.io Offline Clone – Full Game Source (Node.js + HTML5 Canvas)

---

## 🧙 What is EvoWorld.io?

EvoWorld.io is a 2D multiplayer .io evolution survival game where players start as a low-level creature (a fly) and evolve through dozens of forms by eating food, avoiding predators, and gaining experience. The ultimate goal is to become the strongest creature in the food chain while avoiding death from other players and environmental hazards.

### ⚡ Gameplay Loop:

* Start as the lowest creature (Level 0: Fly).
* Gain XP by eating food, collecting orbs, and defeating other creatures.
* Avoid larger players who can eat you.
* Evolve every few levels into a new creature, unlocking powers and abilities.
* Reach max evolution (Level 44: Grim Reaper), while leveling further for cosmetics.

---

## 🏋️ Summary of Features

This is a complete offline EvoWorld.io clone, rebuilt with:

* HTML5 Canvas for rendering
* Node.js and Express for the server
* Socket.io for optional real-time multiplayer
* Fully local assets (images, audio, logic, UI)

---

## 📂 Full Project Structure

```
evoworld-clone/
├── README.md
├── package.json
├── server/
│   ├── server.js
│   ├── sockets/
│   │   └── gameSockets.js
│   ├── data/
│   │   ├── users.json
│   │   └── leaderboard.json
│   └── utils/
│       └── xpManager.js
├── public/
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   ├── scripts/
│   │   ├── main.js
│   │   ├── gameLoop.js
│   │   ├── player.js
│   │   ├── evolution.js
│   │   ├── assetsLoader.js
│   │   ├── ui/
│   │   │   ├── menuUI.js
│   │   │   ├── levelUI.js
│   │   │   └── shopUI.js
│   │   └── systems/
│   │       ├── pets.js
│   │       ├── skins.js
│   │       ├── dailyQuests.js
│   │       ├── statusEffects.js
│   │       ├── foodSpawner.js
│   │       └── collisionHandler.js
│   ├── assets/
│   │   ├── evolutions/
│   │   ├── pets/
│   │   ├── skins/
│   │   ├── effects/
│   │   ├── tombstones/
│   │   ├── particles/
│   │   └── misc/
│   └── sounds/
└── config/
    └── settings.json
```

---

## 🚀 Core Gameplay Systems

### ✅ Evolution System (Level 0 to 44)

* Players evolve at certain level intervals.
* 45 creatures total, each with unique stats and images.
* Evolutions unlock based on XP thresholds.
* At Level 44, the Grim Reaper is the final form, but levels continue.

### ✅ Leveling System

* Players earn XP from food, kills, and quests.
* XP curve increases per level.
* Gem rewards granted at level milestones.
* From Level 30+, nickname color and animation effects are applied.

### ✅ XP and Gem Rewards

* Food: base XP + scale with level
* Kills: XP + gems per target's level
* Daily quests: large XP + gem bonuses
* Bonus Codes (SkyBS, Nortos, Plaxer1): +40% XP & gem gain (permanent)

### ✅ Skins and Cosmetics

* All skins can be purchased with gems (no real money)
* Categories: creature skins, pets, effects (kill/evolve), tombstones, particles, crosshairs
* Some skins limited-time or part of bundles

### ✅ Pets System

* Premium only
* Pets float beside player and animate
* 3 pets owned by default: Purple Insect, Fly, Green Bird
* Others cost 300–500 gems
* Pet button only appears for premium players

### ✅ Effects

* **Evolve Effects**: Fireworks, Double Fireworks, Stars (200–300 gems)
* **Kill Effects**: Dust, Exploding Skull, Exploding Nova (200–300 gems)
* Play custom animation upon event trigger

### ✅ Daily Quests

* 2 daily quests for free players
* 3 for premium users
* Reset every 24h
* Rewards scale with level
* Progress tracked in quest panel

### ✅ Prestige & Endorse/Report System

* After death, players can endorse or report killer
* +1 prestige from Endorse, -1 from Report
* Limit: 3 votes/day
* Vote reason popup appears
* Weekly reset to Prestige 0

### ✅ Friends System

* Friend list button in bottom-right
* Add/remove friends
* View friends online or spectate

### ✅ Spectate System

* After death: spectate remaining players
* Spectate UI shows player's stats (kills, survival time, damage)
* "Find Killer" button available
* Spectate icons: blue (alive), gray (dead)

### ✅ Loadout Menu & Cosmetics

* Loadout tab available to all
* All skins, pets, crosshairs unlocked with gems
* No shop purchases, season pass, clans, ads
* Crosshair customization included

---

## 🎨 UI & Visual Systems

### ✅ Nickname Display

* Solid color from Level 0–29
* Color + animation from Level 30+

### ✅ Main Menu UI

* Prestige counter visible next to profile
* Buttons: Battle, Prestige Arena, What's New
* Cosmetics sections: Pets, Skins, Effects, Tombstones, Misc, Gift Codes

### ✅ In-Game UI

* Prestige counter above each player
* HUD includes minimap, health, water
* Evolution effects play upon evolving

---

## 🧱 Technologies Used

| Feature         | Technology Stack           |
| --------------- | -------------------------- |
| Frontend        | HTML5 Canvas, JavaScript   |
| Server          | Node.js, Express.js        |
| Real-time (opt) | Socket.io                  |
| Assets          | Embedded PNG, SVG, MP3/WAV |
| Data storage    | Local JSON files           |
| Game Loop       | requestAnimationFrame      |

---

## 📅 How to Run It Locally

```bash
# Install dependencies
npm install

# Start local server
npm start

# Open in browser
http://localhost:3000
```

---

## 🎒 How to Modify the Game

* Add new creatures: place image in `/assets/evolutions/`, add entry in `evolution.js`
* Add skin: drop into `/skins/`, define cost/effect in `skins.js`
* Change XP curve: edit `xpManager.js`
* Add pet: drop into `/pets/`, unlock in `pets.js`
* Modify bonus codes: edit `settings.json`

---

## 🚀 Future Plans

* Add evolution cutscenes
* Add minigame events (boss zones, meteor storms)
* Add leaderboard and killstreak UI

---

## ✨ Summary

This README includes everything necessary to understand, run, and expand the EvoWorld.io clone game project. It fully replicates the gameplay loop, art systems, animations, and logic of the original game but gives full control and modding access to the user.
