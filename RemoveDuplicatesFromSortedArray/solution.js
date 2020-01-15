/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let value = -1;

    for (let index = nums.length - 1 ; index >= 0 ; --index ) {
        if (nums[index] != value) {
            value = nums[index];
        }
        else {
            nums.splice(index, 1);
        }
    }

    return nums.length;
};

exports.solution = removeDuplicates;