module.exports = (sequelize, DataTypes) => {
    const Mangas = sequelize.define("Mangas",{
        title:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        likes:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        author:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    })
    Mangas.associate = (models) => {
        Mangas.hasMany(models.Chapters,{});
        Mangas.belongsToMany(models.Users,{ through:'Users_Mangas'});

        
    }
    return Mangas;
}