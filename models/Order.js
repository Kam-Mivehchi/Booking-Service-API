const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')


//extending built in sequelize model
class Order extends Model { }

//add weight
Order.init(
    {
        orderId: {

            // TODO: make the ID unique id maybe session or device based
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            // TODO: research primary key
            primaryKey: true,

        },
        customer_id: {
            type: DataTypes.UUID,
            references: {
                model: 'customer',
                key: 'id'
            }
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true,
            }
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5]
                // TODO: validate that it is in range
            }
        },
        price: {
            type: DataTypes.INTEGER,
        },
        weight: {
            type: DataTypes.STRING,
        },
        payment_status: {
            type: DataTypes.STRING,
            defaultValue: "pending"
            ////options ->   pending,  complete,  error
        },
        order_status: {
            type: DataTypes.STRING,
            defaultValue: "pending"
            //options ->   pending ,payment recieved, accepted, complete
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