module.exports = {
  env: {
    development: {
      presets: [
        '@vue/cli-plugin-babel/preset'
      ]
    },
    test: {
      presets: [['@babel/preset-env', { targets: { node: true } }]],
      plugins: [
        ["@babel/plugin-transform-typescript", {
          isTSX: true,
        }],
        '@vue/babel-plugin-jsx',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-runtime',
      ],
    },
  }
}
