function convertirDia() {
    let numeroDia = parseInt(document.getElementById("numeroDia").value, 10);

    if (numeroDia < 1 || numeroDia > 365) {
        document.getElementById("resultado").textContent = "El número debe estar entre 1 y 365.";
        return;
    }

    const meses = [
        { nombre: "enero", dias: 31 },
        { nombre: "febrero", dias: 28 },
        { nombre: "marzo", dias: 31 },
        { nombre: "abril", dias: 30 },
        { nombre: "mayo", dias: 31 },
        { nombre: "junio", dias: 30 },
        { nombre: "julio", dias: 31 },
        { nombre: "agosto", dias: 31 },
        { nombre: "septiembre", dias: 30 },
        { nombre: "octubre", dias: 31 },
        { nombre: "noviembre", dias: 30 },
        { nombre: "diciembre", dias: 31 }
    ];

    let dia = numeroDia;
    let mes = "";

    for (let i = 0; i < meses.length; i++) {
        if (dia <= meses[i].dias) {
            mes = meses[i].nombre;
            break;
        } else {
            dia -= meses[i].dias;
        }
    }

    document.getElementById("resultado").textContent =
        "Número en día: " + numeroDia + " corresponde al " +
        dia.toString() + " de " + mes;
}
