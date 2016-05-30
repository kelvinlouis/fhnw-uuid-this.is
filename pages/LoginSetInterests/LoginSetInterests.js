var Observable = require('FuseJS/Observable'),
    buttonText = Observable('Skip'),
    Globl = require('Globl'),
    tags = Observable(
      { name: 'Beauty', selected: Observable(false) },
      { name: 'Cocktail', selected: Observable(false) },
      { name: 'Cooking', selected: Observable(false) },
      { name: 'Food', selected: Observable(false) },
      { name: 'Health', selected: Observable(false) },
      { name: 'Math', selected: Observable(false) }
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
      var tag = { name: e.data.name, selected: Observable(true) },
          exists = false;

      tags.forEach(function(item) {
        if (item.name === tag.name) exists = true;
      });
      
      if (!exists) {
        tags.add(tag);
        Globl.tags.add({ name: e.data.name });
      }

      if (Globl.tags.length > 0) {
        buttonText.value = 'Show me questions';
      } else {
        buttonText.value = 'Skip';
      }
    }
};