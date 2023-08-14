var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");
//var controller = require("../controllers");

router.get("/emailCheck/:email", userController.checkEmailExistence);

router.post("/signup/worker", userController.createWorker);

router.post("/signup/manager", userController.createManager);

router.post("/login", userController.loginUser);

module.exports = router;
