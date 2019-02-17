const valores = [9.1, 3.5, 7.7, 6.2]
console.log(valores[0], valores[1])
console.log(valores[4])

valores[4] = 10
console.log(valores)

valores[10] = 60
console.log(valores)
console.log(valores.lengh)

valores.push({
  id: 3
}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)
