/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 0,1,2,3,4,5,6
   . . . . . .
[3,4,9,1,3,9,5]

 0,1,2,3,4,5,6
         . . .
[3,4,3,1,3,9,5]

use some sort of sliding window
keep a front pointer that keeps on moving forward 1 index by 1 index
keep a back index
    when front runs into a key num
    set back index to Math.max(back, front-k)
        and start to move back index 1 by 1 until reaching
            math.min(front + k, nums.length)
time: O(n)
space: O(n);
 */
var findKDistantIndices = function(nums, key, k) {
    const ans = [];
    let back = 0;
    for (let front = 0; front < nums.length; front++) {
        if (nums[front] !== key) continue;
        back = Math.max(back, front-k);
        const dest = Math.min(front + k + 1, nums.length);
        while (back < dest) {
            ans.push(back++);
        }
    }
    return ans;
};