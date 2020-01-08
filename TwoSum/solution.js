function solution(nums, target) {
    let result;

    for (let firstNumberIndex = 0; firstNumberIndex < nums.length; ++firstNumberIndex) {
        for (let secondNumberIndex = 1 ; secondNumberIndex < nums.length ; ++secondNumberIndex) {
            if (nums[firstNumberIndex] > target || 
                nums[firstNumberIndex] + nums[secondNumberIndex] > target) {
                    break;
            }
            else {
                if (nums[firstNumberIndex] + nums[secondNumberIndex] === target) {
                    result = [firstNumberIndex, secondNumberIndex];
                    break;
                }
            }    
        }
    }

    return result;
};

exports.solution = solution;