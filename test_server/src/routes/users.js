var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");
//var controller = require("../controllers");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.get("/emailCheck/:email", userController.checkEmailExistence);

router.post("/signup/worker", userController.createWorker);

router.post("/signup/manager", function (req, res, next) {});

module.exports = router;
