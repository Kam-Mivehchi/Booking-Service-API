const router = require('express').Router();
const availability = require('./availability');
const orders = require('./orders');
const stripe = require('./stripe');
const customers = require("./customers")
const zipCodeData = require('zipcode-city-distance');
let homeBase = "92807"

router.use('/payment', stripe)
router.use('/availability', availability);
router.use('/orders', orders);
router.use('/customers', customers);


const range = zipCodeData.getRadius(homeBase, 5, 'M')

router.get('/checkRange', async (req, res) => {
    try {

        let isValid;
        let filter = range.filter((a) => a.zipcode == req.body.zipcode)

        filter.length ? isValid = true : isValid = false
        // console.log(zipInfo)
        res.status(200).json(isValid)
    } catch (err) {
        res.status(400).json(err);
    }
})


module.exports = router;