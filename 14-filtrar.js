const alunos = ['ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];

// Alunos reprovados: nota menor que 6
const reprovados = alunos.filter((aluno, indice) => {
  return notas[indice] < 6;
});

// Alunos aprovados: nota maior ou igual a 6
const aprovados = alunos.filter((aluno, indice) => {
  return notas[indice] >= 7;
});

console.log("Reprovados:", reprovados);
console.log("Aprovados:", aprovados);
