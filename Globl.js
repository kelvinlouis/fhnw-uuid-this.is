var Observable = require('FuseJS/Observable'),
    tags = Observable(),
    autocompleteList = Observable(
      { name: 'Asian' },
      { name: 'Cocktail' },
      { name: 'Japan' },
      { name: 'Math' },
      { name: 'Noodles' },
      { name: 'Ramen' },
      { name: 'Tokyo' }
    );

module.exports = {
  tags: tags,
  autocompleteList: autocompleteList
};