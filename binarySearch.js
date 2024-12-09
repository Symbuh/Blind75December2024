/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums[0] === target) {
        return 0
    }

    let min = 0; max = nums.length - 1
    let current = Math.floor(max / 2)

    while (max > min) {
        if (nums[current] === target) {
            return current
        } else if (nums[current] < target) {
            min = current + 1
            current = Math.ceil(((max - min) / 2)) + min
        } else {
            max = current
            current = Math.floor((max - min) / 2) + min
        }
    }
    if (nums[current] === target) {
        return current 
    }
    return -1
};