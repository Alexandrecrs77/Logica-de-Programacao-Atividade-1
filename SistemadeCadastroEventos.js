//Cadastro da data do evento
dataEvento = 10/12/2021
let = dataInscricao
if(dataInscricao < dataEvento) {
  console.log("Cadastrar Participantes")
} else {
  console.log("Cadastro não permitido")
}

//Análise da idade do participante 
//Idade = 18
let idade = 18
if(idade >= 18) {
   console.log("Permitir cadastro")
} else { 
    console.log("Alerta: Cadastro não permitido pela idade")
}

//Lista de palestrantes
//const listadePalestrantes = [0,1,2,3,4]

// Analise da quantidade de participantes
var listadeParticipantes = ["Alexandre", "Jéssica", "Raoni"] 
if(listadeParticipantes.length <= 100) {
    console.log("Permitir cadastro")
} else {
    console.log("Alerta: Cadastro não permitido Limite excedido")
}