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
