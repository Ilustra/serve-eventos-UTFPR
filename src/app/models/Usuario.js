const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
      Id: {
        allowNull: false,
        field: "Id",
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      Nome: {
        allowNull: false,
        field: "Nome",
        type: DataTypes.STRING,
      },      
      Cpf: {
        allowNull: false,
        field: "Cpf",
        type: DataTypes.STRING,
      },      
      Passaporte: {
        allowNull: false,
        field: "Passaporte",
        type: DataTypes.STRING,
        defaultValue: ''
      },
      Password: {
        allowNull: false,
        field: "Password",
        type: DataTypes.UUID,
        select: false
       },
       Email: {
        allowNull: false,
        field: "Email",
        type: DataTypes.STRING,
       },
       Estado: {
        allowNull: false,
        field: "Estado",
        type: DataTypes.BOOLEAN,
        defaultValue: true
       },
       Estrangeiro: {
        allowNull: false,
        field: "Estrangeiro",
        type: DataTypes.BOOLEAN,
        defaultValue: false
       },
      Perfil: {
        allowNull: false,
        field: "Perfil",
        type: DataTypes.STRING,
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
      Token: {
        allowNull: true,
        type: DataTypes.STRING
      },
    },{
      defaultScope:{ attributes: { exclude: ['Token'] }},
      freezeTableName: true},

    );
    Usuario.beforeCreate((usuario, options) => {
      return bcrypt.hash(usuario.Password, 10).then(hashedPw => {
        usuario.Password = hashedPw;
      })
      })
   return Usuario; 
  }