function expandedForm(number){
    let numArr = number.toString().split('');
    let result = [];
    numArr.forEach(element => {
        if (element !== '0') {
            result.push(element + '0'.repeat(numArr.length - 1 - numArr.indexOf(element)));
        }
    });
    return result.join(' + ');
}

console.log(expandedForm(70304) == '70000 + 300 + 4');
console.log(expandedForm(42) == '40 + 2');
console.log(expandedForm(12) == '10 + 2');