/**
 because the subsequant calls needs access to the relative last two
    numbers, it's a good idea to pass a path down
 validity check:
    if a sequence is already found, return
    at current stack, keep on creating numbers
        until finding one that = pre1 + pre2
            in which case, add the current number to path
            then do recursive call again
        of if smaller, keep going
        if larger / index out of bound, stops, and early return
making decisions and reversing it:
    index+1+2+3...... add to path when a valid choice is found
        pop it when returning from sub recursive call
 */

        const splitIntoFibonacci = function(num, idx = 0, path=[]) {
            if (path.length > 2 && idx === num.length) return path;
            let curNum = ''
            const len = num[idx] === '0' ? idx : num.length-1;
            const sum = path[path.length-1] + path[path.length-2];
            for (let i = idx; i <= len; i++) {
                curNum += num[i];
                if (+curNum > sum || +curNum >= 2**31) {
                    return [];
                } else if (path.length < 2 || sum === +curNum) {
                    path.push(+curNum);
                    const ans = splitIntoFibonacci(num, i+1, path);
                    if (ans.length) {
                        return ans;
                    } else {
                        path.pop();
                    }
                }
            }
            return [];
        };
        