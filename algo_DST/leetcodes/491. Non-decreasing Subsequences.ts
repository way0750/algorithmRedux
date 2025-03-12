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
    var findSubsequences002 = function(nums) {
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


/**
 * 
 * solution container:
 *      an array
 * solution check:
 *      container.length > 1 and hasn't been added
 * available choices:
 *      nums[currentIndex and on....]
 * adding and remove decision:
 *      container/arr.push/pop
 * 
 * base case:
 *      the call is out of bound of the nums
 *      ans the global collection
 * what to always return
 *      ans the global collection, which is an array
 * what to do with returns:
 *      nothing, valid patterns are already added to it
 *      just keep on returning it up
 * how to make progress:
 *      either pick current number if it's larger than the previous one
 *      or skip it // also a valid choice
 */
var findSubsequences = function(nums, idx=0, path = [], ans=[], added=new Set()) {
    if (idx === nums.length) return ans;
    // there are only two options, use current number or ignore it

    // choice 1: ignoring current number
    findSubsequences(nums, idx+1, path, ans, added);
    //choice 2: add current number if it's larger than previous number
    if ((path[path.length-1] || 0) <= nums[idx]) {
        path.push(nums[idx]);
        if (path.length > 1 && !added.has(path)) {
            ans.push(path.slice());
            added.add(path);
        }
        findSubsequences(nums, idx+1, path, ans, added);
    }

    return ans;
}



/**
 * 
 * no dubplicates, so use a set to keep track of numbers used
 *  like the pathVisited
 * pass an array to keep track of current path/solution
 * make a choice and add the choice to the array
 *  remember, before making the next decision, remove the previous/current decision
 * 
 * 
 * one single container for solution
 * once solution is found, add the container to the global collection
 *      or just return all the way and out
 * make sure to check if further progress is valid or even needed
 *      so to end early and avoid any unless/un-needed search
 * after making a valid decision and add it to the container, do a recursive call
 *      but remember to remove the current decision after recursive call is done
 *      thereby resetting the state of the container for next calls
 */

const getPermutations = (nums) => {
    const pathVisited = new Set(); // used to keep track of if a number has been used already in the current path
    const ans = [];
    const dfs = (path) => {
        if (path.length === nums.length) {
            ans.push(path);
            // after this, implictly return
        } else {
            // make valid decisions here one by one:
            for (let num of nums) {
                // if already used the number, skip it
                if (pathVisited.has(num)) continue;
                // current number hasn't been used yet
                // and path isn't long enough yet, otherwise it would had been returned already.
                path.push(num);
                pathVisited.add(num);
                dfs(path);
                // next use a different number
                // but before that, remove the current decision
                path.pop();
                pathVisited.delete(num);
            }
        }
    }
    dfs([]);
    return ans;
}

const getPermutations002 = (nums, path=[], pathVisited=new Set(), ans=[]) => {
    if (path.length === nums.length) {
        ans.push(path.slice());
    } else {
        for (let num of nums) {
            if (pathVisited.has(num)) continue;
            pathVisited.add(num);
            path.push(num);
            getPermutations002(nums, path, pathVisited, ans);

            // these two lines to reset state for the next search
            pathVisited.delete(num);
            path.pop();
        }
    }
    return ans;
}