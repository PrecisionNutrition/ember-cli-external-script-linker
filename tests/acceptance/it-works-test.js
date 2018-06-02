import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | it works', function(hooks) {
  setupApplicationTest(hooks);

  test('tags are inserted correctly', async function(assert) {
    await visit('/');

    let bothTags = document.querySelectorAll('script[data-test="for-testing"]');

    assert.equal(bothTags.length, 2, 'both tags inserted');

    let asyncTag = document.querySelector('script[src="/fake.js"]');

    assert.equal(
      asyncTag.getAttribute('async'),
      'true',
      'async attribute correctly added'
    );

    let otherTag = document.querySelector('script[src="/bar.js"]');

    assert.ok(
      otherTag,
      'other tag also there'
    );
  });
});
