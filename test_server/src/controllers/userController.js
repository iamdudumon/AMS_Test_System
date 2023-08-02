const db = require("../models");
const bcrypt = require("bcrypt");

// 이메일 체크 컨트롤러
exports.checkEmailExistence = async (req, res) => {
  const emailToCheck = req.params.email;

  db.Worker.findOne({ where: { email: emailToCheck } })
    .then((user) => {
      res.status(200);
      if (user) {
        res.json({ message: "EMAIL_ALREADY_EXISTS" });
      } else {
        res.json({ message: "EMAIL_AVAILABLE" });
      }
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ message: "EAMIL_CHECKING_FAILED" });
    });
};

exports.createWorker = async (req, res) => {
  const data = req.body;
  const hashedPassword = bcrypt.hashSync(data.password, 10);

  try {
    await db.Worker.create({
      email: data.email,
      password: hashedPassword, // 비밀번호 해싱
      name: data.name,
      mobile_number: data.mobileNumber,
      work_place: data.workPlace,
      organization_id: data.organizationId,
    });

    res.status(201).json({
      message: "REGISTRATION_SUCCESSFUL",
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "REGISTRATION_FAILED",
    });
  }
};

exports.loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const userType = req.body.userType;

  const userModel = userType == 0 ? db.Worker : db.Manager;
  userModel
    .findOne({ where: { email: email } })
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password || error)) {
        res.status(200).json({
          message: "LOGIN_SUCCESSFUL",
          email: user.email,
          name: user.name,
          mobileNumber: user.mobile_number,
          workPlace: user.work_place,
          organizationName: "에이아이트론",
        });
      } else {
        res.status(401).json({ message: "INVALID_USERNAME_OR_PASSWORD" });
      }
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ message: "USER_LOGIN_FAILED" });
    });
};
