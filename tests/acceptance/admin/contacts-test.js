import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | admin/contacts');

test('visiting /admin/contacts', function(assert) {
	visit('/admin/contacts');

	andThen(function() {
		assert.equal(currentURL(), '/admin/contacts');
	});
});

test('click delete and confirm', function(assert) {
  //let originalAlert = window.confirm;
	window.confirm = function() {return true;};

	visit('/admin/contacts');

	let idBefore = $(".id:first");
	
	andThen(() => {
		$('.btn-danger:first').click();
	});

  // This isn't the ideal solution, it's provisional.
	andThen(() => {
		visit('/admin/contacts');
	});

	andThen(() => {
		let idAfter = $(".id:first");
		assert.notEqual(idAfter, idBefore, "deleted the contact");
	});
});


