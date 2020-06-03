'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Evento', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      descricao: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      dataInicio: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      dataTermino: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      local: {
        allowNull: false,
        default: false,
        type: DataTypes.BOOLEAN,
      }, 
      instituicao: {
        allowNull: false, 
        type: DataTypes.INTEGER,
        references: {model:'Instituicao', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete:'CASCADE',
      },      
      image: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {model:'Image', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete:'CASCADE',
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
    return queryInterface.dropTable('Evento');
  }
};
