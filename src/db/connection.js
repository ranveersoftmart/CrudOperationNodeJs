const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/data_curd", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
  })
  .then(() => {
    console.log("connection sucessfull");
  })
  .catch((err) => {
    console.log(" no connection");
  });
