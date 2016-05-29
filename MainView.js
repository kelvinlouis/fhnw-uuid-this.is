var Observable = require('FuseJS/Observable'),
    activePage = Observable('Login'),
    toastText = Observable(''),
    toastTrue = Observable(false),

    showToast = function(msg) {
      toastText.value = msg;
      toastTrue.value = true;

      // Removes the toast again
      setTimeout(function() {
        toastTrue.value = false;
      }, 2000 );
    };

  module.exports = {
    // Simple Callback-Routing
    activePage: activePage,
    completeLogin: function() {
      activePage.value = 'LoginSetInterests';
      showToast('Successfully logged in');
    },
    selectedInterests: function() {
      activePage.value = 'Questions';
    },
    createQuestion: function() {
      activePage.value = 'CreateQuestion';
    },

    // Toast Observables
    toastText: toastText,
    toastTrue: toastTrue
};