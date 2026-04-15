const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET = "mysecret";

// Mock user
const USER = {
  username: "admin",
  password: "password"
};

// Health check
app.get("/health", (req, res) => {
  res.send("OK");
});

// Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

// Middleware
function authenticate(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) return res.sendStatus(403);

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Protected route
app.get("/items", authenticate, (req, res) => {
  res.json(["item1", "item2", "item3"]);
});

// 🔥 IMPORTANT FIX HERE
app.listen(3000, "0.0.0.0", () => console.log("App running on port 3000"));
