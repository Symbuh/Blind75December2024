var coinChange = function(coins, amount) {
    let output = -1
    coins = coins.sort((a, b) => b - a)

    let inner = (coins, amount, count) => {
        if (amount === 0) {
            if (output === -1 || count < output) {
                output = count
            }
            return output
        }
        
        // if (output !== -1) {
        //     return output
        // }

        if (amount < 0) {
            return -1
        }

        for (let i = 0; i < coins.length; i++) {
            if (coins[i] <= amount) {
                inner(coins, amount - coins[i], count + 1)
            }
        }
    }

    inner(coins, amount, 0)
    return output
};