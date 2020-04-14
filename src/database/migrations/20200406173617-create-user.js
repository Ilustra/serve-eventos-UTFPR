'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Usuario', {
      Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      Nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Email: {
        allowNull: false,
        type: DataTypes.STRING,
      },      
      Cpf: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Passaporte: {
        allowNull: false,
        type: DataTypes.STRING,

      },
      Estrangeiro: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      Password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Estado: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      Perfil: {
        allowNull: false,
        type: DataTypes.STRING,
        select: false,
        defaultValue: 'padrao'
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
    return queryInterface.dropTable('Usuario');
  }
};
