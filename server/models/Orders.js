import { DataTypes, Model } from 'sequelize';
import Product_order_rel from "./Product_order_rel";
import db from '../db';

class Orders extends Model {}

const model = Orders.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {type: DataTypes.INTEGER, allowNull: false},
    status: {type: DataTypes.INTEGER, allowNull: false},
    track: {type: DataTypes.INTEGER, allowNull: false},
    order_price: {type: DataTypes.INTEGER, allowNull: false}
},
    {
        sequelize: db,
        tableName: 'orders',

})

model.hasMany(Product_order_rel, {as : 'product_order_rel', foreignKey : 'order_id'})

export default model