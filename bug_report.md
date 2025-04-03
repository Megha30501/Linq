# Bug Report & Improvement Suggestions  

## **Bug ID:** BUG-001  
### **Title:** Missing Validation for First & Last Name Fields When User is Logged In  

### **Description:**  
When a user is logged in and updates their first or last name, the system does not enforce validation. It allows random characters, special symbols, and numbers without restrictions.  

### **Steps to Reproduce:**  
1. Log in with valid credentials.  
2. Navigate to the profile page.  
3. Update the first and/or last name fields.  
4. Enter random characters, special symbols, or numbers.  
5. Save the changes.  

### **Expected Result:**  
- Only letters and spaces should be allowed in the first and last name fields.  
- The name should be restricted to **2–50 characters**.  
- Invalid input should trigger a clear error message.  

### **Actual Result:**  
- The system accepts invalid input, including symbols and numbers.  

### **Severity:** Medium  

### **Suggested Fix:**  
- Implement **regex-based validation** to allow only alphabetic characters and spaces.  
- Enforce **character limits** of **2–50 characters**.  
- Provide **error messages** for invalid input.  

---

## **Bug ID:** BUG-002  
### **Title:** Missing Validation for Job Title, Organization, and Location Fields  

### **Description:**  
The system does not validate the **Job Title, Organization, or Location** fields when users update them. This allows invalid characters such as symbols or numbers.  

### **Steps to Reproduce:**  
1. Log in with valid credentials.  
2. Navigate to the profile page.  
3. Update the **Job Title, Organization, or Location** fields.  
4. Enter random characters, special symbols, or numbers.  
5. Save the changes.  

### **Expected Result:**  
- Only letters, spaces, and limited punctuation should be allowed.  
- The fields should have a **2–100 character limit**.  
- Invalid input should trigger a clear error message.  

### **Actual Result:**  
- The system accepts random characters and symbols without validation.  

### **Severity:** Medium  

### **Suggested Fix:**  
- **Autocomplete for Location:** Provide a dropdown for location suggestions.  
- **Location Accuracy:** Use dynamic APIs for real-world location data.  
- **Custom Locations:** Decide if users can enter custom locations.  
- **Test Edge Cases:** Ensure the field works for city names, full addresses, and abbreviations.  

---

## **General Improvement Suggestions:**  

### **1. Validation Consistency**  
- Apply **input validation** (**regex**) for **all form fields**.  
- Ensure validation is present on **both frontend and backend**.  

### **2. Enhanced User Experience (UX)**  
- Provide **real-time feedback** and **clear error messages**.  
- Use **character counters** to inform users of input limits.  

### **3. Data Integrity & Security**  
- **Sanitize inputs** on the backend to prevent SQL injection.  
- Ensure **only valid characters** are stored in the database.  

