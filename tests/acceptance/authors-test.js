import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | authors');

test('visiting /authors', function(assert) {
  visit('/authors');

  andThen(function() {
    assert.equal(currentURL(), '/authors');
  });
});

test('editing author name', function(assert) {
  visit('/authors');

  click('.authorName:first');
  let newName = "new name";
  andThen(function() {
    fillIn('.form-control', newName);
  });

  andThen(function() {
    click('.btn-success'); 
  });

  andThen(function() {
    let after = $('.authorName:first').prop('innerHTML'); 
    assert.equal(after, newName, 'edited author name');
  });


});

test('editing author name and leaving', function(assert) {
  visit('/authors');

  let before = "";

  andThen(function() {
    before = find('.authorName:first').prop('innerHTML'); 
    click('.authorName:first');
  });

  andThen(function() {
    click('.btn-danger'); 
  });

  andThen(function() {
    let after = $('.authorName:first').prop('innerHTML'); 
    assert.equal(after, before, 'leaved editing author name');
  });


});


