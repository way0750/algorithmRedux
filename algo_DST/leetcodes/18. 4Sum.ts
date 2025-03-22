/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 move 1st and 2nd pointers one by one toward the right
    for 3rd and 4th
        two pointers merge toward the middle

  -2, -1, -1, 1, 1, 2, 2

 */
  var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    let one = 0;
    const ans = [];
    while (one < nums.length-3) {
        let two = one + 1;
        while (two < nums.length-2) {
            let left = two + 1;
            let right = nums.length-1;
            while (left < right) {
                const sum = nums[one] + nums[two] + nums[left] + nums[right];
                if (sum === target) {
                    ans.push([nums[one], nums[two], nums[left], nums[right]]);
                    left++;
                    while (left < right && nums[left-1] === nums[left]) left++
                    right--;
                    while (left < right && nums[right] === nums[right+1]) right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
            two++
            while (nums[two-1] === nums[two]) two++;
        }
        one++
        while (nums[one-1] === nums[one]) one++;
    }
    return ans;
};