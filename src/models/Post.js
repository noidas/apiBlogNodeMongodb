const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    content: {
      type: String,
      required: true
    },
    session: [
      {
        title: {
          type: String,
          required: true
        },
        content: {
          type: String,
          required: true
        },
        index: {
          type: String,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = model("Post", PostSchema);
