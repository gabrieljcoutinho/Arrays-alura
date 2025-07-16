const notas = [10, 6, 8, 5.5, 10];

notas.pop();  //não precisa passar parametros, pois essa função já exclui o ultimo item da lista

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media.toFixed(2))
