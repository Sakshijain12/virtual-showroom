const express = require('express');
const router = express.Router();
const { Order } = require("../models/Order");
const { Product } = require("../models/Product");
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");

router.post("/uploadOrder", auth, (req, res) => {

    //save all the data we got from the client into the DB 
    const order = new Order(req.body)
    let orderId = order._id;
    console.log("orederId",orderId)
    order.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true, orderId : orderId})
    })
});


router.post("/onPlace", auth, async (req, res) =>{
    let cartItems = req.body.user.cart;
    let orderId = req.body.orderId;
    console.log("orderId OnPlace",orderId);
    let hist = [];
    let prodIDs = [];

    const findProductInfo = async (itemId) => {
      const prodInfo = await Product.findOne({ _id: itemId }).exec();
      return prodInfo;
    };

    const products = await Promise.all(cartItems.map(item => findProductInfo(item.id)));
    products.forEach((prodInfo, index) => {
      if (!prodInfo) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }

      const item = cartItems[index];
      hist.push({
        dateOfPurchase: Date.now(),
        name: prodInfo.title,
        id: prodInfo._id,
        price: prodInfo.price,
        quantity: item.quantity,
        paymentId: prodInfo._id
      });
      prodIDs.push(prodInfo._id);
    });
    let orderInfo = {
        orderId : orderId,
        prodList : hist,
    }

    User.findOneAndUpdate(
        { _id: req.body.user._id },
        { $push: { history: orderInfo}, $set: { cart: [] } },
        { new: true },
        (err, user) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).json({
                success: true,
                prodIdList : prodIDs
            })
        }
    )
})

module.exports = router;