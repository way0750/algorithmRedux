/**
 * @param {string} s
 * @return {string}
 use a stack
    if current k === 0
        start a new chunk
    if digit
        k *= 10
        k += digit
    if \w
        add to the current chunk in the stack
    if ]
        do math and put it in the new last chunk of the stack
        or if stack is empty
            then just put it in the ans
        
 */
            var decodeString = function(s) {
                const stack = [];
                const ans = [];
                let curK = 0;
                for (let char of s) {
                    if (/\d/.test(char)) {
                        if (curK === 0) stack.push({k: 0, str: ''});
                        curK = curK * 10 + +char;
                    } else if (/[a-z]/.test(char)) {
                        if (stack.length) {
                            stack[stack.length-1].str += char;
                        } else {
                            ans.push(char);
                        }
                    } else if (char === '[') {
                        stack[stack.length-1].k = curK;
                        curK = 0;
                    } else {
                        const {k, str} = stack.pop();
                        const longStr = str.repeat(k);
                        if (stack.length) {
                            stack[stack.length-1].str += longStr
                        } else {
                            ans.push(longStr);
                        }
                    }
                }
                return ans.join('');
            };