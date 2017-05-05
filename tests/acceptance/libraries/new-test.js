import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | libraries/new');

test('libraries test', function(assert) {
  visit('/libraries/new');
  let textName = "name5";
  let textAddress = "address5";
  let textPhone = "phone5";
  fillIn('input#inputName', textName);
  fillIn('input#inputAddress', textAddress);
  fillIn('input#inputPhone', textPhone);
  click('button#btnLibrary');

  andThen(() => {
    let name = find('.panel-title:first').prop('innerText');
    let address = find('.addressSpan:first').prop('innerHTML');
    let phone = find('.phoneSpan:first').prop('innerHTML');

    assert.equal(name, textName, 'name is correct');
    assert.equal(address, textAddress, 'address is correct');
    assert.equal(phone, textPhone, 'phone is correct');
  });
});
