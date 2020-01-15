/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let value = -1;
    let count = 0;

    nums.forEach(element => {
        if (element !== value) {
            value = element;
            ++count;
        }
    });

    return count;
};

exports.solution = removeDuplicates;