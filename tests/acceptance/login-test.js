import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('sign in', function(assert) {
  visit('/login');
  fillIn('#email', 'teste@email.com');
  fillIn('#password', 'daniel');
  click('#btnLogin');

  andThen(function() {
    assert.equal(currentURL(), '/admin/seeder');
  });
});
