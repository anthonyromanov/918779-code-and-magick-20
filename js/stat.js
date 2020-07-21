'use strict';

var getMaxElement = function (max) {

  var maxElement = max[0];

  for (var i = 0; i <= max.length - 1; i++) {

    if (max[i] > maxElement) {
      maxElement = max[i];
    }

  }

  return maxElement;

};

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  var WINDOWS_X = 140;
  var WINDOWS_Y = 120;
  var BAR_Y = 250;
  var GAP = 50;
  var TEXT_GAP = 10;
  var BAR_WIDTH = 40;
  var BAR_POSITION = -150;
  var BAR_HEIGHT = 150;

  for (var i = 0; i <= names.length - 1; i++) {

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor((Math.random() * 100)) + '%, 50%';
    }

    if (i > 0) {
      if (names[i] === 'Вы') {
        var swap = names[i];
        var swaper = names[0];
        names[0] = swap;
        names[i] = swaper;
        ctx.fillText(names[0], WINDOWS_X, WINDOWS_Y + BAR_HEIGHT);
        ctx.fillText(Math.round(times[i]), WINDOWS_X, BAR_Y - TEXT_GAP + (BAR_POSITION * times[i] / maxTime));
        ctx.fillRect(WINDOWS_X, BAR_Y, BAR_WIDTH, BAR_POSITION * times[i] / maxTime);
        WINDOWS_X = WINDOWS_X - GAP;

      } else {
        ctx.fillText(names[i], WINDOWS_X + GAP + (GAP * i), WINDOWS_Y + BAR_HEIGHT);
        ctx.fillText(Math.round(times[i]), WINDOWS_X + GAP + (GAP * i), BAR_Y - TEXT_GAP + (BAR_POSITION * times[i] / maxTime));
        ctx.fillRect(WINDOWS_X + GAP + (GAP * i), BAR_Y, BAR_WIDTH, BAR_POSITION * times[i] / maxTime);
      }

    } else if (names[i] === 'Вы') {
      ctx.fillText(names[i], WINDOWS_X, WINDOWS_Y + BAR_HEIGHT);
      ctx.fillText(Math.round(times[i]), WINDOWS_X, BAR_Y - TEXT_GAP + (BAR_POSITION * times[i] / maxTime));
      ctx.fillRect(WINDOWS_X, BAR_Y, BAR_WIDTH, BAR_POSITION * times[i] / maxTime);
      WINDOWS_X = WINDOWS_X - GAP;

    } else {
      ctx.fillText(names[i], WINDOWS_X + GAP, WINDOWS_Y + BAR_HEIGHT);
      ctx.fillText(Math.round(times[i]), WINDOWS_X + GAP, BAR_Y - TEXT_GAP + (BAR_POSITION * times[i] / maxTime));
      ctx.fillRect(WINDOWS_X + GAP, BAR_Y, BAR_WIDTH, BAR_POSITION * times[i] / maxTime);
    }

  }

};
