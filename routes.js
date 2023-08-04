const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();
require("./config");
const {User} = require("./model");
const {UserImage} = require("./model");
const bcrypt = require("bcryptjs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage }).single("file");

router.get("/getdata", (req, res) => {
  res.send({ msg: "This is home page" });
});

router.post("/create", async (req, res) => {
  let password = req.body.password;
  password = await bcrypt.hash(password, 10);

  let user_info = new User({
    name: req.body.name,
    email: req.body.email,
    password: password,
    phone: req.body.phone,
  });

  const result = await user_info.save();
  if (result) {
    console.log("Date inserted in the user collection successfully.");
  } else {
    console.log("Date insertion failed!");
  }

  res.send("Data sent to Server");
});

router.post("/uploadImage", upload, async (req, res) => {
  let file = req.file;
  let image = new UserImage({
    image: file.filename,
  });
  const result = await image.save();
  if (result) {
    console.log("Date inserted successfully");
    res.json(result);
  } else {
    console.log("Date insertion failed!");
  }
});
router.post("/update", async (req, res) => {
  console.log(req.body);
  res.send("Data sent to Server");
});

module.exports = router;
