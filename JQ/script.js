
// variables

var $firstName = $('.first-name');
var $nickName = $('.nick-name');
var $lastName = $('.last-name');
var $submit = $('.submit-btn');
var $generatedName = $('.generated-name');

// event listeners

$firstName.on('keyup', submitenable);
$nickName.on('keyup', submitenable);
$lastName.on('keyup', submitenable);
$submit.on('click', makeName);

// functions

function makeName() {
  
  fullName = ($firstName.val() + " " + "'" + $nickName.val() + "'" + " " + $lastName.val());
  $generatedName.html (`
    <li contenteditable="true">Name: ${fullName}
    </li>
    <button class="clear-btn">Clear</button>`);
  var $clearbtn = $('.clear-btn');
  $clearbtn.on('click', reset)
  clearInputFields();
};

function clearInputFields() {
  $firstName.val('');
  $nickName.val('');
  $lastName.val('');
  $submit.prop('disabled', true);
};

function submitenable() {
  if ($firstName.val() && $nickName.val() && $lastName.val()) {
    $submit.prop('disabled', false);
  } else {
    $submit.prop('disabled', true);
  };
};

function reset() {
  $generatedName.html ('');
  clearInputFields();
};



