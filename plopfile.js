const component = require('./plop-templates/component/prompt')
const {
  firstLetterToUpperCase
} = require('./plop-templates/utils')
module.exports = function (plop) {
  plop.setHelper('firstLetterToUpperCase', function (text) {
    return firstLetterToUpperCase(text)
  });
  plop.setGenerator('component', component);
};