Package.describe({
  summary: 'Iron namespace and utilities.',
  version: '0.3.4',
  git: 'https://github.com/eventedmind/iron-core'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1');

  // dependencies
  api.use('underscore');

  // for cloning
  api.use('ejson');

  // remove migrated version
  api.use('cmather:iron-core@0.2.0', {weak: true});

  api.add_files('lib/version_conflict_error.js');
  api.add_files('lib/iron_core.js');

  // symbol exports
  api.export('Iron');
});

Package.on_test(function (api) {
  api.versionsFrom('METEOR@0.9.1');

  api.use('iron:core');
  api.use('tinytest');
  api.use('test-helpers');
  api.add_files('test/iron_core_test.js');
});
