/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 5:
    5
    0
4:
    4+5 = 9
    4+0 = 4
    0+5 = 5
    0+0 = 0
3:
    3+9=12
    3+4=7
    3+5=8
    3+0=3
    0+..9
        4
        5
        0
2:
    2+12=14
    2+7=9
    2+8=10
    2+3=5
        9
        4
        5
        0
2**1
2**2

1:
    0: 0 // sum: length of the path
    1: 1

2:
    0: 0
    1: 1
    2: 1
    3: 2

3:
    0: 0
    1: 1
    2: 1
    3: 2 // there is a 3: 1. But 3: 2 is longer
    4: 2
    5: 2
    6: 3

4:
    0: 0
    1: 1
    2: 0
    3: 2
    4: 2
    5: 2
    6: 3
    7: 3
    8: 3
    9: 3
    10: 4

5:
    0: 0
    1: 1
    2: 0
    3: 2
    4: 2
    5: 2
    6: 3
    7: 3
    8: 3
    9: 3 // return this
    10: 4
    11: 4
    12: 4
    13: 4
    14: 4
    15: 5



4:
    0: 0
    4: 1
1:
    0: 0
    1: 1
    4: 1
    5: 2
3:
    0: 0
    1: 1
    3: 1
    4: 2
    5: 2
    7: 2
    8: 3
 */

    const lengthOfLongestSubsequence = (nums, target) => {
        // const dp = Array(nums.length).fill(null).map(() => Array(target+1).fill(0));
        // dp[0][nums[0]] = 1; // for the first num in nums, [0: not use, num: use(1)]
    
        let dp = Array(target+1).fill(-1);
        dp[0] = 0;
        dp[nums[0]] = 1; // for the first num in nums, [0: not use, num: use(1)]
        for (let i = 1; i < nums.length; i++) {
            const curNum = nums[i]
            // go through each of the sums in the dp, and add curNum to it, as using it
            // but if the path length count is -1, meaning there isn't even a path there
            // skip that sum
            // so check if the sum: -1 or not
            // and if the sum + target <= target
            let sum = 0;
            const newDp = dp.slice();
            while (curNum + sum <= target) {
                if (dp[sum] !== -1) {
                    newDp[curNum + sum] = Math.max(newDp[curNum + sum], dp[sum] + 1);
                }
                sum++;
            }
            dp = newDp;
        }
        return dp[target]
    }
    
    
    var lengthOfLongestSubsequence001 = function(nums, target) {
        let max = -1;
        const path = []
        let count = 0
        const dfs = (index = 0, runningSum = 0) => {
            count++
            if (runningSum === target) {
                max = Math.max(max, path.length);
                return;
            } else if (runningSum > target || index === nums.length) {
                return;
            }
    
            // use current number
            const curNum = nums[index];
            path.push(curNum);
            dfs(index+1, runningSum + curNum);
            path.pop();
    
            // not using it
            dfs(index+1, runningSum);
        }
        dfs();
        console.log(count);
        return max;
    };
    
    // var lengthOfLongestSubsequence001 = function(nums, target, index = 0, path = [], runningSum = 0, max = -1) {
    //     if (runningSum === target) {
    //         return Math.max(max, path.length);
    //     } else if (runningSum > 9 || index === nums.length) {
    //         return max;
    //     }
    
    //     // use current number
    //     const curNum = nums[index];
    //     path.push(curNum);
    //     max = Math.max(max, lengthOfLongestSubsequence(nums, target, index+1, path, runningSum + curNum, max));
    //     path.pop();
    
    //     // not using it
    //     max = Math.max(max, lengthOfLongestSubsequence(nums, target, index+1, path, runningSum, max));
    //     return max;
    // };