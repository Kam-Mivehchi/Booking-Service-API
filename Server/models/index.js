const Order = require('./Order');
const Availability = require('./Availability');
const Customer = require('./Customer');

Order.belongsTo(Customer, { foreignKey: 'customer_id' })

Customer.hasMany(Order, {
    foreignKey: "id",
})



module.exports = {
    Order,
    Availability,
    Customer
};