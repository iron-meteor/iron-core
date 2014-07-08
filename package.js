Package.describe({
  name: 'iron-utils',
  summary: 'Common utilities like inheritance.',
  version: '0.1.0',
  githubUrl: 'https://github.com/eventedmind/iron-utils'
});

Package.on_use(function (api) {
  // dependencies
  api.use('underscore');

  // for helpers like Meteor._inherit
  api.use('meteor');

  // for cloning
  api.use('ejson');

  api.add_files('lib/utils.js');

  // symbol exports
  api.export('Iron');
});

Package.on_test(function (api) {
  api.use('iron-utils');
  api.use('tinytest');
  api.use('test-helpers');

  api.add_files('test/utils_test.js');
});
