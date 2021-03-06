'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },      
      cpf: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      passaporte: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      estrangeiro: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      estado: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      perfil: {
        allowNull: false,
        type: DataTypes.STRING,
        select: false,
        defaultValue: 'PARTICIPANTE'
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
