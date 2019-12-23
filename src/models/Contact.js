const Sequelize = require("sequelize");
const ContactDB = require("../config/ContactDB");

const Contact = ContactDB.define("contact", {
  phone: Sequelize.STRING,
  name: Sequelize.STRING,
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  pin: Sequelize.STRING
});

const ContactSync = ({ force = false } = { force: false }) => {
  Contact.sync({ force })
    .then(() => {
      const testContact = {
        phone: 999999999,
        name: "John",
        address: "No.1 5th cross street",
        city: "Bangalore",
        pin: 560007
      };

      Contact.create(testContact)
        .then(result => {
          console.log(result.get());
        })
        .catch(console.error);
    })
    .catch(console.error);
};

exports.Contact = Contact;
exports.ContactSync = ContactSync;
