// Desafio Classificador de nível de Herói 

// O que deve ser utilizado

// Variáveis, Operadores, Laços de Repetição, Estrutura de Decisão
// Desafio: Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
// Se XP for menor do que 1000 = Ferro 
// Se XP for entre 1001 e 2000 = Bronze
// Se XP for entre 2001 e 5000 = Prata
// Se XP for entre 6001 e 7000 = Ouro
// Se XP for entre 7001 e 8000 = Platina
// Se XP for entre 8001 e 9000 = Ascendente
// Se XP for entre 9001 e 10000 = Imortal
// Se XP for maior ou igual a 10001 = Radiante

// Saída 
// Ao final deve se exibir uma mensagem: " O herói de nome Sirlucs está no nível de -----"

let nomeDoHeroi = "Sirlucs";
let experiência = 8000;
let nivelDoHeroi;
if (experiência < 1000){
    nivelDoHeroi = "Ferro";
} else if (experiência >= 1001 && experiência <= 2000){
    nivelDoHeroi = "Bronze";
} else if (experiência >= 2001 && experiência <= 5000){
    nivelDoHeroi = "Prata";
} else if (experiência >= 6001 && experiência <= 7000){
    nivelDoHeroi = "Ouro";
} else if (experiência >= 70001 && experiência <= 8000){
    nivelDoHeroi = "Platina";
} else if (experiência >= 8001 && experiência <= 9000){
    nivelDoHeroi = "Ascendente";
} else if (experiência >= 9001 && experiência <= 10000){
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}
console.log("O herói de nome Sirlucs está no nível de : " + nivelDoHeroi)