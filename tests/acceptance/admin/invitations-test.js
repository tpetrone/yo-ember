import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | admin/invitations');

test('invitations test', function(assert) {
  visit('/');
  let textEmail = "newtest12@email.com";
  fillIn('input', textEmail);
  click("button#inputButton");

  visit('/admin/invitations');

  andThen(() => {
    assert.equal(find(".email:first").prop("innerHTML"), textEmail, "Email is correct");
  });
});
