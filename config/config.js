require('dotenv').config();
const env = process.env;

const development = { 
        host: "localhost",    
        database : "00000",  
        username : "user",
        password : "000000",
        dialect: "mysql"  
    };

const mile = {
        host: env.MYSQL_HOST,   
        database : env.MYSQL_DATABASE, 
        username : env.MYSQL_USERNAME, 
        password : env.MYSQL_PASSWORD,
        dialect : "mysql" 
    }

module.exports = { development, mile };