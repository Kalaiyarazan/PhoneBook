const Sequelize = require("sequelize");
require("dotenv").config();
const ContactDB = new Sequelize(process.env.DB_URL);

ContactDB.authenticate()
  .then(() => {
    console.log(
      "Connection has been established succesfully with phonebook database"
    );
  })
  .catch(err => {
    console.error("unable to connect to the phonebook database: ", err);
  });

module.exports = ContactDB;
