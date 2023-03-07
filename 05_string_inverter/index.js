const frase = 'TargetSistemas';
var inverter = '';
var tamanhoDaString = frase.length;
for(i = 0; i < frase.length; i ++){
    tamanhoDaString -= 1;
    inverter += frase[tamanhoDaString];

};
console.log(frase)
console.log(inverter);