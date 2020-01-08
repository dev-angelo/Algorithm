const solution = require('./solutions.js').solution;

run();

function run() {
    let participant = ["leo", "kiki", "eden"];
    let completion = ["eden", "kiki"];
    let noCompletion = solution(participant, completion);
    console.log(noCompletion);

    participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
    completion = ["josipa", "filipa", "marina", "nikola"];
    noCompletion = solution(participant, completion);
    console.log(noCompletion);

    participant = ["mislav", "stanko", "mislav", "ana"];
    completion = ["stanko", "ana", "mislav"];
    noCompletion = solution(participant, completion);
    console.log(noCompletion);
}
