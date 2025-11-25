function invertir() {
    let numero = document.getElementById("numero").value;
    let invertido = numero.toString().split("").reverse().join("");
    document.getElementById("resultado").textContent = "Número invertido: " + invertido; 
}