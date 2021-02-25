import GamePlay from './GamePlay';
import GameController from './GameController';

const gamePlay = new GamePlay();
const game = new GameController(gamePlay);

game.init();
