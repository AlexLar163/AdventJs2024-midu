// Los elfos están jugando con un tren 🚂 mágico que transporta regalos. Este tren se mueve en un tablero representado por un array de strings.

// El tren está compuesto por una locomotora (@), seguida de sus vagones (o), y debe recoger frutas mágicas (*) que le sirve de combustible. El movimiento del tren sigue las siguientes reglas:

// Recibirás dos parámetros board y mov.

// board es un array de strings que representa el tablero:

// @ es la locomotora del tren.
// o son los vagones del tren.
// * es una fruta mágica.
// · son espacios vacíos.
// mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:

// 'L': izquierda
// 'R': derecha
// 'U': arriba
// 'D': abajo.
// Con esta información, debes devolver una cadena de texto:

// 'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
// 'eat': Si el tren recoge una fruta mágica (*).
// 'none': Si avanza sin chocar ni recoger ninguna fruta mágica.

function moveTrain(board, mov) {
  for(let i=0; i<board.length; i++) {
    const boardRow = board[i].indexOf('@')
    if(boardRow < 0) continue
    const value = ['L', 'U'].includes(mov) ? -1 : 1
    const boardValue = ['L', 'R'].includes(mov) 
      ? board[i].at(boardRow + value) 
      : board[i+value]?.at(boardRow)
    if(boardValue === '·') return 'none'
    if(boardValue === '*') return 'eat'
    break
  }
  return 'crash'
}

const board = [
  '···*·',
  '···.·',
  '···o·',
  '···o·',
  '···@·',
]

console.log(moveTrain(board, 'R'))
console.log(moveTrain(board, 'L'))
console.log(moveTrain(board, 'U'))
console.log(moveTrain(board, 'D'))