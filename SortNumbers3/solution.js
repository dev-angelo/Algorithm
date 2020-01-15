function solution() {
    let answer = [];
    let input = [];

    var readline = require('readline');

    var r = readline.createInterface({
       input: process.stdin,
       output: process.stdout
    });

    r.on('line', function(line){
        input.push(line);

        if (input.length === (parseInt(input[0]) + 1)) {
            let count = input[0];

            input.splice(0, 1);

            for (let index = 0; index < count; index++) {
                if (answer[input[index]] == undefined) {
                    answer[input[index]] = 1;
                }
                else {
                    answer[input[index]] += 1;
                }
            }

            r.close();
        }
    });

    r.on('close', function() {
        answer.forEach(function (currentValue, currentIndex) {
            for (let index = 0 ; index < currentValue ; index++) {
                console.log(currentIndex);
            }
        });

        process.exit();
    })

    //return answer;
}

exports.solution = solution;