# Hotel Room Booking

A simple hotel room booking app. Guests can browse rooms, register, save rooms, and book stays. An admin can add, edit, and delete rooms.

The frontend is React (Vite). The backend is Express with the native MongoDB driver.

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
│   ├── .env.example
│   └── routes/
├── client/          # React + Vite frontend
│   ├── src/
│   ├── index.html
│   └── vite.config.js
├── README.md
└── .gitignore
```

---

## How to run the entire app

1. Install **Node.js 18+**.

2. Start **MongoDB** locally, or have a MongoDB Atlas URI ready.
   - Local database URI: `mongodb://127.0.0.1:27017/hotel-booking`

3. Start the API (terminal 1):

   ```bash
   cd hotel-booking/server
   cp .env.example .env
   npm install
   npm run dev
   ```

   The API is at [http://localhost:5000](http://localhost:5000).
   Open [http://localhost:5000/api/health](http://localhost:5000/api/health) — it should return `{ "ok": true, "db": "connected" }`.

   On first start, the server creates:
   - an admin user from `server/.env` (`ADMIN_EMAIL`, `ADMIN_PASSWORD`)
   - three sample rooms if the rooms collection is empty

   Change admin values in `.env` **before** the first start if you want different credentials.

4. Start the React client (terminal 2):

   ```bash
   cd hotel-booking/client
   npm install
   npm run dev
   ```

5. Open the app at [http://localhost:5173](http://localhost:5173).
   Keep both terminals running. The Vite proxy sends `/api` to port 5000.

6. Log in:
   - **Admin:** `admin@hotel.com` / `admin123` → goes to `/admin` to manage rooms
   - **Customer:** register at `/register`, then log in at `/login`

7. Try the flow:
   - Home (`/`) is public: rooms, price sort, date availability
   - Room details (`/rooms/:id`) is public
   - Book and Save require login; guests are sent to `/login` first
   - Customers book at `/book` (success popup) and see saved rooms at `/bookmarks`
   - Admins manage rooms at `/admin` (no customer management)
