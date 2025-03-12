/**
 * @param {number[]} nums
 * @return {number[][]}
 if current number > previous
    two options: pick or ignore
 if current number < previous
    one option: ignore
 or two options:
    ignore
    and if current number > previous, pick
when to record valid answers:
    when current number > previous

base case:
    index >= nums.length, just return, the answers are already recorded
what to do with returns:
    nothing
what to always return:
    nothing
how to break problem smaller / make progress:
    pass new idx to next recursive call
    pass sub array to next call too
 */
    var findSubsequences = function(nums) {
        const ans = {};
        const dfs = (preArr, curIdx) => {
            if (curIdx >= nums.length) return;
            const preNum = preArr.length === 0 ? -Infinity : preArr[preArr.length-1];
            if (preNum <= nums[curIdx]) {
                const newPattern = [...preArr, nums[curIdx]];
                newPattern.length > 1 && (ans[newPattern] = newPattern);
                dfs(newPattern, curIdx+1);
            }
            dfs(preArr, curIdx+1);
        }
        dfs([], 0);
        return Object.values(ans);
    };