import { DataTypes, Model } from 'sequelize';
import Product from './Product'
import db from '../db';

class Brand extends Model {}

const model = Brand.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    name: {type : DataTypes.STRING, defaultValue : "Имя продукта", allowNull : false},
    description : {type : DataTypes.STRING, allowNull: false },
    logo : {type : DataTypes.STRING, allowNull: false }
},
    {
        sequelize: db,
        tableName: 'brand',
})

model.hasMany(Product, {as : 'product', foreignKey : 'category_id'})

export default model