/**
 * @param {number[]} nums
 * @param {number[]} pattern
 * @return {number}
 i = 0
 k = 0
    1 > 0
 k = 1
    2 > 1

brute force compare pattern against nums
time: O(nums.length * pattern.length)
space: O(1);
    
0 1 2 3 4

 */
var countMatchingSubarrays = function(nums, pattern) {
    let count = 0;
    for (let i = 0; i < nums.length - pattern.length; i++) {
        let pass = true;
        let k = 0
        while (pass && k < pattern.length) {
            const num = nums[i + k];
            const nextNum = nums[i + k + 1];
            pass = num < nextNum && pattern[k] === 1 ||
                num === nextNum && pattern[k] === 0 ||
                num > nextNum && pattern[k] === -1;   
            k++;
        }
        if (pass) count++;
    }
    return count;
};


/**
 * 
 * ABABCABAB
 *      1234
 * 
 */

const makePrefix = (str) => {
    const prefix = Array(str.length).fill(0);
    for (let i = 1; i < str.length; i++) {
        if (prefix[i-1] && str[i] === str[prefix[i-1]]) {
            prefix[i] = prefix[i-1] + 1;
        } else if (str[0] === str[i]) {
            prefix[i] = 1;
        }
    }

    return prefix;
}
const str = "ABABBABABDABABEABAB"

// console.log(makePrefix(str));
console.log(makePrefix(str));

/**
 * Builds the prefix table (LPS array) for KMP string matching.
 * For each index i in the pattern, prefixTable[i] stores the length
 * of the longest proper prefix which is also a suffix in pattern[0..i].
 */
function buildPrefixTable(pattern) {
    const prefixTable = new Array(pattern.length).fill(0); // LPS array
    let prefixLength = 0; // length of the last matched prefix-suffix
  
    for (let i = 1; i < pattern.length; i++) {
      // If characters don't match, fall back until we find a match or reach 0
      while (prefixLength > 0 && pattern[i] !== pattern[prefixLength]) {
        prefixLength = prefixTable[prefixLength - 1]; // fallback to shorter prefix
      }
  
      // If characters match, we can extend the current prefix-suffix length
      if (pattern[i] === pattern[prefixLength]) {
        prefixLength++;
        prefixTable[i] = prefixLength;
      } else {
        // No match and no valid fallback, so prefix length stays 0
        prefixTable[i] = 0;
      }
    }
  
    return prefixTable;
  }

console.log(buildPrefixTable(str));