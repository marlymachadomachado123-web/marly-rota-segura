const painel = document.getElementById("painel");
const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const tipo = document.getElementById("tipo").value;
    const local = document.getElementById("local").value;

    const registro = document.createElement("div");
    registro.style.padding = "10px";
    registro.style.margin = "5px";
    registro.style.borderRadius = "6px";

    if(tipo === "perigo"){
        registro.style.background = "#ffb3b3";
    }

    if(tipo === "atenção"){
        registro.style.background = "#fff0b3";
    }

    if(tipo === "seguro"){
        registro.style.background = "#b3ffcc";
    }

    registro.innerHTML = "<b>" + tipo + "</b> - " + local;

    painel.appendChild(registro);

    form.reset();
});
