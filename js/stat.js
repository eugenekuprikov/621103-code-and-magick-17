'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COL_GAP = 50;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var GAP_WELC = 90;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP_WELC;

var renderCloud = function (ctx, x, y, x1, y1, y2, x2, x3, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.lineTo(x, y2);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y1);
  ctx.lineTo(x2, y);
  ctx.closePath();
  ctx.fill();
}

var renderText = function (ctx, color, font, baseLine, x, y, y1) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textBaseline = baseLine;
  ctx.fillText('Ура вы победили!', x, y);
  ctx.fillText('Список результатов:', x, y1);
}

var renderColor = function () {
  var r = 0;
  var g = 0;
  var b = 255;
  var a = Math.random();
  var colorBlue = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
  return colorBlue;
}

var getMaxElement = function (arr) {
  if (arr.length == 0) {
    alert('массив пустой');
  } else {
      var maxElement = arr[0];
      for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
    }
  return maxElement;
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_X + 4 * GAP, CLOUD_Y + 14 * GAP, CLOUD_Y + 28 * GAP, CLOUD_X * 5 + 3 * GAP, CLOUD_X * 5, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_X + 3 * GAP, CLOUD_Y + 13 * GAP, CLOUD_Y + 27 * GAP, CLOUD_X * 5 + 2 * GAP, CLOUD_X * 5 - GAP, '#fff');
  renderText(ctx, '#000', '16px PT Mono', 'hanging', CLOUD_X + 2 * GAP, CLOUD_Y + 2 * GAP, CLOUD_Y + 2 * GAP + TEXT_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + COL_GAP + (BAR_WIDTH + COL_GAP) * i, CLOUD_HEIGHT - TEXT_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + COL_GAP + (BAR_WIDTH + COL_GAP) * i, CLOUD_HEIGHT - (GAP + TEXT_HEIGHT + (barHeight * times[i]) / maxTime + TEXT_HEIGHT));

    if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = renderColor();
    }
    ctx.fillRect(CLOUD_X + COL_GAP + (BAR_WIDTH + COL_GAP) * i, CLOUD_HEIGHT - TEXT_HEIGHT - GAP, BAR_WIDTH, (-1) * (barHeight * times[i]) / maxTime);
  }
}
