const { Order } = require('../models');

const orderData = [
    {
        "date": "2015-01-08",
        "time": "04:48",
        "address": "604 Church Avenue",
        "city": "Greenwich",
        "state": "Missouri",
        "zip": 13361,
        "price": 315,
        "payment_status": "pending",
        "order_status": "payment recieved"
    },
    {
        "date": "2018-01-11",
        "time": "09:43",
        "address": "610 Tiffany Place",
        "city": "Kent",
        "state": "Puerto Rico",
        "zip": 81467,
        "price": 321,
        "payment_status": "complete",
        "order_status": "accepted"
    },
    {
        "date": "2017-04-13",
        "time": "11:04",
        "address": "208 Canarsie Road",
        "city": "Spelter",
        "state": "Ohio",
        "zip": 77802,
        "price": 374,
        "payment_status": "error",
        "order_status": "accepted"
    },
    {
        "date": "2019-08-26",
        "time": "05:37",
        "address": "109 Brooklyn Road",
        "city": "Welch",
        "state": "Northern Mariana Islands",
        "zip": 70643,
        "price": 315,
        "payment_status": "pending",
        "order_status": "accepted"
    },
    {
        "date": "2018-07-05",
        "time": "09:55",
        "address": "304 Knickerbocker Avenue",
        "city": "Nile",
        "state": "Federated States Of Micronesia",
        "zip": 65602,
        "price": 291,
        "payment_status": "error",
        "order_status": "payment recieved"
    },
    {
        "date": "2017-11-02",
        "time": "11:16",
        "address": "524 Franklin Avenue",
        "city": "Gibsonia",
        "state": "Mississippi",
        "zip": 12727,
        "price": 380,
        "payment_status": "pending",
        "order_status": "complete"
    },
    {
        "date": "2014-12-21",
        "time": "06:41",
        "address": "493 Rose Street",
        "city": "Lutsen",
        "state": "Utah",
        "zip": 18953,
        "price": 254,
        "payment_status": "error",
        "order_status": "complete"
    },
    {
        "date": "2015-06-09",
        "time": "04:56",
        "address": "181 Bushwick Place",
        "city": "Oasis",
        "state": "South Carolina",
        "zip": 50622,
        "price": 345,
        "payment_status": "error",
        "order_status": "order pending"
    },
    {
        "date": "2015-11-08",
        "time": "06:58",
        "address": "821 Verona Place",
        "city": "Foxworth",
        "state": "Texas",
        "zip": 49478,
        "price": 307,
        "payment_status": "error",
        "order_status": "order pending"
    },
    {
        "date": "2016-10-11",
        "time": "08:07",
        "address": "553 Conway Street",
        "city": "Graniteville",
        "state": "New Hampshire",
        "zip": 78217,
        "price": 387,
        "payment_status": "pending",
        "order_status": "complete"
    },
    {
        "date": "2021-09-10",
        "time": "04:23",
        "address": "499 Krier Place",
        "city": "Eureka",
        "state": "Nevada",
        "zip": 47689,
        "price": 354,
        "payment_status": "complete",
        "order_status": "accepted"
    },
    {
        "date": "2015-04-14",
        "time": "07:42",
        "address": "848 Elm Place",
        "city": "Homeworth",
        "state": "Kansas",
        "zip": 27358,
        "price": 384,
        "payment_status": "error",
        "order_status": "payment recieved"
    },
    {
        "date": "2020-12-08",
        "time": "05:57",
        "address": "110 Norfolk Street",
        "city": "Lodoga",
        "state": "District Of Columbia",
        "zip": 51290,
        "price": 337,
        "payment_status": "pending",
        "order_status": "payment recieved"
    },
    {
        "date": "2015-07-03",
        "time": "04:30",
        "address": "336 Flatbush Avenue",
        "city": "Charco",
        "state": "Palau",
        "zip": 32333,
        "price": 368,
        "payment_status": "complete",
        "order_status": "payment recieved"
    },
    {
        "date": "2014-09-25",
        "time": "03:01",
        "address": "137 Florence Avenue",
        "city": "Libertytown",
        "state": "Arizona",
        "zip": 61740,
        "price": 264,
        "payment_status": "error",
        "order_status": "accepted"
    },
    {
        "date": "2015-03-16",
        "time": "11:40",
        "address": "880 Hubbard Street",
        "city": "Hailesboro",
        "state": "Tennessee",
        "zip": 57119,
        "price": 309,
        "payment_status": "pending",
        "order_status": "payment recieved"
    },
    {
        "date": "2016-12-03",
        "time": "03:33",
        "address": "940 Beverly Road",
        "city": "Conway",
        "state": "Kentucky",
        "zip": 23709,
        "price": 256,
        "payment_status": "complete",
        "order_status": "complete"
    }
];

const seedOrders = () => Order.bulkCreate(orderData);

module.exports = seedOrders;