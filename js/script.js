function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Atualiza o display com o valor clicado
}

function clearDisplay() {
    document.getElementById('display').value = ''; // Limpa o display
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Calcula o resultado da expressão
    } catch (e) {
        display.value = 'Erro'; // Exibe erro em caso de expressão inválida
    }
}
