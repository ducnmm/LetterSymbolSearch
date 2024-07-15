# Letter/Symbol Search Game

## Description

Letter/Symbol Search is a fun and engaging game where players test their observational skills by finding specific letters or symbols among a grid of randomly generated characters. The game challenges players to identify all occurrences of a target character within a given level, progressively increasing in difficulty as they advance through higher levels.

**--> You can play at link:** [https://lettersymbolsearch.vercel.app](https://lettersymbolsearch.vercel.app)

## Features

- **Two Modes of Play:** Players can choose to search for letters or symbols.
- **Randomly Generated Grid:** Each level presents a grid of characters randomly generated to include a mix of target and non-target characters.
- **Progressive Difficulty:** As players advance through levels, the number of characters and the complexity of the search increases.
- **Visual Feedback:** Correct selections are highlighted in green, while incorrect selections are marked in red.
- **Interactive Levels:** Players can navigate through different levels and retry levels as needed.

## How to Play

1. **Choose a Mode:** Select either letters or symbols as your search target.
2. **Find the Target:** A specific letter or symbol will be displayed as the target. Click on all occurrences of this target in the grid.
3. **Feedback on Selections:** 
   - Correct selections will be highlighted in green.
   - Incorrect selections will be marked in red.
4. **Advance to Next Level:** Once all target characters are found, click on the "Next Level" button to proceed.
5. **Level Navigation:** Players can also manually select levels using the level selection buttons.

## Levels and Difficulty

- **Levels 1-5:** Search for letters only. The number of characters in the grid increases with each level.
- **Levels 6-10:** Search for symbols only. The grid becomes more complex and dense.
- **Levels 11-13:** A mix of letters and symbols, with the grid becoming increasingly challenging.

## Game Mechanics

- **Grid Generation:** Each level generates a grid with a specific number of characters, increasing with the level.
- **Target Character Selection:** A target character is randomly selected from the set of letters or symbols.
- **User Interaction:** Players click on characters in the grid to mark them as found.

## Technical Details

- **Frontend:** Built with React, leveraging Bootstrap for styling.
- **State Management:** Utilizes React's useState and useEffect hooks for managing game state and level progression.

## Screenshot

- Level 1
  <img width="1440" alt="Screenshot 2024-07-15 at 17 01 24" src="https://github.com/user-attachments/assets/43f14766-264f-4ecd-8d6d-c5779c705647">
- Level 5
  <img width="1440" alt="Screenshot 2024-07-15 at 17 02 12" src="https://github.com/user-attachments/assets/58b5f741-18bc-4053-b87a-1124aaecba3c">
- Level 11
  <img width="1440" alt="Screenshot 2024-07-15 at 17 02 32" src="https://github.com/user-attachments/assets/0cbbfa68-689f-456d-bfb9-8da68d3e20fc">
- Level 13
  <img width="1440" alt="Screenshot 2024-07-15 at 17 03 20" src="https://github.com/user-attachments/assets/0402896b-1547-4e54-8e41-9bc00d3c0626">

## Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/MauDucKG/LetterSymbolSearch.git
   ```
2. **Install dependencies:**
   ```sh
   cd LetterSymbolSearch
   npm install
   ```
3. **Start the application:**
   ```sh
   npm start
   ```

Enjoy playing the Letter/Symbol Search Game and challenge yourself to reach the highest level!
