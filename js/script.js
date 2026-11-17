 // Aquí tu código
const lista = document.getElementById("lista");
const button = document.querySelector("#agregar");

button.addEventListener("click", () => {
    let text = prompt("Escribe una palabra");
    if (text !== "") {
        const li = document.createElement("li");
        li.textContent = text.trim();
        lista.appendChild(li);
    }
});