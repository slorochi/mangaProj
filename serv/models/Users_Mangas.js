module.exports = (sequelize, DataTypes) => {
    const Users_Mangas = sequelize.define("Users_Mangas",{
        like:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    })
    return Users_Mangas;
}