module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users",{
        email:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        pseudo:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        
    })
    Users.associate = (models) => {
        Users.belongsToMany(models.Mangas,{ through:'Users_Mangas'});
    }
    return Users;
}