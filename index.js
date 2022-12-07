// cor là để khi upload lên server thì ko bị lỗi cors
// body-parser để parse thành dạng json

const express = require("express");

const app = express();

const morgan = require("morgan");

const cors = require("cors");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

// CONNECT MONGODB
mongoose.connect(
  `mongodb+srv://tankhoa2104:${process.env.MONGO_PASS}@cluster0.qz8zbve.mongodb.net/?retryWrites=true&w=majority`,
  () => {
    console.log("Connection to db.");
  }
);

app.get("/", (req, res) => {
  res.status(200).json("123");
});

app.use(cors());
// morgan đơn giản là khi bạn send req nào đó thì nó sẽ báo gi đó ở terminal
app.use(morgan("common"));

// gửi api req dưới dạng json và parse nó
app.use(bodyParser.json({ limit: "50mb" }));

app.listen(8500, () => {
  console.log("Server is runnning...");
});
