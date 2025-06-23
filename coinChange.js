/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let output = -1

    let inner = (coins, amount, count) => {
        console.log(`coins ${coins}, amount ${amount}, count ${count}`)
        if (amount === 0) {
            output = count
            return count
        }

        for (let i = 0; i < coins.length; i++) {
            if (coins[i] <= amount) {
                console.log(`all the way in`)
                inner(coins, amount - coins[i], count + 1)
            }
        }
    }

    inner(coins, amount, 0)
    return output
};