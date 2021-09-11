// Sistemas de cadastro de eventos
//Data do evento

let DataAtual = new Date(2021, 09, 11);
let DataEvento = new Date(2021, 09, 22);

if (DataEvento > DataAtual) {
    console.log ("Evento Permitido")
} else {
    console.log ("Evento Invalido, passou a data do Evento")
}

// Validaçã de Idade

let idade = 21;

if (idade >= 18) {
    console.log ("Cadastro permitido,já é maior de idade.")
} else {
    console.log("Cadastro invalido, ainda não tem idade adequada para o evento.")
}

// Validação do numero de Participantes / Palestrantes no evento

let Participantes =[ "Adilio", "Caio", "Thiago", "Julia", "Allana", "Brena"]
// O numero maximo que poderá ter no evento é de 100 participantes

if (Participantes.length <=100) {
    console.log("Cadastro permitido, ainda não excedeu o limite de participantes")
} else {
    console.log ("Cadastro não permitido, pois excedeu a capacidade de pessoas permitidas")
}