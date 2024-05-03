const express = require("express");
const router = express.Router();
const formModel = require("../model/formModel");
const { upload } = require("../middleware");

router.post(
  "/api/handleForm",
  upload.fields([
    { name: "file1", maxCount: 1 },
    { name: "file2", maxCount: 1 },
  ]),
  async (req, resp) => {
    try {
      if (req.files) {
        console.log("files", req.files);
        const newForm = new formModel({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          dob: req.body.dob,
          residentialAddress: {
            street1: req.body.street1,
            street2: req.body.street2,
          },
          permanentAddress: {
            street1: req.body.street3,
            street2: req.body.street4,
          },
          file1: {
            fileName: req.body.file1name,
            fileType: req.files.file1[0].mimetype,
            path: req.files.file1[0].path,
          },
          file2: {
            fileName: req.body.file2name,
            fileType: req.files.file2[0].mimetype,
            path: req.files.file2[0].path,
          },
        });
        const result = await newForm.save();

        console.log("files", req.files);
        resp.status(200).json({
          fileDetails: req.files,
          success: true,
          msg: "form uploaded",
        });
      }
    } catch (err) {
      resp.status(500).json({ success: false, error: err.message });
    }
  }
);

module.exports = router;
