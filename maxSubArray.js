/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    max = nums[0]
    total = 0

    for (let i = 0; i < nums.length; i++) {
        if (total < 0) {
            total = 0
        }

        total = total + nums[i]
        max = Math.max(max, total)
    }
    return max
} // 1ms, faster than 98% of online submissions
