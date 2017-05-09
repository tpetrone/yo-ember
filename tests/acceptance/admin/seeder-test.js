import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | admin/seeder');

test('visiting /admin/seeder', function(assert) {
	visit('/admin/seeder');

	andThen(function() {
		assert.equal(currentURL(), '/admin/seeder');
	});
});

test('deleting all libraries', function(assert) {
	visit('/admin/seeder');

	andThen(function() {
		click('.btn-danger:first');
	});

	andThen(function() {
		assert.equal(find('.modelNumber:first').prop("innerHTML"), 
			"0", "deleted all libraries");
	});
});

/*test('deleting all authors and books', function(assert) {
	visit('/admin/seeder');

	andThen(function() {
		click('.btn-danger:last');
	});

	andThen(function() {
		let item = $('.modelNumber')[1];
		let authors = $(item).text();
		assert.equal(authors, "0", "deleted all authors");
		assert.equal(find('.modelNumber:last').prop("innerHTML"), 
			"0", "deleted all books");
	});
});*/

test('generating libraries', function(assert) {
	visit('/admin/seeder');

	let before;
	let add = 5;

	andThen(function() {
		before = find('.modelNumber:first').prop("innerHTML");
		fillIn('.inputGenerate:first', add);
	});

	andThen(function() {
		click('.btn-primary:first');
	});

	andThen(function() {
		let after = find('.modelNumber:first').prop("innerHTML");
		assert.equal(after, parseInt(before)+add, "generated libraries");
	});
});

/*test('generating authors and books', function(assert) {
	visit('/admin/seeder');

	let beforeAuthors;
	let beforeBooks;
	let add = 5;

	andThen(function() {
		let item = $('.modelNumber')[1];
		beforeAuthors = $(item).text();
		beforeBooks = find('.modelNumber:last').prop("innerHTML");
		fillIn('.inputGenerate:last', add);
	});

	andThen(function() {
		click('.btn-primary:last');
	});

	andThen(function() {
		let item = $('.modelNumber')[1];
		let afterAuthors = $(item).text();
		let afterBooks = find('.modelNumber:last').prop("innerHTML");
		
		assert.equal(afterAuthors, parseInt(beforeAuthors)+add, "generated authors");
		assert.ok(parseInt(afterBooks) > parseInt(beforeBooks), "generated books");
	});
});*/
