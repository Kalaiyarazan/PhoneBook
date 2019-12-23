const express = require("express");

const apiRouter = express.Router();
const { Contact } = require("../models/Contact");
const fs = require("fs");

apiRouter.get("/", (req, res) => {
  fs.readFile("./contacts.txt", "utf8", (err, rawData) => {
    if (!err) {
      const content = rawData;
      const phoneBook = [];
      content.split(/\r?\n/).map(contact => {
        const contact_obj = contact.split(",");
        const ContactData = {
          phone: contact_obj[0].trim(),
          name: contact_obj[1].trim(),
          address: contact_obj[2].trim(),
          city: contact_obj[3].trim(),
          pin: contact_obj[4].trim()
        };
        phoneBook.push(ContactData);
      });
      res.json(phoneBook);
      phoneBook.map(contact => {
        const { phone } = contact;
        console.log(`To Database Phone Number: ${phone}`);
        Contact.findOne({
          where: {
            phone
          }
        }).then(contactInstance => {
          if (contactInstance) {
            console.log(`${contactInstance.phone} Already Exist In Database`);
          } else {
            Contact.create(contact)
              .then(result => {
                console.log(result.get());
              })

              .catch(console.error);
          }
        });
      });
      // console.log(phoneBook);
    } else {
      console.error(err);
    }
  });
});

module.exports = apiRouter;
