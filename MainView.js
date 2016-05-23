var Observable = require('FuseJS/Observable'),
    activePage = Observable('Questions');

  module.exports = {
    // Simple Callback-Routing
    activePage: activePage,
    completeLogin: function() {
      activePage.value = 'LoginSetInterests';
    },
    selectedInterests: function() {
      console.log('test');
      activePage.value = 'Questions';
    },
    createQuestion: function() {
      activePage.value = 'CreateQuestion';
    }
};