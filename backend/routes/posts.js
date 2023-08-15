const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

// User login and issue a JWT
router.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    req.login(user, { session: false }, (err) => {
      if (err) return next(err);

      const token = jwt.sign({ id: user._id }, "your-secret-key");
      return res.json({ token });
    });
  })(req, res, next);
});

// Protected route
router.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ message: "Protected route accessed successfully" });
  }
);

module.exports = router;
