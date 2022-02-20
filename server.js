const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

// Get All the Route Folder
const items = require("./routes/api/items");

const app = express();

// for POST if we have body it will help to display
app.use(bodyParser.json());

// Connect the mongoDB using mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then((ok) => {
    console.log(`MongoDB Connected Successfully`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/items", items);

// Static Page for the Website
if (process.env.NODE_ENV === "production") {
  //
  app.use(express.static("client/build"));
  //
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// --------------------

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
