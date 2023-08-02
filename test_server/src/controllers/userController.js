const db = require("../models");

exports.checkEmailExistence = async (req, res) => {
  const emailToCheck = req.params.email;

  db.Worker.findOne({ where: { email: emailToCheck } })
    .then((user) => {
      res.status(200);
      if (user) {
        res.json({ message: "EMAIL_ALREADY_EXIST" });
      } else {
        res.json({ message: "EMAIL_NOT_EXIST" });
      }
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ message: "EAMIL_CHECKING_FAILED" });
    });
};

exports.createWorker = async (req, res) => {
  const data = req.body;

  try {
    await db.Worker.create({
      email: data.email,
      password: data.password,
      name: data.name,
      mobile_number: data.mobileNumber,
      work_place: data.workPlace,
      organization_id: data.organizationId,
    });

    res.status(201).json({
      message: "USER_REGISTRATION_SUCCESSFUL",
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "USER_REGISTRATION_FAILED",
    });
  }
};
