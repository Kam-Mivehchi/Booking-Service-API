const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')


//extending built in sequelize model
class Availability extends Model { }

Availability.init(
    {
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
            validate: {
                len: [5]
                // TODO: find max and min weight that can be delivered for validation
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'availability'
    }
)

module.exports = Availability;