let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
let isItWin = 0;

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));
const resetButton = document.querySelector('.reset')

const move = ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";
  displayTurn(turn);

  checkWin();
};

function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
  const turnHeader = document.querySelector("h1.turn")
  turnHeader.textContent = `${turn.toUpperCase()} turn`
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
    for (let i = 0; i < 3; i++) {
      let vertical = ''
      let horizontal = ''
      for (let j = 0; j < 3; j++) {
        vertical += symbols[i][j]
        horizontal += symbols[j][i]
      }
      if (horizontal === 'xxx' || 
      vertical === 'xxx') {
        isItWin = 1
        board.removeEventListener('click', move)
        return alert('X wins!');
      }
      if (horizontal === 'ooo' || 
      vertical === 'ooo') {
        isItWin = 1
        board.removeEventListener('click', move)
        return alert('O wins!');
      }
    }
    
    let diagonal = ''
    let reversedDiagonal = ''
    for (let i = 0; i < 3; i++) {
      diagonal += symbols[i][i]
      reversedDiagonal += symbols[2-i][i]
    }

    if (diagonal === 'xxx' || 
    reversedDiagonal === 'xxx') {
        isItWin = 1
        board.removeEventListener('click', move)
        return alert('X wins!');
      }
      if (diagonal === 'ooo' || 
      reversedDiagonal === 'ooo') {
        isItWin = 1
        board.removeEventListener('click', move)
        return alert('O wins!');
      }
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
function reset() {
  // 4. zresetuj stan gry
  symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
  turn = 'x';
  tiles.forEach(tile => {
    if (tile.classList.lenght !== 1) {
      tile.classList = ['tile'];
    }
  });
  if (isItWin) {
    board.addEventListener('click', move);
    isItWin = 0;
  }
}

board.addEventListener("click", move)
resetButton.addEventListener('click', reset);
