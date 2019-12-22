const express = require("express");
const app = express();
const apiRouter = require("./routers/apiRouter");

const PORT = process.env.PORT || 3000;

console.log("App start");

app.use("/api", apiRouter);

// fs.readFile("./contacts.txt", "utf8", (err, rawData) => {
//   if (!err) {
//     const content = rawData;
//     const phoneBook = [];
//     content.split(/\r?\n/).map(contact => {
//       const contact_obj = contact.split(",");
//       const temp_cont = {};
//       temp_cont["phone"] = contact_obj[0].trim();
//       temp_cont["name"] = contact_obj[1].trim();
//       temp_cont["address"] = contact_obj[2].trim();
//       temp_cont["city"] = contact_obj[3].trim();
//       temp_cont["pin"] = contact_obj[4].trim();
//       phoneBook.push(temp_cont);
//     });
//     console.log(phoneBook);
//   } else {
//     console.error(err);
//   }
// });

app.listen(PORT, () => {
  console.log(`Server Started and running on port : ${PORT}`);
});
