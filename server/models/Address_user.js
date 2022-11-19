import { DataTypes, Model } from 'sequelize';

import db from '../db';

class Address_user extends  Model {}

const model = Address_user.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {type: DataTypes.INTEGER, allowNull: false},
    country: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
    street: {type: DataTypes.STRING, allowNull: false},
    house: {type: DataTypes.STRING, allowNull: false},
    flour: {type: DataTypes.STRING, allowNull: false},
    flat: {type: DataTypes.STRING, allowNull: false},
    post_index: {type: DataTypes.STRING, allowNull: false},

},{
    sequelize: db,
    tableName: 'address_user',
})

export default model;