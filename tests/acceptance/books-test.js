import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | books');

test('visiting /books', function(assert) {
  visit('/books');

  andThen(function() {
    assert.equal(currentURL(), '/books');
  });
});

test('editing book title', function(assert) {
  visit('/books');

  click('.bookTitle:first');
  let newBook = "new book";
  andThen(function() {
    fillIn('.form-control', newBook);
  });

  andThen(function() {
    click('.btn-success'); 
  });

  andThen(function() {
    let after = $('.bookTitle:first').prop('innerHTML'); 
    assert.equal(after, newBook, 'edited book title');
  });


});

test('editing book title and leaving', function(assert) {
  visit('/books');

  let before = "";

  andThen(function() {
    before = find('.bookTitle:first').prop('innerHTML'); 
    click('.bookTitle:first');
  });

  andThen(function() {
    click('.btn-danger'); 
  });

  andThen(function() {
    let after = $('.bookTitle:first').prop('innerHTML'); 
    assert.equal(after, before, 'leaved editing book title');
  });


});
