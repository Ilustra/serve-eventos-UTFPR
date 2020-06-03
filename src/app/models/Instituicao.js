module.exports = (sequelize, DataTypes) => {
  const Instituicao = sequelize.define('Instituicao', {
    id: {
      allowNull: false,
      field: "id",
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nome: {
      allowNull: false,
      field: "nome",
      type: DataTypes.STRING,
    },
    sigla: {
      allowNull: false,
      field: "sigla",
      type: DataTypes.STRING,
    },      
    cnpj: {
      allowNull: false,
      field: "cnpj",
      type: DataTypes.INTEGER,
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

 return Instituicao; 
}