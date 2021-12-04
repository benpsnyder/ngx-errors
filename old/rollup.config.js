export default {
  entry: 'dist/index.js',
  dest: 'dist/bundle/hackages.ngxerrors.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'ngxerrors',
  globals: {
    'typescript': 'ts'
  }
};
