'use strict';

(function () {
  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var ARR_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var ARR_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var createWizard = function () {
    var firstName = window.getArrayRandomElement(ARR_FIRST_NAMES);
    var lastName = window.getArrayRandomElement(ARR_LAST_NAMES);
    var coat = window.getArrayRandomElement(window.coatsEyes.ARR_COATS);
    var eye = window.getArrayRandomElement(window.coatsEyes.ARR_EYES);
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
})();
