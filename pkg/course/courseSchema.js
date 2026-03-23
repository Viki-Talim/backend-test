const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  ime: {
    type: String,
    required: [true, "The course must have a name"],
  },
  adresa: {
    type: String,
    required: [true, "The course must have an address"],
  },
  oblast: {
    type: String,
    required: true,
  },
});
const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
