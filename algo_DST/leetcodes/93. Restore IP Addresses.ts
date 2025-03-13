/**
 * @param {string} s
 * @return {string[]}

if s.length > (3 * chunkIdx) s.length < (chunIdx)
    return

choices:
    each digits, append to previous digits is a choice
    ex: 1, 12, 123
    if 0, then there is only one choice, 0
    so there are at most 3 choices at each chunk
    reversing choices:
        you can dubplicate logic and aovid reversing
        dfs(1)
        dfs(12)
        dfs(123)
validity check and pruning
    chunk < 256
    the amount of reminaning digits are amount <= chunkCount && chunkCount*3 > amount
 */
    var restoreIpAddresses = function(s) {
        const ans = [];
        const path = [];
        const dfs = (idx, chunkIdx) => {
            const remaingChars = s.length-idx; // inclusive of current idx's char
            if (remaingChars < chunkIdx && chunkIdx * 3 < remaingChars) return // not enough/too many chars
            // found one legit pattern
            if (chunkIdx === 1) {
                const lessThan256 =idx < s.length && Number(s.slice(idx)) < 256;
                const leading0 = s[idx] === '0' && s.length-1 > idx;
                if (!leading0 && lessThan256) {
                    path.push(s.slice(idx));
                    ans.push(path.join('.'));
                    path.pop();
                }
                return;
            }
            
            // make choices
            // 1st 0 or whatever, it is still legit
            path.push(s[idx]);
            dfs(idx+1, chunkIdx-1);
            path.pop();
            // 2nd and 3rd choice, must check leading 0 and < 256
            if (s[idx] !== '0') {
                if (Number(s.slice(idx, idx+2)) < 256) {
                    path.push(s.slice(idx, idx+2));
                    dfs(idx+2, chunkIdx-1);
                    path.pop()
                }
                if (Number(s.slice(idx, idx+3)) < 256) {
                    path.push(s.slice(idx, idx+3));
                    dfs(idx+3, chunkIdx-1);
                    path.pop()
                }
    
            }
        }
        dfs(0, 4);
        return ans;
    };