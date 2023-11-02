const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const staffSchema = new Schema(
  {
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    username: {
        type: String,
        require: true,
      },
  },
  { timetamps: true }
);

const Staff = mongoose.model('staffs', staffSchema);

module.exports = Staff