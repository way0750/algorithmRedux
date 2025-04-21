/**
 * @param {string} num
 * @return {boolean}

use back track:
    the path needs to have at least 2 numbers in it
    the current number: if === previous 2's sum, move on
        if < move but with state tracking
        if > return false
base case
    index === nums.length and no left over state
what to do when recursive call returns false?
    increase self?
        until recursive call return true, short cut return true
        else retunr false
        which means upper stack will increase itself
 */
        var isAdditiveNumber = function(num) {
            const path = [];
            const dfs = (index = 0) => {
                if (index === num.length) return path.length > 2 ? true : false;
                if (path.length < 2) {
                    let curNumStr = '';
                    // make choice: add char to current num str
                    // and see if recursive call returns true
                    for (let i = index; i < num.length; i++) {
                        curNumStr += num[i];
                        path.push(+curNumStr);
                        if (dfs(i+1)) return true;
                        path.pop();
                        if (curNumStr === '0') return false;
                    }
                } else {
                    let curNumStr = num[index];
                    let i = index + 1;
                    const preSum = path[path.length-1] + path[path.length-2];
                    while (i < num.length && +curNumStr < preSum) {
                        curNumStr += num[i];
                        i++
                    }
                    if (+curNumStr === preSum && `${+curNumStr}` === curNumStr) {
                        path.push(+curNumStr);
                        if(dfs(i)) return true;
                        path.pop();
                    }
                }
                return false;
            }
            return dfs();
        };