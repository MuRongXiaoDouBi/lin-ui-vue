module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(t|j)sx?$': [
      'babel-jest', {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: true,
              },
            },
          ],
          '@babel/preset-typescript',
        ],
        plugins: [
          '@vue/babel-plugin-jsx',
          '@babel/plugin-proposal-class-properties',
        ],
      },
    ],
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/packages/$1'
  },
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001],
      },
    }
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  roots: ['<rootDir>'],
}
