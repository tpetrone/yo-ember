import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('input validation', function(assert) {
  visit('/');
  fillIn('input', 'wrong');
  andThen(() => {
    let button = $("#inputButton").prop("disabled");
    assert.ok(button, "Input error test");
  });
});

test('button validation', function(assert) {
  visit('/');
  fillIn('input', 'correct@email.com');
  andThen(() => {
    let button = $("#inputButton").prop("disabled");
    assert.equal(button, false, "Button validation");
  });
});
