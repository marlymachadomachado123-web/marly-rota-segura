const form = document.getElementById("formRisco");
const painel = document.getElementById("painel");

form.addEventListener("submit", function(event){

event.preventDefault();

const tipo = document.getElementById("tipo").value;
const local = document.getElementById("local").value;

let classe = "risco";

if(tipo === "Ponte quebrada"){ classe += " ponte"; }
if(tipo === "Alagamento"){ classe += " alagamento"; }
if(tipo === "Atoleiro"){ classe += " atoleiro"; }
if(tipo === "Estrada perigosa"){ classe += " perigo"; }
if(tipo === "Manutenção"){ classe += " manutencao"; }

const bloco = document.createElement("div");
bloco.className = classe;

bloco.innerHTML =
"Tipo: " + tipo + "<br>" +
"Local: " + local;

painel.appendChild(bloco);

form.reset();

});