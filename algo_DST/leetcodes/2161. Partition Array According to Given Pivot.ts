/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 9,12,5,10,14,3,10
 9,5,3,10,10,12,14
 


9,12,5,10,14,3,10


 */
var pivotArray = function(nums, pivot) {
    let low = 0, same = 0, high = nums.length;
    for (let n of nums) {
        if (n < pivot) {
            same++;
        } else if (n > pivot) {
            high--;
        }
    }
    const ans = Array(nums.length);
    for (let n of nums) {
        if (n < pivot) {
            ans[low++] = n;
        } else if (n === pivot) {
            ans[same++] = n;
        } else {
            ans[high++] = n;
        }
    }
    return ans;
};