/**
 * @param {string} s
 * @return {number[]}
 012345
 ababcc

 a: first 0, last 2
 b: first 1, last 3
 c: first 4, last 5
 d
 e.....
 compress these ranges
 a can compress with b
 0..3: 4
 then c by itself
 4..5: 2

 loop through the str char by char
 for each char, if first seen, add to uniqChars = [];
    and add to first seen: {a: 1}
 if not first seen, then add to last seen {a: 2}

 then go through uniqChars, this array maintains a list of chars that are actually in the s
    and the orders are maintained too
    go through this array to combine ranges
time: O(s.length)
space: O(s.length)
 */
var partitionLabels = function(s) {
    const chars = new Map(); // for order, and key/value access
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!chars.has(char)) chars.set(char, {start: i});
        chars.get(char).end = i;
    }
    let curStart = -1;
    let curEnd = -1;
    const ans = [];
    for (let [_, {start, end}] of chars) {
        if (start < curEnd) {
            curEnd = Math.max(curEnd, end);
            ans[ans.length-1] = curEnd - curStart + 1;
        } else {
            curStart = start;
            curEnd = end;
            ans.push(curEnd - curStart + 1);
        }
    }
    return ans;
};