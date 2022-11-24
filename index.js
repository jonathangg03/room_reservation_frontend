let mainString = ''
let height = prompt('Agrega el tamaño')
let lineQuantity = height - 1
let astQuantity = 1

for (let i = 0; i < height; i++) {
  for (let j = 0; j < lineQuantity; j++) {
    mainString += '_'
  }

  for (let j = 0; j < astQuantity; j++) {
    mainString += '*'
  }

  for (let j = 0; j < lineQuantity; j++) {
    mainString += '_'
  }

  mainString += '\n'
  console.log(mainString)
  mainString = ''
  lineQuantity = lineQuantity - 1
  astQuantity = astQuantity + 2
}