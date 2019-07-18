'use strict';

(function () {
  var colors = document.querySelector('.setup-player').querySelectorAll('input');
  window.getArrayRandomElement = function (arr) {
    if (arr && arr.length) {
      var randomElement = arr[Math.floor(Math.random() * arr.length)];
    }
    return randomElement;
  };

  window.colorize = function (element, arr, ind) {
    element.addEventListener('click', function () {
      var color = window.getArrayRandomElement(arr);
      element.style.fill = color;
      colors[ind].value = color;
    });
  };

  window.colorizeFire = function (element, arr, ind) {
    element.addEventListener('click', function () {
      var color = window.getArrayRandomElement(arr);
      element.style.background = color;
      colors[ind].value = color;
    });
  };
})();
