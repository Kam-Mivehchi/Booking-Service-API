const router = require('express').Router();
const { Order, Availability } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const availability = await Availability.getAll();
        res.status(200).json(availability)
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router;
