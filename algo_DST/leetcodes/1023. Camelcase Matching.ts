/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}


 positionally match each char in pattern in the queries str
 if all match, and there is no additional upper case letter in query
    that's a true
 loop through each query
    char by char compare to pattern
        if match, then move the pattern pointer forward
    make sure to keep track of the uppercase letter count in query

time: O(100 * 100)
space: O(1);
 */
var camelMatch = function(queries, pattern) {
    let patUpper = 0;
    for (let char of pattern) char.charCodeAt() <= 90 && patUpper++;

    const ans = [];
    for (let query of queries) {
        let pi = 0;
        let qryUpper = 0;
        let i = 0;
        while (qryUpper <= patUpper && i < query.length) {
            if (query[i] === pattern[pi]) pi++;
            if (query[i].charCodeAt() <= 90) qryUpper++;
            i++
        }
        ans.push(qryUpper === patUpper && pi === pattern.length)
    }
    return ans;
};