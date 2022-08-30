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
router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findOne({ where: { id: req.params.id } });
        res.status(200).json(customer)
    } catch (err) {
        res.status(500).json(err)
    }
})

//get user by phone number


router.get('/:id/orders', async (req, res) => {
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

router.post('/findUser', async (req, res) => {
    try {
        const customer = await Customer.findOne({ where: { phone: req.body.phone } })

        res.status(200).json(customer.id)
    } catch (error) {
        res.status(500).json(error)
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
//add an order to a customer
router.put(':customer_id/order/:order_id', async (req, res) => {
    try {
        const order = await Order.update(
            { customer_id: req.params.customer_id }, {
            where: {
                orderId: req.params.order_id
            }
        })
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json(error)
    }


})
module.exports = router;