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
  akademija: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Academy", 
    required: [true, "A course must belong to an academy"]
  }
});
const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
