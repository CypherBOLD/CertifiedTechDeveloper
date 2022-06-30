/* Passo 1 (1,5 pontos) 
   Crie uma função construtora que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 
*/
    function Aluno(nome, quantiaFaltas, notas) {
    this.nome = nome;
    this.quantiaFaltas = quantiaFaltas;
    this.notas = notas;

 /* Passo 2 (1,5 pontos) 
    Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora. 
 */

    this.calcularMedia = function() {
      let notaAluno = 0;
      let quantnotas = 0;
  
      for (let nota of this.notas) {
        notaAluno += nota;
        quantnotas++;
      }
      return  notaAluno / quantnotas;
    };
    
    this.faltas = function() {
        this.quantiaFaltas++;
    };
  
  }
  
  const aluno1 = new Aluno("Pablo Bee Boldrini", 1, [9.9, 8.8, 7.7, 10]);
  const aluno2 = new Aluno("Werllon, O Grande", 2, [10, 10, 10, 10]);
  const aluno3 = new Aluno("iNeedyou Dolfin", 0, [5, 6.2, 7.4, 8.6]);
  const aluno4 = new Aluno("Princesa Leia", 1, [10, 7.5, 5, 2.5]);
  const aluno5 = new Aluno("Master Yoda", 3, [9, 6, 3, 0]);

  

  let alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];
  
  console.log("")
  console.log(" === Media Alunos ===")
  console.log("")

  for (let aluno of alunos) {
    console.log("A media de " + aluno.nome + " é : " + aluno.calcularMedia().toFixed(2));
  }

  console.log("")
  console.log(" === Falta Aluno ===")
  console.log("")

  aluno1.faltas()
  console.log("O aluno " + aluno1.nome + " possui: " + aluno1.quantiaFaltas + " faltas.");
  console.log("O aluno " + aluno5.nome + " possui: " + aluno5.quantiaFaltas + " faltas.");

  
/* Passo 3 (1,5 pontos)
   Crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).
*/

  let curso = {
    nomeDoCurso: "Certified Tech Developer, Severino Faiz Tudo",
    notaAprovacao: 8,
    faltaMaxima: 3,
    listaEstudante: [aluno1, aluno2, aluno3, aluno4, aluno5],
  
/* Passo 4 (1,5 pontos) 
   Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
*/

    adicionarAlunos: function(novoAluno) {
      curso.listaEstudante.push(novoAluno);
    },

/* Passo 5 (2 pontos)
   Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
*/

    alunoAprovado: function(aluno) {
      let mediaAluno = aluno.calcularMedia();
  
      if ( this.calculaFaltaEMediaAluno(mediaAluno, aluno.quantiaFaltas) || this.calcularMediaAcimaDaAprovacao(aluno.quantiaFaltas, mediaAluno) ) {
          return (true)
      } else {
          return (false)
      }
    },
  
    calculaFaltaEMediaAluno: function(mediaAluno, faltas) {
      return mediaAluno >= curso.notaAprovacao && faltas < curso.faltaMaxima ? true : false;
    },
  
    calcularMediaAcimaDaAprovacao: function(quantidadeFaltasAluno, mediaAluno) {
      if (quantidadeFaltasAluno == curso.faltaMaxima) {
        let notaAprovacaoCalculada = curso.notaAprovacao + ((curso.notaAprovacao / 100) * 10);
        return mediaAluno > notaAprovacaoCalculada ? true : false;
      }
    },

/* Passo 6 (2 pontos)
   Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 
*/

    aprovacaoAlunos: function () {
      for (let aluno of this.listaEstudante){
        console.log("O " + aluno.nome + " foi aprovado? : " + curso.alunoAprovado(aluno));
      }
    }

  };
  
 let novoAluno6 = new Aluno("Vini Marxx", 1, [10, 8, 6, 4]); 
 let novoAluno7 = new Aluno("JSon", 3, [10, 5.3, 6.2, 8.9]);
 let novoAluno8 = new Aluno("Zed", 2, [7, 8, 3.5, 4]); 
  
 let novosAlunos = [novoAluno6, novoAluno7, novoAluno8];
  
 console.log("")
 console.log(" === Lista de Alunos ===")
 console.log("")


 for (let aluno of novosAlunos) {
    curso.adicionarAlunos(aluno);
  }
  

  for (let aluno of curso.listaEstudante) {
    console.log(aluno.nome);
  }
  
  console.log("")
  console.log(" === Lista de Aprovacao ===")
  console.log("")

  console.log("O aluno " + aluno2.nome + " foi aprovado? :", curso.alunoAprovado(aluno2));
  console.log("O aluno " + aluno3.nome + " foi aprovado? :", curso.alunoAprovado(aluno3));

  console.log("")
  console.log(" === Lista de Aprovacao ===")
  console.log("")
  console.log("Resultado : TRUE para Aprovado e False para Reprovado.")
  console.log("")


  curso.aprovacaoAlunos();