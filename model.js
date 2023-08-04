const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment");
require("./config");

// autoIncrement.initialize(connection);

const userSchema = new mongoose.Schema({
//   userid: {
//     type: Number,
//     unique: true,
//     default: 1,
//   },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  timecreated: {
    type: Date,
    default: Date.now,
  },
  timemodified: {
    type: Date,
    default: Date.now,
  },
  suspended: {
    type: Boolean,
    default: false,
  },
});

// // Apply the auto-increment plugin directly to the schema
// userSchema.plugin(autoIncrement.plugin, {
//     model: 'User',
//     field: 'userid',
//     startAt: 1,
//     incrementBy: 1
// });
// userSchema.pre("save", async function (next) {
//   if (!this.isNew) {
//     return next();
//   }

//   try {
//     const counter = await this.constructor
//       .findOneAndUpdate(
//         { _id: "userid" },
//         { $inc: { sequence_value: 1 } },
//         { new: true, upsert: true }
//       )
//       .lean();

//     this.userid = counter.sequence_value;
//     next();
//   } catch (error) {
//     return next(error);
//   }
// });

// const Counter = mongoose.model(
//   "Counter",
//   new mongoose.Schema({
//     _id: { type: String, required: true, default: "userid" },
//     sequence_value: { type: Number, default: 1 },
//   })
// );
// Counter.findOneAndUpdate(
//   { _id: "userid" },
//   { $setOnInsert: { sequence_value: 1 } },
//   { upsert: true }
// )
//   .then(() => {})
//   .catch((error) => {
//     console.error("Error initializing the counter:", error);
//   });

const userImageSchema = new mongoose.Schema({
  image: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
const UserImage = mongoose.model("UserImage", userImageSchema);

module.exports = { User, UserImage };
