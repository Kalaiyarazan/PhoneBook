const express = require("express");

const apiRouter = express.Router();

const fs = require("fs");

apiRouter.get("/", (req, res) => {
  fs.readFile("./contacts.txt", "utf8", (err, rawData) => {
    if (!err) {
      const content = rawData;
      const phoneBook = [];
      content.split(/\r?\n/).map(contact => {
        const contact_obj = contact.split(",");
        const temp_cont = {};
        temp_cont["phone"] = contact_obj[0].trim();
        temp_cont["name"] = contact_obj[1].trim();
        temp_cont["address"] = contact_obj[2].trim();
        temp_cont["city"] = contact_obj[3].trim();
        temp_cont["pin"] = contact_obj[4].trim();
        phoneBook.push(temp_cont);
        console.log("extracted");
      });
      console.log(phoneBook);
      res.json(phoneBook);
    } else {
      console.error(err);
    }
  });
});

module.exports = apiRouter;
