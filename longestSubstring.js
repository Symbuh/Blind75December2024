var lengthOfLongestSubstring = function(s) {
    let longest = 0

    for (let i = 0; i < s.length; i++) {
        let visited = {}, count = 0

        for (let j = i; j < s.length; j++) {
            if (visited[s[j]]) {
                j = s.length
            } else {
                count++
                visited[s[j]] = true
            }
        }

        if (count > longest) {
            longest = count
        }
    }

    return longest
};