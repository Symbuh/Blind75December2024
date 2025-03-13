/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let memo = {}, oddFound = false, longest = 0

    for (let i = 0; i < s.length; i++) {
        if (memo[s[i]]) {
            memo[s[i]]++
        } else {
            memo[s[i]] = 1
        }
    }

    for (item in memo) {
       if (memo[item] % 2 === 0) {
            longest = longest + memo[item]
       } else {
            if (!oddFound) {
                longest = longest + 1
                oddFound = true
            }
            longest = longest + memo[item] - 1
       }
    }

    return longest
}; // 4ms runtime, faster than 77% of submissions