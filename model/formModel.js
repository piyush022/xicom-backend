const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    firstName: { type: String, required: true, lowercase: true },
    lastName: { type: String, required: true, lowercase: true },
    email: { type: String, required: true, lowercase: true },
    dob: { type: Date, required: true },
    residentialAddress: {
      street1: { type: String, required: true },
      street2: { type: String },
    },
    permanentAddress: {
      street1: { type: String },
      street2: { type: String },
    },
    file1: {
      fileName: { type: String },
      fileType: { type: String },
      path: { type: String },
    },
    file2: {
      fileName: { type: String },
      fileType: { type: String },
      path: { type: String },
    },
  },
  { timestamps: true }
);

const FormModel = mongoose.model("Form", formSchema);

module.exports = FormModel;
