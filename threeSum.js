var threeSum = function(nums) {
    let memo = {}

    nums = nums.sort((a,b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (memo[nums[i]]) {
            memo[nums[i]].push(i)
        } else {
            memo[nums[i]] = [i]
        }
    }
    
    let output = [], glorble = new Set()

    for(let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let last = 0 - (nums[i] + nums[j])

            if (memo[last]) {
                for(let y = 0; y < memo[last].length; y++) {
                    if (memo[last][y] !== i && memo[last][y] !== j) {
                        let narfle = [nums[i], nums[j], last].sort((a, b) => a - b)
                        let narfleString = `${narfle[0]}${narfle[1]}${narfle[2]}`
                        if (!glorble.has(narfleString)) {
                            glorble.add(narfleString)
                            output.push(narfle)
                        }
                    }
                }
            }
        }
    }

    return output
};