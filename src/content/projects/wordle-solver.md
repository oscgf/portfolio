---
title: Wordle Solver Project
author: "Óscar González Fresno"
date: "March 2022"
summary: A python project that helps to solve the word of the day
description: A Python-based Wordle Solver that aids in solving the popular Wordle game by filtering possible 5-letter words based on user-provided feedback for each guess. This tool leverages regex patterns to refine a word list iteratively, helping users find the solution more efficiently.
image: {
 src: "/portfolio/images/wordle.jpg",
 alt: "wordle cover"
}
github: "https://github.com/oscgf/wordle-solver"
report: ""
draft: false
featured: false
tags: 
  - python
---

## Features

The Wordle Solver is designed to:
- Accept a guessed 5-letter word and feedback for each letter.
- Narrow down possible solutions by updating a regex pattern according to the feedback.
- Suggest possible words until the final solution is identified.


## Technologies Used

- **Python 3.6+**
- **Regular Expressions (Regex)** for pattern matching.
- A custom-modified **Spanish dictionary** from [this repository](https://github.com/JorgeDuenasLerin/diccionario-espanol-txt) for a 5-letter word list without accent marks.

## How It Works

1. **Input**: Users enter a guessed word and feedback using:
   - `+` for correct letter in the correct position.
   - `?` for correct letter but incorrect position.
   - `-` for incorrect letter.
2. **Regex Generation**: Based on feedback, the program generates a regex pattern to filter potential words.
3. **Suggestions and Solution**: The program suggests potential words until only one remains.

## Getting Started

1. Ensure Python 3.6+ is installed.
2. Place a `dict.txt` file in the same directory, containing 5-letter Spanish words.
3. Run the script in a terminal:
   ```bash
   python wordle_solver.py
4. Enter your guessed 5-letter word and the feedback for each letter
   ```plaintext
   Enter your guessed word (5 letters): animo
   Enter the result (+ for green, ? for yellow, - for gray): ?----
   There are 2059 possible words
   Suggested next word:  leuda
   ```

5. Continue entering words and feedback until the program suggests the final word.
   ```plaintext
   Enter your guessed word (5 letters): leuda
   Enter the result (+ for green, ? for yellow, - for gray): ??--? 
   There are 109 possible words
   Suggested next word:  rasel
   Enter your guessed word (5 letters): rasel
   Enter the result (+ for green, ? for yellow, - for gray): -????
   Possible words:  ['clase', 'ellas', 'glase']
   Enter your guessed word (5 letters): glase
   Enter the result (+ for green, ? for yellow, - for gray): -++++
   The final word is:  clase
   ```