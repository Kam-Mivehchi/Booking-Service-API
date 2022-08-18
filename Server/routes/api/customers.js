const router = require('express').Router();
const { Customer, Order } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json(customers)
    } catch (err) {
        res.status(500).json(err)
    }
})
router.get('/orders/:id', async (req, res) => {
    try {
        const customers = await Order.findAll({
            where: {
                customer_id: req.params.id,
            },
            include: [Customer]
        });
        res.status(200).json(customers)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const customers = await Customer.create(req.body);
        res.status(200).json(customers)
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router;