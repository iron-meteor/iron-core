Package.describe({
  summary: 'Iron namespace and utilities.',
  version: '0.3.1',
  git: 'https://github.com/eventedmind/iron-core'
});

Package.on_use(function (api) {
  // dependencies
  api.use('underscore@1.0.0');

  // for cloning
  api.use('ejson@1.0.0');

  // remove migrated version
  api.use('cmather:iron-core@0.2.0', {weak: true});

  api.add_files('lib/version_conflict_error.js');
  api.add_files('lib/iron_core.js');

  // symbol exports
  api.export('Iron');
});

Package.on_test(function (api) {
  api.use('iron:core');
  api.use('tinytest');
  api.use('test-helpers');
  api.add_files('test/iron_core_test.js');
});
