function solution(array, commands) {
    let answer = [];
    let command = [];

    for (let index = 0; index < commands.length; index++) {
        command = commands[index];
        const sortedArray = array.slice(command[0]-1, command[1]).sort();
        answer.push(sortedArray[command[2]-1]);
    }

    return answer;
}

exports.solution = solution;