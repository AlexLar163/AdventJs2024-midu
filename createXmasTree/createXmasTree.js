/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  const width = height * 2 - 1
  const treeBack = '_'
  const trunk = '#'
  const treeMiddle = Math.abs(width / 2)
  let tree = ''

  for(let row = 0; row < height; row++) {
    const treeRepeat = treeBack.repeat(treeMiddle - row)
    tree += treeRepeat + ornament.repeat(row * 2 + 1) + treeRepeat + '\n'
  }

  let treeTrunk = treeBack.repeat(treeMiddle)
  treeTrunk += trunk + treeTrunk
  return tree + treeTrunk + '\n' + treeTrunk
}

const tree = createXmasTree(5, '*')
console.log(tree)
console.log('=================================')

// const tree2 = createXmasTree(4, '+')
// console.log(tree2)
// console.log('=================================')

// const tree3 = createXmasTree(7, '@')
// console.log(tree3)
// console.log('=================================')