function getArguments() {
    var firstNumber = prompt('Введіть перше число:');
    var secondNumber = prompt('Введіть друге число:');
    return [parseFloat(firstNumber), parseFloat(secondNumber)]; 
}

function calcSum(num1, num2) {
    return num1 + num2;
}

var numbers = getArguments();

var sum = calcSum(numbers[0], numbers[1]);

alert('Сума введених чисел: ' + sum);
