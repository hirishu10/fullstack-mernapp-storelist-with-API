const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middleware/authMiddleware");

// Getting the Modal
const Item = require("../../model/Item");

/**
 * Get all the Items to display
 */
router.get("/", (req, res) => {
  Item.find()
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
 * Item add Interface
 *
 * PRIVATE - Secure with the JWT Token
 */
router.post("/add", authMiddleware, (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem
    .save()
    .then((item) => {
      res.json({
        status: `success`,
        message: `Your data successfully added in the database`,
      });
    })
    .catch((err) => {
      res.json({
        status: `unsuccess`,
        message: `Sorry can't add data in the database`,
        errMess: err,
      });
    });
});

/**
 * Item delete Interface
 *
 * PRIVATE - Secure with the JWT Token
 */
router.delete("/delete/:id", authMiddleware, (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then((item) => {
      res.json({
        status: `success`,
        message: `id: ${req.params.id} successfully deleted`,
      });
    })
    .catch((err) => {
      res.json({
        status: `failed`,
        reason: `Sorry id not find with any database`,
        message: err,
      });
    });
});

/**
 * Item update Interface
 *
 * BETA - Curently don't do anything in future versions may do something
 */
router.put("/update", authMiddleware, (req, res) => {
  Item.findByIdAndUpdate(req.params.id, { name: req.params.name })
    .then((item) => {
      res.json({
        status: `success`,
        message: `id: ${req.params.id} successfully updated`,
      });
    })
    .catch((err) => {
      res.json({
        status: `failed`,
        reason: `Sorry id not find with any database`,
        message: err,
      });
    });
});

/**
 * Get Item length Interface
 * Not Mandatory for personal use
 */
router.get("/length", (req, res) => {
  Item.find()
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
