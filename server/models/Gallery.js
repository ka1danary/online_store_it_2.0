import { DataTypes, Model } from 'sequelize';
import Gallery_image_rel from "./Gallery_image_rel";
import Product from "./Product";
import db from '../db';

class Gallery extends Model {}

const model = Gallery.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
}, {
    sequelize: db,
    tableName: 'gallery'
})

model.hasMany(Gallery_image_rel, { as : 'gallery_image_rel'})
model.hasMany(Product, { as : 'product', foreignKey : 'gallery_id'})
export default model;