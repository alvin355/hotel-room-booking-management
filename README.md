# Hotel Room Booking

A simple hotel room booking app. Customers can browse rooms, register, book, and save rooms. An admin can add, edit, and delete rooms.

This project is a work in progress. Folders and run commands will be filled in as each step is added.

## Required environment

You need these installed on your machine. **Do not use Docker.**

- **Node.js** 18 or later (LTS)
- **npm** (comes with Node.js)
- **MongoDB** running locally, or a MongoDB Atlas connection string

You do not need Docker, Mongoose, or any extra tools beyond Node, npm, and MongoDB.

## Do not use Docker

This app is meant to run directly on your computer. Start MongoDB, the API, and the React client with npm. Do not wrap it in Docker.

## Project structure

```
hotel-booking/
├── server/          # Express API + native MongoDB driver
│   ├── index.js
│   ├── db.js
│   ├── .env.example
│   └── .npmrc       # public npm registry
├── client/          # React + Vite frontend (not added yet)
├── README.md
└── .gitignore
```

---

## How to run the entire app

Do **not** use Docker.

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

4. The React client is not added yet. Later: `cd hotel-booking/client`, then `npm install` and `npm run dev`.

Admin login details will be listed here after the auth step.
