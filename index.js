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

//iteraciones
//variables
let variableValorNumerico=1;

const MiNombre="Aitziber";

const MiNumeroFav=1;

//booleanos
let booleanoOr= booleano1 || booleano2
let booleanoMix1 = (booleano1 && TAU / 2 === PI) || (variableValorNumerico >= MiNumeroFav);
let seisNoEsNueve = 6 !== 9;
let booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU);

//operadores
let valorSuma = MiNumeroFav+variableValorNumerico;
let valorResta = MiNumeroFav-variableValorNumerico;
let valorMultiplicacion = MiNumeroFav * variableValorNumerico
let valorDivision = MiNumeroFav/3;

//bucles
let contarHasta10 = 0;
i=0;
while(contarHasta10!==10){
    contarHasta10+=1;
    i++;
}

let preI = 0
let preJ  = 0;
i = 0
while (i  <= 10)
{
    i ++;
    preI += ++preJ;
}

let sumaImpares = 0;
i = 1;
while (i < 10) {
    sumaImpares += i;
    i += 2;
}