# Test Cases Documentation

## Overview
This document provides an overview of the automated test cases implemented using Playwright to validate authentication workflows, responsiveness, and navigation on the Linq platform.

---

## **1. Welcome Page Test Cases (welcome.js)**

### **1.1 Verify Linq Welcome Page Title**
- **Steps:**
  1. Navigate to the homepage (`/`).
  2. Verify that the page title contains "Linq".
- **Expected Outcome:**
  - The page should load with the correct title.

### **1.2 Should navigate to homepage when logo button is clicked**
- **Steps:**
  1. Navigate to the `/welcome` page.
  2. Click the logo button.
  3. Verify that the user is redirected to `https://linqapp.com/`.
- **Expected Outcome:**
  - Clicking the logo should navigate the user to the homepage.

### **1.3 Should display authentication options**
- **Steps:**
  1. Navigate to the homepage (`/`).
  2. Wait for the authentication buttons to load.
  3. Verify that buttons for "Email," "Apple," "Google," and "LinkedIn" are present.
  4. Count the number of authentication buttons and ensure there are at least four.
- **Expected Outcome:**
  - The authentication options should be displayed correctly.

---

## **2. Authentication Test Cases (auth.js)**

### **2.1 Should show an error when the phone number is not entered**
- **Steps:**
  1. Navigate to the homepage (`/`).
  2. Click the "Continue" button without entering a phone number.
  3. Verify that an error message "Phone number is required" is displayed.
- **Expected Outcome:**
  - The system should show an error message when the phone number is not provided.

### **2.2 Email Authentication Flow**
- **Steps:**
  1. Navigate to the `/welcome` page.
  2. Click the "Email" button.
  3. Verify that the user is redirected to `/auth-page`.
  4. Click the "Continue" button without entering an email.
  5. Verify that an error message "Please enter a valid email" is displayed.
- **Expected Outcome:**
  - The system should validate the email field and display an error message when left empty.

### **2.3 Apple Sign-In Button Test**
- **Steps:**
  1. Navigate to the homepage (`/`).
  2. Click the "Apple" button.
  3. Verify that a new tab opens with the URL starting with `https://appleid.apple.com/auth/`.
- **Expected Outcome:**
  - The Apple authentication page should open in a new tab.

### **2.4 Google Sign-In Button Test**
- **Steps:**
  1. Navigate to the homepage (`/`).
  2. Click the "Google" button.
  3. Verify that a new tab opens with a URL pattern matching `https://accounts.google.com/`.
- **Expected Outcome:**
  - The Google authentication page should open in a new tab.

### **2.5 LinkedIn Sign-In Button Test**
- **Steps:**
  1. Navigate to the `/welcome` page.
  2. Click the "LinkedIn" button.
  3. Verify that a new tab opens with a URL pattern matching `https://www.linkedin.com/oauth/`.
- **Expected Outcome:**
  - The LinkedIn authentication page should open in a new tab.

---

## **3. Responsiveness Test Cases (responsiveness.js)**

### **3.1 Page should be responsive in mobile view**
- **Steps:**
  1. Navigate to the homepage (`/`).
  2. Set the viewport to **375x667** (mobile view).
  3. Verify that the page content is visible.
  4. Ensure the phone number input field is visible.
  5. Click and enter a phone number (`1234567890`).
  6. Verify that the formatted phone number appears as `(123) 456-7890`.
  7. Click the "Continue" button.
- **Expected Outcome:**
  - The UI should be properly responsive in mobile view.
  - The phone number should be formatted correctly.
  - No layout issues should be present.

