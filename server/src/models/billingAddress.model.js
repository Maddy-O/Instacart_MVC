const mongoose = require("mongoose");

const billingAddressSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

const BillingAddress = mongoose.model("billingAddress", billingAddressSchema);

module.exports = BillingAddress;
