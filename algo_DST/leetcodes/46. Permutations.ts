/**

since you need to jump around
so you can't just cut the input into smaller one and pass it down easily
    you can but it might be not as easy

using recursion
    pass a shared container down
    at each step, the decions are
        any number that's not used yet
    once return from lower stack
        pop the decision
        and removed it from the visited_set
base case:
    idx is out of bound
        done, just add current path to collection
 */
        var permute = function(nums) {
            const dfs = (nums, used, path, ans) => {
                if (path.length === nums.length) {
                    ans.push(path.slice());
                    return ans;
                }
                for (let i = 0; i < nums.length; i++) {
                    const num = nums[i];
                    if (path.includes(num)) continue;
                    path.push(num);
                    dfs(nums, used, path, ans);
                    path.pop();
                }
                return ans;
            }
        
            return dfs(nums, new Set(), [], []);
        };