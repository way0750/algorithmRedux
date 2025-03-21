/**
 * @param {string} s
 * @return {string[]}

 normal digit:
    by itself: 0 ok
        2
        by itself also means adding a 'comma'
    start a new chunk 0 ok
        2.
        but just as it is x. is not ok
    be part of the previous pattern:
        xx.xxxx2
        or
        xxxxx2
        0 only ok if:
        wouldn't become 00.
        wouldn't become xxx.xxx0
        but xxxxx0 is ok

    or simply do a Number(pattern).toString() === pattern; true === valid

    base case:
        index === sFixed.length
        do the Number() === pattern check

    start a new chunk (potentially by itself)
        current path is a first chunk. check validity
    start float num
        add decimal to current path
    add to current path
        as long as wouldn't result in 
        00
        0.0

there needs to be only 2 chunks
how about just divide the string into 2 step by step
    then do back track for each chunk?
    then combind them?
 */
    var ambiguousCoordinates = function(s) {
        const isLegitNum = (str) => Number(str).toString() === str;
        const makeNums = (str) => {
            const nums = [];
            if (isLegitNum(str)) nums.push(str);
            for (let i = str.length-1; i > 0; i--) {
                const left = str.slice(0, i);
                const right = str.slice(i);
                const n = `${left}.${right}`;
                if (isLegitNum(n)) nums.push(n);
            }
            return nums;
        }
        const ans = [];
        for (let i = 2; i < s.length-1; i++) {
            const firstChunk = s.slice(1, i);
            const firstNums = makeNums(firstChunk);
            if (!firstNums.length) continue;
            const secondChunk = s.slice(i, s.length-1);
            const secondNums = makeNums(secondChunk);
            if (!secondNums.length) continue;
            for (let firstNum of firstNums) {
                for (let secondNum of secondNums) {
                    ans.push(`(${firstNum}, ${secondNum})`)
                }
            }
        }
        return ans;
    };