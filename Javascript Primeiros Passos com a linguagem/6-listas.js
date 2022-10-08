console.log(`Trabalhando com Listas`);

//const salvador = `Salvador`;
//const saoPaulo = `São Paulo`;
//const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestino.push(`Curitiba`); // Adiciona um item na lista.
console.log(`Destinos Possiveis:`);
//console.log(salvador,saoPaulo,rioDeJaneiro);
console.log(listaDeDestino);

listaDeDestino.splice(1,1, `Manaus`); // retira um item da lista e pode adicionar um novo elemento;
console.log(listaDeDestino);

console.log(listaDeDestino[1]); // imprimir apenas um item da lista.

