import { test } from 'qunit';
import moduleForAcceptance from 'ember-gmail/tests/helpers/module-for-acceptance';

import folderPage from 'ember-gmail/tests/pages/folder';

moduleForAcceptance('Acceptance | favorites');

test('User favorites email from inbox', function(assert) {
  server.create('email', { tags: [] });
  folderPage.visit();
  folderPage.emails(0).star();


  andThen(function() {
    assert.ok(folderPage.emails(0).starred, 'wasn\'t starred');
  });
});
