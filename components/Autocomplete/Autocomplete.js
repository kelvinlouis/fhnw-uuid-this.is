var Observable = require("FuseJS/Observable"),
    Globl = require('Globl'),
    text = Observable(''),
    results = Observable(),
    clearEnabled = Observable(false);

module.exports = {
  text: text,
  results: results,
  clearEnabled: clearEnabled,
  valueChanged: function(args) {
    var regexp;

    results.clear();

    if (args.value.length > 0) {
      clearEnabled.value = true;
      regexp = new RegExp(args.value, 'gi');

      Globl.autocompleteList.forEach(function(item) {
        if (regexp.test(item.name) === true ) {
          results.add(item);
        }
      });
    } else {
      clearEnabled.value = false;
    }
  },
  clear: function() {
    text.value = '';
  }
};