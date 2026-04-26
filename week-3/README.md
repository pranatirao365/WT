# Week 3 — JavaScript + localStorage (Login Required)

## How to Run
- Open `index.html` in any web browser.

## Important Rule (Implemented)
- Books are visible **only after login**.
- If you open `books.html` directly while logged out, it redirects to `login.html`.

## Pages
- `index.html` — frameset entry point (starts at Login)
- `login.html` — login for existing users
- `register.html` — registration with validation
- `forgot.html` — forgot password (verify email → reset password)
- `books.html` — book collection (search + category filter + details)

## Where Registered Users Are Saved
This week is a front-end demo (no server/database). Users are saved in browser **localStorage**.

- **Registered users:** `wt_week3_users`
  - JSON object keyed by email
- **Current logged-in user:** `wt_week3_current_user`
  - stores the logged-in email

### How to View Saved Users
1. Open Week‑3 in your browser.
2. Press `F12` → Developer Tools.
3. Go to **Application** (or **Storage**) → **Local Storage**.
4. Select the Week‑3 `file://` origin.
5. Check `wt_week3_users`.

## Demo Accounts
Some demo emails are seeded from `data.js` (`KNOWN_EMAILS`).
- Default seeded password: `Password@123`

## Main Logic
- `app.js` — validation, login/register/forgot flows, localStorage storage, auth gating, dynamic book rendering
- `data.js` — `BOOKS` list and demo `KNOWN_EMAILS`
