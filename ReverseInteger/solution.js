function solution(number) {
    let result = 0;
    let digitCount = 0;

    while ( 0 !== parseInt(number / (Math.pow(10, digitCount))) ) {
        ++digitCount;
    }

    const array = [];

    for (let index = digitCount - 1 ; index >= 0 ; --index) {
        array.push(parseInt((number % Math.pow(10, index + 1)) / (Math.pow(10, index))));
    }

    array.reverse();

    for (let index = 0 ; index < array.length ; index++) {
        result += array[index] * (Math.pow(10, digitCount - 1 - index));
    }

    return result;
}

exports.solution = solution;
