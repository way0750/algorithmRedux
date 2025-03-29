function addToK (nums, k, idx) {
    if (nums[idx] === k) return true
    const ans = addToK(nums, k, idx+1);
}


const climbStairsMemo  = (n, memo = {0: 0, 1: 1, 2: 2}) => {
    if (memo[n]) return memo[n];
    memo[n] = climbStairsMemo(n-1, memo) + climbStairsMemo(n-2, memo);
    return memo[n];
}

const climbStairsTab = (n) => {
    const dp = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};

export const coinChange = (coins, amount) => {
    const dp = [0];
    coins.sort((a, b) => b - a);
    for (let curAmount = 1; curAmount <= amount; curAmount++) {
        /**
         * go through each coin and coin - cur amount, and see if left over is * there in the dp
         * if yes, keep it and compare to previous one and keep the smaller one
         */
        let min = Infinity;
        for (let coin of coins) {
            if (curAmount - coin > -1) {
                min = Math.min(min, dp[curAmount - coin]);
            }
        }
        dp[curAmount] = min + 1;
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
}

const coinChangeTests = [
    {
      coins: [1, 2, 5],
      amount: 11,
      expected: 3,
    },
    {
      coins: [2],
      amount: 3,
      expected: -1,
    },
    {
      coins: [1, 2, 5],
      amount: 0,
      expected: 0,
    },
    {
      coins: [1],
      amount: 10,
      expected: 10,
    },
    {
      coins: [1, 5, 10, 25],
      amount: 49,
      expected: 7,
    },
    {
      coins: [2, 5, 10, 1],
      amount: 27,
      expected: 4,
    },
    {
        coins: [186,419,83,408],
        amount: 6249,
        expected: 20,
    }
  ];
  
  function testCoinChange(coinChangeFunction) {
    for (let i = 0; i < coinChangeTests.length; i++) {
      const test = coinChangeTests[i];
      const result = coinChangeFunction(test.coins, test.amount);
      if (result === test.expected) {
        console.log(`Test ${i + 1} passed!`);
      } else {
        console.error(`Test ${i + 1} failed. Expected ${test.expected}, got ${result}`);
      }
    }
  }
  
  // Example usage (assuming you have a coinChange function implemented):
testCoinChange(coinChange);