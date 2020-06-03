
module.exports = (sequelize, DataTypes) => {
    const Evento = sequelize.define('Evento', {
      id: {
        allowNull: false,
        field: "id",
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      descricao: {
        allowNull: false,
        field: "descricao",
        type: DataTypes.STRING,
      },      
      dataInicio: {
        allowNull: false,
        field: "dataInicio",
        type: DataTypes.STRING,
      },      
      dataTermino: {
        allowNull: false,
        field: "dataTermino",
        type: DataTypes.STRING,
        defaultValue: ''
      },
      local: {
        allowNull: false,
        field: "local",
        type: DataTypes.STRING,
       },
      instituicao: {
        allowNull: false,
        field: "instituicao",
        type: DataTypes.INTEGER,
       },
      image: {
        allowNull: false,
        field: "image",
        type: DataTypes.INTEGER,
        select: false
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
   return Evento; 
  }