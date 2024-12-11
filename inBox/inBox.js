// Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

// La caja tiene un regalo (*) y cuenta como dentro de la caja si:

// Está rodeada por # en los bordes de la caja.
// El * no está en los bordes de la caja.
// Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

function inBox(box = []) {
  let giftInBox = false
  const borderRegex = /\*/
  const middleRegex = /^#\ *\*\ *#$/
  if(borderRegex.test(box[0]) === true) return giftInBox
  box.shift()
  if(borderRegex.test(box[box.length-1]) === true) return giftInBox
  box.pop()

  for(let i=0; i<box.length; i++) {
    if(middleRegex.test(box[i])) {
      giftInBox = true
      i = box.length
    }
  }
  
  return giftInBox
}

let gift1 = inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true
console.log("gift1: " + gift1);
console.log("================================================");

let gift2 = inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true
console.log("gift2: " + gift2);
console.log("================================================");

let gift3 = inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false
console.log("gift3: " + gift3);
console.log("================================================");

let gift4 = inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) 
console.log("gift4: " + gift4);
console.log("================================================");
