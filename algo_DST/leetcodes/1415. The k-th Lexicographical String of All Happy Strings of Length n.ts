/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 if current state is 'a' then next options are 'b' and 'c'
 should always go from a to c to maintain the lexical order
 then finally getting a str of n length, k--
    if k === 0 then that's the happy str

pass partial string down
    so that the next call can check and see if cartain chars should be avoided
always check if should continue searching
    k === 0 yet?
    n = 0
        0
    n = 1
        3
    n = 2
        3 * 2 = 6
    n = 3
        3 * 2 * 2 = 12
    

 */
        var getHappyString = function(n, k) {
            if (n === 0 && k) return "";
            const totalCombo = 3 * 2**(n-1)
            if (totalCombo < k) return "";
        
            const options = ['a', 'b', 'c'];
            const dfs = (str) => {
                // add char to str
                for (let option of options) {
                    if (option === str[str.length-1]) continue // invalid option
                    const newStr = str + option
                    if (newStr.length === n) k--
                    // console.log(newStr)
                    if (!k) return newStr;
                    if (newStr.length < n) {
                        const returnVal = dfs(newStr);
                        if (returnVal) return returnVal;
                    }
                }
                return "";
            }
            return dfs('');
        };