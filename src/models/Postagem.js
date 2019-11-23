const { Schema, model } = require("mongoose");

let PostSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    index: { type: String, required: true },
    idpost: { type: Schema.Types.ObjectId, required: true }
  },
  { timestamps: true }
);

PostSchema.add({
  subsession: PostSchema
});

module.exports = model("Postagem", PostSchema);
