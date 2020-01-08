const solution = require('./solution.js').solution;

run();

function run() {
    console.log(solution("aabbaccc"));
    console.log(solution("ababcdcdababcdcd"));
    console.log(solution("abcabcdede"));
    console.log(solution("abcabcabcabcdededededede"));
    console.log(solution("xababcdcdababcdcd"));
}