var Observable = require('FuseJS/Observable'),
    bundle = require('FuseJS/Bundle'),
    Globl = require('Globl'),
    
    jsonData = JSON.parse(bundle.readSync('data.json')),
    pages = Observable.apply(null, jsonData.pages),
    questions = Observable.apply(null, jsonData.questions),
    results = Observable(),

    myQuestions = Observable(),
    myAnswers = Observable(),
    activePage = Observable(pages.getAt(0)),
    activeQuestion = Observable(),
    isMyQuestion = Observable(false),
    previousPage = null;

// Create Observables for answers of questions
questions.forEach(function(x) {
  x.answers = Observable.apply(null, x.answers);
  x.answerCount = Observable(x.answerCount);
  x.closed = Observable(x.closed);

  results.add(x);
});

 function goBack() {
  activePage.value = previousPage;
  previousPage = null;
}

function updateResults() {
  var tags = Globl.tags,
      addAll = false;

  results.clear();

  if (tags.length === 0) addAll = true;

  questions.forEach(function(q) {
    var exists = false;

    if ( (q.myQuestion && !q.closed) || addAll) {
      results.add(q);
      return;
    }

    tags.forEach(function(t) {
      if (q.tags.indexOf(t.name) > -1) exists = true;
    });

    if ( exists ) results.add(q);
  });
}

module.exports = {
  questions: questions,
  results: results,
  activePage: activePage,
  myQuestions: myQuestions,
  myAnswers: myAnswers,
  activeQuestion: activeQuestion,
  isMyQuestion: isMyQuestion,
  tags: Globl.tags,

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

    isMyQuestion.value = (e.data.myQuestion && !e.data.closed.value ) || false;
  },

  goBack: goBack,

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
        img = e.data.image.value,
        q = new Question(title, desc, img, 'Sam', 'Now');

    questions.insertAt(0, q);

    myQuestions.insertAt(0, q);

    e.data.title.value = '';
    e.data.desc.value = '';
    e.data.image.value = false;

    activePage.value = pages.getAt(0);
    updateResults();
  },

  enteredMessage: function(e) {
    var answer = {
          author: 'Me',
          image: 'author4',
          isMe: true,
          message: e.data.message.value,
          time: 'Just Now'
        };

    activeQuestion.value.answers.add(answer);
    e.data.message.value = '';

    if (myAnswers.indexOf(activeQuestion.value) === -1) {
      if (activeQuestion.value.isMyQuestion === false) {
        myAnswers.add(activeQuestion.value);
      }
    }

    activeQuestion.value.answerCount.value++;
  },

  closeQuestion: function(e) {
    activeQuestion.value.closed.value = true;
    questions.remove(activeQuestion.value);

    goBack();
  },

  removeTag: function(e) {
    Globl.tags.removeWhere(function(tag) {
      return tag.name === e.data.name;
    });

    updateResults();
  },

  addTag: function(e) {
    var tag = { name: e.data.name },
        exists = false;

    Globl.tags.forEach(function(item) {
      if (item.name === tag.name) exists = true;
    });
    
    if (!exists) {
      Globl.tags.add({ name: e.data.name });
    }
    
    updateResults();
  }

};

function Question(title, description, image, author, time) {
  this.title = title;
  this.description = description;
  this.image = image === true ? "image4" : "";
  this.author = author;
  this.time = time;
  this.tags = ['Japan', 'Tokyo', 'Food'];
  this.closed = Observable(false);
  this.answers = Observable({
    author: 'Isa',
    image: 'author2',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum vel odio feugiat dignissim. Mauris nec tincidunt urna. Aliquam maximus egestas sapien, a dignissim arcu mattis quis?',
    time: 'Just Now'
  }, {
    author: 'Kaito',
    image: 'author3',
    message: ' Nam a diam vitae arcu lacinia molestie. Duis id lacus dolor. Quisque vel urna quis ipsum lobortis accumsan id sed ligula.',
    time: 'Just Now'
  });

  this.hasImage = image;

  if (image === false && description.length > 0) {
    this.design = designMap.onlyDescription;
  } else if (image === true && description.length === 0) {
    this.design = designMap.onlyImage;
  } else if (image === false && description.length === 0) {
    this.design = designMap.nothing;
  } else {
    this.design = designMap.both;
  }

  this.answerCount = Observable(this.answers.length);
  this.myQuestion = true;
}

var designMap = {
  onlyDescription: {
    "rows": "80,150,0",
    "descVisibility": "Visible",
    "descAniFrom": "0",
    "descAniTo": "150",
    "titleAniFrom": "150",
    "titleAniTo": "400",
    "imageAniFrom": "0",
    "imageAniTo": "0",
    "height": "230"
  },
  onlyImage: {
    "rows": "80,0,200",
    "descVisibility": "Collapsed",
    "imageAniFrom": "0",
    "imageAniTo": "150",
    "titleAniFrom": "150",
    "titleAniTo": "400",
    "descAniFrom": "0",
    "descAniTo": "0",
    "height": "280"
  },
  nothing: {
    "rows": "80,0,0",
    "descVisibility": "Collapsed",
    "imageAniFrom": "0",
    "imageAniTo": "0",
    "titleAniFrom": "0",
    "titleAniTo": "0",
    "descAniFrom": "0",
    "descAniTo": "0",
    "height": "80"
  },
  both: {
    "rows": "80,150,200",
    "descVisibility": "Visible",
    "imageAniFrom": "0",
    "imageAniTo": "150",
    "descAniFrom": "150",
    "descAniTo": "400",
    "titleAniFrom": "360",
    "titleAniTo": "440",
    "height": "430"
  }
};