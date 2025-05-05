<p style="color: red;"><b>Note:</b> Due to use of MockAPI, when a new customer is added, the data is not fetched and shown in the list immediately. However, the customer is successfully added to the MockAPI. It shows up correctly after logout and login again.</p>

# CrediKhaata – Loan Ledger UI for Shopkeepers

A responsive credit tracking app for small shopkeepers to manage trusted customers, track credit sales, record repayments, and view dues — all from a single dashboard.

## 🌐 Tech Stack

- **Frontend**: React.js
- **Backend**: MockAPI (used for simulating backend and CRUD operations)

## ✅ Features

### 1. **Login / Sign-Up**
- Basic email-password authentication (mocked)
- Login state persisted using `localStorage`

### 2. **Dashboard View**
- Displays list of all customers with:
  - Name
  - Outstanding balance
  - Next due date (calculated from loan data)
  - Status: _Up-to-date_ / _Overdue_
- Overdue loans are highlighted in red

### 3. **Customer Detail Page**
- Shows all credit transactions for a selected customer:
  - Items sold
  - Loan amount
  - Due date
  - Repayment history (amount + date)
  - Remaining balance per loan

### 4. **Forms**
- Add New Customer
- Add Loan (Credit Sale)
- Record Repayment
- All forms include client-side validation

### 5. **Overdue Highlighting**
- Loans with overdue status are visually marked on the dashboard for better tracking

## 📁 Folder Structure

