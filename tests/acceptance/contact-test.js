import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contact');

test('visiting /contact', function(assert) {
  visit('/contact');
  andThen(function() {
    assert.equal(currentURL(), '/contact',  'okk');
  });
});

test('findingInputs /contact', function(assert) {
  visit('/contact');
  andThen(function() {
  	var a = findWithAssert("[type='email']");
 	assert.ok(a, 'ok'); 
  });
});