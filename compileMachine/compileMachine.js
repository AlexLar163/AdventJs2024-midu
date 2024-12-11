// Los elfos programadores están creando un pequeño ensamblador mágico para controlar las máquinas del taller de Santa Claus.

// Para ayudarles, vamos a implementar un intérprete sencillo que soporte las siguientes instrucciones mágicas:

// MOV x y: Copia el valor x (puede ser un número o el contenido de un registro) en el registro y
// INC x: Incrementa en 1 el contenido del registro x
// DEC x: Decrementa en 1 el contenido del registro x
// JMP x y: Si el valor del registro x es 0 entonces salta a la instrucción en el índice y y sigue ejecutándose el programa desde ahí.
// Comportamiento esperado:
// Si se intenta acceder, incrementar o decrementar a un registro que no ha sido inicializado, se tomará el valor 0 por defecto.
// El salto con JMP es absoluto y lleva al índice exacto indicado por y.
// Al finalizar, el programa debe devolver el contenido del registro A. Si A no tenía un valor definido, retorna undefined.

function compile(instructions) {
  let registries = []
  for (let i=0; i<instructions.length; i++) {
    let instruction = instructions[i].split(' ')
    let command = instruction[0]
    let paramOne = instruction[1]
    let paramTwo = instruction[2]
    if (command === 'MOV') {
      if(/^-?\d+$/g.test(paramOne)) {
        let registryExist = registries.find(({name}) => name === paramTwo)
        if (!registryExist) {
          registryExist = {
            name: paramTwo,
            qty: 0
          }
        }
        registryExist.qty +=  parseInt(paramOne)
        registries.push(registryExist)
      }
      if(/^-?\d+$/g.test(paramOne)) {
        let registryExist = registries.find(({name}) => name === paramTwo)
        if (!registryExist) {
          registryExist = {
            name: paramTwo,
            qty: 0
          }
        }
        registryExist.qty +=  parseInt(paramOne)
        registries.push(registryExist)
        continue
      }
      let registryExist = registries.find(({name}) => name === paramTwo)
      registryExist
      continue
    }
    if (command === 'JMP') {
      let registryExist = registries.find(({name}) => name === paramOne)
      
      if (registryExist?.qty === 0) {
        i = paramTwo-1
      }
      continue
    }
    if (command === 'INC') {
      let registryExist = registries.find(({name}) => name === paramOne)
      if (!registryExist) {
        registryExist = {
          name: paramOne,
          qty: 0
        }
        registries.push(registryExist)
      } else {
        registries = registries.map(value => {
          if(value.name = paramOne) {
            value.qty += 1
          }
          return value
        })
      }
      continue
    }
    if (command === 'DEC') {
      let registryExist = registries.find(({name}) => name === paramOne)
      if (!registryExist) {
        registryExist = {
          name: paramOne,
          qty: 0
        }
        registries.push(registryExist)
      } else {
        registries = registries.map(value => {
          if(value.name = paramOne) {
            value.qty -= 1
          }
          return value
        })
      }
      continue
    }
  }
  console.log("🚀 ~ compile ~ registries:", registries)
  return registries.find(registry => registry.name === 'A')?.qty
}

const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]
console.log(compile(instructions))
