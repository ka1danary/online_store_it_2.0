const sequelize = require('../db')
const {DataTypes, STRING} = require('sequelize')

const User = sequelize.define( 'user', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true, allowNull : false},
    user_name: {type : DataTypes.STRING, defaultValue : "Пользователь", allowNull : false},
    email : {type : DataTypes.STRING, unique : true, allowNull : false},
    phone : {type : DataTypes.STRING, unique : true, allowNull : false},
    image_id : {type:DataTypes.INTEGER}
    })

const Product = sequelize.define( 'product', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true, allowNull : false},
    name: {type : DataTypes.STRING, defaultValue : "Продукт", allowNull : false},
    price : {type : DataTypes.INTEGER, allowNull: false},
    stock_status : {type : DataTypes.STRING, allowNull: false},
    description : {type : DataTypes.STRING, allowNull: false },
    main_image : {type : DataTypes.STRING, allowNull: false },
    gallery_id : {type : DataTypes.INTEGER, allowNull: false},
    category_id : {type : DataTypes.INTEGER, allowNull: false},
    color : {type : DataTypes.STRING, allowNull: false},
    color_hex : {type : DataTypes.STRING,}
    }
)

const Orders = sequelize.define( 'orders', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true, allowNull : false},
    user_id : {type : DataTypes.INTEGER, allowNull: false},
    status: {type : DataTypes.INTEGER, allowNull: false},
    track : {type : DataTypes.INTEGER, allowNull: false},
    order_price : {type : DataTypes.INTEGER, allowNull: false}
    }
)

const Brand = sequelize.define( 'brand', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true, allowNull : false},
    name: {type : DataTypes.STRING, defaultValue : "Имя продукта", allowNull : false},
    description : {type : DataTypes.STRING, allowNull: false },
    logo : {type : DataTypes.STRING, allowNull: false }
    }
)


const Security = sequelize.define( 'security', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true, allowNull : false},
    password_hash : {type : DataTypes.STRING, allowNull: false},
    user_id : {type : DataTypes.INTEGER, allowNull: false},
    access_token : {type : DataTypes.STRING, allowNull: false},
    refresh_token : {type : DataTypes.STRING, allowNull: false},
    }
)

const Address_user = sequelize.define( 'address_user', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true, allowNull : false},
    user_id : {type : DataTypes.INTEGER, allowNull: false},
    country : {type : DataTypes.STRING, allowNull: false},
    city : {type : DataTypes.STRING, allowNull: false},
    street : {type : DataTypes.STRING, allowNull: false},
    house : {type : DataTypes.STRING, allowNull: false},
    flour : {type : DataTypes.STRING, allowNull: false},
    flat : {type : DataTypes.STRING, allowNull: false},
    post_index : {type : DataTypes.STRING, allowNull: false},
    }
)

const Product_color_self_rel = sequelize.define( 'product_color_self_rel', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true, allowNull : false},
    product_id_first : {type : DataTypes.INTEGER, allowNull : false},
    product_id_second : {type : DataTypes.INTEGER, allowNull : false},
    }
)

const Product_order_rel = sequelize.define( 'product_order_rel', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true, allowNull : false},
    product_id : {type : DataTypes.INTEGER, allowNull : false},
    order_id : {type : DataTypes.INTEGER, allowNull : false},
    }
)

const Images = sequelize.define( 'images', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true, allowNull : false},
    file_url : {type : DataTypes.STRING, allowNull : false}
    }
)

const Gallery = sequelize.define( 'gallery', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true, allowNull : false}
    }
)

const Gallery_image_rel = sequelize.define( 'gallery_image_rel', {
    id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true, allowNull : false},
    image_id : {type : DataTypes.INTEGER, allowNull : false}
    }
)

module.exports = {User, Product, Orders, Brand, Security, Address_user, Product_color_self_rel, Product_order_rel, Images, Gallery, Gallery_image_rel}