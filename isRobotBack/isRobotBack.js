// Los elfos del Polo Norte han creado un robot 🤖 especial que ayuda a Papá Noel a distribuir regalos dentro de un gran almacén. El robot se mueve en un plano 2D y partimos desde el origen (0, 0).

// Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.

// Las órdenes básicas del robot son:

// L: Mover hacia la izquierda
// R: Mover hacia la derecha
// U: Mover hacia arriba
// D: Mover hacia abajo
// Pero también tiene ciertos modificadores para los movimientos:

// *: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
// !: El siguiente movimiento se invierte (ej: R!L se considera como RR)
// ?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)
// Nota: Cuando el movimiento se invierte con ! se contabiliza el movimiento invertido y no el original. Por ejemplo, !U?U invierte el movimiento de U, por lo que contabiliza que se hizo el movimiento D pero no el U. Así !U?U se traduce como D?U y, por lo tanto, se haría el movimiento U final.

// Debes devolver:

// true: si el robot vuelve a estar justo donde empezó
// [x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo
function isRobotBack(moves) { 
  const board = [0, 0]
  moves = moves.replace('*', moves)
  
  for(let i=0; i<moves.length; i++) {
    let move = moves.charAt(i)
    
    if(moves.charAt(i-1) === '?') {
      const regex = new RegExp(moves.charAt(i))
      if(regex.test(moves.slice(0, i))) continue
    }
    const beforeValue = move
    if(['L', 'R'].includes(move)) {
      move = moves.charAt(i-1) === '!' 
        ? move === 'L' 
          ? 'R' 
          : 'L'
        : move
      moves = moves.replace(`!${beforeValue}`, move)
      board[0] += move === 'R' ? 1 : -1 
      continue
    }
    if(['U', 'D'].includes(move)) {
      move = moves.charAt(i-1) === '!' 
      ? move === 'U' 
        ? 'D' 
        : 'U'
      : move
      moves = moves.replace(`!${beforeValue}`, move)
      board[1] += move === 'U' ? 1 : -1 
    }
  }
  return board.every(value => value === 0) || board
}

// console.log(isRobotBack('R'))
// console.log(isRobotBack('RL'))
// console.log(isRobotBack('RLUD'))
// console.log(isRobotBack('*RU'))
// console.log(isRobotBack('LLL!R'))
// console.log(isRobotBack('U?D'))
// console.log(isRobotBack('R!U?U'))
console.log(isRobotBack('LLL!R'))