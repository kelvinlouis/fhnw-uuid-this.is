var Observable = require('FuseJS/Observable'),
    message = Observable(''),
    sendEnabled = Observable(false);
module.exports = {
  message: message,
  sendEnabled: sendEnabled,
  messageChanged: function(args) {
    if (args.value.length > 0) {
      sendEnabled.value = true;
    } else {
      sendEnabled.value = false;
    }
  }
};