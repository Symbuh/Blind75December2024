/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    /*
        nums[i] nums[j] nums[k]

        i != j
        i != k
        j != k

        basically the indexes cannot be equal,
        it must be a unique index 

        two sum 
        create a memo with the key being the int and the val being an 
            array of indicies? 

        iterate back through the string, check to see if theres a match for our target minus the current character and return
    */
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
            if (i !== index) {
                if (memo[target - nums[i]]) {
                    for (let j = 0; j < memo[target - nums[i]].length; j++) {
                        if(memo[target - nums[i]][j] !== i && memo[target - nums[i]][j] !== index) {
                            output.push([nums[i], nums[memo[target - nums[i]][j]]])
                            j = memo[target - nums[i]].length
                        }
                    }
                }
            }
        }

        console.log(`two sum Index: ${index}, target: ${target}`)
        console.log(output)

        return output
    }

    let res = []

    for (let i = 0; i < nums.length; i++) {
        /*
            I'm remembering now that there's a much cleaner way to do this problem that I'm completely spacing on.
        */
        let pairs = twoSum(i, 0 - nums[i])

        if (pairs.length > 0) {
            pairs.forEach((pair, i) => {
                let temp = pair
                temp.push(nums[i])
                res.push(temp)
            })
        }
    }

    return res
};