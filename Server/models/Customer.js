const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')


//extending built in sequelize model
class Customer extends Model { }


Customer.init(
    {
        id: {
            // TODO: make the ID unique id maybe session or device based
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            // TODO: research primary key
            primaryKey: true,
        },
        Lname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Fname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.STRING,
            unique: true,
            validate: {

            }
        }
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