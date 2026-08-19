# Hotel Room Booking

A simple hotel room booking app. Customers can browse rooms, register, book, and save rooms. An admin can add, edit, and delete rooms.

This project is a work in progress. Folders and run commands will be filled in as each step is added.

## Required environment

- **Node.js** 18 or later (LTS)
- **npm** (comes with Node.js)
- **MongoDB** running locally, or a MongoDB Atlas connection string

## Project structure

```
hotel-booking/
├── server/          # Express API + native MongoDB driver
│   ├── index.js
│   ├── db.js
│   ├── seed.js
│   ├── routes/auth.js
│   ├── .env.example
│   └── .npmrc
├── client/          # React + Vite frontend (not added yet)
├── README.md
└── .gitignore
```

---

## How to run the entire app

1. Install **Node.js 18+**.
2. Start **MongoDB** locally (or use a MongoDB Atlas URI).
   - Local default: `mongodb://127.0.0.1:27017/hotel-booking`
3. Start the API:

   ```bash
   cd hotel-booking/server
   cp .env.example .env
   npm install
   npm run dev
   ```

   The API runs at [http://localhost:5000](http://localhost:5000). Check it with [http://localhost:5000/api/health](http://localhost:5000/api/health). It should return `{ "ok": true, "db": "connected" }`.

   Auth endpoints:
   - `POST /api/auth/register` — `{ "name", "email", "password" }` (customers)
   - `POST /api/auth/login` — `{ "email", "password" }`

   Default admin (created on first start if missing):
   - email: `admin@hotel.com`
   - password: `admin123`

   Change these in `server/.env` (`ADMIN_EMAIL`, `ADMIN_PASSWORD`) before the first start if you want different values.

4. The React client is not added yet. Later: `cd hotel-booking/client`, then `npm install` and `npm run dev`.
