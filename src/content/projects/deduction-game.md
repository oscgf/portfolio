---
title: Deduction Game
author: Óscar González Fresno
date: Jan 2026
summary: A solver for a local newspaper game
description: This project find the possible solutions for a word guess problem based on a grid of words and their letter matches.
image: {
 src: "/portfolio/images/deduction_game.jpg",
 alt: "deduction game example"
}
github: "https://github.com/oscgf/deduction-game"
report: ""
draft: false
featured: true
tags: 
  - scala
---

## The game
The goal consist on finding a five-letter word that has as many letters in common with each of the preceding words as indicated by the number provided next to them.
There is a grid of 6 words with 5 letters and an additional column that indicates the number of letter of that word in the final one. There may be more than one solution.
It is based on a local newspaper game.

## Example
Given the following grid:

| WORDS | MATCHES |
| ----- | ------- |
| SIFON | 0 |
| FINCA | 1 |
| TIMON | 1 |
| MONJE | 2 |
| GRANO | 2 |
| DOTES | 2 |

The solver will output:

| Possible solutions |
| ------------------ |
| JUMEN |
| BUENO |

## Motivation
The motivation behind this project was to create a fun and challenging way to practice functional programming skills, and one of the best ways is solving a puzzle. It combines elements of recursivity, pattern matching, high-order functions, Scala collections and algorithm design.

## Algorithm
The solver uses a recursive algorithm to explore all possible combinations of five-letter words. Its main function takes the list of words and their corresponding matches as input, and a set of correct and incorrect letters to guide the search. 

The algorithm generates candidate letter by iterating through the list and searching possible letters that match. When the candidates combination of letters are found, then all possible combinations are generated and filtered based on a dictionary of valid words.

The dictionary used in this project comes from [spanish-wordlist](https://github.com/xavier-hernandez/spanish-wordlist).

## How to run
1. Make sure you have Scala installed on your machine.
2. Clone this repository to your local machine.
3. Navigate to the project directory.
4. Open SBT shell by running `sbt` in the terminal.
5. Run the solver using the command `run`.

If you want to test with different words and matches, you can modify the `board` value at `Boards.scala` file located in the `src/main/scala/utils` directory.
