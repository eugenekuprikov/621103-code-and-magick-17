'use strict';

var setupDialogElement = document.querySelector('.setup');
var dialogHandler = setupDialogElement.querySelector('.upload');

dialogHandler.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };
});
