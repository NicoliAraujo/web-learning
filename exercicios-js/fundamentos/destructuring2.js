const [a] = [10]
console.log(a)

// n1, n2, n3, n4, n5 = [10, 7, 9, 8],6 é zero
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

// só pra mostrar que é possível
const [, [, nota]] = [[, 8, 8], [9, 6, 7]]
console.log(nota)
