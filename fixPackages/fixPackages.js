// ¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

// Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

// Recibirás un string que contiene letras y paréntesis.
// Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
// Si hay paréntesis anidados, resuelve primero los más internos.
// Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
// Nos ha dejado algunos ejemplos:

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  let iterations = [...packages.matchAll(/\(/g)].length
  for(let i=0; i<iterations; i++) {
    let firstPar = packages.lastIndexOf('(')
    let secondPar = packages.indexOf(')')
    if(firstPar >= secondPar) {
      firstPar = packages.indexOf('(')
      secondPar = packages.indexOf(')')
    }
    const packageSlice = packages.slice(firstPar, secondPar+1)
    const packageSplit = packageSlice.split('')
    packageSplit.shift()
    packageSplit.pop()
    packages = packages.replace(packageSlice, packageSplit.reverse().join(''))
  }
  
  return packages
}




console.log(fixPackages('as(dd)zx'));
console.log(fixPackages('a(bc(def)g)h'));
console.log(fixPackages('abc(def(gh)i)jk'));
console.log(fixPackages('a(b(c))e'));

console.log(fixPackages(''));
console.log(fixPackages('abcdef'));
console.log(fixPackages('a()b'));
console.log(fixPackages('a(b(cd)e)f'));
console.log(fixPackages('a(b)c(d)e'));
console.log(fixPackages('(ab)cd(ef)'));
console.log(fixPackages('a(b!c@d)e'));
console.log(fixPackages('a(123)bc'));

