function numOfDigits(num) {
    return num.toString().length;
}

console.log(numOfDigits(1000) == 4);
console.log(numOfDigits(12) == 2);
console.log(numOfDigits(0) == 1);