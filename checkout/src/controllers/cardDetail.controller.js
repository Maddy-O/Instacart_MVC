const { body, validationResult } = require("express-validator");

const express = require("express");

const CardDetail = require("../models/cardDetail.model");
const req = require("express/lib/request");

const router = express.Router();

router.post(
    "",
    body("name_of_holder")
        .isString()
        .isLowercase()
        .isLength({ min: 3, max: 20 })
        .withMessage("First name should be 3 to 20 characters long"),
    body("card_number")
        .isNumeric
        .isLength({ min: 12, max: 12 })
        .custom((value) => {
            if (!value == isEmpty) {
                return true;
            }
            throw new Error("Please fill correct details");
        }),
    body("exp_month")
        .isDate
        .custom((value) => {
            if (!value == isEmpty) {
                return true;
            }
            throw new Error("Please fill correct details");
        }),
    body("exp_year")
        .isDate
        .custom((value) => {
            if (!value == isEmpty) {
                return true;
            }
            throw new Error("Please fill correct details");
        }),
    body("cvv")
        .isNumeric
        .isLength({ min: 8, max: 4 })
        .custom((value) => {
            if (!value == isEmpty) {
                return true;
            }
            throw new Error("Please fill correct details");
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
            const cardDetail = await CardDetail.create(req.body);
            return res.send(cardDetail);
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }
);

router.get("", async (req, res) => {
    try {
        const cardDetail = await CardDetail.find().lean().exec();
        return res.send(cardDetail);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

module.exports = router;
