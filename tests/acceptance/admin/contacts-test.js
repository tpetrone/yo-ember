import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | logged/admin/contacts', {

	beforeEach() {

		visit('/logout');
   fillIn('#email', 'yuji@email.com');
   fillIn('#password', 'leonardo');
   click('#btnLogin');
 }
});

test('visiting /logged/admin/contacts', function(assert) {
  visit('/logged/admin/contacts');

  andThen(function() {
    assert.equal(currentURL(), '/logged/admin/contacts');
  });
});

test('click delete and confirm', function(assert) {
  //let originalAlert = window.confirm;
  window.confirm = function() {return true;};

  visit('/logged/admin/contacts');

  let idBefore = $(".id:first");

  andThen(() => {
  	$('.btn-danger:first').click();
  });

  // This isn't the ideal solution, it's provisional.
  andThen(() => {
  	visit('/logged/admin/contacts');
  });

  andThen(() => {
  	let idAfter = $(".id:first");
  	assert.notEqual(idAfter, idBefore, "deleted the contact");
  });
});
