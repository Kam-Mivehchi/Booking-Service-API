const seedCustomers = require('./customer-seeds');
const seedOrders = require('./order-seeds');


const sequelize = require('../config/config');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCustomers();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await seedOrders();
    console.log('\n----- PRODUCTS SEEDED -----\n');



    process.exit(0);
};

seedAll();
