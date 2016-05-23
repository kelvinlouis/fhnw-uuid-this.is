var Observable = require('FuseJS/Observable'),
    activePage = Observable('Login');

  module.exports = {
    // Simple Callback-Routing
    activePage: activePage,
    completeLogin: function() {
      activePage.value = 'LoginSetInterests';
    },
    selectedInterests: function() {
      activePage.value = 'Questions';
    },
    createQuestion: function() {
      activePage.value = 'CreateQuestion';
    }
};