'use strict';

(function () {
  var setupWizardForm = document.querySelector('.setup-wizard-form');
  var setupSubmit = document.querySelector('.setup-submit');

  var submitForm = function () {
    setupWizardForm.submit();
  };

  setupSubmit.addEventListener('click', submitForm);

  setupSubmit.removeEventListener('click', submitForm);

  setupSubmit.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, submitForm);
  });

  setupSubmit.removeEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, submitForm);
  });
})();
