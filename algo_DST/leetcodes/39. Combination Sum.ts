/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 choices:
    same number 0.. unlimited times
 pruning:
    if making certain will make the sum over K
    skip that choice
 validity check:
    path sums up to target
    or running sum, sums up to target
    in that case, add path to ans

 base case:
    if runningSum === target
        add path
    if runningSum > target
        prune/early return nothing

making choices and reversing it:

 */
var combinationSum001 = function(nums, target) {
    const ans = [];
    const path = [];
    const dfs = (idx, runningSum) => {
        if (runningSum === target) {
            ans.push(path.slice());
            return;
        }
        if (runningSum > target || idx >= nums.length) return;
        const insertIdx = path.length;
        let count = 0;
        // making choices
        while ((nums[idx] * count + runningSum) <= target) {
            count && path.push(nums[idx]);
            dfs(idx+1, nums[idx] * count + runningSum);
            count++;
        }
        // reversing choices
        path.splice(insertIdx, count);
    }
    dfs(0, 0);
    return ans;
};

var combinationSum002 = (nums, target, idx=0, runningSum=0, path=[], ans=[]) => {
    if (runningSum === target) {
        ans.push(path.slice());
        return ans;
    }
    if (runningSum > target || idx >= nums.length) return ans;
    const insertIdx = path.length;
    let count = 0;
    while ((nums[idx] * count + runningSum) <= target) {
        count && path.push(nums[idx]);
        combinationSum(nums, target, idx+1, nums[idx] * count + runningSum, path, ans);
        count++;
    }
    path.splice(insertIdx, count);
    return ans;
}

// function combinationSum003(nums: number[], target: number, startIndex: number = 0): number[][] {
//     if (target === 0) return [[]];
//     const ans = [];
//     for (let i = startIndex; i < nums.length; i++) {
//         let freq = 1;
//         const curNum = nums[i];
//         while ((curNum * freq) <= target) {
//             const partial = Array(freq).fill(curNum);
//             if (curNum * freq === target) {
//                 ans.push(partial);
//             } else {
//                 const subArrs = combinationSum001(nums, target - curNum * freq, i+1);
//                 for (let j = 0; j < subArrs.length; j++) {
//                     ans.push([...partial, ...subArrs[j]]);
//                 }
//             }
//             freq++;
//         }
//     }
//     return ans;
// };

var combinationSum = function(candidates, target) {
    const res = [];

    function makeCombination(idx, comb, total) {
        if (total === target) {
            res.push(comb.slice());
            return;
        }

        if (total > target || idx >= candidates.length) {
            return;
        }

        comb.push(candidates[idx]);
        makeCombination(idx, comb, total + candidates[idx]);
        comb.pop();
        makeCombination(idx + 1, comb, total);
    }

    makeCombination(0, [], 0);
    return res;    
};