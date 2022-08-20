const router = require('express').Router();

const { Order } = require('../../models');


// console.log(range)

router.get('/', async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(200).json(order);
    } catch (err) {
        res.status(400).json(err);
    }
})



module.exports = router;
