function solution(numbers) {
    let answer = '';

    numbers = numbers.sort(function(a, b){
        let num1 = parseInt(a.toString() + b.toString());
        let num2 = parseInt(b.toString() + a.toString());

        if ( num1 > num2 ) {
            return -1;
        }
        else if ( num1 < num2 ) {
            return 1;
        }
        else {
            return 0;
        }
    });
    
    numbers.forEach(element => {
        answer += element;
    });

    if (parseInt(answer) == 0) {
        answer = '0';
    }
    
    return answer;
}

exports.solution = solution;