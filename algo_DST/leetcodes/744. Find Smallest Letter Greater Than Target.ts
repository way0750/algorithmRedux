/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if (target === 'z') return letters[0];
    let left = 0;
    let right = letters.length;
    let ans = letters[0];
    while (left < right) {
        const mid = left + Math.floor((right-left)/2);
        if (letters[mid] > target) {
            ans = letters[mid];
            right = mid;
        } else {
            left = mid+1;
        }
    }
    return ans;
};