const router = require('express').Router();
const availability = require('./availability');
const orders = require('./orders');
const stripe = require('./stripe');
const customers = require("./customers")


router.use('/payment', stripe)
router.use('/availability', availability);
router.use('/orders', orders);
router.use('/customers', customers);


module.exports = router;