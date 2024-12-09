/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    let memo = {}

    for (let i = 0; i < s.length; i++) {
        if (memo[s[i]]) {
            memo[s[i]]++
        } else {
            memo[s[i]] = 1
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!memo[t[i]]) {
            return false
        } else if (memo[t[i]] === 0) {
            return false
        } else {
            memo[t[i]]--
        }
    }
    return true
};
// 14ms faster than 73% of submissions