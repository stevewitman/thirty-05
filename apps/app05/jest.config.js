module.exports = {
  name: 'app05',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app05',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
