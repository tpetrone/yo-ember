import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | logged/admin/invitations', {

  beforeEach() {
    visit('/logout');
  fillIn('#email', 'yuji@email.com');
  fillIn('#password', 'leonardo');
  click('#btnLogin');
  }
});

test('visiting /logged/admin/invitations', function(assert) {
	visit('/logged/admin/invitations');

	andThen(function() {
		assert.equal(currentURL(), '/logged/admin/invitations');
	});
});

test('invitations test', function(assert) {
	visit('/');
	let textEmail = "newtest12@email.com";
	fillIn('input', textEmail);
	click("button#inputButton");

	visit('/logged/admin/invitations');

	andThen(() => {
		assert.equal(find(".email:first").prop("innerHTML"), textEmail, "Email is correct");
	});
});

test('click delete and confirm', function(assert) {
  //let originalAlert = window.confirm;
  window.confirm = function() {return true;};

  visit('/logged/admin/invitations');

  let idBefore = $(".id:first");
  
  andThen(() => {
  	$('.btn-danger:first').click();
  });

  // This isn't the ideal solution, it's provisional.
  andThen(() => {
  	visit('/logged/admin/invitations');
  });

  andThen(() => {
  	let idAfter = $(".id:first");
  	assert.notEqual(idAfter, idBefore, "deleted the invitation");
  });
});
