/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 1: remove out of bound index
 2: add the new element and clean things up
 3: get the largest

 first build the quque
 then move the front index forward
    each time put the largest in the queue into the ans
 
 if at the end the ans is empty, that means k===nums.length
 in that case return [queue[0]]
 time: O(n)
 space: O(n)
 */
 var maxSlidingWindow = function(nums, k) {
    const bigIndex = [0];
    const q = [];
    for (let i = 0; i < k; i++) {
        while (q.length && nums[q[q.length-1]] < nums[i]) q.pop();
        q.push(i);
    }
    const ans = [];
    for (let i = k-1; i < nums.length; i++) {
        if (q[0] < i-k+1) q.shift();
        while (q.length && nums[q[q.length-1]] <= nums[i]) q.pop();
        q.push(i);
        ans.push(nums[q[0]]);
    }
    return ans;
};