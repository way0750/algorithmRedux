/**
 * @param {number} n
 * @return {string[]}
current digit can be anything
    but if it is 0, then i-2 can't be zero
can use back tracking:
    share container: string
valid solution if str.length === n and if current digit is 0, i-2 can't be 0
invalid solution forget about str.length, if current digit is 0 and 1-2 is 0
    invalid

 */
    var validStrings = function(n, path = '', ans = []) {
        const lastNum = path[path.length-1];
        if (lastNum === '0' && lastNum === path[path.length-2]) {
            return ans;
        }
        if (path.length === n) {
            ans.push(path);
            return ans;
        }
    
        validStrings(n, path + '1', ans);
        validStrings(n, path + '0', ans);
        return ans;
    };