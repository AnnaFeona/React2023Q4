// eslint-disable-next-line no-undef
module.exports = {
  setupFiles: ['./jest.setup.js'],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': "<rootDir>/__mocks__/fileMock.js",
    '\\.(css|less|scss)$': "identity-obj-proxy"
  },
}