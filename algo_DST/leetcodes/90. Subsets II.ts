/**
 * @param {number[]} nums
 * @return {number[][]}
 so basically whenever you add a number that's a set
    do keep going after adding a set
    do check if set is duplicated
 so right from the beginning, add path [] to the collection
 */
 var subsetsWithDup = function(nums) {
    nums.sort();
    const ans = [[]];

    // const dfs = (start=0, path=[], used={}) => {
    //     if (start === nums.length) return;
    //     for (let i = start; i < nums.length; i++) {
    //         path.push(nums[i]);
    //         if (!used[path]) {
    //             ans.push([...path]);
    //             used[path] = true;
    //         }
    //         dfs(i+1, path, used);
    //         path.pop();
    //     }
    // }

    const dfs = (index=0, path=[], used={}) => {
        if (index === nums.length) return;
        // use current number
        path.push(nums[index]);
        if (!used[path]) {
            ans.push([...path]);
            used[path] = true;
        }
        dfs(index+1, path, used);
        path.pop();

        // go to next number, this is how we fake iteration
        dfs(index+1, path, used);
    }
    dfs();
    return ans;
};