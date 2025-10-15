
let numeroSecreto = 3;
let intento

while (intento != numeroSecreto) {

    intento = prompt("Adivina el numero")

    if (intento == numeroSecreto) {
        alert("Felicidades, adivinaste")
    } else {
        alert("Intenta nuevamente")
    }
}

// cambios mas cambios