module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|react-native-vector-icons' +
      '|@react-navigation' +
      '|react-native-reanimated' +
      '|react-native-toast-message' +
      ')/)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx,ts,tsx}',
    '!src/components/**/*.stories.{js,jsx,ts,tsx}',
    '!src/components/**/*.style.{js,jsx,ts,tsx}',
    '!src/components/**/index.ts',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
};
