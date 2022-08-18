const { Order } = require('../models');

const orderData = [
    {
        "pickup": "2019-12-15T10:33:14Z",
        "customer_id": 9,
        "price": 353,
        "payment": true
    },
    {
        "pickup": "2017-04-14T07:57:48Z",
        "customer_id": 13,
        "price": 383,
        "payment": false
    },
    {
        "pickup": "2019-05-11T11:57:09Z",
        "customer_id": 11,
        "price": 322,
        "payment": true
    },
    {
        "pickup": "2015-11-12T08:59:57Z",
        "customer_id": 1,
        "price": 346,
        "payment": true
    },
    {
        "pickup": "2015-03-30T11:02:41Z",
        "customer_id": 5,
        "price": 343,
        "payment": false
    },
    {
        "pickup": "2018-05-13T03:55:29Z",
        "customer_id": 13,
        "price": 349,
        "payment": false
    },
    {
        "pickup": "2020-03-30T04:33:09Z",
        "customer_id": 7,
        "price": 284,
        "payment": false
    },
    {
        "pickup": "2014-11-07T11:14:54Z",
        "customer_id": 16,
        "price": 362,
        "payment": true
    },
    {
        "pickup": "2014-07-07T06:53:44Z",
        "customer_id": 18,
        "price": 341,
        "payment": false
    },
    {
        "pickup": "2014-03-22T07:37:44Z",
        "customer_id": 17,
        "price": 387,
        "payment": false
    },
    {
        "pickup": "2020-03-20T03:49:02Z",
        "customer_id": 3,
        "price": 289,
        "payment": true
    },
    {
        "pickup": "2018-03-15T06:42:31Z",
        "customer_id": 2,
        "price": 278,
        "payment": false
    },
    {
        "pickup": "2017-03-31T10:20:40Z",
        "customer_id": 13,
        "price": 330,
        "payment": true
    },
    {
        "pickup": "2022-06-19T06:29:34Z",
        "customer_id": 10,
        "price": 381,
        "payment": true
    }, {
        "pickup": "2019-05-13T11:58:04Z",
        "customer_id": 13,
        "price": 253,
        "payment": true
    },
    {
        "pickup": "2018-02-10T07:30:45Z",
        "customer_id": 13,
        "price": 357,
        "payment": true
    },
    {
        "pickup": "2014-12-10T03:03:27Z",
        "customer_id": 10,
        "price": 286,
        "payment": false
    },
    {
        "pickup": "2017-12-04T08:30:33Z",
        "customer_id": 20,
        "price": 391,
        "payment": false
    },
    {
        "pickup": "2020-05-25T02:47:12Z",
        "customer_id": 2,
        "price": 303,
        "payment": false
    },
    {
        "pickup": "2018-07-24T09:21:49Z",
        "customer_id": 4,
        "price": 366,
        "payment": false
    },
    {
        "pickup": "2019-07-09T03:56:25Z",
        "customer_id": 3,
        "price": 294,
        "payment": true
    },
    {
        "pickup": "2018-11-14T06:21:34Z",
        "customer_id": 20,
        "price": 394,
        "payment": true
    },
    {
        "pickup": "2015-04-17T07:33:26Z",
        "customer_id": 13,
        "price": 329,
        "payment": false
    }
];

const seedOrders = () => Order.bulkCreate(orderData);

module.exports = seedOrders;