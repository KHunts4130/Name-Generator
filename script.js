
// Variables

var firstNameInput = document.querySelector('.first-name-input');
var nickNameInput = document.querySelector('.nick-name-input');
var lastNameInput = document.querySelector('.last-name-input');
var submitButton = document.querySelector('.submit-button');
var generatedName = document.querySelector('.generated-name');

// event Listeners

firstNameInput.addEventListener('keyup', submitEnable);
nickNameInput.addEventListener('keyup', submitEnable);
lastNameInput.addEventListener('keyup', submitEnable);
submitButton.addEventListener('click', makeName);

// functions

function makeName() {
  fullName = (firstNameInput.value + " " + "'" + nickNameInput.value + "'" + " " + lastNameInput.value);
  generatedName.innerHTML = (`
    <li contenteditable>Name: ${fullName}</li>
    <button class="clear-button">Clear</button>`);
  generatedName.addEventListener('click', reset);
  clearInputFields();
};

function clearInputFields() {
  firstNameInput.value = '';
  nickNameInput.value = '';
  lastNameInput.value = '';
  submitButton.disabled = true;
};

function submitEnable() {
  var inputLength = (firstNameInput.value.length * nickNameInput.value.length * lastNameInput.value.length);
  if (inputLength === 0) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  };
};

function reset() {
  generatedName.innerHTML = '';
  clearInputFields();
};
