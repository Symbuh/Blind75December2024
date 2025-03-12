/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    let isPalendrome = (start, end) => {
        for (let i = start; i < (end + start) / 2; i++) {
            if (s[i] !== s[end + start - i]) {
                return false
            }
        }
        return true
    }

    let findCombinations = (indicies) => {
        if (!indicies) {
            return 0
        }
        for (let i = 0; i < indicies.length; i++) {
            for (let j = indicies.length - 1; j > 0; j--) {
                if (i !== j && isPalendrome(indicies[i], indicies[j])) {
                    console.log('isPalendrome!')
                    return i - j
                }
            }
        }

        return 0
    }

    let memo = {}, longest = 0

    for (let i = 0; i < s.length; i++) {
        if (memo[s[i]]) {
            memo[s[i]].push(i)
        } else {
            memo[s[i]] = [i]
        }
    }

    let longestFromBucket = 0

    for (let i = 0; i < s.length; i++) {
        if (memo[s[i]] && memo[s[i]]?.length > 1) {
            longestFromBucket = Math.abs(findCombinations(memo[s[i]]))
        }

        console.log(`Longestfrom bucket: ${longestFromBucket}, longest ${longest}`)

        if (longestFromBucket > longest) {
            longest = longestFromBucket
        }   
    }

    return longest
};