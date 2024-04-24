//variables
let variableSinValor;

let booleano1=true;
let booleano2=false;

const PI=3.14;

const TAU=PI*2;

//booleano
const booleanoAnd = booleano1 && booleano2;

const booleanoNot = !booleano1;

const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

//operadores
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

let incrementarAntes = 2;
let resultadoAntes =  ++incrementarAntes; 

//bucles
let contarHasta10_2 = 0;
for(let i=0;contarHasta10_2 < 10;i++){
    contarHasta10_2+=2;
}

let postI = 0;
let postJ = 0;
for(let i=0; i<11; i++){
    postI+=postJ++;
}

let sumaPares=0;
let i=0;
while(i<10){
    if(i%2 === 0){
        sumaPares+=i;
    }
    i++;
    console.log(sumaPares);
}
