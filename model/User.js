const User = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        "User", 
        { 
            id: { //id varchar(50) Not null primary key
                type: DataTypes.STRING(50),
                allowNull: false,
                primaryKey: true,
            },
            pw: { //pw varchar(50) not null
                type: DataTypes.STRING(50),
                allowNull: false
            },
            name: { //name varchar(128) not null
                type: DataTypes.STRING(128),
                allowNull: false
            },
            mbti_ok: { //mbti_ok varchar(5) default "N"
                type: DataTypes.STRING(5),
                allowNull: true,
                defaultValue: "N"
            },
            auth: { //auth varchar(5) not null
                type: DataTypes.STRING(5),
                allowNull: true,
            },
            mbti: { //mbti varchar(4)
                type: DataTypes.STRING(4),
                allowNull: true
            },
            E: { //E int
                type: DataTypes.INTEGER,
                allowNull: true
            },
            I: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            N: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            S: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            F: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            T: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            P: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            J: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
    
        },
        {
            tableName: "User",
            freezeTableName: true, 
            timestamps: false, // 허용하려면 default true createdAt updatedAt
        }
    )
}

module.exports = User;