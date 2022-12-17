const User = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        "User", 
        { 
            id: { //id varchar(15) not null primary key
                type: DataTypes.STRING(50),
                allowNull: true,
                primaryKey : true
            },
            pw: { //pw varchar(15) not null
                type: DataTypes.STRING(50),
                allowNull: true
            },
            name: { //name varchar(5)
                type: DataTypes.STRING(128),
                allowNull: true
            },
            mbti_ok: {
                type: DataTypes.STRING(5),
                allowNull: true,
            },
            auth: {
                type: DataTypes.STRING(5),
                allowNull: true,
            },
            mbti: {
                type: DataTypes.STRING(4),
                allowNull: true,
            },
            E: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            I: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            N: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            S: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            F: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            T: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            P: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            J: {
                type: DataTypes.INTEGER,
                allowNull: true,
            }

        },
        {
            tableName: "User",
            freezeTableName: true,
            timestamps: false
        }
    )
}

module.exports = User;