import { DataTypes, Model } from 'sequelize';

import db from '../db';

class Security extends Model {}

const model = Security.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    password_hash : {type : DataTypes.STRING, allowNull: false},
    user_id : {type : DataTypes.INTEGER, allowNull: false},
    access_token : {type : DataTypes.STRING, allowNull: false},
    refresh_token : {type : DataTypes.STRING, allowNull: false},
},
    {
        sequelize: db,
        tableName: 'security',
})

export default model