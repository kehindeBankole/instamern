require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = () => {
    mongoose
      .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
      .then(() => console.log("mongoDB connected"))
      .catch((err) => {
        console.log(err.message);
        process.exit(1);
      });
  };
  module.exports = connectDB;