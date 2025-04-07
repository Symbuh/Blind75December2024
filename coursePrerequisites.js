var canFinish = function(numCourses, prerequisites) {

    let prereqMap = {}, prereqKeys = {}

    for (let i = 0; i < prerequisites.length; i++) {
        prereqMap[prerequisites[i][0]] = prerequisites[i][1]
        prereqKeys[prerequisites[i][1]] = prerequisites[i][0]
    }

    // Now we want to find a course with no prerequistes and store the courses we've already taken
    let takenCourses = new Set(), startingPoint

    for (let i = 0; i < numCourses; i++) {
        if (prereqMap[i] === undefined) {
            startingPoint = i
            takenCourses.add(i)
        }
    }

    console.log(`StartingPoint: ${startingPoint}`)

    if (startingPoint === undefined) {
        return false;
    }

    let running = true;

    // We're tying to clear all courses we're allowed to clear
    while(running) {
        if (prereqKeys[startingPoint]) {
            if (prereqMap[prereqKeys[startingPoint]]) {
                if (takenCourses.has(prereqMap[prereqKeys[startingPoint]])) {
                    takenCourses.add(prereqKeys[startingPoint])
                    startingPoint = prereqKeys[startingPoint]
                } else {
                    return false
                }
            } else {
                takenCourses.add(prereqKeys[startingPoint])
                startingPoint = prereqKeys[startingPoint]
            }
        } else {
            running = false
        }
    }
    // We have to add a condition to the above while loop that makes sure the course
    // doesn't have any other prerequisites that we need to clear before taking it

    // 
    for(let i = 0; i < prerequisites.length; i++) {
        if (takenCourses.has(prerequisites[i][1])) {
            takenCourses.add(prerequisites[i][0])
        }
    }

    if (takenCourses.size >= numCourses) {
        return true
    }

    return false
}; // Putting this here for now while I try a different, less messy approach. 

