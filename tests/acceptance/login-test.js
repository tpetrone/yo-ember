import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function(assert) {
  visit('/logout');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('sign in', function(assert) {
  visit('/logout');
  visit('/login');
  fillIn('#email', 'yuji@email.com');
  fillIn('#password', 'leonardo');
  click('#btnLogin');

  andThen(function() {
    assert.equal(currentURL(), '/logged/admin/seeder');
  });
});
