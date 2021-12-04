module.exports = {
  name: 'ngxerrors',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngxerrors',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
