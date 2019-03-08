const funcs = []

for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i)
  })
}

// foi criado um array, e pra cada item do array é printado o valor de i. Como i é var, e var não tem escopo de bloco (dentro do for), então no final é impresso sempre 10
funcs[2]()
funcs[8]()
// se i for let, então é impresso 3 e 8, pq fica guardado o valor de i naquele momento, e não o valor de i global
