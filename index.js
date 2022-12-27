const express = require("express");
const app = express();
// const port = 8080;
const session = require("express-session");
const router = require("./routes");
const path = require("path");
const dotenv = require('dotenv');
dotenv.config({path : path.join(__dirname, '.env')});

//콘솔 확인용 나중에 없애도 됩니다. 
console.log(process.env.PORT);
// console.log(process.env);

app.set("view engine", "ejs");

app.use("/public/static", express.static(`${__dirname}/public/static`));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET, 
  resave: false, 
  saveUninitialized: true, 
  cookie: {
    expires: 1000*60*60*24
  },
}));
app.use("/", router);

app.get("*", (req, res) => {
  res.send("주소가 존재하지 않습니다. 다시 한 번 확인해주세요.");
;});

app.listen(process.env.PORT, () => {
  console.log("server open: ", process.env.PORT);
})
