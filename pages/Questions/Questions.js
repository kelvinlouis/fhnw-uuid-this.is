var Observable = require('FuseJS/Observable'),
    bundle = require('FuseJS/Bundle'),

    jsonData = JSON.parse(bundle.readSync('data.json')),
    pages = Observable.apply(null, jsonData.pages),
    questions = Observable.apply(null, jsonData.questions),

    myQuestions = Observable(),
    myAnswers = Observable(),
    activePage = Observable(pages.getAt(0)),
    activeQuestion = Observable(),
    isMyQuestion = Observable(false),
    previousPage = null;

// Create Observables for answers of questions
questions.forEach(function(x) {
  x.answers = Observable.apply(null, x.answers);
});

module.exports = {
  questions: questions,
  activePage: activePage,
  myQuestions: myQuestions,
  myAnswers: myAnswers,
  activeQuestion: activeQuestion,
  isMyQuestion: isMyQuestion,

  activePageHandle: activePage.map(function(x) {
    return x.handle;
  }),

  activePageTitle: activePage.map(function(x) {
    return x.title;
  }),

  selectQuestion: function(e) {
    activeQuestion.value = e.data;
    previousPage = activePage.value;
    activePage.value = pages.getAt(1);

    isMyQuestion.value = e.data.myQuestion || false;
  },

  goBack: function() {
    activePage.value = previousPage;
    previousPage = null;
  },

  goToFeed: function() {
    previousPage = activePage.value;
    activePage.value = pages.getAt(0);
    isMyQuestion.value = false;
  },

  goToMyQuestions: function() {
    previousPage = activePage.value;
    activePage.value = pages.getAt(2);
    isMyQuestion.value = false;
  },

  goToMyAnswers: function() {
    previousPage = activePage.value;
    activePage.value = pages.getAt(3);
    isMyQuestion.value = false;
  },

  goToCreateQuestion: function() {
    previousPage = activePage.value;
    activePage.value = pages.getAt(4);
    isMyQuestion.value = false;
  },

  goToSettings: function() {
    previousPage = activePage.value;
    activePage.value = pages.getAt(5);
    isMyQuestion.value = false;
  },

  createQuestion: function(e) {
    var title = e.data.title.value,
        desc = e.data.desc.value,
        q = new Question(title, desc, 'image4', 'Sam', 'Now');

    questions.insertAt(0, q);

    activePage.value = pages.getAt(0);
    isMyQuestion.value = false;

    e.data.title.value = '';
    e.data.desc.value = '';
  },

  enteredMessage: function(e) {
    var answer = {
      author: 'Sam',
      image: 'author4',
      message: e.data.message.value,
      time: 'Just Now'
    };

    activeQuestion.value.answers.add(answer);
    e.data.message.value = '';

    if (myAnswers.indexOf(activeQuestion.value) === -1) {
      myAnswers.add(activeQuestion.value);
    }
  }
};

function Question(title, description, image, author, time) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.author = author;
    this.time = time;
    this.tags = ['Japan', 'Tokyo', 'Food'];
    this.answers = Observable();
    this.answerCount = 0;
    this.myQuestion = true;
  }