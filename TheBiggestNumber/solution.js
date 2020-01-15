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
                if (a/b >= 10) {
                    if (a % 10 >= parseInt(b.toString()[0]) ) {
                        return -1;
                    }
                    else {
                        return 1;
                    }
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
                if (b/a >= 10) {
                    if (b % 10 >= parseInt(a.toString()[0]) ) {
                        return 1;
                    }
                    else {
                        return -1;
                    }
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
    
    numbers.forEach(element => {
        answer += element;
    });

    if (parseInt(answer) == 0) {
        answer = '0';
    }
    
    return answer;
}

exports.solution = solution;