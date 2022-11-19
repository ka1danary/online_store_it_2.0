import { DataTypes, Model } from 'sequelize';

import db from '../db';

class Product_order_rel extends Model {}

const model = Product_order_rel.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    product_id : {type : DataTypes.INTEGER, allowNull : false},
    order_id : {type : DataTypes.INTEGER, allowNull : false},
},
    {
        sequelize: db,
        tableName: 'product_order_rel',
})

export default model