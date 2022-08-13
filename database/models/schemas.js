const { Schema, model } = require("mongoose");

const cardSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  atk: { type: Number, required: true },
  def: { type: Number, required: true },
  type: { type: String, required: true },
});

const Card = model("Card", cardSchema);

module.exports = Card;
