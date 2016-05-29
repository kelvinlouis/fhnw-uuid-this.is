var Observable = require('FuseJS/Observable'),
    title = Observable(''),
    desc = Observable(''),
    enabledButton = Observable(false),

    titleCounter = title.map(function(text) {
      if (text.length > 0) {
        enabledButton.value = true;
      } else {
        enabledButton.value = false;
      }

      return text.length + '/180';
    }),

    descCounter = desc.map(function(text) {
      return text.length + '/600';
    });

module.exports = {
  title: title,
  desc: desc,
  titleCounter: titleCounter,
  descCounter: descCounter,
  enabledButton: enabledButton
};