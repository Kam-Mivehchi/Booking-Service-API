const router = require('express').Router();

// const { Price } = require('../../models');
const range_object = require('./range_object')

const getPrice = (zip, weight) => {
   console.log(range_object[zip][weight])
   return range_object[zip][weight]
}

router.post('/', async (req, res) => {
   try {
      const response = getPrice(req.body.zipcode, req.body.weight)
      res.status(200).json(response)
   } catch (err) {
      res.status(500).json(err)
   }
})

module.exports = router;