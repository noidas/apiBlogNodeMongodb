const { Schema, model } = require("mongoose");

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    name: {
      type: String,
      required: true
    },
    iduser: {
      type: Schema.Types.ObjectId,
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
