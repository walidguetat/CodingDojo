const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is requiered"],
      minLength: [3, "{PATH} must have at least 3 chars"],
    },
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
