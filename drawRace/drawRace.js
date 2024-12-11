// ¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄
// Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.

// Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato isométrico.

// La información que recibes:

// indices: Un array de enteros que representan el progreso de cada reno en la pista:
// 0: El carril está vacío.
// Número positivo: La posición actual del reno desde el inicio de la pista.
// Número negativo: La posición actual del reno desde el final de la pista.
// length: La longitud de cada carril.
// Devuelve un string que represente la pista de la carrera:

// Cada carril tiene exactamente length posiciones llenas de nieve (~).
// Cada reno se representa con la letra r.
// Los carriles están numerados al final con /1, /2, etc.
// La vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha.


// function drawRace(indices, length) {
//   const track = '~'.repeat(length)
//   const completeTrack = track.split('')
//   return indices.reduce((accumulator, value, index) => {
//     let internalTrack = [...completeTrack]
//     const position = index+1
//     if (value !== 0 ) {
//       internalTrack[value > 0 ? value : length + value] = 'r'
//     }
//     return accumulator + `${' '.repeat(indices.length-position)}${internalTrack.join('')} /${position}${indices.length !== position ? '\n' : ''}`
//   }, '')
// }
function drawRace(indices, length) {
  return indices.reduce((accumulator, value, i) => {
    const leftPad = ' '.repeat(indices.length - 1 - i)
    const index = value < 0 ? length + value : value
    let track = '~'.repeat(length)

    if(index !== 0) {
      track = track.split('')
      track[index] = 'r'
      track = track.join('')
    }
    
    return accumulator + leftPad + track + ` /${i+1}${i+1!==indices.length ? '\n' : ''}`
  }, '')
}

console.log(drawRace([0, 5, -3], 10))
// console.log(drawRace([2, -1, 0, 5], 8))
// console.log(drawRace([3, 7, -2], 12))
