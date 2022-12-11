// cor là để khi upload lên server thì ko bị lỗi cors
// body-parser để parse thành dạng json

const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");

dotenv.config();

// CONNECT MONGODB
mongoose.connect(
  `mongodb+srv://tankhoa2104:${process.env.MONGO_PASS}@cluster0.qz8zbve.mongodb.net/?retryWrites=true&w=majority`,
  () => {
    console.log("Connection to db.");
  }
);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(helmet());
app.use(cors());
app.use(morgan("common"));

//ROUTES
app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running...");
});
