/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    const border = '*'
    const padding = 4
    const  lengthLimit = [...names].sort(( a, b) => a.length - b.length ).at(-1).length
    const  borderLimit = border.repeat(lengthLimit + padding);
    let  namesReduced = "" 
    names.forEach((name, index) => { 
        namesReduced += `* ${name}${" ".repeat(lengthLimit - name.length)} * ${names.length !== index + 1 ? '\n' : ''}`
    })
    
    return`${borderLimit}\n${namesReduced}\n${borderLimit}`;
}
var nameList = ['abcdaaa', 'abcde', 'abcd'];
console.log(createFrame(nameList));
