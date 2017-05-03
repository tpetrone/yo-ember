import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | libraries/index');

test('visiting /libraries/index', function(assert) {
  visit('/libraries/');

  andThen(function() {
    assert.equal(currentURL(), '/libraries/');
  });
});

test('click delete and confirm', function(assert) {
  assert.expect(0);

  //let originalAlert = window.confirm;
  //window.confirm = function() {return true};

  visit('/libraries/');

  andThen(() => {
    console.log($(".panel").length);
  });
  
  andThen(() => {
    $('.btn-danger:first').click();
  });


  // This isn't the ideal solution, it's provisional.
  andThen(() => {
    visit('/libraries/');
  });

  andThen(() => {
    console.log($(".panel").length);

  });


  
});
