function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function appendFunction(func) {
    document.getElementById('display').value += func;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    try {
        // Replace '^' with '**' for exponentiation
        let expression = display.value.replace(/\^/g, '**');
        // Evaluate the expression
        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error';
    }
}