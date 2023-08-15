const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const User = require("./models/User");

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect("meow-your-mongodb-uri-meow", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// Passport Configuration
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user || !user.validPassword(password)) {
        return done(null, false, { message: "Invalid credentials" });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "meow-your-secret-key-meow",
    },
    (jwtPayload, done) => {
      User.findById(jwtPayload.id, (err, user) => {
        if (err) return done(err, false);
        if (user) return done(null, user);
        return done(null, false);
      });
    }
  )
);

// Define routes
app.use("/api/posts", require("./routes/posts"));

// Start the server
app.listen(port, () => {
  console.log(`Meow server is running on port ${port}`);
});
