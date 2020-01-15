function solution(numbers) {
    let answer = '';

    numbers = numbers.sort(function(a, b){
        if ( parseInt(a.toString()[0]) > parseInt(b.toString()[0]) ) {
            return -1;
        }
        else if ( parseInt(a.toString()[0]) < parseInt(b.toString()[0]) ) {
            return 1;
        }
        else {
            if ( a > b ) {
                if (a/b >= 11) {
                    return -1;
                }
                else {
                    if ( parseInt(a/b) == 1) {
                        return -1
                    }
                    else {
                        return 1;
                    }
                }
            }
            else if ( b > a ) {
                if (b/a >= 11) {
                    return 1;
                }
                else {
                    if ( parseInt(b/a) === 1) {
                        return 1;
                    }
                    else {
                        return -1;
                    }
                }
            }
            else {
                return 0;
            }
        }
    });
    
    while (numbers.length !== 0) {
        answer += numbers[0].toString();
        numbers = numbers.slice(1, numbers.length);
    }
    
    return answer;
}

exports.solution = solution;