const frutas = new Array("Abacaxi","Goiaba","Melancia","Manga")
console.log(frutas.join("/"))
console.log(frutas.pop())
console.log(frutas.join("/"))
frutas.push("Kiwi")
console.log(frutas.join("/"))
frutas.push("Melao")
console.log(frutas.join("/"))
frutas.shift()
console.log(frutas.join("/"))
frutas.unshift("Limão")
console.log(frutas.join("/"))
frutas.splice(4,0,"Abacaxi")
console.log(frutas.join("/"))
let outrasFrutas = frutas.slice(2,4)
console.log(frutas.join("/"))
console.log(outrasFrutas.join("/"))
frutas.sort()
console.log(frutas.join("/"))
frutas.reverse()
console.log(frutas.join("/"))
