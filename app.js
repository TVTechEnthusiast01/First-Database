const mongoose = require("mongoose");
const User = require("./models/User.js");

mongoose.set("useUnifiedTopology", true);
mongoose.connect(
  "mongodb://localhost:27017/mongoose",
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

mongoose.connection
  .once("open", () => console.log("connected"))
  .on("error", (err) => {
    console.log("connection fail", err);
  });

const newUser = new User({
  Email: "t@gmail.com",
  Password: "password",
  isActive: 1,
});

newUser.save(function (err, dataSaved) {
  if (err) throw err;
  console.log(dataSaved);
});
