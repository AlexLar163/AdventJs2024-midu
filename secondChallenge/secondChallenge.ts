function createFrame(names: string[]): string {
  let borderLimit = "*"
  let paddingHorizontal = 1
  let paddingVertical = 1
  let lengthLimit = 0
  let elfFrame
  borderLimit.
  names.forEach((value: string) => {
    if(value.length > lengthLimit){
      lengthLimit = value.length
    }
  })
  borderLimit.repeat(lengthLimit)
  
  elfFrame = `
  ${borderLimit}
  adsadsadsdsa
  ${borderLimit}
  
  `

  return '*'
}

const nameList = ['midu', 'madeval', 'educalvolpz']
createFrame(nameList)
