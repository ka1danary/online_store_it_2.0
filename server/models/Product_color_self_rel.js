import { DataTypes, Model } from 'sequelize';

import db from '../db';

class Product_color_self_rel extends Model {}

const model = Product_color_self_rel.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    product_id_first : {type : DataTypes.INTEGER, allowNull : false},
    product_id_second : {type : DataTypes.INTEGER, allowNull : false},
},{
    sequelize: db,
    tableName: 'product_color_self_rel',
})

export default model