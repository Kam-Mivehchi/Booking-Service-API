const cors = require('cors');
//initializing express
const express = require("express");
const sequelize = require('./config/config');
const routes = require('./routes');


var corsOptions = {
    origin: true
}

const app = express();
const PORT = (process.env.PORT || 3005);

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use(routes);

// app.route('/service')
//     .post((req, res) => {

//         // TODO:  function to store in db .then.catch
//         // TODO:  set up user class identified by uuid or session id
//         // TODO:  get the user add zip and service desired
//         // TODO: then validate the incoming zipcode 

//         // TODO: if zipcode is not valid notify the user its out of range ->end function restrict form fillout
//         // TODO: if zipcode is valid store store it in db under session id
//         // TODO: if zip is valid then access value for service needed store under session id

//         // TODO: adjust the price based on the location proximity and the service wanted  (could calulate a multiplier based on distance and multiply by base price of service)

//         // TODO: if zipcode is valid then send the adjusted price to the front end and store in db
//         // TODO:error handling



//         res.json(req.body)
//     })

// app.route('/availability')
//     .get((req, res) => {
//         // TODO: access availability object model
//         // TODO: get the date and times from the db
//         // TODO:then send the availability to the front end form picker options
//         // TODO:handle the error

//     }).post((req, res) => {
//         // TODO: access availability object model
//         // TODO: add Date and time available to db

//     })

// app.route('/pickup')
//     .post((req, res) => {
//         // TODO: access user object model
//         // TODO: add Date and time selected
//         // TODO: remove date and time from availability
//         // TODO: add Name, Phone, address1,adress2,City,State and TOS confirm status
//         // TODO: then let the user continue if input is valid
//     })
// app.route('/details')
//     .post((req, res) => {
//         // TODO: access user object model
//         // TODO: add the amount of weight to the db under user if valid
//         // TODO: adjust price based on weight
//         // TODO: then send the updated price to the front end 
//     })

// app.route('/order')


// TODO: set up stripe routing to handle all the payment requests
// TODO: store the payment status
// TODO: when payment status is complete add to upcoming jobs send confirmation email
// TODO: send confirmation email once complete




sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on at https://localhost:${PORT}`));
})

// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
// const stripe = require("stripe")('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

// app.use(express.static("public"));
// app.use(express.json());

// const calculateOrderAmount = (items) => {
//     // Replace this constant with a calculation of the order's amount
//     // Calculate the order total on the server to prevent
//     // people from directly manipulating the amount on the client
//     return 1400;
// };

// app.post("/create-payment-intent", async (req, res) => {
//     const { items } = req.body;

//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: calculateOrderAmount(items),
//         currency: "eur",
//         automatic_payment_methods: {
//             enabled: true,
//         },
//     });

//     res.send({
//         clientSecret: paymentIntent.client_secret,
//     });
// });
