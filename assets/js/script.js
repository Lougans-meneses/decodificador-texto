const textArea = document.querySelector(".input_textarea");
const textOutput = document.querySelector(".aside_resultado_output");
const textInicial = document.querySelector(".aside_resultado_inicial");

function substituirVogais(valueCrip) {
    const mapKeys = {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat",
    };
    const cripto = valueCrip.replace(/[aeiou]/g, (vogal) => mapKeys[vogal]);
    exibirResultado(cripto);
}

function voltarVogais(valueCrip) {
    const mapKeys = {
        enter: "e",
        imes: "i",
        ai: "a",
        ober: "o",
        ufat: "u",
    };
    const decripto = valueCrip.replace(/ai|enter|imes|ober|ufat/g, (vogal) => mapKeys[vogal]
    );
    exibirResultado(decripto);
}

function transformarTexto(botao) {
    let valueCrip = textArea.value.toLowerCase();
    let valorDoBotao = botao;
    if (valueCrip === "") {
        return alert("Por favor, insira um texto para continuar.");
    }

    if (/[^a-z\s]/.test(valueCrip)) {
        alert("Por favor, insira apenas letras minúsculas e sem acento.");
        return false;
    }

    if (botao === "cifra") {
        substituirVogais(valueCrip);
        textOutput.classList.remove("hidden");
        textArea.value = "";
        mostrarBotaoCopiar();
    } else if (botao === "decifra") {
        voltarVogais(valueCrip);
        textOutput.classList.remove("hidden");
        textArea.value = "";
        mostrarBotaoCopiar()
    }
}

function exibirResultado(text) {
    textOutput.innerHTML = text;
    if (textOutput.innerHTML === "") {
        textInicial.classList.remove("hidden");
    } else {
        textInicial.classList.add("hidden");
    }
}

const botaoCopiar = document.querySelector(".aside_button_copy");
botaoCopiar.addEventListener("click", (copiar = () => {
    const textsaida = document.querySelector(".aside_resultado_output");
        let valueCopy = document.querySelector(".aside_resultado_output").textContent;
        navigator.clipboard.writeText(valueCopy).then(() => {
                alert("Texto copiado para a área de transferência!");
                // Adicionando um pequeno atraso antes de chamar exibirResultado
                ocultarBotaoCopiar();
                setTimeout(() => {exibirResultado("");}, 100);
                textArea.value = "";
            })
            .catch(() => {alert("Erro inesperado ao copiar texto. Seu navegador pode não ser compatível com essa ação.");
            });
    })
);

function mostrarBotaoCopiar() {
    const botaoCopiar = document.querySelector(".aside_button_copy");
    botaoCopiar.style.display = "inline-block"; // Exibir o botão
}

function ocultarBotaoCopiar() {
    const botaoCopiar = document.querySelector(".aside_button_copy");
    botaoCopiar.style.display = "none"; // Oculta o botão
}