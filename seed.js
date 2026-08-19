const { getDb } = require("./db");

// Create the admin user from env values if that email is not already in the database.
async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) {
    return;
  }

  const users = getDb().collection("users");
  const existing = await users.findOne({ email });
  if (existing) {
    return;
  }

  await users.insertOne({
    name: "Admin",
    email,
    password,
    role: "admin",
  });
  console.log("Seeded admin user:", email);
}

module.exports = { seedAdmin };
