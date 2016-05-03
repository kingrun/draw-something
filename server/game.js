'use strict';

let Game = function () {
  this.answer = 'answer';
};

Game.prototype.match = function(guess) {
  return this.answer.toLowerCase() === guess.toLowerCase();
};

module.exports = Game;