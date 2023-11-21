function getArguments() {
    var firstNumber = prompt('Введіть перше число:');
    var secondNumber = prompt('Введіть друге число:');
    return [parseFloat(firstNumber), parseFloat(secondNumber)]; 
}

function calcMult(num1, num2) {
    return num1 * num2;
}

var numbers = getArguments();

var product = calcMult(numbers[0], numbers[1]);

alert('Добуток введених чисел: ' + product);
