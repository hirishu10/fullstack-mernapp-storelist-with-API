const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../../middleware/authMiddleware");

// Getting the Modal
const User = require("../../model/User");

/**
 * Login Interface and receive the JWT Token
 */
router.post("/", (req, res) => {
  const { email, password } = req.body;

  // check if the user have their credentials
  User.findOne({ email }).then((user) => {
    if (!user) {
      res.json({
        message: "Sorry! user does not exist",
      });
    } else {
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch) {
          res.json({
            message: "Sorry! wrong credentials",
          });
        } else {
          jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token: token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
              });
            }
          );
        }
      });
      //
    }
  });
});

/**
 * GET
 * - Current user
 * Not Mandatory for personal use
 */
router.get("/user", authMiddleware, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => {
      res.json(user);
    });
});

//
module.exports = router;
