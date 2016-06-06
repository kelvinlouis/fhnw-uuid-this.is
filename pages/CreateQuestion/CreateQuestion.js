var Observable = require('FuseJS/Observable'),
    title = Observable(''),
    desc = Observable(''),
    image = Observable(false),
    enabledButton = Observable(false),
    descriptionActive = Observable(false),

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
  image: image,
  titleCounter: titleCounter,
  descCounter: descCounter,
  enabledButton: enabledButton,
  descriptionActive: descriptionActive,
  titleClicked: function() {
    descriptionActive.value = false;
  },
  descriptionClicked: function() {
    descriptionActive.value = true;
  },
  descriptionBack: function() {
    descriptionActive.value = false;
  },
  showImage: function() {
    image.value = true;
  },
  removeImage: function() {
    image.value = false;
  }
};