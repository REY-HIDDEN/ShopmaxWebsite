---
description: How to run the ShopMax project (Frontend & Backend)
---

This workflow guide you through starting both the backend and frontend of the ShopMax platform.

## Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed.
- Ensure your MySQL server is running and the database matches the credentials in `Backend/.env`.

## Steps

### 1. Start the Backend
// turbo
1. Open a terminal in the `Backend` directory:
   ```powershell
   cd 'd:\Second ecommrce platform\Shop max platform\Backend'
   ```
2. Install dependencies (if not already done):
   ```powershell
   npm install
   ```
3. Run the migration script (to set up the database):
   ```powershell
   node migrate.js
   ```
4. Start the server:
   ```powershell
   npm start
   ```
   The backend will be running at `http://localhost:3000`.

### 2. Start the Frontend
1. The frontend is a static web application located in the `Public` directory.
2. You can serve it using any local web server, such as the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code.
3. Once running, open your browser to the local server address (e.g., `http://127.0.0.1:5500/Public/index.html`).

## Troubleshooting
- **No products loading?** Ensure the backend is running and you've run the `migrate.js` script. Check the browser console (F12) for detailed errors.
- **Database errors?** Verify your `.env` file credentials and ensure MySQL is active.
