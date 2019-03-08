function rand([min = 0, max = 1000]) {
  if (min > max)[min, max] = [max, min]
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([993]))
console.log(rand([1, ]))
console.log(rand([, 500]))
console.log(rand([]))
// console.log(rand()) // dá erro pq não tem objeto, null ou undefined
