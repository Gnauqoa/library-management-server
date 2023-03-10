require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 4000;
const database = process.env.DATABASE_URL;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.set("strictQuery", false); // hide notify in console

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

app.listen(port, () => {
  console.log(`start server at port: ${port}`);
  mongoose
    .connect(database)
    .then((result) => {
      console.log(`connect database with url: ${database}`);
    })
    .catch((err) => console.log(err));
});