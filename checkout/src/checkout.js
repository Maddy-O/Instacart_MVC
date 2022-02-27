const express = require("express");

const connect = require("./configs/db");

const billingAddressController = require("./controllers/billingAddress.controller");

const cardDetailController = require("./controllers/cardDetail.controller");

const app = express();

app.use(express.json());

app.use("/checkoutAddress", billingAddressController);

app.use("//checkoutCard", cardDetailController);

app.listen(2345, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
