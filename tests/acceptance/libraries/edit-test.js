import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | libraries/edit');

test('edit test', function(assert) {
  visit('/libraries/');
  click('a.btn.btn-success.btn-xs');

  let textName = "Name Alterado17";
  let textAddress = "Address Alterado";
  let textPhone = "Phone Alterado";
  fillIn('input#inputEditName', textName);
  fillIn('input#inputEditAddress', textAddress);
  fillIn('input#inputEditPhone', textPhone);
  click('button#btnEditLibrary');

  andThen(() => {
    let inputName = find(".panel-title:first").prop("innerText");
    let inputAddress = find(".addressSpan:first").prop("innerHTML");
    let inputPhone = find(".phoneSpan:first").prop("innerHTML");
    assert.equal(inputName, textName, "Edited name is correct");
    assert.equal(inputAddress, textAddress, "Edited address is correct");
    assert.equal(inputPhone, textPhone, "Edited phone is correct");
  });
});

test('try leave the route', function(assert) {
  visit('/libraries/');
  click('a.btn.btn-success.btn-xs');

  let textName = "Name try leave the route";
  fillIn('input#inputEditName', textName);
  click('a.navbar-brand');

  andThen(() => {
    console.log(currentURL());
    assert.notEqual(currentURL(), '/', "didn't leave the route");
  });

});


