const router = require("express").Router();
router.post("/calculatepost", async (req, res) => {
  const { type, price } = req.body;
  console.log(type);
  console.log(price);
  try {
    let price = 0;
    if (req.body.type === "primary") {
      price = req.body.price * 10;
    } else {
      price = req.body.price * 5;
    }

    res.status(200).json(`${price}`);
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
