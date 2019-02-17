const name = 'Nicoli'
const concat = 'ola ' + name + '!'

const template = `
ola
${name}!`
/*
 * template abre com ``
 * considera quebras de linhas
 */
console.log(concat, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // array function
console.log(`Ei... ${up('cuidado')}!`)
