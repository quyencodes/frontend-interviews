// interface Towns {
//   'Town One': string
//   'Town Two': string
//   'Town Three': string
//   'Town Four': string
// }

let towns = {
  'Town One': 'Henesys',
  'Town Two': 'Ellinia',
  'Town Three': 'Kerning City',
  'Town Four': 'Orbis',
}

for (const townNum in towns) {
  console.log(townNum)
}

let townsList = ['Town 1', 'Town 2', 'Town 3', 'Town 4']

for (let i = 0; i < townsList.length; i++) {
  console.log('In range loop: ', townsList[i])
}

for (let towns in townsList) {
  console.log('For in loop: ', towns) // index
}

for (let towns of townsList) {
  console.log('For of loop: ', towns)
}
