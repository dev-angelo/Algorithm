function solution(array, commands) {
    let answer = [];

    for (let index = 0; index < commands.length; index++) {
        const command = commands[index];
        const sortedArray = array.slice(command[0]-1, command[1]).sort(function(a, b) {
            return a-b;
        });
        answer.push(sortedArray[command[2]-1]);
    }

    return answer;
}

exports.solution = solution;