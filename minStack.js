
var MinStack = function() {
    this.stack = [] 
    this.min = []
};

MinStack.prototype.push = function(val) {
    this.stack.push(val)

    if (this.min.length === 0) {
        this.min.push(val)
    } else if (this.min[this.min.length - 1] >= val) {
        this.min.push(val)
    }
};

MinStack.prototype.pop = function() {
    let pop = this.stack.pop() 
    if (this.min[this.min.length - 1] === pop) {
        this.min.pop()
    }

    return pop
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1]
};
