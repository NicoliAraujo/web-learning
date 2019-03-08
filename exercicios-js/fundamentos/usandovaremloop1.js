for (var i = 0; i < 10; i++) {
  console.log(i)
}

// i estará disponível fora do escopo do bloco pq var não tem escopo de blocos
// o valor de i é o valor que fez com que ele saísse do laço, portanto 10
console.log('i = ', i)
