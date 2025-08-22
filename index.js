//Array

let items = [];

const input = document.getElementById("inputTexto");
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

function agregarLista(){
    lista.innerHTML = "";
    items.forEach((item) => {
        const p = document.createElement("p");
        p.textContent = item;
        lista.appendChild(p);
    })
}

btnAgregar.addEventListener("click", () => {
    const texto = input.value.trim();
    if(texto !== ""){
        items.push(texto);
        agregarLista();
        input.value = "";
    }
})