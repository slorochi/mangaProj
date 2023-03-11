module.exports = (sequelize, DataTypes) => {
    const Chapters = sequelize.define("Chapters",{
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
        }
    })
    Chapters.associate = (models) => {
        Chapters.belongsTo(models.Mangas,{});
        Chapters.hasMany(models.Pages,{});
    }
    return Chapters;
}