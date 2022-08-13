const router = require('express').Router();
const availability = require('./availability');
const orders = require('./orders');
const stripe = require('./stripe');



router.use('/payment', stripe)
router.use('/availability', availability);
router.use('/orders', orders);

module.exports = router;