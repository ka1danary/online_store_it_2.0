import { DataTypes, Model } from 'sequelize';
import Gallery_image_rel from './Gallery_image_rel'
import User from './User'
import Product from "./Product";
import Brand from "./Brand";

import db from '../db';

class Images extends Model {}

const model = Images.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    file_url: {type: DataTypes.STRING, allowNull: false}
},
    {
        sequelize: db,
        tableName: 'images',
    }
)

model.hasMany(Gallery_image_rel, { as : 'gallery_image_rel', foreignKey : 'image_id'})
model.hasMany(User, { as : 'user', foreignKey : 'image_id'})
model.hasMany(Product, { as : 'product', foreignKey : 'main_image'})
model.hasMany(Brand, {as : 'brand', foreignKey : 'logo'})
export default model