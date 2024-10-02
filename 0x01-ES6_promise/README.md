# ES6 Promises

## Project Overview

This project focuses on ES6 Promises, a powerful feature in JavaScript for handling asynchronous operations. Promises allow developers to work with asynchronous code in a more manageable and readable way, helping avoid "callback hell." By the end of this project, you'll learn how to work with promises, async/await, and handle errors using try/catch.

## Learning Objectives

By the end of this project, you should be able to:

- Understand what Promises are, why they are important, and how to use them.
- Utilize methods such as `.then()`, `.resolve()`, and `.catch()` to handle promises.
- Use every method of the `Promise` object effectively.
- Work with error handling using `throw` and `try/catch`.
- Understand and apply the `await` operator in asynchronous functions.
- Write and use `async` functions for cleaner asynchronous code.

## Resources

To assist with the project, the following resources are recommended:

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://web.dev/articles/promises?hl=zh-cn)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

## Project Requirements

### General

- All files will be executed on **Ubuntu 18.04 LTS** using **NodeJS 12.11.x**.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files should end with a new line.
- A `README.md` file at the root of the project folder is mandatory.
- All code should use the `.js` extension.
- Code will be tested using the **Jest** testing framework.
- Code will be verified against **ESLint** for linting.
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

#### 2. Install Project Dependencies

In your project directory, install **Jest**, **Babel**, and **ESLint** using the `package.json` provided. You can do this by running:

```bash
npm install
```

### Configuration Files

The following configuration files are required for the project:

- `package.json`: Contains project dependencies and scripts.
- `babel.config.js`: Used to configure Babel for ES6+ syntax compatibility.
- `.eslintrc.js`: Used for linting your code with ESLint rules.
- `utils.js`: Utility functions for `uploadPhoto` and `createUser`.

Make sure to run:

```bash
npm install
```

after adding the `package.json` to install all necessary dependencies.

### Testing

To run the tests, use the following command:

```bash
npm run test
```

### Response Data Format

- **`uploadPhoto`** returns a response with the following format:

```json
{
  "status": 200,
  "body": "photo-profile-1"
}
```

- **`createUser`** returns a response with the following format:

```json
{
  "firstName": "Guillaume",
  "lastName": "Salva"
}
```

## Key ES6 Features Covered

### 1. Promises

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation. Promises provide better handling of asynchronous code and improve readability.

### 2. `.then()`, `.resolve()`, and `.catch()` Methods

- **`.then()`**: Used to handle resolved promises.
- **`.resolve()`**: Resolves a promise with a given value.
- **`.catch()`**: Used to handle rejected promises.

### 3. Error Handling (`throw`, `try/catch`)

JavaScript provides `try`/`catch` blocks to handle exceptions thrown in code. This is useful when working with promises to catch errors cleanly.

### 4. Async/Await

- **`async` functions** allow you to write promise-based code as if it were synchronous, avoiding the need to chain `.then()` calls.
- The **`await`** operator pauses the execution of an `async` function until the promise is resolved.

## Folder Structure

```
0x01-ES6_promises/
├── README.md               # This file
├── <your-js-files>.js       # JavaScript files
├── package.json             # Project metadata and dependencies
├── babel.config.js          # Babel configuration
├── .eslintrc.js             # ESLint configuration
├── utils.js                 # Utility file for uploadPhoto and createUser
├── __tests__/               # Folder for Jest test files
└── node_modules/            # Installed dependencies
```
