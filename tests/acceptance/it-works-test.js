import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import Ember from 'ember';

moduleForAcceptance('Acceptance | it works');

test('tags are inserted correctly', function(assert) {
  visit('/');

  andThen(function() {
    let bothTags = Ember.$('script[data-test="for-testing"]');

    assert.equal(bothTags.length, 2, 'both tags inserted');

    let asyncTag = Ember.$('script[src="/fake.js"]');

    assert.equal(
      asyncTag.prop('async'),
      true,
      'async attribute correctly added'
    );

    let otherTag = Ember.$('script[src="/bar.js"]');

    assert.ok(
      otherTag.length,
      'other tag also there'
    );
  });
});
