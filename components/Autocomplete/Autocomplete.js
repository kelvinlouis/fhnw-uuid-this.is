var Observable = require("FuseJS/Observable"),
    name = Observable('');

module.exports = {
  name: name,
  valueChanged: function(args) {
    console.log(args.value);
  }
};