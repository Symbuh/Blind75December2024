/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let output = []
    nums = nums.sort((a,b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            //Skip over dupilicate I values
            continue; 
        }

        // Each pointer starts at the opposite end of the remaning array
        let j = i + 1;
        let k = nums.length - 1

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]

            if (sum === 0) {
                output.push([nums[i], nums[j], nums[k]])

                /*
                    Because the array is sorted, we can walk to the end of the duplicate values 
                        for both I and J 
                */
                while (j < k && nums[j] === nums[j + 1]) {
                    j++
                }

                while (j < k && nums[k] === nums[k - 1]) {
                    k--
                }

                j++
                k--
            } else if (sum < 0) {
                j++
            } else {
                k--
            }
            // if our answer doesn't equal 0, we chose which pointer to move in order to bring the
            // answer closer to 0
        }
    }
    return output
};