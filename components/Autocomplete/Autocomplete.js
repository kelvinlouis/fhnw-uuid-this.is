var Observable = require("FuseJS/Observable"),
    tags = [
      "Cooking",
      "Physics",
      "Fitness"
    ];

module.exports = {
    valueChanged: function(args) {
      console.log(args.value);
    }
};