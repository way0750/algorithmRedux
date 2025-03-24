/**


1 10 4 11


  3 2 11 2
  1 4 10 11


13 25 32 11
11 13 25 32

   12 24 32 8
   11 13 25 32

   24 32 8 12
 */
   const advantageCount = function(nums1, nums2) {
    let sortedIndexes = nums2.map((_, index) => index);
    sortedIndexes = sortedIndexes.sort((ai, bi) => nums2[bi] - nums2[ai]);
    const sortedNum1s = nums1.sort((a, b) => b-a);
    const placedNums = Array(nums1.length);
    for (let i = 0; i < sortedIndexes.length; i++) {
        if (sortedNum1s[0] > nums2[sortedIndexes[i]]) {
            placedNums[i] = sortedNum1s.shift();
        }
    }

    for (let i = 0; i < placedNums.length; i++) {
        if (placedNums[i] === undefined) {
            placedNums[i] = sortedNum1s.shift();
        }
    }
    
    const ans = [];
    for (let i = 0; i < sortedIndexes.length; i++) {
        const targetIndex = sortedIndexes[i];
        ans[targetIndex] = placedNums[i];
    }
    return ans;
};