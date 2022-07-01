// Lista de Funcoes do Microondas
let pratos = ["Pipoca", "Macarrao", "Carne", "Feijao", "Brigadeiro"];

// Botao Pressionado - Informacao Escolhida pelo Usuario
let pratoEscolhido = "Macarrao"; // Apertei Botao do Prato
let tempoEscolhido = 8; // Defini o Tempo do Prato

/* Exemplos de Execucao.
    let pratoEscolhido = "Macarrao"; // Apertei Botao Macarrao
        let tempoEscolhido = 7;  // R: Tempo Insuficiente!
        let tempoEscolhido = 8;  // R: Prato Pronto, Bon Appetit!!!
        let tempoEscolhido = 9;  // R: Atencao: Passou do Ponto!
        let tempoEscolhido = 16; // R: Sua Comida Queimou!
        let tempoEscolhido = 17; // R: Atencao: Prato Carbonizando!
        let tempoEscolhido = 24; // R: Kabum!!!
        let tempoEscolhido = 25; // R: Nuke Bomb!

    //

    let pratoEscolhido = "Coxinha de Jaca"; // Nao tem essse botao nas Funcoes do Microondas
    let tempoEscolhido = 15; // R: Prato Inexistente!

*/


// Parte Logica
if(pratos.includes(pratoEscolhido)) {
    let tempoPronto;
    let tempoQueimou;
    let tempoKabum;
    switch (pratoEscolhido){
        case "Pipoca":
            tempoPronto = 10;
            tempoQueimou = 20;
            tempoKabum = 30;
            break;
        case "Macarrao":
            tempoPronto = 8;
            tempoQueimou = 16;
            tempoKabum = 24;
            break;
        case "Carne":
            tempoPronto = 15;
            tempoQueimou = 16;
            tempoKabum = 24;
            break;
        case "Feijao":
            tempoPronto = 12;
            tempoQueimou = 24;
            tempoKabum = 36;
            break;
        case "Brigadeiro":
            tempoPronto = 8;
            tempoQueimou = 16;
            tempoKabum = 24;
            break;
        default:
    }

    if(tempoEscolhido < tempoPronto) {
        console.log("R: Tempo Insuficiente!")
    }
    if(tempoEscolhido == tempoPronto) {
        console.log("R: Prato Pronto, Bon Appetit!!!")
    }

    if(tempoEscolhido > tempoPronto && tempoEscolhido < tempoQueimou) {
        console.log("R: Atencao: Passou do Ponto!")
    }

    if(tempoEscolhido == tempoQueimou) {
        console.log("R: Sua Comida Queimou!")
    }

    if(tempoEscolhido > tempoQueimou && tempoEscolhido < tempoKabum) {
        console.log("R: Atencao: Prato Carbonizando!")
    }

    if(tempoEscolhido == tempoKabum) {
        console.log("R: Kabum!!!")
    }

    if(tempoEscolhido > tempoKabum) {
        console.log("R: Nuke Bomb!")
    }

} else {
    console.log("R: Prato Inexistente!"); 
}