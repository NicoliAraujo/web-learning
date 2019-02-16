var a = 3
let b = 4 // criar usando let pq o var é mais antigo
let c = a + b
console.log(a, b, c)

// var a = 30 // declarar de novo gera warning mas não erro
// let b = 40 // não pode declarar o let duas vezes
console.log(a, b)

b = 10
a = 30
console.log(a, b)

const d = 10 // constante: tudo oq não tiver motivo pra mudar deve ser const
console.log(d)
