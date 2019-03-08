{
  {
    {
      {
        var sera = 'Sera??'
      }
    }
  }
}
console.log(sera)
// variável do tipo var é visível pro resto do código quando é declarada dentro de qualquer estrutura organizada em blocos, menos funções

function teste() {
  var local = 123
  console.log(local)
}

teste()
//console.log(local) // dá erro pq a var foi declarada pra dentro da função

var minhaglobal = 3
console.log(global.minhaglobal)
// so tem dois escopos possíveis para var: estar no escopo global ou estar no escopo de uma função. se estiver no global, todo mundo vai ter acesso e pode haver sobrescrita da variável. evitar.
