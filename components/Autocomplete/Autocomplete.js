var Observable = require("FuseJS/Observable"),
    text = Observable(''),
    results = Observable(),
    clearEnabled = Observable(false),
    list = Observable(
      { name: 'Food' },
      { name: 'Math' },
      { name: 'Japan' },
      { name: 'Health' },
      { name: 'Beauty' },
      { name: 'Cocktail' },
      { name: 'Ramen' },
      { name: 'Tokyo' },
      { name: 'Noodles' },
      { name: 'Cooking' },
      { name: 'Asian' },
      { name: 'Traveling' }
    );

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

      list.forEach(function(item) {
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