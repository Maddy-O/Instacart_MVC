const { body, validationResult } = require("express-validator");

const express = require("express");

const BillingAddress = require("../models/billingAddress.model");
const req = require("express/lib/request");

const router = express.Router();

router.post(
  "",
  body("full_name")
    .isString()
    .isLowercase()
    .isLength({ min: 3, max: 20 })
    .withMessage("First name should be 3 to 20 characters long"),
  body("email")
    .isEmail()
    .custom(async (value) => {
      const billingAddress = await BillingAddress.findOne({ email: value });
      if (billingAddress) {
        throw new Error("Email already exists");
      }
      return true;
    }),
  body("address")
    .isString()
    .isLowercase()
    .isLength({ min: 3, max: 100 })
    .withMessage("Street name and near by place mendatory"),
  body("city")
    .isString()
    .isLowercase()
    .isLength({ min: 3, max: 20 })
    .withMessage("Full name to the city"),
  body("state")
    .isString()
    .isLowercase()
    .isLength({ min: 3, max: 20 })
    .withMessage("Full name to the state"),
  body("zipcode")
    .isLength({ min: 8, max: 20 })
    .custom((value) => {
      if (!value==isEmpty) {
        return true;
      }
      throw new Error("Please fill zipcode");
    }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let newErrors;
        newErrors = errors.array().map((err) => {
          console.log("err", err);
          return { key: err.param, message: err.msg };
        });
        return res.status(400).send({ errors: newErrors });
      }
      const billingAddress = await BillingAddress.create(req.body);
      return res.send(billingAddress);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

router.get("", async (req, res) => {
  try {
    const billingAddress = await BillingAddress.find().lean().exec();
    return res.send(billingAddress);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
