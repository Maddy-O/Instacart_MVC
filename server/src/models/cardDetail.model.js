const mongoose = require("mongoose");

const cardDetailSchema = new mongoose.Schema(
  {
    name_of_holder: { type: String, required: true },
    card_number: { type: String, required: true, unique: true },
    exp_month: { type: String, required: true },
    exp_year: { type: String, required: true },
    cvv: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

const CardDetail = mongoose.model("cardDetail", cardDetailSchema);

module.exports = CardDetail;
