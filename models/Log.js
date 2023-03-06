const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Log extends Model {}

Log.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
        },
        workout_type: {
            type: DataTypes.STRING,
        },
        workout_duration: {
            type: DataTypes.TIME,
        },
        hours_of_sleep: {
            type: DataTypes.INTEGER,
        },
        weight: {
            type: DataTypes.INTEGER,
        },
        mood: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'log',
    }
);

module.exports = Log;