const { Customer } = require('../models');

const customerData = [
    {
        "email": "alliebray@prowaste.com",
        "Lname": "Foley",
        "Fname": "Willa",
        "address": "2032 Harbor Court",
        "city": "Tooleville",
        "state": "Colorado",
        "zip": 66460
    },
    {
        "email": "willafoley@prowaste.com",
        "Lname": "Perez",
        "Fname": "Marla",
        "address": "4910 Coles Street",
        "city": "Sparkill",
        "state": "Tennessee",
        "zip": 59659
    },
    {
        "email": "marlaperez@prowaste.com",
        "Lname": "Adkins",
        "Fname": "Irene",
        "address": "8579 Bath Avenue",
        "city": "Martinsville",
        "state": "Maine",
        "zip": 18746
    },
    {
        "email": "ireneadkins@prowaste.com",
        "Lname": "Velazquez",
        "Fname": "Stevenson",
        "address": "4772 Revere Place",
        "city": "Hoagland",
        "state": "Michigan",
        "zip": 75477
    },
    {
        "email": "stevensonvelazquez@prowaste.com",
        "Lname": "Miles",
        "Fname": "Kristy",
        "address": "3782 Wolf Place",
        "city": "Cleary",
        "state": "Guam",
        "zip": 56255
    },
    {
        "email": "kristymiles@prowaste.com",
        "Lname": "Atkinson",
        "Fname": "Wheeler",
        "address": "2401 Rewe Street",
        "city": "Alden",
        "state": "Georgia",
        "zip": 43509
    },
    {
        "email": "wheeleratkinson@prowaste.com",
        "Lname": "Schmidt",
        "Fname": "Aguirre",
        "address": "1812 Juliana Place",
        "city": "Riegelwood",
        "state": "Mississippi",
        "zip": 59798
    },
    {
        "email": "aguirreschmidt@prowaste.com",
        "Lname": "Becker",
        "Fname": "Hayden",
        "address": "511 Ovington Court",
        "city": "Weogufka",
        "state": "Maryland",
        "zip": 82336
    },
    {
        "email": "haydenbecker@prowaste.com",
        "Lname": "French",
        "Fname": "Ora",
        "address": "8461 Essex Street",
        "city": "Englevale",
        "state": "South Dakota",
        "zip": 77620
    },
    {
        "email": "orafrench@prowaste.com",
        "Lname": "Davenport",
        "Fname": "Harriet",
        "address": "8428 Tapscott Avenue",
        "city": "Venice",
        "state": "Federated States Of Micronesia",
        "zip": 21691
    },
    {
        "email": "harrietdavenport@prowaste.com",
        "Lname": "Hoover",
        "Fname": "Madeleine",
        "address": "7183 Auburn Place",
        "city": "Westphalia",
        "state": "Nevada",
        "zip": 55470
    },
    {
        "email": "madeleinehoover@prowaste.com",
        "Lname": "Blankenship",
        "Fname": "Haley",
        "address": "5593 Albemarle Road",
        "city": "Weedville",
        "state": "Kansas",
        "zip": 94060
    },
    {
        "email": "haleyblankenship@prowaste.com",
        "Lname": "Rich",
        "Fname": "Imelda",
        "address": "1858 Clarendon Road",
        "city": "Denio",
        "state": "Indiana",
        "zip": 90460
    },
    {
        "email": "imeldarich@prowaste.com",
        "Lname": "Marquez",
        "Fname": "Bonner",
        "address": "9882 Kings Hwy",
        "city": "Mappsville",
        "state": "Wisconsin",
        "zip": 18022
    },
    {
        "email": "bonnermarquez@prowaste.com",
        "Lname": "Harris",
        "Fname": "Cecelia",
        "address": "2320 Erasmus Street",
        "city": "Axis",
        "state": "Alaska",
        "zip": 41503
    },
    {
        "email": "ceceliaharris@prowaste.com",
        "Lname": "Crane",
        "Fname": "Chandra",
        "address": "8879 Batchelder Street",
        "city": "Elwood",
        "state": "New Mexico",
        "zip": 43145
    },
    {
        "email": "chandracrane@prowaste.com",
        "Lname": "Kaufman",
        "Fname": "Daniels",
        "address": "1979 Mill Street",
        "city": "Dixie",
        "state": "Iowa",
        "zip": 34869
    },
    {
        "email": "danielskaufman@prowaste.com",
        "Lname": "Palmer",
        "Fname": "Lois",
        "address": "3364 Junius Street",
        "city": "Wacissa",
        "state": "New York",
        "zip": 65867
    },
    {
        "email": "loispalmer@prowaste.com",
        "Lname": "Mitchell",
        "Fname": "Hutchinson",
        "address": "8510 Sunnyside Court",
        "city": "Tampico",
        "state": "Marshall Islands",
        "zip": 73998
    },
    {
        "email": "hutchinsonmitchell@prowaste.com",
        "Lname": "Clay",
        "Fname": "Gwen",
        "address": "847 Narrows Avenue",
        "city": "Woodburn",
        "state": "New Jersey",
        "zip": 99151
    },
    {
        "email": "gwenclay@prowaste.com",
        "Lname": "Todd",
        "Fname": "Wilder",
        "address": "965 Sullivan Place",
        "city": "Brenton",
        "state": "West Virginia",
        "zip": 95182
    }
];

const seedCustomers = () => Customer.bulkCreate(customerData);

module.exports = seedCustomers;