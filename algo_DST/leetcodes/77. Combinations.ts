/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 if choosing 1, then reduce the problem to the left over number of k length combo
    then choose 2 do the same
    then choose 3.....
so choose one number, and reduce k by 1
    recursive call with smaller k
        and a smaller collection of numbers
    1,2 is the same as 2,1
    so always loop from left to right

because you can just linearly reduce the problem, both available numbers and k
    do a bottom up backtrack
also need to pass an index for the recursive call so lower stack knows where
to start looping

recusive structure:
base case:
    k === 1
        which ever left over numbers return them each in an array
            each array is a combo, so:
                [[a], [b], [c]]
    or we can do a k === 0
        return [[]]
what to always return:
    an array (collection) of array (combos)
what to do with returns:
    go through each sub array, add current number to front
how to make problems smaller / make progress
if current index is 0, then recursively call with index 1
    bascially current index + 1
 */
    var combine = function(n, k, start=1) {
        if (k === 0) return [[]];
        const ans = [];
        for (let i = start; i <= n; i++) {
            const subCombos = combine(n, k-1, i+1);
            for (let subCombo of subCombos) {
                ans.push([i, ...subCombo]);
            }
        }
        return ans;
    };