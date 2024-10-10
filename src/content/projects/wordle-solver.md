---
title: "Wordle Solver"
description: "A smart assistant designed to help you crack the word of the day in the popular Wordle game."
author: "Óscar González Fresno"
image: {
 src: "/portfolio/images/wordle.jpg",
 alt: "wordle photo"
}
github: ""
draft: true
featured: true
---

## Features
- **Interactive Input**: The solver allows users to input their guesses and results (correct letters and their positions, incorrect letters, etc.).
- **Advanced Algorithm**: Behind the scenes, the solver uses elimination techniques and probability models to refine the list of potential answers based on your input.
- **Efficient Strategy**: By suggesting words that maximize information gain, the solver helps you narrow down possibilities quickly, often within a few guesses.

## Technology Stack
- **Language**: Python/JavaScript
- **Algorithm**: Greedy algorithms and basic word frequency analysis
- **Libraries**: Pandas (for handling word lists), Flask (for web deployment), or vanilla JavaScript for a browser-based version.

## Challenges
One of the key challenges in building the Wordle Solver was optimizing the word elimination process. The initial brute-force approach was slow for larger datasets, so improvements in data structures and the implementation of more efficient filtering techniques were necessary.

## Future Improvements
- Integration with real-time gameplay using browser extensions.
- Support for multiple languages (not just English).
- Advanced analytics to offer hints and feedback on optimal guessing strategies.

## Links
- [Try the Wordle Solver](#) (Link to demo or GitHub repository)
