//  + - * / % **

let n1 = 10;
let n2 = 5;

//OPERADORES ARITMÉTICOS
console.log("n1 + n2: ", n1 + n2);
console.log("n1 - n2: ",n1 - n2);
console.log("n1 * n2: ",n1 * n2);
console.log("n1 / n2: ",n1 / n2);
console.log("resto da divisão: ",n1 % n2);
console.log("2 ao cubo: ",2 ** 3);
console.log("3 ao cubo: ",3 ** 3);

// OPERADORES DE ATRIBUIÇÃO
let n3 = 20;
//n3 = n3 + 15;
//n3 /= 2;
//n3 *= 2;
n3 += 2;
//n3 -= 2;
//n3 %= 2;
//n3 **= 2;

console.log(n3);

// INCREMENTO E DECREMENTO
let i = 0;
console.log(i--);
console.log(i);
console.log(++i);

// OPERADORES DE COMPARAÇÃO
/*
    igualdade de valor ==
    igualdade de valor e tipo ===
    <, >, <=, >=
    != valores diferentes
    !== valores e tipos diferentes 
*/
console.log(n1, n2, n3);

console.log("valores: ", n1 == "10");
console.log("valores e tipo: ", n1 === 10);
console.log("valores e tipo: ", n1 === "10");
console.log("n2 < 10: ", n2 < 10);
console.log("n2 > 10: ", n2 > 10);

console.log(`n1 != "10": `, n1 != "10");
console.log(`n1 !== "10": `, n1 !== "10");


//OPERADORES LÓGICOS
/*
    Para uma pessoa viajar para o exterior:
        -precisa ser maior de 18 anos
        OU
        Acompanhado com os pais
        E
        Ter comprado bilhete
*/
let idade = 21;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);