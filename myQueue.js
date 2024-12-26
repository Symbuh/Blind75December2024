
var MyQueue = function() {
    this.myQueue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.myQueue.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // Should change this and use Array.Shift()
    let output = this.myQueue[0]
    this.myQueue = this.myQueue.slice(1)
    return output
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.myQueue[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    for (let i = 0; i < this.myQueue.length; i++) {
        if (typeof this.myQueue[i] === 'number') {
            return false
        }
    }
    return true
};

// Runtime 0ms, beats 100% of solutions