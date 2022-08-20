const router = require('express').Router();
const availability = require('./availability');
const orders = require('./orders');
const stripe = require('./stripe');
const customers = require("./customers")
const range_object = require('./range_object')
let starting_price;
const zipCodeData = require('zipcode-city-distance');
let homeBase = "92807"

router.use('/payment', stripe)
router.use('/availability', availability);
router.use('/orders', orders);
router.use('/customers', customers);

const validate = (zipcode) => {


    for (const county in range_object) {
        let current_county = range_object[county]

        //loop through obj  if zip is under the object key assign a price
        if (current_county.indexOf(zipcode) > -1) {
            //LA has a higher sp
            if (county == "LA") {
                starting_price = 380
            } else {
                starting_price = 350
            }

        }
    }


    return starting_price
}

router.post('/checkRange', async (req, res) => {
    try {
        let isValid;
        validate(req.body.zipcode)
        starting_price ? isValid = true : isValid = false
        res.status(200).json({ isValid, starting_price })


    } catch (err) {
        res.status(400).json(err);
    }
})


module.exports = router;