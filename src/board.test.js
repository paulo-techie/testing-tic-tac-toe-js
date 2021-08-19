/**
 * @jest-environment jsdom
 */

describe('gameBoard', () => {
  document.body.innerHTML = `
    <div class="board-container">
        <h1 id="game-state"></h1>
        <div id="board">
            <div id="cell-0" data-cell="0" class="cell"></div>
            <div id="cell-1" data-cell="1" class="cell"></div>
            <div id="cell-2" data-cell="2" class="cell"></div>
            <div id="cell-3" data-cell="3" class="cell"></div>
            <div id="cell-4" data-cell="4" class="cell"></div>
            <div id="cell-5" data-cell="5" class="cell"></div>
            <div id="cell-6" data-cell="6" class="cell"></div>
            <div id="cell-7" data-cell="7" class="cell"></div>
            <div id="cell-8" data-cell="8" class="cell"></div>
        </div>
        <button id="play-again">Play again?</button>
    </div>
  `;

  /* eslint-disable global-require */
  const board = require('./board');
  const shapePlayer1 = 'O';
  const shapePlayer2 = 'X';

  describe('fillPlayedCell', () => {
    it('Return false if game cell is out of range (0-8)', () => {
      board.clear();
      const cell = 10;
      board.fillPlayedCell(cell, 'X');

      expect(board.fillPlayedCell(cell, 'X')).toBe(false);
    });

    it('Return false if the game cell is already occupied', () => {
      const cell = 0;
      board.fillPlayedCell(cell, 'O');

      expect(board.fillPlayedCell(cell, 'X')).toBe(false);
    });

    it('Return true when trying to fill an empty cell', () => {
      const cell = 0;
      board.clear();

      expect(board.fillPlayedCell(cell, 'X')).toBe(true);
    });
  });

  describe('checkWinner', () => {
    it("Return a 'win' on an all of the winning combinations", () => {
      const winningCells = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      const shape = 'X';

      winningCells.forEach((line) => {
        board.clear();
        line.forEach(cell => board.fillPlayedCell(cell, shape));
        expect(board.checkWinner(shape)).toBe('win');
      });
    });

    it("Return 'nowin' if there is no winning combination while still playing", () => {
      board.clear();

      board.fillPlayedCell(1, shapePlayer1);
      board.fillPlayedCell(2, shapePlayer2);
      board.fillPlayedCell(3, shapePlayer1);

      expect(board.checkWinner(shapePlayer2)).toBe('nowin');
    });

    it("Return 'nowin' if there is no winning combination while still playing", () => {

      expect(board.checkWinner(shapePlayer1)).toBe('nowin');
    });

    it("Return 'draw' if there is no winner when all cells are filled", () => {
      board.clear();

      board.fillPlayedCell(0, shapePlayer1);
      board.fillPlayedCell(1, shapePlayer1);
      board.fillPlayedCell(4, shapePlayer1);
      board.fillPlayedCell(5, shapePlayer1);
      board.fillPlayedCell(6, shapePlayer1);
      board.fillPlayedCell(2, shapePlayer2);
      board.fillPlayedCell(3, shapePlayer2);
      board.fillPlayedCell(7, shapePlayer2);
      board.fillPlayedCell(8, shapePlayer2);

      expect(board.checkWinner(shapePlayer2)).toBe('draw');
    });
  });

  describe('fillPlayedCell', () => {

    it('Return false if game cell is out of range (0-8)', () => {
      board.clear();
      const cell = 10;
      board.fillPlayedCell(cell, 'X');

      expect(board.fillPlayedCell(cell, 'X')).toBe(false);
    });
  });
});