'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Image', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      }, 
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      }, 
      size: {
        allowNull: false,
        type: DataTypes.STRING,
      }, 
      key: {
        allowNull: false,
        type: DataTypes.STRING,
      }, 
      url: {
        allowNull: false,
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Image');
  }
  
};
