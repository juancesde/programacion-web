function validar() {
    var edad = document.getElementById("edad").value;
    var parrafo = document.querySelector(".parrafo");
    if (edad > 20) {
        parrafo.textContent = "vieja guardia"
    }
}

var lista = document.getElementById("lista-dinamica");
var listaAnimales = ["mapache", "iguana", "loro", "tucan", "tigre", "leon", "leopardo"]
for (let i = 0; i < listaAnimales.length; i++) {
    const element = listaAnimales[i];
    var li = document.createElement("li");
    li.textContent = element;
    lista.appendChild(li);
}