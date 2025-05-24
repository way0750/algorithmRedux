/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const seen = new Set();
    let count = 0;
    const ans = [];
    for (let i = 0; i < A.length; i++) {
        const expectedNewUniqSize = seen.size + 2;
        seen.add(A[i]);
        seen.add(B[i]);
        count += expectedNewUniqSize - seen.size;
        ans.push(count);
    }
    return ans;
};