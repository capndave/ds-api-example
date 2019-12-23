module.exports = {
  // "roots": [
  //   "<rootDir>/src"
  // ],
  // "testMatch": [
  //   "**/__tests__/**/*.+(ts|tsx|js)",
  //   "**/?(*.)+(spec|test).+(ts|tsx|js)"
  // ],
  // "transform": {
  //   "^.+\\.(ts|tsx)$": "ts-jest"
  // },
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'ts', 'json'],

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',
  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    // '**/?(*.)+(spec|test).js?(x)',
    '**/?(*.)+(spec|test).ts?(x)'
  ]
}
