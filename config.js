const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/react_tut2")
  .then(() => {
    console.log("Connected to databse react_tut2");
  })
  .catch(() => {
    console.log("Connection to the database failed!");
  });
  
