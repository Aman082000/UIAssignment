# Playwright Automation - Book Store Application

This project contains an end-to-end UI automation test built using **Playwright** and **TypeScript**.

The test automates the Book Store Application available on DemoQA and validates the complete login and book search workflow.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Visual Studio Code

---

## Test Scenario

The automated test performs the following steps:

1. Launches the DemoQA website.
2. Navigates to the **Book Store Application**.
3. Logs in using a registered user.
4. Verifies successful login by validating:
   - Username
   - Logout button
5. Navigates to the Book Store.
6. Searches for the book:
   - **Learning JavaScript Design Patterns**
7. Validates:
   - Book title
   - Author
   - Publisher
8. Extracts the book details from the table.
9. Writes the book information into a text file (`searchResult.txt`).
10. Logs out successfully.

---

## Project Structure

```
.
├── tests/
│   └── bookstore.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── searchResult.txt
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Aman082000/UIAssignment.git
```

Move into the project directory:

```bash
cd UIAssignment
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running the Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/bookstore.spec.ts
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run with the Playwright UI:

```bash
npx playwright test --ui
```

---

## View Test Report

After the test execution completes, generate and open the HTML report:

```bash
npx playwright show-report
```

---

## Output

The test creates a file named:

```
searchResult.txt
```

Example output:

```
Title: Learning JavaScript Design Patterns
Author: Addy Osmani
Publisher: O'Reilly Media
```

---

## Features

- End-to-End UI Automation
- Playwright Locators
- Assertions using Playwright Test
- File Handling with Node.js (`fs`)
- HTML Test Reports
- TypeScript-based Test Framework

---

## Prerequisites

- Node.js (v20 or later recommended)
- npm
- Playwright

---

## Screenshots

### Test Execution
<img width="1588" height="1002" alt="image" src="https://github.com/user-attachments/assets/b7e63c14-1945-4001-944b-e43f7176aba0" />

### Playwright HTML Report
<img width="1919" height="854" alt="image" src="https://github.com/user-attachments/assets/cac3ee5f-bd12-4561-ac26-21d912191f7d" />

---

## Author

**Aman Bhardwaj**
