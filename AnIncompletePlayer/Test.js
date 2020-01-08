const solution = require('./solutions.js').solution;

run();

function run() {
    const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
    const completion = ["marina", "josipa", "nikola", "vinko"];

    const noCompletion = solution(participant, completion);

    console.log(noCompletion);
}
