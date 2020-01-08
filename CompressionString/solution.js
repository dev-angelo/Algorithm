function solution(s) {
    var answer = 0;

    var tempArray = [];

     for ( let index = 1 ; index <= parseInt(s.length/2) ; ++index ) {
        let resultString = '';
        let mathingflag = false;
        let remainingString = s;
        let decidedString = remainingString.substr(0, index);
        let backupString = decidedString;

        remainingString = remainingString.substr(index, remainingString.length - 1)

        while (remainingString !== '') {
            if (decidedString === remainingString.substr(0, index)) {
                mathingflag = true;
                backupString = backupString + decidedString;
                remainingString = remainingString.substr(index, remainingString.length - 1);
            }
            else {
                mathingflag = false;
                resultString += (backupString.length > index ? parseInt(backupString.length/index).toString() : '') + decidedString;
                decidedString = remainingString.substr(0, index);
                backupString = decidedString;
                remainingString = remainingString.substr(index, remainingString.length - 1);
            }

            if (remainingString === '') {
                if (true === mathingflag) {
                    resultString += parseInt(backupString.length/index.toString()) + decidedString;
                }
                else {
                    resultString += backupString;
                }
            }

            tempArray[index - 1] = resultString.length;
        }
    }

    answer = Math.min(...tempArray);
    return answer;
}

exports.solution = solution;