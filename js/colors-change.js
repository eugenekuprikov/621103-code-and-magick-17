'use strict';

(function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var fireballColor = document.querySelector('.setup-fireball-wrap');

  window.colorize(wizardCoat, window.coatsEyes.ARR_COATS, 0);
  window.colorize(wizardEyes, window.coatsEyes.ARR_EYES, 1);
  window.colorizeFire(fireballColor, window.coatsEyes.FIREBALL_COLORS, 2);
})();
