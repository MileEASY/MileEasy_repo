const Recommend = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        "Recommend", 
        { 
            rc_id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey : true
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            mbti: {
                type: DataTypes.STRING(4),
                allowNull: false,
            },
            comment: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            imgpath: {
                type: DataTypes.STRING(100),
                allowNull: true,
                defaulteValue: 'user_default_img.jpg',
            }
        },
        {
            tableName: "Recommend",
            freezeTableName: true,
            timestamps: false
        }
    )
}

module.exports = Recommend;