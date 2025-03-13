var longestPalindrome = function(s) {
    let memo = {}, oddFound = false, longest = 0

    for (let i = 0; i < s.length; i++) {
        if (memo[s[i]]) {
            memo[s[i]].push(i)
        } else {
            memo[s[i]] = [i]
        }
    }

    for (item in memo) {
        if (memo[item].length % 2 === 0) {
            longest = longest + memo[item].length
        } else {
            if (!oddFound) {
                longest = longest + 1
                oddFound = true
            }

            longest = longest + memo[item].length - 1
        }
    }

    return longest
};// 25 ms, faster than 25% of solutions