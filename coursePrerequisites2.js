var canFinish = function(numCourses, prerequisites) {
    // Basically the output is true unless we have prerequisites that point to eachother

    /*
        Whats a linear way to find these circular refrences? 

        sort them, toString them, if any are equal we can return false
    */
    for (let i = 0; i < prerequisites.length; i++) {
        prerequisites[i] = prerequisites[i].sort((a, b) => a - b)
        if (prerequisites[i][0] === prerequisites[i][1]) {
            return false
        }
    }

    // prerequisites.sort((a, b) => a[0] - b[0])

    let setOfTruth = new Set()

    for (let i = 0; i < prerequisites.length; i++) {
        setOfTruth.add(`${prerequisites[i][0]}${prerequisites[i][1]}`) // This might toString the numbers runining our runtime. 
    }

    console.log(setOfTruth)
    console.log(prerequisites)

    if (setOfTruth.size === prerequisites.length) {
        return true
    } 

    return false
};