const Trip = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        "Trip", 
        { 
            trip_id: { //trip_id int not null primary key
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            mbti: { //mbti varchar(4) not null
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            spot: { //spot varchar(128) not null
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            location: { //location varchar(128) not null
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            info: { //info longtext not null
                type: DataTypes.TEXT("long"),
                allowNull: false,
                
            }
    
        },
        {
            tableName: "Trip",
            freezeTableName: true, 
            timestamps: false, // 허용하려면 default true createdAt updatedAt
        }
    )
}

module.exports = Trip;