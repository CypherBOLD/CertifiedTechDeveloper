
let num1 = 2;
let num2 = 10;
let num3 = 15;
let num4 = 20;
let num5 = 50;
let num6 = 100;
let porcent = 15;

const somar = (n1,n2) => soma = (n1 + n2);

const subtrair =(n1,n2) => subtracao = (n1 - n2);

const multiplicar = (num1,num2) => multiplicacao = (num1 * num2);

function dividir (n1,n2) {

    if (num2 == 0 ) {
        console.log('Erro na Divisao');
    }else {
        const divicao = n1 / n2;
        return divicao;
    }
}

const quadradoDoNumero = n2 => multiplicar(n2,n2);

const mediaDeTresNumeros = (n1,n2,n3) => dividir(somar(n1,n2) + n3, 3);

const calcularPorcentagem = (n1, porcent) => dividir(multiplicar(n1, porcent), 100);

const geradorDePorcentagem = (n1,n2) => multiplicar(dividir(n1, 100), n2);

console.log(`
    "< ----- Lhama Calculator / Teste de Operacoes ----- >"
    Resultado da Soma de ${num4} + ${num3} = ${somar(num4,num3)};
    Resultado da Subtracao de ${num5} - ${num3} =  ${subtrair(num5,num3)};
    Resultado da Multiplicacao de ${num5} * ${num6} = ${multiplicar(num5,num6)};
    Resultado da Divisao de ${num6} / 0 = ${dividir(num6,0)};
    "Agora Foi, Confia!";
    Resultado da Divisao de ${num6} / ${num2} = ${dividir(num6,num2)};
    "< ----- Lhama Calculator / Funcoes Extras ----- >"
    Resultado: ${num1} ao quadrado = ${quadradoDoNumero(num1)};
    Resultado: media dos numeros ${num2}, ${num3}, ${num4} = ${mediaDeTresNumeros(num2,num3,num4)};
    Resultado: ${porcent}% porcento de ${num6} eh = ${calcularPorcentagem(num6,porcent)};
    Resultado: A porcentagem ${num4} de ${num6} = ${geradorDePorcentagem(num4,num6)}%;
`)