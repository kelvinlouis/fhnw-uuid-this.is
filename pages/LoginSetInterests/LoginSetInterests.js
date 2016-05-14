var Observable = require("FuseJS/Observable"),
    buttonText = Observable('Skip'),
    listOfTags = [];

module.exports = {
    buttonText: buttonText,
    
    toggledTag: function(e) {
      var index;

      if (e.selected === true) {
        listOfTags.push(e.name);
      } else {
        index = listOfTags.indexOf(e.name);

        if (index > -1) {
          listOfTags.splice(index, 1);
        }
      }

      if (listOfTags.length > 0) {
        buttonText.value = 'Show me questions';
      } else {
        buttonText.value = 'Skip';
      }
    }
};