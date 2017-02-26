const sequelize = require('../database');
const sessionSchema = require('../Models/sessions.js');
let sessions = sequelize.define('sessions', sessionSchema);

const sessionController = {
  isLoggedIn: (req, res, next) => {
    if (!req.cookies.ssid) {
      res.status(200).end();
    } else {
      const obj = { ssid: req.cookies.ssid, username: req.body.username };
      sequelize.sync()
      .then(() => {
        sessions.create(obj)
          .then(() => res.status(200).end())
          .catch(error => res.status(400).end());
      });
    }
  },
  checkSession: (req, res, next) => {
    console.log('CHECK SESSION');
    sessions.findOne({ ssid: req.body.ssid })
      .then(results => {
        if (!results) {
          console.log('NO SESSION FOUND');
          this.isLoggedIn(req, res, next);
        } else {
          console.log('SESSION FOUND');
          res.status(200).end();
        }
      })
      .catch(error => console.error(error));
  }
}

module.exports = sessionController;