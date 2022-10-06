
function somanumeros(n1, n2, op){
    var n3 = 5;
    var n4 = 7;
    if (op== "+"){
        return(n1+n2);
    }
    if(op=="-"){
        return(n1-n2);
    }
    if(op=="*"){
        return(n1*n2);
    }
    if(op=="/"){
        return(n1/n2);
    }

    if (op=="raiz"){
        return Math.sqrt((n1+n2));
    }
    if (op=="potencia"){
        return Math.pow((n1+n2));
    }
}
console.log(somanumeros(82, 27, "/"));