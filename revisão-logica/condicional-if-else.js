let idade = 18;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

console.log(`Pode viajar: ${podeViajar}`);

/*let msgMaiorIdade = " ";
if(idade >= 18){
    msgMaiorIdade = "É maior de idade";
}else{
    msgMaiorIdade = "É menor de idade";
}*/
let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de idade";

if(!comprouBilhete){
    console.log("Não comprou o bilhete");
}else{
    console.log(msgMaiorIdade);
}

let n1 = 5;
let n2 = 8;
let media = (n1 + n2) / 2;
console.log(`media: ${media}`);
console.log((3 * 2) ** 2);

if(n1 == 0 || n2 == 0){
    console.log("Reprovado!");
}else if(media < 7){
    console.log(`Reprovado com nota ${media}!`);
}else{
    console.log("Aprovado!");
}