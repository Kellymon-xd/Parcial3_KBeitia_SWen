function calcularNota() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById('resultado').innerText = "Ingresa todas las notas";
        return;
    }

    if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100) {
        document.getElementById('resultado').innerText = "Notas fuera de rango";
        return;
    }

    const prom = (nota1 + nota2 + nota3) / 3;

    const notaA = (91 - prom * 0.60) / 0.40;
    const notaB = (81 - prom * 0.60) / 0.40;
    const notaC = (71 - prom * 0.60) / 0.40;
    const notaD = (61 - prom * 0.60) / 0.40;

    let mensaje = "";

    if (notaA > 100)
        mensaje += "Es imposible sacar A con las notas de los parciales.\n";
    else
        mensaje += `La nota mínima de semestral para sacar A es ${notaA.toFixed(2)}\n`;

    if (notaB > 100)
        mensaje += "Es imposible sacar B con las notas de los parciales.\n";
    else
        mensaje += `La nota de semestral mínima para sacar B es ${notaB.toFixed(2)}\n`;

    if (notaC > 100)
        mensaje += "Es imposible sacar C con las notas de los parciales.\n";
    else
        mensaje += `La nota mínima de semestral para sacar C es ${notaC.toFixed(2)}\n`;

    if (notaD > 100)
        mensaje += "Es imposible sacar D con las notas de los parciales.\n";
    else
        mensaje += `La nota mínima de semestral para sacar D es ${notaD.toFixed(2)}\n`;

    mensaje += "La nota mínima para sacar F es 0\n";

    document.getElementById('resultado').innerText = mensaje;
}