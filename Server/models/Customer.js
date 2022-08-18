const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')


//extending built in sequelize model
class Customer extends Model { }


Customer.init(
    {
        id: {
            // TODO: make the ID unique id maybe session or device based
            type: DataTypes.INTEGER,
            allowNull: false,
            // TODO: research primary key
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            foreignKey: true,
        },
        Lname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Fname: {
            type: DataTypes.STRING,
            allowNull: false,
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


    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'customer'
    }
);

module.exports = Customer;