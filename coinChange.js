/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const memo = new Array(amount + 1).fill(Infinity)
    memo[0] = 0

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            // store the lowest number of coins needed for each index, starting with the base value of each coin, use this minimum to calculate adjacent values 
            memo[i] = Math.min(memo[i], memo[i - coin] + 1)
        }
    }

    return memo[amount] === Infinity ? -1 : memo[amount]
};