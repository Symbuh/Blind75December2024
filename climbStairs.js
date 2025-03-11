/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) {
        return n 
    }

    let secondPrevious = 2, previous = 3

    for (let i = 4; i < n; i ++) {
        let temp = previous
        previous = secondPrevious + previous
        secondPrevious = temp
    }
    
    return secondPrevious + previous
};

// 0ms runtime faster than 100% of solutions submitted