const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
    required: true,
  },
  password: { type: String, minlength: 6, required: true },
  token: { type: String },
});

exports.User = mongoose.model("User", userSchema);
