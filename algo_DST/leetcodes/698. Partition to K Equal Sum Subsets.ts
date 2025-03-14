/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 target sum = grand sum / k;
 use each num exactly once
 find combos, each needs to equal to target sum
 like the square-side problem?
 have multiple containers?
    each is a partition

    
 */
    var canPartitionKSubsets = function(nums, k) {
        const sum = nums.reduce((s, n) => s+n, 0);
        if (sum % k !== 0) return false;
    
        const target = sum / k;
        nums.sort((a, b) => b - a);
        if (nums[0] > target) return false;
        const sides = Array(k).fill(0);
    
        const dfs = (numIndex) => {
            if (numIndex === nums.length) return true; // all numbers are successfully placed
    
            const num = nums[numIndex];
            // go through each side
            for (let i = 0; i < k; i++) {
                if (sides[i] + num > target) continue;
                sides[i] += num;
                if (dfs(numIndex + 1)) return true;
                sides[i] -= num;
                if (sides[i] === 0) break;
            }
    
            return false;
        }
    
        return dfs(0);
    };
    
    