const mongoose = require("mongoose");

const DB =
  "mongodb+srv://Paritosh819:Paritosh5721@cluster0.4jgl3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(
  DB,
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (err) console.log(err);
    else console.log("mongdb is connected");
  }
);
