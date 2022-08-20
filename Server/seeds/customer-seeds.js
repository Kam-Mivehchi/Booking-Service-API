const { Customer } = require('../models');

const customerData = [
    {
        "Fname": "Andrews",
        "Lname": "Banks",
        "email": "andrewsbanks@geoforma.com",
        "phone": "+1 (897) 430-3987"
    },
    {
        "Fname": "Brennan",
        "Lname": "Richmond",
        "email": "brennanrichmond@geoforma.com",
        "phone": "+1 (899) 483-2134"
    },
    {
        "Fname": "Workman",
        "Lname": "Camacho",
        "email": "workmancamacho@geoforma.com",
        "phone": "+1 (847) 557-3189"
    },
    {
        "Fname": "Lyons",
        "Lname": "Compton",
        "email": "lyonscompton@geoforma.com",
        "phone": "+1 (865) 413-3860"
    },
    {
        "Fname": "Eddie",
        "Lname": "Kerr",
        "email": "eddiekerr@geoforma.com",
        "phone": "+1 (866) 468-2113"
    },
    {
        "Fname": "Chavez",
        "Lname": "Dixon",
        "email": "chavezdixon@geoforma.com",
        "phone": "+1 (957) 493-3622"
    },
    {
        "Fname": "Alta",
        "Lname": "Robertson",
        "email": "altarobertson@geoforma.com",
        "phone": "+1 (881) 507-3190"
    },
    {
        "Fname": "Phillips",
        "Lname": "George",
        "email": "phillipsgeorge@geoforma.com",
        "phone": "+1 (908) 586-3028"
    },
    {
        "Fname": "Hillary",
        "Lname": "Floyd",
        "email": "hillaryfloyd@geoforma.com",
        "phone": "+1 (817) 530-3888"
    },
    {
        "Fname": "Sharpe",
        "Lname": "Gregory",
        "email": "sharpegregory@geoforma.com",
        "phone": "+1 (883) 493-2349"
    },
    {
        "Fname": "Anastasia",
        "Lname": "Cameron",
        "email": "anastasiacameron@geoforma.com",
        "phone": "+1 (931) 587-3763"
    },
    {
        "Fname": "Hodge",
        "Lname": "Hardin",
        "email": "hodgehardin@geoforma.com",
        "phone": "+1 (842) 509-3388"
    },
    {
        "Fname": "Alyson",
        "Lname": "Mccall",
        "email": "alysonmccall@geoforma.com",
        "phone": "+1 (894) 517-2734"
    },
    {
        "Fname": "Cathryn",
        "Lname": "Malone",
        "email": "cathrynmalone@geoforma.com",
        "phone": "+1 (849) 542-2706"
    },
    {
        "Fname": "Mcleod",
        "Lname": "Murray",
        "email": "mcleodmurray@geoforma.com",
        "phone": "+1 (974) 548-2100"
    },
    {
        "Fname": "Paige",
        "Lname": "Mosley",
        "email": "paigemosley@geoforma.com",
        "phone": "+1 (976) 535-3777"
    },
    {
        "Fname": "Stacey",
        "Lname": "Lloyd",
        "email": "staceylloyd@geoforma.com",
        "phone": "+1 (847) 517-3491"
    },
    {
        "Fname": "Mccoy",
        "Lname": "Moses",
        "email": "mccoymoses@geoforma.com",
        "phone": "+1 (833) 582-3957"
    }
];

const seedCustomers = () => Customer.bulkCreate(customerData);

module.exports = seedCustomers;