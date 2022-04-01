const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const conRoute = require("./routes/conversation");
const messageRoute = require("./routes/messages");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

dotenv.config();
mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB....!");
  }
);

app.use("/images", express.static(path.join(__dirname, "public/images")));

//middele ware............
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//file UPLOADING..................................
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("file  uploaded successfully-----!");
  } catch (err) {
    console.log(err);
  }
});

//ROUTES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/conversation", conRoute);
app.use("/api/message", messageRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
