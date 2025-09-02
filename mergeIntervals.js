/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0])
    let output = [], bucket = intervals[0]

    if (intervals.length === 1) {
        return intervals
    }

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= bucket[1]) {
            if (bucket[1] <= intervals[i][1]) {
                bucket[1] = intervals[i][1]
            }
        } else {
            output.push(bucket)
            bucket = intervals[i]
        }
    }
    output.push(bucket)

    return output
};