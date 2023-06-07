module.exports = {
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@utils/(.*)': '<rootDir>/utils/$1',
    '@datastructure/(.*)': '<rootDir>/datastructure/$1',
    '@algorithm/(.*)': '<rootDir>/algorithm/$1',
    '@boj/(.*)': '<rootDir>/boj/$1',
    '@pgs/(.*)': '<rootDir>/pgs/$1',
  },
};
