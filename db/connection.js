const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Piyush:Nextupgrad@cluster0.akvcs4v.mongodb.net/xicom?retryWrites=true&w=majority"
  )
  .then((result) => console.log("connected"))
  .catch((err) => console.log(err));
