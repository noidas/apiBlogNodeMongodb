const { Schema, model } = require("mongoose");

const MarkersSchema = new Schema(
  {
    lat: { type: String, required: true },
    lon: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("Markers", MarkersSchema);
