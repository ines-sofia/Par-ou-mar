function verificar() {
    const numeroInput = document.getElementById("numero");
    const resultado = document.getElementById("resultado");
    const textoPar = document.getElementById("texto-par");
    const textoImpar = document.getElementById("texto-impar");

    let valor = numeroInput.value.trim();

    if (valor === "") {
        resultado.value = "Insere um número primeiro.";
        return;
    }

    if (isNaN(valor)) {
        resultado.value = "Isso não é um número válido.";
        return;
    }

    const numero = Number(valor);

    if (!Number.isFinite(numero)) { /* verifica se o número é finito */ 
        resultado.value = "Número inválido.";
        return;
    }

    if (numero > 9999999999 || numero < -9999999999) { /* verifica se o número está dentro do intervalo permitido */
        resultado.value = "Número demasiado grande.";
        return;
    }

    if (numero % 2 === 0) { /* % verifica se o número é par (dá resto de 0) */
        resultado.value = `O número ${numero} é par.`;
        document.body.style.backgroundColor = "rgba(0, 140, 255, 0.8)";
        textoPar.classList.add("destacar");
        textoImpar.classList.remove("destacar");
    } else { /* senão for par, é ímpar */
        resultado.value = `O número ${numero} é ímpar.`;
        document.body.style.backgroundColor = "orange";
        textoImpar.classList.add("destacar");
        textoPar.classList.remove("destacar");
    }
}

function resetar() {
    document.getElementById("numero").value = "";
    document.getElementById("resultado").value = "";

    document.body.style.backgroundColor = "#756262a9";

    document.getElementById("texto-par").classList.remove("destacar");
    document.getElementById("texto-impar").classList.remove("destacar");
}

