function numInelementing(inputArr) {
    let result = [];

    inputArr.forEach(element => {
        let num = "";
        for (let i = 0; i < element.length; i++) {
            if (element[i] >= "0" && element[i] <= "9") {
                num += element[i];
            }
        }
        if (num !== "") {
            result.push(element);
        }
    });

    return result;
}

console.log(numInelementing(["1a", "a", "2b", "b"])); // [ '1a', '2b' ]
console.log(numInelementing(["abc", "abc10"])); // [ 'abc10' ]
console.log(numInelementing(["abc", "ab10c", "a10bc", "bcd"])); // [ 'ab10c', 'a10bc' ]
console.log(numInelementing(["this is a test", "test1"])); // [ 'test1' ]
