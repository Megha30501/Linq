# Linq Platform Test Automation

## Overview
This repository contains automated test cases for verifying the core functionalities of the Linq platform using Playwright. The tests cover various aspects such as authentication, responsiveness, and navigation to ensure the platform provides a seamless experience for users.

## Project Structure

```bash
├── tests/
│   ├── auth.spec.js                  # Authentication test cases (Phone, Email, Social Logins)
│   ├── responsiveness.spec.js        # Tests for mobile responsiveness
│   ├── welcome.spec.js               # Welcome page and navigation tests
├── bug_report.md                     # Founded Bugs
├── testcase.md                       # Detailed description of the test cases
├── README.md                         # Project documentation
└── package.json                      # Project dependencies and scripts

```

## Getting Started

### Prerequisites
Before running the tests, ensure you have the following installed:
- Node.js (version 14 or later)
- Playwright (for browser automation)

### Install Dependencies
To install the necessary dependencies for running the tests, use the following command:

```bash
npm install
```

### Running the Tests
To run the tests using Playwright, execute the following command:

```bash
npx playwright test
```

### Running Specific Tests
To run a specific test, you can use the following command:

```bash
npx playwright test tests/[test-filename].js
```
For example, to run the auth.js tests:

```bash
npx playwright test tests/auth.spec.js
```
