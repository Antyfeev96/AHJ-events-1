export default class GameController {
  constructor(gameplay) {
    this.gamePlay = gameplay;
    this.goblin = document.createElement('img');
    this.goblin.src = 'src/images/goblin.png';
    this.goblin.alt = 'goblin';
    this.gamePlay.renderBoard();
    this.gamePlay.renderScores();
    this.cells = Array.from(document.getElementsByClassName('board__cell'));
    this.scoresEl = this.gamePlay.getScorePoints();
    this.failsEl = +this.gamePlay.getScoreFails();
  }

  init() {
    this.interval = setInterval(() => this.changeImg(), 1000);
    this.gamePlay.body.addEventListener('click', (event) => this.playerClickEvent(event));
  }

  changeImg() {
    const filteredCells = this.cells.filter((cell) => cell.getElementsByTagName('img').length === 0);
    const newGoblinCell = Math.floor(Math.random() * filteredCells.length);
    filteredCells[newGoblinCell].append(this.goblin);
  }

  increasePoints() {
    this.scoresEl += 1;
    this.gamePlay.body.querySelector('.scores__points').textContent = this.scoresEl;
  }

  increaseFails() {
    this.failsEl += 1;
    this.gamePlay.body.querySelector('.scores__count').textContent = this.failsEl;
  }

  playerClickEvent(event) {
    if (this.failsEl === 5) {
      return;
    }
    if (event.target.closest('.board__cell') === this.gamePlay.body.querySelector('img').closest('.board__cell')) {
      this.increasePoints();
    } else {
      this.increaseFails();
      if (this.failsEl === 5) {
        this.endGame();
      }
    }
  }

  endGame() {
    alert('You lose!');
    clearInterval(this.interval);
    this.gamePlay.setPointsToZero();
    this.goblin.remove();
    return false;
  }
}
