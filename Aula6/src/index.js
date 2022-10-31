function encontraMultiplos(){
    let m=0;
    let multiplo=0;
    while( m < 1){
        multiplo=Math.floor(Math.random()*100);
        if(multiplo % 7 == 0){
            m++
            console.log(multiplo+" é multiplo.")
        }else{
            console.log(multiplo+" não é multiplo.")
        }
    }
}
encontraMultiplos();

function encontraMultiplo(quantidade){
    let m=0;
    let multiplo=0;
    let c=0;
    while( m < quantidade){
        c++;
        multiplo=Math.floor(Math.random()*100);
        if(multiplo % 7 == 0){
            m++
            console.log(multiplo+" é multiplo.");
        }
    }
    console.log("Sorteamos: "+c+" para encontrar: "+quantidade+" multiplos de 7.");
}
encontraMultiplo(8);