const component = require('./build/templates/component/prompt')
const {
  firstLetterToUpperCase
} = require('./build/templates/utils')
module.exports = function (plop) {
  plop.setHelper('firstLetterToUpperCase', function (text) {
    return firstLetterToUpperCase(text)
  });
  plop.setGenerator('component', component);
};