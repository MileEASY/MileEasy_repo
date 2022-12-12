const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};

//db에 커넥션 하는 코드
const sequelize = new Sequelize( //이 안에는 4개의 인자가 들어간다. -- 일반 함수 실행의 형태이다. 
    config.database,
    config.username,
    config.password,
    config //DB 전체정보 넣기 이렇게 쓰는게 규칙이다. 
);
//한 파일에 커넥션하는 코드를 다 작성, 다음에 다른파일에서도 사용하기 위해 정의 
db.sequelize = sequelize;
db.Sequelize = sequelize;

//model 의 Visitor함수 불러오고, 실행하기()
db.Visitor = require("./Visitor")(sequelize, Sequelize); // 실행할때 인자도 맞춰서 보내주기 
// db = {
//     "Sequelize" : sequelize,
//     "sequelize" : sequelize,
//      "visitor" : "Vistior.js에서 return받은 값"
// }

//따라서 db를 exports해서 다른 곳에서도 사용가능하게 만든다.
module.exports = db;