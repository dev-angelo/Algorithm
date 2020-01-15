function solution() {
    let answer = [];
    let receivedNumbers = [];
    let sortedNumbers;
    
    var readline = require('readline');

    var r = readline.createInterface({
       input: process.stdin,
       output: process.stdout 
    });

    r.setPrompt('>');
    r.prompt();

    r.on('line', function(line){
        receivedNumbers.push(line);
        r.prompt();

        if (receivedNumbers.length == parseInt(receivedNumbers[0]) + 1) {
            receivedNumbers = receivedNumbers.slice(1, receivedNumbers.length);
            sortedNumbers = receivedNumbers.sort(function(a, b){
                return a-b;
            });
            r.close();
        }
    });

    r.on('close', function() {
        for(let i = 0 ; i < sortedNumbers.length ; ++i) {
            console.log(sortedNumbers[i]);
        }
    })

    return answer;
}

exports.solution = solution;