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
├── server/          # Express API + native MongoDB driver (not added yet)
├── client/          # React + Vite frontend (not added yet)
├── README.md
└── .gitignore
```

---

## How to run the entire app

Full start-to-finish steps will be written here once the server and client exist.

For now:

1. Install **Node.js 18+** and **MongoDB** (or have an Atlas URI ready).
2. Do **not** use Docker.
3. Later steps will add:
   - `server/` — copy `.env.example` to `.env`, run `npm install` and `npm run dev`
   - `client/` — run `npm install` and `npm run dev`
4. Open the app in the browser once those folders are in place.

Admin login details will be listed here after the auth step.
