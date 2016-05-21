var Observable = require('FuseJS/Observable'),
    pages = Observable(
      {
        title: 'Feed',
        handle: 'feed'
      },
      {
        title: 'Question',
        handle: 'question'
      },
      {
        title: 'My Questions',
        handle: 'myQuestions'
      },
      {
        title: 'My Answers',
        handle: 'myAnswers'
      },
      {
        title: 'Create Question',
        handle: 'createQuestion'
      }
    ),
    questions = Observable(
      new Question('question1', 'image1', 'Where can I eat the best #Ramen in #Japan?', '', 'Kelvin Louis', '11:00', 3),
      new Question('question2', 'image2', 'Help me', '', 'Kelvin Louis', '11:00', 3),
      new Question('question3', 'image1', 'Where can I eat the best #Ramen in #Japan?', '', 'Kelvin Louis', '11:00', 3),
      new Question('question4', 'image2', 'Where can I eat the best #Ramen in #Japan?', '', 'Kelvin Louis', '11:00', 3),
      new Question('question5', 'image1', 'Where can I eat the best #Ramen in #Japan?', '', 'Kelvin Louis', '11:00', 3),
      new Question('question6', 'image2', 'Where can I eat the best #Ramen in #Japan?', '', 'Kelvin Louis', '11:00', 3),
      new Question('question7', 'image1', 'Where can I eat the best #Ramen in #Japan?', '', 'Kelvin Louis', '11:00', 3),
      new Question('question8', 'image1', 'Where can I eat the best #Ramen in #Japan?', '', 'Kelvin Louis', '11:00', 3),
      new Question('question9', 'image1', 'Where can I eat the best #Ramen in #Japan?', '', 'Kelvin Louis', '11:00', 3),
      new Question('question10', 'image1', 'Where can I eat the best #Ramen in #Japan?', '', 'Kelvin Louis', '11:00', 3),
      new Question('question11', 'image1', 'Where can I eat the best #Ramen in #Japan?', '', 'Kelvin Louis', '11:00', 3),
      new Question('question12', 'image1', 'Where can I eat the best #Ramen in #Japan?', '', 'Kelvin Louis', '11:00', 3),
      new Question('question13', 'image1', 'Where can I eat the best #Ramen in #Japan?', '', 'Kelvin Louis', '11:00', 3),
      new Question('question14', 'image1', 'Where can I eat the best #Ramen in #Japan?', '', 'Kelvin Louis', '11:00', 3)
    ),
    activePage = Observable(pages.getAt(0)),
    previousPage = null;

  function Question(handle, image, title, description, author, timestamp, answers) {
      this.handle = handle;
      this.image = image;
      this.title = title;
      this.description = description;
      this.author = author;
      this.timestamp = timestamp;
      this.answers = answers;
    }

module.exports = {
  questions: questions,
  activePage: activePage,
  activePageHandle: activePage.map(function(x) {
    return x.handle;
  }),
  activePageTitle: activePage.map(function(x) {
    return x.title;
  }),
  goBack: function() {
    activePage.value = previousPage;
    previousPage = null;
  },
  goToQuestion: function() {
    previousPage = activePage.value;
    activePage.value = pages.toArray()[1];
  },
  goToFeed: function() {
    previousPage = activePage.value;
    activePage.value = pages.toArray()[0];
  },
  goToMyQuestions: function() {
    previousPage = activePage.value;
    activePage.value = pages.toArray()[2];
  },
  goToMyAnswers: function() {
    previousPage = activePage.value;
    activePage.value = pages.toArray()[3];
  },
  goToCreateQuestion: function() {
    previousPage = activePage.value;
    activePage.value = pages.toArray()[4];
  }
};