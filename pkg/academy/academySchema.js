const mongoose = require('mongoose');

const academySchema = new mongoose.Schema({
  ime: {
    type: String,
    required: [true, "The academy must have a name"],
  },
  adresa: {
    type: String,
    required: [true, "The academy must have an address"],
  },
});
const Academy = mongoose.model("Academy", academySchema);
module.exports = Academy;