const Models  = require('../models/index');
const User    = Models.User;

exports.getUserByName = function (name, callback) {
  if (name.length === 0) {
    return callback(null, []);
  }
  User.find({ pwd: { $in: name } }, callback);
}
