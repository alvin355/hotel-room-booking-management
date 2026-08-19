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

   Room endpoints:
   - `GET /api/rooms` — list rooms. `sort=asc` or `sort=desc` (by price). Optional `checkIn` and `checkOut` filter to rooms that still have availability.
   - `GET /api/rooms/:id` — one room. Optional `checkIn` and `checkOut` add `availableCount`.
   - `POST /api/rooms` — admin create. Body: `{ "userId", "name", "description", "price", "quantity", "amenities" }`
   - `PUT /api/rooms/:id` — admin update. Body includes `userId` and any fields to change
   - `DELETE /api/rooms/:id?userId=...` — admin delete

   Three sample rooms are inserted if the rooms collection is empty.

   Booking endpoints (send `userId` from login):
   - `GET /api/bookings?userId=...` — that user's bookings
   - `POST /api/bookings` — `{ "userId", "roomId", "checkIn", "checkOut" }`. Fails if no rooms are left for those dates.

   Bookmark endpoints (send `userId` from login):
   - `GET /api/bookmarks?userId=...` — saved rooms
   - `POST /api/bookmarks` — `{ "userId", "roomId" }`
   - `DELETE /api/bookmarks/:roomId?userId=...` — remove a saved room

4. Start the React client (in a second terminal):

   ```bash
   cd hotel-booking/client
   npm install
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173). The Vite proxy sends `/api` to the server on port 5000, so keep the API running.

   You can register a customer at `/register`, or log in at `/login`. After login, customers go home and admins go to `/admin` (or back to the page they were sent from).

   Default admin: `admin@hotel.com` / `admin123`.

   The home page lists rooms with price, sort, and optional date availability. View Details is public. Book and Save send you to login if you are not signed in. The room details page shows the same Save and Book actions.

   Logged-in customers can book at `/book` (room + dates). A popup confirms a successful booking. Saved rooms are at `/bookmarks`, with View Details and Book.
