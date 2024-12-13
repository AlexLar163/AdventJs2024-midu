// Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

// type indica si es una bota izquierda (I) o derecha (R).
// size indica el tamaño de la bota.
// Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

// ¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!



function organizeShoes(shoes) {
  const LEFT = "I"
  const RIGHT = "R"
  const organizedResult = []
  const accumulator = {}

  shoes.forEach((value) => {
    const size = value.size
    const type = value.type

    if (accumulator?.[size]) {
      accumulator[size] = {
        [LEFT]: 0,
        [RIGHT]: 0
      }
    }
    accumulator[size][type] += 1
    if(accumulator[size][LEFT] >= 1 && accumulator[size][RIGHT] >= 1) {
      accumulator[size] = {
        [LEFT]: accumulator[size][LEFT] - 1,
        [RIGHT]: accumulator[size][RIGHT] - 1
      }
      organizedResult.push(size)
    }
  })
  return organizedResult
}


const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]
console.log(organizeShoes(shoes))

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
console.log(organizeShoes(shoes2))

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

console.log(organizeShoes(shoes3))