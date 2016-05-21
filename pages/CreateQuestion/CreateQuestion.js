var Observable = require('FuseJS/Observable'),
    title = Observable(''),
    desc = Observable('');

    titleCounter = title.map(function(text) {
      return text.length + '/180';
    });

    descCounter = desc.map(function(text) {
      return text.length + '/600';
    });

module.exports = {
  title: title,
  desc: desc,
  titleCounter: titleCounter,
  descCounter: descCounter
};