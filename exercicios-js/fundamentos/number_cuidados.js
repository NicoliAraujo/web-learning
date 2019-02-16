console.log(7 / 0) // infinito
console.log('10' / 2) // converte pra int e faz a operação
console.log('3' + 2) // converte 2 pra string e faz concatenação --> string ganha pq a operação de concatenação existe pra string, que tem preferencia sobre os numbers
console.log('3' - 2) // converte 3 pra int e faz a operaçao --> int ganha

console.log('show' * 2) // nan
console.log(0.1 + 0.7) // retorna 0.79999 e não 0.8 por casa de uma especificação
// console.log(10.toString(2)) não funciona pq 10 pode ser float
console.log((10).toString(2))
