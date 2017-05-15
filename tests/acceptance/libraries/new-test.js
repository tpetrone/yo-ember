import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | libraries/new', {

  beforeEach() {
  visit('/logout');
  fillIn('#email', 'yuji@email.com');
  fillIn('#password', 'leonardo');
  click('#btnLogin');
  }
});

test('new library', function(assert) {
  visit('/libraries/new');
  let textName = "name5";
  let textAddress = "address5";
  let textPhone = "phone5";
  fillIn('input#inputName', textName);
  fillIn('input#inputAddress', textAddress);
  fillIn('input#inputPhone', textPhone);
  click('button#btnLibrary');

  andThen(() => {
    let name = find('.panel-title:last').prop('innerText');
    let address = find('.addressSpan:last').prop('innerHTML');
    let phone = find('.phoneSpan:last').prop('innerHTML');

    assert.equal(name, textName, 'name is correct');
    assert.equal(address, textAddress, 'address is correct');
    assert.equal(phone, textPhone, 'phone is correct');
  });
});
