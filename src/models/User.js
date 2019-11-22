const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    blogs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Blog"
      }
    ]
  },
  { timestamps: true }
);

module.exports = model("User", UserSchema);
