const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  const { name, username, email, phone, password } = req.body;
  if (!name || !username || !email || !phone || !password) {
    return res.status(422).json({ error: "all fields required" });
  }
  try {
    const userExist = await User.findOne({
      email: email,
    });
    if (userExist) {
      return res.status(422).json({ error: "user Exist" });
    }
    const user = new User({ name, username, email, phone, password });
    const userRegister = await user.save();
    if (userRegister) {
      return res.status(201).json({ message: "registered succesfully" });
    } else {
      return res.status(500).json({ error: "please try again" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(422).json({ error: "all fields required" });
  }
  try {
    const userLogin = await User.findOne({ username: username });
    if (userLogin) {
      const matchPass = await bcrypt.compare(password, userLogin.password);

      if (!matchPass) {
        res.status(400).json({ message: "incorrect username or password" });
      } else {
        res.json({ message: `${userLogin.name} logged-in succesfully` });
        console.log(userLogin.name);
      }
    } else {
      return res.status(422).json({ error: "please try again" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
