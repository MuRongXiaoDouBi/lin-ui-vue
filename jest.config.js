module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],
  transform: {
    '\\.(vue)$': 'vue-jest',
    '\\.(js|jsx)$': 'babel-jest',
    '\\.(ts|tsx)$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  // testMatch: [
  //   '**/tests/unit/**/*.test.(js|jsx|ts|tsx)|**/__tests__/*.test.(js|jsx|ts|tsx)'
  // ],
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  },
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
