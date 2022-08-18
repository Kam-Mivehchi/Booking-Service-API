const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')


//extending built in sequelize model
class Order extends Model { }


Order.init(
    {
        orderId: {

            // TODO: make the ID unique id maybe session or device based
            type: DataTypes.INTEGER,
            allowNull: false,
            // TODO: research primary key
            primaryKey: true,
            autoIncrement: true
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'customer',
                key: 'id'
            }
        },
        pickup: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        // pickupTime: {
        //     type: DataTypes.TIME,
        //     allowNull: false,
        // },
        price: {
            type: DataTypes.INTEGER,
        },
        payment: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'order'
    }
);

module.exports = Order;