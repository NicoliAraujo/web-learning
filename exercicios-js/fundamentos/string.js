const escola = 'cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3)) // unicode do indice 3
console.log(escola.indexOf(3)) // retorna o indice em que o valor 3 se encontra
console.log(escola.indexOf('c')) // retorna o indice em que o valor c se encontra

console.log(escola.substring(1)) // substring a partir do indice 1
console.log(escola.substring(1, 3)) // substring do indice 1 ao 3

console.log('Escola '.concat(escola).concat('!')) // .concat cncatena tudo
console.log(escola.replace(3, 'e')) // replace 3 com e

console.log('Ana,Maria,Pedro'.split(',')) // separar string e transformar em array a partir das ,
