const router = require('express').Router();
const availability = require('./availability');
const orders = require('./orders');
const stripe = require('./stripe');
const customers = require("./customers")
const range_object = require('./range_object')
const price = require('./price')
let starting_price;

let valid;

router.use('/payment', stripe)
router.use('/availability', availability);
router.use('/orders', orders);
router.use('/customers', customers);
router.use('/price', price);

const validate = (zipcode) => {

    starting_price = 0;
    valid = false
    if (range_object[zipcode]) {
        starting_price = range_object[zipcode]["0"]
        valid = true
    }


    // return starting_price
}

router.post('/checkRange', async (req, res) => {
    try {
        validate(req.body.zipcode)

        res.status(200).json({ valid, starting_price })


    } catch (err) {
        res.status(400).json(err);
    }
})


module.exports = router;