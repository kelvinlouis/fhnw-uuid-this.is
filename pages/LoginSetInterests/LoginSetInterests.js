var Observable = require('FuseJS/Observable'),
    buttonText = Observable('Skip'),
    Globl = require('Globl');

module.exports = {
    buttonText: buttonText,

    toggledTag: function(e) {
      var index;

      if (e.selected === true) {
        Globl.tags.add({name: e.name });
      } else {
        Globl.tags.removeWhere(function(tag) {
          return tag.name === e.name;
        });
      }

      if (Globl.tags.length > 0) {
        buttonText.value = 'Show me questions';
      } else {
        buttonText.value = 'Skip';
      }
    }
};