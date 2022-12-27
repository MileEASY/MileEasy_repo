const User = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "User",
    {
      id: {
        //id varchar(15) not null primary key
        type: DataTypes.STRING(50),
        allowNull: true,
        primaryKey: true,
      },
      pw: {
        //pw varchar(15) not null
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      name: {
        //name varchar(5)
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      mbti: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      imgpath: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaulteValue: "user_default_img.jpg",
      },
    },
    {
      tableName: "User",
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = User;
