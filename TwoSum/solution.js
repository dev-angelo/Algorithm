function solution(nums, target) {
    let result;

    for (let firstNumberIndex = 0; firstNumberIndex < nums.length - 1; ++firstNumberIndex) {
        for (let secondNumberIndex = firstNumberIndex + 1 ; secondNumberIndex < nums.length ; ++secondNumberIndex) {
            if (nums[firstNumberIndex] > target || 
                nums[firstNumberIndex] + nums[secondNumberIndex] > target) {
                    return;
            }
            else {
                if (nums[firstNumberIndex] + nums[secondNumberIndex] === target) {
                    result = [firstNumberIndex, secondNumberIndex];
                    return result;
                }
            }    
        }
    }

    return result;
};

exports.solution = solution;