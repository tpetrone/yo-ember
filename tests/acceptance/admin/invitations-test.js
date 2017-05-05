import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | admin/invitations');

test('visiting /admin/invitations', function(assert) {
	visit('/admin/invitations');

	andThen(function() {
		assert.equal(currentURL(), '/admin/invitations');
	});
});

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

test('click delete and confirm', function(assert) {
  //let originalAlert = window.confirm;
	window.confirm = function() {return true;};

	visit('/admin/invitations');

	let idBefore = $(".id:first");
	
	andThen(() => {
		$('.btn-danger:first').click();
	});

  // This isn't the ideal solution, it's provisional.
	andThen(() => {
		visit('/admin/invitations');
	});

	andThen(() => {
		let idAfter = $(".id:first");
		assert.notEqual(idAfter, idBefore, "deleted the invitation");
	});
});
