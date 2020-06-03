module.exports = (sequelize, DataTypes) => {
  const TipoAtividade = sequelize.define('TipoAtividade', {
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
    estado: {
      allowNull: false,
      field: "estado",
      type: DataTypes.STRING, 
      defaultValue: true
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

 return TipoAtividade; 
}