const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

function makeMove(cell, index) {
  if (cell.textContent || isGameOver()) {
    return;
  }
  cell.textContent = currentPlayer;
  cell.classList.add('used');
  if (checkWin(currentPlayer)) {
    alert('Game over! Player ' + currentPlayer + ' wins!');
    return;
  }
  if (isBoardFull()) {
    alert('Draw! No winner.');
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin(player) {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winCombinations.some(combination => {
    return combination.every(index => {
      return cells[index].textContent === player;
    });
  });
}

function isBoardFull() {
  return [...cells].every(cell => {
    return cell.textContent;
  });
}

function isGameOver() {
  return checkWin('X') || checkWin('O') || isBoardFull();
}

function replayGame() {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('used');
  });
  currentPlayer = 'X';
}
