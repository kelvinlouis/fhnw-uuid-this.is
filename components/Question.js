module.exports = {
  Question: function(image, title, author, timestamp, answers) {
    this.image = image;
    this.title = title;
    this.author = author;
    this.timestamp = timestamp;
    this.answers = answers;
  }
};