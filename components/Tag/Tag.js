var Observable = require('FuseJS/Observable'),
    selected = Observable(false);

module.exports = {
  selected: selected,
  selectedTag: function() {
    selected.value = !selected.value;
  }
};