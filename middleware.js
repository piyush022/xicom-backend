const path = require("path");
//multer packages and middlewares...........
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "/uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const originalExtension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + originalExtension);
  },
});
const upload = multer({ storage: storage });

module.exports = { upload };
