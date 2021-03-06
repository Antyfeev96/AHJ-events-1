export default class GamePlay {
  constructor() {
    this.body = document.body;
  }

  renderBoard() {
    this.body.innerHTML = `
    <div class="board">
        <div class="board__cell"></div>
        <div class="board__cell"></div>
        <div class="board__cell"></div>
        <div class="board__cell"></div>
        <div class="board__cell"></div>
        <div class="board__cell"></div>
        <div class="board__cell"></div>
        <div class="board__cell"></div>
        <div class="board__cell"></div>
        <div class="board__cell"></div>
        <div class="board__cell"></div>
        <div class="board__cell"></div>
        <div class="board__cell"></div>
        <div class="board__cell"></div>
        <div class="board__cell"></div>
        <div class="board__cell"></div>
    </div>`;
  }

  renderScores() {
    this.body.innerHTML += `
        <div class="scores">
            <div class="scores__title">Scores</div>
            <div class="scores__points">0</div>
            <div class="scores__fails">fails</div>
            <div class="scores__count">0</div>
        </div>
        `;
  }

  getScorePoints() {
    return +this.body.querySelector('.scores__points').textContent;
  }

  getScoreFails() {
    return +this.body.querySelector('.scores__count').textContent;
  }

  setPointsToZero() {
    this.body.querySelector('.scores__points').textContent = 0;
    this.body.querySelector('.scores__count').textContent = 0;
  }
}
