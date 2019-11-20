const { Schema, model } = require("mongoose");

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post"
      }
    ]
  },
  { timestamps: true }
);

module.exports = model("Blog", BlogSchema);
