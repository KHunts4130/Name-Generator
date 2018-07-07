
// variables

var $firstNameInput = $('.first-name-input');
var $nickNameInput = $('.nick-name-input');
var $lastNameInput = $('.last-name-input');
var $submitButton = $('.submit-button');
var $generatedName = $('.generated-name');

// event listeners

$firstNameInput.on('keyup', submitEnable);
$nickNameInput.on('keyup', submitEnable);
$lastNameInput.on('keyup', submitEnable);
$submitButton.on('click', makeName);
$generatedName.on('click', 'li .clear-button', reset);

// functions

function makeName() {
  fullName = ($firstNameInput.val() + " " + "'" + $nickNameInput.val() + "'" + " " + $lastNameInput.val());
  $generatedName.html (`
    <li contenteditable="true">Name: ${fullName}
    <button class="clear-button">Clear</button></li>`);
  clearInputFields();
};

function clearInputFields() {
  $firstNameInput.val('');
  $nickNameInput.val('');
  $lastNameInput.val('');
  $submitButton.prop('disabled', true);
};

function submitEnable() {
  if ($firstNameInput.val() && $nickNameInput.val() && $lastNameInput.val()) {
    $submitButton.prop('disabled', false);
  } else {
    $submitButton.prop('disabled', true);
  };
};

function reset() {
  $generatedName.html('');
  clearInputFields();
};



