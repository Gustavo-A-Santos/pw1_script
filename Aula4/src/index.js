function cumprimentoNeutro(entrada)
{
    switch (entrada){
        case "good morning":
            return "Bom Dia";
            break;
        case "good afternoon":
            return "Boa Tarde";
            break;
        case "good night":
            return "Boa Noite";
            break;
        default:
            return "Fora do Padrão!"
    }
}

console.log(cumprimentoNeutro("good morning"));