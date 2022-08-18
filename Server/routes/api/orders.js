const router = require('express').Router();
const zipCodeData = require('zipcode-city-distance');
const { Order, Availability } = require('../../models');

const range = zipCodeData.getRadius("92807", 5, 'M')
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
router.post('/checkRange', async (req, res) => {
    try {
        // console.log(req.body)
        // console.log(req.body.zipcode)
        let isValid;
        let zipInfo = await zipCodeData.getInfo('zipcode', req.body.zipcode);
        let filter = range.filter((a) => a.zipcode == req.body.zipcode)
        // console.log(filter.length ? filter : res.status(400).json(err))
        filter.length ? isValid = true : isValid = false
        // console.log(zipInfo)


        res.status(200).json(isValid)
    } catch (err) {
        res.status(400).json(err);
    }
})
module.exports = router;
