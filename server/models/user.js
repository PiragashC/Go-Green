const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email must be provided"]
    },
    name: {
      type: String,
      required: [true, "Name must be provided"]
    },
    password: {
      type: String,
      required: [true, "Password must be provided"],
      select: false // Exclude this field when querying
    },
    school: {
      type: String,
      required: [true, "School name must be provided"]
    },
    grade: {
      type: String,
      required: [true, "Grade must be provided"]
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      required: [true, "Role must be provided"]
    }
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
