//(a + b) / h
//a + b => function sum
//(a +b) / h => function divide

const sum = (a, b) => {
    setTimeout(() => {
        return a + b;
    }, 200)
};

const divide = (ab, h) => {
    setTimeout(() = {
        return ab / h;
    }, 100);
};

const resultSum = sum(3, 6);
const resultDivide = divide(resultSum, 2);

console.log(resultSum);
console.log(resultDivide);
