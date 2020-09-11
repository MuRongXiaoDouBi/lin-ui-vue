const {
  notEmpty,
  firstLetterToUpperCase,
  checkEnglishLetters
} = require('../utils')

module.exports = {
  description: 'create component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'component name',
    validate: checkEnglishLetters('name')
  }],
  actions: (inputData) => {
    let {
      name
    } = inputData
    name = firstLetterToUpperCase(name)
    const type = 'add'
    const actions = [{
      type,
      path: `src/components/${name}/index.ts`,
      templateFile: 'plop-templates/component/index.ts.hbs'
    }, {
      type,
      path: `src/components/${name}/src/index.tsx`,
      templateFile: 'plop-templates/component/index.tsx.hbs'
    }, {
      type,
      path: `src/components/${name}/src/index.less`,
      templateFile: 'plop-templates/component/index.less.hbs'
    }]
    return actions
  }
}