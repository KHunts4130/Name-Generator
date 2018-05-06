
// Variables

var firstName = document.querySelector('.first-name');
var nickName = document.querySelector('.nick-name');
var lastName = document.querySelector('.last-name');
var submitButton = document.querySelector('.submit-btn');
var generatedName = document.querySelector('.generated-name');

// event Listeners

firstName.addEventListener('keyup', submitEnable);
nickName.addEventListener('keyup', submitEnable);
lastName.addEventListener('keyup', submitEnable);
submitButton.addEventListener('click', makeName);

// functions

function makeName() {
  fullName = (firstName.value + " " + "'" + nickName.value + "'" + " " + lastName.value);
  generatedName.innerHTML = (`
    <li contenteditable="true">Name: ${fullName}
    </li>
    <button class="clear-btn">Clear</button>`);
  var clearBtn = document.querySelector('.clear-btn');
  clearBtn.addEventListener('click', reset);
  clearInputFields();
};

function clearInputFields() {
  firstName.value = '';
  nickName.value = '';
  lastName.value = '';
  submitButton.disabled = true;
};

function submitEnable() {
  var inputLength = (firstName.value.length * nickName.value.length * lastName.value.length);
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