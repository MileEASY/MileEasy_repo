const Trip = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        "Trip", 
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
            tableName: "Trip",
            freezeTableName: true,
            timestamps: false
        }
    )
}

module.exports = Trip;