const express = require('express');
const router = express.Router();
const { Order } = require("../models/Order");
const { auth } = require("../middleware/auth");

router.post("/uploadOrder", auth, (req, res) => {

    //save all the data we got from the client into the DB 
    const order = new Order(req.body)

    order.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })
});

router.post("/onPlace", auth, (req, res) =>{
    let hist = [];
    hist = req.body.userData.cart;
    console.log("history", hist);
    if (err) return res.status(400).send(err)
    return res.status(200).json({ success: true})
})

module.exports = router;