module.exports = {
  verbose: true,
  testURL:"http://localhost/",
  clearMocks: true,
  testEnvironment: "jsdom",
  moduleDirectories: ['node_modules', '<rootDir>'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/index.tsx',
    '!src/App.tsx',
    '!src/Store.ts',
    '!src/redux/**/*.{ts,tsx}',
    '!src/config/**/*.{ts,tsx}',
    '!src/services/**/*.{ts,tsx}',
    '!src/views/**/*.{ts,tsx}',
    '!src/**/*.d.ts',


  ],
  setupFilesAfterEnv: ['./setupTest.js'],
  globals: {
    'ts-jest': {
      // Tell ts-jest about our typescript config.
      // You can specify a path to your tsconfig.json file,
      // but since we're compiling specifically for node here,
      // this works too.
      tsconfig: {
        target: 'es5',
      },
    },
    window: {}
  },
  // Transforms tell jest how to process our non-javascript files.
  // Here we're using babel for .js and .jsx files, and ts-jest for
  // .ts and .tsx files.  You *can* just use babel-jest for both, if
  // you already have babel set up to compile typescript files.
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    // If you're using babel for both:
    // "^.+\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
