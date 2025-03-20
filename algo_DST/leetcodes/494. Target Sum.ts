/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 n = 1
 -1
 +1
 n = 1: {
    -1: 1
    1: 1
 }

 n = 2 : {
    -2: 1
    0: 2
    2: 1
 }

 n = 3: {
    -1: 3
    -3: 1
    1: 3
    3: 1
 }


n = 4 {
    0: 6
    -2: 4
    -4: 1
    2: 4,
    4: 1
}

n = 5 {
    1: 6
    -1: 14
    -3: 5
    3: 4
    5: 1
}

add + or - to current number
then for each of previous sum collection
    and + or - to the key to make new collection
n*n
 */
var findTargetSumWays = function(nums, target) {
    let prev = {
        [`-${nums[0]}`]: 1,
        [`${nums[0]}`]: 1,
    };
    for (let i = 1; i < nums.length; i++) {
        const newSums = {};
        const curNum = nums[i];
        for (let numStr in prev) {
            const preNum = +numStr;
            let count = prev[preNum]; // Ways to reach `sum` so far
            let plusSum = preNum + curNum;
            let minusSum = preNum - curNum;

            // Update new ways to reach `plusSum` and `minusSum`
            newSums[plusSum] = (newSums[plusSum] || 0) + count;
            newSums[minusSum] = (newSums[minusSum] || 0) + count;
        }
        prev = newSums;
    }
    if (target === 0) {
        return (prev[target] || 0) + (prev[`-${target}`] || 0);
    } else {
        return prev[target] || 0;
    }
};
