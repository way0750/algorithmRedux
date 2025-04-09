/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 basically have to hit a flat bottom of the valley
 go from left to right
    keep track of the place where the first number that's larger than i-1
 then go from right to left
    keep track and find the first number that's larger than i+1
 now check and see if left >= right
 and then slice at max(k, right) to min(left, n-k);
 0 1 2 3 4 5 6
[2,1,1,1,3,4,1]
 1 2 3 4 1 1 2
[2,1,1,1,3,4,1]
 1 5 4 3 2 1 1
                          
  0       1       2     3     4     5       6     7      8      9
[878724,201541,179099,98437,35765,327555,475851,598885,849470,943442]
1,2,3,4,5,1,1,1,1,1
1,1,1,1,6,5,4,3,2,1
 */
var goodIndices = function(nums, k) {
    const left = Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] >= nums[i]) {
            left[i] += left[i-1];
        }
    }
    const right = Array(nums.length).fill(1);
    for (let i = nums.length - 2; i > -1; i--) {
        if (nums[i] <= nums[i+1]) {
            right[i] += right[i+1]
        }
    }

    const ans = [];
    for (let i = k; i < nums.length - k; i++) {
        if (left[i-1] < k || right[i+1] < k) continue;
        ans.push(i);
    }
    return ans;
};