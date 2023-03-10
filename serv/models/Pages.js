module.exports = (sequelize, DataTypes) => {
    const Pages = sequelize.define("Pages",{
        number:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        color:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    })
    Pages.associate = (models) => {
        Pages.belongsTo(models.Chapters,{});
    }
    return Pages;
}