function simplifyFraction(numerator, denominator) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const commonDivisor = gcd(numerator, denominator);
    const simplifiedNumerator = numerator / commonDivisor;
    const simplifiedDenominator = denominator / commonDivisor;
    const reductionFactor = commonDivisor !== 1 ? numerator / simplifiedNumerator : 1;
    return {
        numerator: simplifiedNumerator,
        denominator: simplifiedDenominator,
        reductionFactor: reductionFactor
    };
}

// Запрос ввода дроби в формате "а/б" с помощью prompt
const inputFraction = prompt("Введите дробь в формате 'а/б':");
const fractionParts = inputFraction.split('/');
const numerator = parseInt(fractionParts[0]);
const denominator = parseInt(fractionParts[1]);

// Проверка на корректный ввод
if (fractionParts.length !== 2 || isNaN(numerator) || isNaN(denominator) || denominator === 0) {
    alert("Некорректный ввод. Пожалуйста, введите дробь в формате 'а/б', где 'а' и 'б' - целые числа, 'б' не должен быть равен нулю.");
} else {
    const result = simplifyFraction(numerator, denominator);
    alert(`Сокращенная дробь: ${result.numerator}/${result.denominator}\nСократили в ${result.reductionFactor} раз(а)`);
}
