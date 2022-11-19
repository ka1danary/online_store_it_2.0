import { DataTypes, Model } from 'sequelize';
import Product_order_rel from "./Product_order_rel";
import Product_color_self_rel from "./Product_color_self_rel";

import db from '../db';

class Product extends Model {}

const model = Product.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    name: {type: DataTypes.STRING, defaultValue: "Продукт", allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    stock_status: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    main_image: {type: DataTypes.STRING, allowNull: false},
    gallery_id: {type: DataTypes.INTEGER, allowNull: false},
    category_id: {type: DataTypes.INTEGER, allowNull: false},
    color: {type: DataTypes.STRING, allowNull: false},
    color_hex: {type: DataTypes.STRING,}
},
    {
        sequelize: db,
        tableName: 'product',
})

model.hasMany(Product_order_rel, { as : 'product_order_rel', foreignKey : 'product_id'})
model.hasMany(Product_color_self_rel, { as : 'product_color_self_rel', foreignKey : 'product_id_first'})
model.hasMany(Product_color_self_rel, { as : 'product_color_self_rel', foreignKey : 'product_id_second'})

export default model