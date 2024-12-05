/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /*
        1. Memoize the nums array
        2. iterate through the array again and see if you are able to find your target. 
    */
    let memo = {}

    for (let i = 0; i < nums.length; i++) {
        memo[nums[i]] = i
    }

    for (let i = 0; i < nums.length; i++){
        let difference = target - nums[i]

        if(memo[difference] && memo[difference] !== i) {
            return [i, memo[difference]].sort((a, b) => a - b)
        }
    }
};