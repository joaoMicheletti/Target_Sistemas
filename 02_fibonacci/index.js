//metodo para ler a entrada do user no console.
const prompt = require('prompt-sync')();
console.log('============================');
console.log('== sequência de Fibonacci ==');
console.log('============================');

var n0 = 0;
var n1 = 1;
var n2 = 2;
var n3 = 0;

const fibonacci = [n0, n1, n2];
const optionUser = parseInt(prompt("Digite um numero: #> "));

while(n3 <= 100000000){
    n3 = n1 + n2;
    fibonacci.push(n3);
    n1 = n2;
    n2 = n3;
    
};
//buscando o valor de entrada no array fibonacci.
const conf = fibonacci.find(element => element === optionUser);

if(conf === undefined){
    console.log("O valor não encontra-se na sequência de Fibonacci...");
} else {
    console.log("O valor encontra-se na sequência de Fibonacci...");
}

console.log(fibonacci + '...');