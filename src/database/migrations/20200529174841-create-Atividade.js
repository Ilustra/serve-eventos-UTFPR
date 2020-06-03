'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Atividade', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      titulo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      descricao: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      inicio: {
        allowNull: false,
        type: DataTypes.DATE,
      },      
      fim: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      valor: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },  
      cargaHoraria: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      area: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      local: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      evento: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references:{model:'Evento', key:'id'},
        onUpdate: 'CASCADE',
        onDelete:'CASCADE',
      },
      tipoAtividade: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references:{model:'TipoAtividade', key:'id'},
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
    return queryInterface.dropTable('Atividade');
  }
};
