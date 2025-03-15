// Not a working solution but I've been struggling for so long that I figured I'd put it heres


var insert = function(intervals, newInterval) {
    // Check our array for buckets which overlap with our interval
    let overlaps = [], output = []

    if (intervals.length === 0) {
        if (newInterval.length !== 0) {
            return [newInterval]
        } else {
            return []
        }
    } 

    for (let i = 0; i < intervals.length; i++) {
        let pushed = false
        for (let j = 0; j < intervals[i].length; j++) {
            if (intervals[i][j] >= newInterval[0] && intervals[i][j] <= newInterval[1]) {
                pushed = true
                overlaps.push(intervals[i])
            }
        }
        if (!pushed) {
            output.push(intervals[i])
        }
    }

    // Create a new bucket using the overlapping arrays found
    let calculateInterval = () => {
        let output = []

        if (overlaps.length === 0) {
            return newInterval
        }

        output.push(overlaps[0][0] > newInterval[0] ? newInterval[0] : overlaps[0][0])
        output.push(overlaps[overlaps.length - 1][1] > newInterval[1] ? overlaps[overlaps.length - 1][1] : newInterval[1])

        return output
    }

    // Insert our new bucket into the intervals array
    let bucket = calculateInterval(), inserted = false

    for (let i = 0; i < output.length; i++) {
        if (output[i][0] > bucket[0] && inserted === false) {
            output.splice(i, 0, bucket)
            inserted = true
        }
    }

    if (inserted === false) {
        output.splice(output.length, 0, bucket)
    }

    return output
};