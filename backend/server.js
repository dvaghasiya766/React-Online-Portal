const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock database
const users = [];

// Auth Endpoints
app.post("/api/auth/register", (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  // Validate input
  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check if user exists
  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Create new user (in real app, hash password!)
  const newUser = {
    id: Date.now().toString(),
    firstName,
    lastName,
    email,
    password, // NOTE: In production, hash this password!
    role: role || "student",
  };

  users.push(newUser);
  console.log("Registered user:", newUser);

  res.status(201).json({
    success: true,
    user: {
      id: newUser.id,
      firstName: newUser.firstName,
      email: newUser.email,
      role: newUser.role,
    },
  });
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    success: true,
    user: {
      id: user.id,
      firstName: user.firstName,
      email: user.email,
      role: user.role,
    },
  });
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
