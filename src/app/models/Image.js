const fs = require('fs')
const path=require('path')
const {promisify}= require('util')

module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
    id: {
        allowNull: false,
        field: "id",
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        field: "name",
        type: DataTypes.STRING,
      },
    size: {
        allowNull: false,
        field: "size",
        type: DataTypes.STRING,
    },
    key: {
        allowNull: false,
        field: "key",
        type: DataTypes.STRING,
    },
    url: {
        allowNull: false,
        field: "url",
        type: DataTypes.STRING,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    },{
      freezeTableName: true},
    );
    Image.beforeCreate((image, options) => {
        if(!this.url){
         return image.url =`${process.env.API_URL}/files/${image.key}`
        }
      })
    Image.beforeDestroy((image, options) => {
        return promisify(fs.unlink)(path.resolve(__dirname, '..', '..', '..', 'tmp', 'uploads', image.key))
          
    })
   return Image; 
  }