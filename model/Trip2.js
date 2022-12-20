const Trip2 = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        "Trip2", 
        { 
            mbti: {
                type: DataTypes.STRING(4),
                allowNull: true,
                primaryKey : true
            },
            spot: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            location: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            info: {
                type: DataTypes.TEXT("long"),
                allowNull: true,

            }

        },
        {
            tableName: "Trip2",
            freezeTableName: true,
            timestamps: false
        }
    )
}

module.exports = Trip2;