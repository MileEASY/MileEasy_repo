const Trip = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        "Trip", 
        { 
            trip_id: { //id varchar(15) not null primary key
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            mbti: {
                type: DataTypes.STRING(4),
                allowNull: true,
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