# Aqwas Task - Body Mass Index Calculator Solution

## Table of Contents

- [Aqwas Task - Body Mass Index Calculator Solution](#aqwas-task---body-mass-index-calculator-solution)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Features](#features)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [Process](#process)
    - [Built With](#built-with)
  - [How to Run](#how-to-run)

## Overview

This is a Body Mass Index (BMI) Calculator application that allows users to calculate their BMI using either metric or imperial units. Users can select their preferred unit, enter their height and weight, and receive feedback on their BMI classification (e.g., healthy weight, overweight) along with an ideal weight range for their height.

### Features

- Select between metric (cm/kg) and imperial (in/lbs) units.
- Enter height and weight to receive an immediate BMI calculation.
- View BMI classification and ideal weight range.
- Adaptive layout for optimal viewing across various device sizes.
- Interactive elements with hover and focus states for a more user-friendly experience.

### Screenshot

![BMI Calculator Screenshot](./screenshot.jpg)

*Add a screenshot showing the completed design and main functionality of the app.*

### Links

- **Live Site URL**: [Visit BMI Calculator](https://guileless-genie-4de2d5.netlify.app/)
  
*Replace with your deployed URL once the site is live.*

## Process

The development process focused on creating a responsive and accessible interface while meeting all functional requirements. The project was structured with Sass for organized and modular CSS.

### Built With

- **Semantic HTML5** for accessible markup.
- **Sass (SCSS)** for modular styling, with components divided across partials:
  - `_variables.scss`: Variables for colors, spacing, and fonts.
  - `_global.scss`: General styles and resets.
  - `_bmi-calculator.scss`: Specific styles for the BMI calculator section.
  - `_tips.scss`: Styles for the health tips section.
  - `_limitations.scss`: Styles for the limitations of BMI section.
  - `main.scss`: Imports all partials for final CSS compilation.
- **JavaScript** for dynamic unit conversion, BMI calculation, and interactive behavior.
- **Bootstrap** for grid layout and responsive structure.

## How to Run

1. Install Sass if not already installed:
 npm install -g sass
