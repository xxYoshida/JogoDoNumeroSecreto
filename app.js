//Mensagem de boas vindas
alert('Boas vindas ao jogo do número secreto!');

// Função para pedir dois números ao usuário
function pedirIntervalo() {
    let numero1 = prompt("Insira o primeiro número:");

    while (numero1 === null || numero1.trim() === '' || isNaN(numero1)) {
        alert("Por favor, insira um número válido!");
        numero1 = prompt("Insira o primeiro número:");
    }
    numero1 = parseInt(numero1);

    let numero2 = prompt("Insira o segundo número:");

    while (
        numero2 === null ||
        numero2.trim() === '' ||
        isNaN(numero2) ||
        parseInt(numero2) <= numero1
    ) {
        if (numero2 === null || numero2.trim() === '' || isNaN(numero2)) {
            alert("Por favor, insira um número válido!");
        } else {
            alert("O segundo número deve ser maior que o primeiro. Tente novamente.");
        }
        numero2 = prompt("Insira o segundo número:");
    }
    numero2 = parseInt(numero2);

    return [numero1, numero2];
}

// Chama a função e recebe o intervalo
let intervalo = pedirIntervalo();
let numeroSecreto = parseInt(Math.random() * (intervalo[1] - intervalo[0] + 1) + intervalo[0]);

console.log("Número secreto: ", numeroSecreto);

let chute;
let tentativas = 1;

//Verifica o chute
chute = prompt(`Tente adivinhar o número entre ${intervalo[0]} e ${intervalo[1]}:`);

while (chute !== null) {
    if (chute.trim() === '' || isNaN(chute)) {
        alert("Por favor, insira um número válido!");
    } else {
        chute = parseInt(chute);

        if (chute < intervalo[0] || chute > intervalo[1]) {
            alert("Por favor, chute um número dentro do intervalo!");
        } else if (chute > numeroSecreto) {
            alert("O número secreto é menor!");
        } else if (chute < numeroSecreto) {
            alert("O número secreto é maior!");
        } else {
            alert(`Parabéns! Você acertou o número secreto em ${tentativas} tentativas.`);
            break;
        }

        tentativas++;
    }
    chute = prompt(`Tente novamente! Insira um número entre ${intervalo[0]} e ${intervalo[1]}:`);
}
