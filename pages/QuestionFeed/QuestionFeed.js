var Observable = require('FuseJS/Observable'),
    activeQuestion = Observable({}),
    activePage = Observable('feed'),
    //Question = require('../../components/Question'),
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
    );

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
  activeQuestion: activeQuestion,
  activePage: activePage,

  goBack: function() {
    activePage.value = 'feed';
    activeQuestion.value = {};
  },

  selectedQuestion: function(args) {
    activeQuestion.value = args.data;
    activePage.value = args.data.handle;
  }
};