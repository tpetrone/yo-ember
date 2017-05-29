import { test } from 'qunit';
import moduleForAcceptance from 'yo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contact');

test('visiting', function(assert) {
  visit('/contact');
  andThen(function() {
    assert.equal(currentURL(), '/contact',  'okk');
  });
});

test('input validation', function(assert) {
  visit('/contact');
  fillIn('input', 'wrong');
  fillIn('textarea', '1234567891');
  andThen(() => {
    let inputClass = $("#divInput").prop("class");
    let split = inputClass.split(" ");
    let classEnd = split[split.length-1];
    let button = $("#contactButton").prop("disabled");
    assert.ok(button, "Input error test");
    assert.equal(classEnd, "has-error", "Input class validation");

  });
});

test('textarea validation', function(assert) {
  visit('/contact');
  fillIn('textarea', '123');
  fillIn('input', 'correct@email.com');
  andThen(() => {
    let textareaClass = $("#divTextarea").prop("class");
    let split = textareaClass.split(" ");
    let classEnd = split[split.length-1];
    let button = $("#contactButton").prop("disabled");
    assert.ok(button, "Textarea error < 5");
    assert.equal(classEnd, "has-error", "Textarea class validation");
  });

  fillIn('textarea', '12345678911');
  fillIn('input', 'correct@email.com');
  andThen(() => {
    let textareaClass = $("#divTextarea").prop("class");
    let split = textareaClass.split(" ");
    let classEnd = split[split.length-1];
    let button = $("#contactButton").prop("disabled");
    assert.ok(button, "Textarea error > 10");
    assert.equal(classEnd, "has-error", "Textarea class validation");
  });
});

test('button validation', function(assert) {
  visit('/contact');
  fillIn('textarea', '12345');
  fillIn('input', 'correct@email.com');
  andThen(() => {
    //textarea
    let textareaClass = $("#divTextarea").prop("class");
    let textareaSplit = textareaClass.split(" ");
    let textareaClassEnd = textareaSplit[textareaSplit.length-1];
    //input
    let inputClass = $("#divInput").prop("class");
    let inputSplit = inputClass.split(" ");
    let inputClassEnd = inputSplit[inputSplit.length-1];
    
    let button = $("#contactButton").prop("disabled");
    assert.equal(button, false, "Button validation");
    assert.equal(inputClassEnd, "has-success", "Input class validation");
    assert.equal(textareaClassEnd, "has-success", "Textarea class validation");

  });

    click('button#contactButton');
  andThen(() => {
    
    assert.ok(find('.alert').text(), 'response message validation');
  });
});

test('contacts list test', function(assert) {
  visit('/contact');
  let textEmail = 'hello2@email.com';
  let textMessage = 'Hello2';
  fillIn('input', textEmail);
  fillIn('textarea', textMessage);
  click('button#contactButton');
  visit('/logged/admin/contacts');
  andThen(() => {
    let email = find('.email:first').prop('innerHTML');
    let message = find('.message:first').prop('innerHTML');

    assert.equal(email, textEmail, 'Email is correct');
    assert.equal(message, textMessage, 'Message is correct');
  });
});
