# 0x00. ES6 Basics

## Project Overview

This project covers the basics of ECMAScript 6 (ES6), a significant update to JavaScript that introduced many new features aimed at improving code readability, maintainability, and functionality. The goal of this project is to familiarize developers with these new features and how to apply them in practical JavaScript development.

## Learning Objectives

By the end of this project, you should be able to explain the following concepts:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function default parameters
- Rest and spread function parameters
- String templating in ES6
- Object creation and properties in ES6
- Iterators and `for-of` loops

## Resources

To aid in your learning, the following resources are recommended:

- [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [JavaScript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)

## Project Requirements

### General

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files must end with a new line.
- A `README.md` file at the root of the project folder is mandatory.
- All code should have a `.js` extension.
- Code will be tested using the [Jest Testing Framework](https://jestjs.io/).
- Code will be linted using [ESLint](https://eslint.org/) with specific rules that will be provided.
- All functions must be exported for testing.

### Setup Instructions

#### 1. Install NodeJS 12.11.x

If NodeJS is not already installed, follow these steps:

```bash
# Update package list
sudo apt update

# Install Node.js 12.x and npm
sudo apt install -y nodejs npm

# Verify the installation
node -v  # should output 12.11.x
npm -v
```

#### 2. Install Jest

To set up Jest for testing, install it as a development dependency:

```bash
npm install --save-dev jest
```

#### 3. Install ESLint

ESLint is a linter tool for identifying and fixing problems in JavaScript code. Install it with:

```bash
npm install eslint --save-dev
```

You can also initialize ESLint in your project:

```bash
npx eslint --init
```

#### 4. Running Tests

To run tests using Jest, you can add a script to your `package.json` file:

```json
"scripts": {
  "test": "jest"
}
```

Then, run tests with:

```bash
npm test
```

## Key ES6 Features Covered

### 1. Constants and Variables
ES6 introduces `let` and `const` for block-scoped variable declarations, replacing `var` for most cases.

### 2. Arrow Functions
Arrow functions provide a shorter syntax for writing functions and lexically bind the `this` value.

### 3. Default Parameters
Functions can now have default values for parameters.

### 4. Rest and Spread Operators
ES6 introduces the rest (`...`) operator to gather parameters into an array and the spread (`...`) operator to expand arrays into individual elements.

### 5. String Templating
Template literals in ES6 allow for string interpolation using backticks (`` ` ``).

### 6. Object Enhancements
ES6 includes shorthand syntax for creating objects and methods, making object manipulation more intuitive.

### 7. Iterators and For-Of Loops
ES6 adds iterators and a new loop syntax (`for...of`) for iterating over iterable objects such as arrays, strings, and more.

## Folder Structure

```
0x00-ES6_basics/
├── README.md               # This file
├── <your-js-files>.js       # JavaScript files
├── package.json             # Project metadata and dependencies
├── __tests__/               # Folder for Jest test files
└── .eslintrc.js             # ESLint configuration
```