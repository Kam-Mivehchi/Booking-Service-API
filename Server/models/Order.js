const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')


//extending built in sequelize model
class Order extends Model { }


Order.init(
    {
        id: {

            // TODO: make the ID unique id maybe session or device based
            type: DataTypes.INTEGER,
            allowNull: false,
            // TODO: research primary key
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [10]
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address2: {
            type: DataTypes.STRING,

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
        serviceType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        date: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                // TODO: if valid date
                // TODO: if date is available
            }
        },
        time: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false,

        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'order'
    }
);

module.exports = Order;