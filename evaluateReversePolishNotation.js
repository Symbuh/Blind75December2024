/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let queue = []

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i]  === '/') {
            if (tokens[i] === '+') {
                let temp = queue.pop()
                queue.push(queue.pop() + temp)
            }
            if (tokens[i] === '-') {
                let temp = queue.pop()
                queue.push(queue.pop() - temp)
            }
            if (tokens[i] === '*') {
                let temp = queue.pop()
                queue.push(queue.pop() * temp)
            }
            if (tokens[i] === '/') {
                let temp = queue.pop()
                queue.push(Math.trunc(queue.pop() / temp))
            }
        } else {
            queue.push(parseInt(tokens[i]))
        }
    }

    return queue.pop()
};