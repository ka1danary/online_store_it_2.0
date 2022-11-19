import { DataTypes, Model } from 'sequelize';

import db from '../db';
import {Gallery_image_rel} from "./models";

class Gallery_image_rel extends Model {}

const model = Gallery_image_rel.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
        image_id : {type : DataTypes.INTEGER, allowNull : false}

    },
    {
        sequelize: db,
        tableName: 'gallery_image_rel',
})

export default model