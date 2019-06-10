'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var ARR_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var ARR_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var ARR_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var ARR_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var getArrayRandomElement = function (arr) {
  if (arr && arr.length) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
};

var createWizard = function () {
  var firstName = getArrayRandomElement(ARR_FIRST_NAMES);
  var lastName = getArrayRandomElement(ARR_LAST_NAMES);
  var coat = getArrayRandomElement(ARR_COATS);
  var eye = getArrayRandomElement(ARR_EYES);
  var wizard = {name: firstName + ' ' + lastName,
                coatColor: coat,
                eyesColor: eye};
  return wizard;
};

var createWizards = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards[i] = createWizard();
  }
  return wizards;
};

var arrWizards = createWizards();

for (var i = 0; i < arrWizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label')
    .textContent = arrWizards[i].name;
  wizardElement.querySelector('.wizard-coat')
    .style.fill = arrWizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes')
    .style.fill = arrWizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}
