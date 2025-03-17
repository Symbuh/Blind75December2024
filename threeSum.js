/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let memo = {}

    for (let i = 0; i < nums.length; i++) {
        if (memo[nums[i]]) {
            memo[nums[i]].push(i)
        } else {
            memo[nums[i]] = [i]
        }
    }

    let twoSum = (index, target) => {
        let output = []

        for (let i = 0; i < nums.length; i++) {
            let lastVal = 0 - (nums[i] + target)

            if (i !== index) {
                if (memo[lastVal]) {
                    for (let j = 0; j < memo[lastVal].length; j++) {
                        if(memo[lastVal][j] !== i && memo[lastVal][j] !== index) {
                            output.push([nums[i], nums[memo[lastVal][j]]])
                            j = memo[lastVal].length
                        }
                    }
                }
            }
        }
        return output
    }

    let res = [], outputMemo = {}

    for (let i = 0; i < nums.length; i++) {
        let pairs = twoSum(i, nums[i])

        if (pairs.length > 0) {
            pairs.forEach((pair, j) => {
                let temp = pair
                temp.push(nums[i])
                temp = temp.sort((a, b) => a - b)
                if (outputMemo[temp.toString()] === undefined) {
                    res.push(temp)
                    outputMemo[temp.toString()] = temp
                }
                
            })
        }
    }

    return res
};