const express = require("express");
const app = express();
require("dotenv").config();
const apiRouter = require("./routers/apiRouter");

const PORT = process.env.PORT || 3000;

console.log("App start");

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server Started and running on port : ${PORT}`);
});
