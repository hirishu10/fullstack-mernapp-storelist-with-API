const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Getting the Modal
const User = require("../../model/User");

/**
 * Not mandatory for personal user
 */
router.get("/all/userdata", (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then((items) => {
      items.length < 1
        ? res.json([{ items: "Sorry No data to show" }])
        : res.json(items);
    })
    .catch((err) => {
      res.json({ status: err });
    });
});

/**
 * Register Interface and receive the JWT Token
 */
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // check if the user is already registered
  User.findOne({ email }).then((user) => {
    if (user) {
      res.json({
        message:
          "Sorry! user already registered. please login or reset the password",
      });
    } else {
      // new User
      const newUser = User({
        name: name,
        email: email,
        password: password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            res.json({
              message: "Sorry! please enter name, email and password carefully",
              errMessage: err,
            });
          } else {
            newUser.password = hash;
            newUser.save().then((user) => {
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
            });
          }
        });
        //
      });
    }
  });
});

/**
 * Not mandatory for personal use
 * Get the total user length
 */
router.get("/length", (req, res) => {
  User.find()
    .then((data) => {
      res.json(data.length);
    })
    .catch((err) => {
      req.status(404).send({
        status: "Sorry! something went wrong",
        message: err,
      });
    });
});

//
module.exports = router;
