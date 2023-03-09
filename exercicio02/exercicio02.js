const students = [
  {
    name: "Augusto",
    n1: Number(prompt("Nota 1 de Augusto: ")),
    n2: Number(prompt("Nota 2 de Augusto: "))
  },
  {
    name: "João",
    n1: Number(prompt("Nota 1 de João: ")),
    n2: Number(prompt("Nota 2 de João: "))

  },
  {
    name: "Maria",
    n1: Number(prompt("Nota 1 de Maria: ")),
    n2: Number(prompt("Nota 2 de Maria: "))
  },
  {
    name: "Pedro",
    n1: Number(prompt("Nota 1 de Pedro: ")),
    n2: Number(prompt("Nota 2 de Pedro: "))
  },
]

function avarageGrade(n1, n2)
{
  return ((n1 + n2)/2)
}


for(let student of students)
{
  let result = avarageGrade(student.n1, student.n2)
  
  if(result >= 7 )
  {
    alert(`O aluno ${student.name} foi aprovado com a média de ${result}`)
  }
  else{
    alert(`O aluno ${student.name} foi reprovado com a média de ${result}`)
  }
}