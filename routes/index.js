var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main);

router.get("/test",controller.test);

router.get('/mbtitest',controller.mbti);

module.exports = router;
