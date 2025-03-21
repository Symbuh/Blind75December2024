var majorityElement = function(nums) {
    let memo = {}

    if (nums.length === 1) {
        return nums[0]
    }

    for (let i = 0; i < nums.length; i++) {
        if (memo[nums[i]]) {
            if (memo[nums[i]] + 1 > nums.length / 2) {
                return nums[i]
            } else {
                memo[nums[i]] = memo[nums[i]] + 1
            }
        } else {
            memo[nums[i]] = 1
        }
    }
}; // 8ms runtime beating 24% of solutions

// There's gotta be an even faster way to solve this that I'm missing. 

