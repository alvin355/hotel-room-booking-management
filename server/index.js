require("dotenv").config();

const express = require("express");
const { connect, getDb } = require("./db");

const app = express();
app.use(express.json());

// Ping MongoDB and return whether the API and database are up.
async function health(req, res) {
  try {
    await getDb().command({ ping: 1 });
    res.json({ ok: true, db: "connected" });
  } catch (err) {
    res.status(500).json({ ok: false, db: "disconnected" });
  }
}

app.get("/api/health", health);

const port = process.env.PORT || 5000;

// Start the HTTP server after MongoDB is connected.
function startServer() {
  app.listen(port, onListening);
}

// Log the local URL once Express is listening.
function onListening() {
  console.log(`Server running on http://localhost:${port}`);
}

// Print the error and exit if MongoDB cannot be reached.
function onConnectError(err) {
  console.error("Failed to connect to MongoDB");
  console.error(err.message);
  process.exit(1);
}

connect().then(startServer).catch(onConnectError);
