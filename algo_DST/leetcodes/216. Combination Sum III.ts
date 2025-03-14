/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
no permutation allowed!
so there is a sense of moving only forward with possible digits
use recursion as a way to do looping
provide both path and runningSum as container

base case:
    if runningSum === n
        add path
    if index out of bound or runningSum > n
        return
 */
        var combinationSum3 = function(k, target) {
            const ans = [];
            const dfs = (n=1, runningSum=0, path = []) => {
                if (runningSum === target && path.length === k) {
                    ans.push([...path]);
                    return;
                }
                if (path.length > k || n === 10 || runningSum > target) return;
        
                path.push(n);
                dfs(n+1, runningSum + n, path);
                path.pop();
        
                dfs(n+1, runningSum, path);
                return;
            }
            dfs();
            return ans;
        };