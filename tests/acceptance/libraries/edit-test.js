import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | libraries/edit', {

  beforeEach() {
    visit('/logout');
  fillIn('#email', 'yuji@email.com');
  fillIn('#password', 'leonardo');
  click('#btnLogin');
  }
});

test('edit test', function(assert) {
  visit('/libraries/');
  click('a.btn.btn-success.btn-xs');

  let textName = "Name Alterado17";
  let textAddress = "Address Alterado";
  let textPhone = "Phone Alterado";
  fillIn('input#inputName', textName);
  fillIn('input#inputAddress', textAddress);
  fillIn('input#inputPhone', textPhone);
  click('button#btnLibrary');

  andThen(() => {
    let inputName = find(".panel-title:first").prop("innerText");
    let inputAddress = find(".addressSpan:first").prop("innerHTML");
    let inputPhone = find(".phoneSpan:first").prop("innerHTML");
    assert.equal(inputName, textName, "Edited name is correct");
    assert.equal(inputAddress, textAddress, "Edited address is correct");
    assert.equal(inputPhone, textPhone, "Edited phone is correct");
  });
});

test('try leave the route and stay', function(assert) {
  visit('/libraries/');
  click('a.btn.btn-success.btn-xs');

  let textName = "Name try leave the route";
  fillIn('input#inputName', textName);
  click('a.navbar-brand');

  click('#btnModalCancel');

  andThen(() => {
    console.log(currentURL());
    assert.equal(find("#inputName").prop("value"), textName);
    assert.notEqual(currentURL(), '/', "didn't leave the route");
  });


});

test('try leave the route and leave', function(assert) {
  visit('/libraries/');
  click('a.btn.btn-success.btn-xs');

  let textName = "Name try leave the route";
  fillIn('input#inputName', textName);
  click('a.navbar-brand');

  click('#btnModalConfirm');

  andThen(() => {
    console.log(currentURL());
    assert.equal(currentURL(), '/', "left the route");
  });


});


