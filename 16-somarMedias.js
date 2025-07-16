const salaJs = [7, 8, 8, 10, 6.5, 4, 10, 7];
const salajava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.6]

function calculaMedia(listaDeNotas){
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
        return acumulador + nota
    })

    const media = somaDasNotas / listaDeNotas.length
return media;
}


console.log(calculaMedia(salaJs))
console.log(calculaMedia(salajava))
console.log(calculaMedia(salaPython))