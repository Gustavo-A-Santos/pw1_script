/*
1. Monte as formulas com base nas ultimas 3 aulas.
2. Monte os campos formulários para receber os 4 parametros informado as condições.
3. Monte o resultado em um comando SPAN.
*/


function pitagorasH(ca, co){
    return Math.sqrt(Math.pow(ca, 2) + Math.pow(co, 2));
}
function pitagorasCa(co, h){
    return Math.sqrt(Math.pow(h, 2) - Math.pow(co, 2));
}
function pitagorasCo(ca, h){
    return Math.sqrt(Math.pow(h, 2) - Math.pow(ca, 2));
}

function calculaPitagoras(h, ca, co){
    if(h == 0){
        return pitagorasH(ca, co);
    }else if(ca == 0){
        return pitagorasCa(co, h);
    }else{
        return pitagorasCo(ca, h);
    }
}

function calculaA(b, c, d){
    return (b*c)/d;
}
function calculaB(a, c, d){
    return (a*d)/c;
}
function calculaC(b, a, d){
    return (a*d)/b;
}
function calculaD(b, c, a){
    return (b*c)/a;
}

function calculaRegra(a, b, c, d){
    if(a == 0){
        return calculaA(b, c, d);
    }else if(b == 0){
        return calculaB(a, c, d);
    }else if(c == 0){
        return calculaC(b, a, d);
    }else{
        return calculaD(b, c, a);
    }
}

function calculaNumeros(n1, n2, op){

    if(op == "+"){
        return(n1 + n2);
    }
    if(op == "-"){
        return(n1 - n2);
    }
    if(op == "*"){
        return(n1 * n2);
    }
    if(op == "/"){
        return(n1 / n2);
    }
    if(op == "raiz"){
        return Math.sqrt((n1 + n2));
    }
    if(op == "potencia"){
        return Math.pow((n1, n2));
    }
}

function escolheOperacao(opcao, p1, p2, p3, p4){
    switch(opcao){
        case "pitagoras":
            return calculaPitagoras(p1, p2, p3);
            break;
        case "regra":
            return calculaRegraTres(p1, p2, p3, p4);
            break;
        case "claculadora":
            return calculaNumeros(p1, p2, p3);
            break;
        default:
            return "Fora do escopo de funções."
    }
}

console.log(escolheOperacao("pitagoras", 0, 20, 21, null));
console.log(escolheOperacao("regra", 0, 320, 40, 128));
console.log(escolheOperacao("pitagoras", "+", 82, 27, null));
