var Observable = require('FuseJS/Observable'),
    buttonText = Observable('Skip'),
    Globl = require('Globl'),
    tags = Observable(
      { name: 'Food', selected: Observable(false) },
      { name: 'Math', selected: Observable(false) },
      { name: 'Japan', selected: Observable(false) },
      { name: 'Health', selected: Observable(false) },
      { name: 'Beauty', selected: Observable(false) },
      { name: 'Cocktail', selected: Observable(false) },
      { name: 'Tokyo', selected: Observable(false) }
    );

module.exports = {
    buttonText: buttonText,
    tags: tags,

    toggleTag: function(e) {
      var index;

      if (e.data.selected.value === false) {
        Globl.tags.add({name: e.data.name });
        e.data.selected.value = true;
      } else {
        Globl.tags.removeWhere(function(tag) {
          return tag.name === e.data.name;
        });
        e.data.selected.value = false;
      }

      if (Globl.tags.length > 0) {
        buttonText.value = 'Show me questions';
      } else {
        buttonText.value = 'Skip';
      }
    },

    addTag: function(e) {
      tags.add({ name: e.data.name });
    }
};