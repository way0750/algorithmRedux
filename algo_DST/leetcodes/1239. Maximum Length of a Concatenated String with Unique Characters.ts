/**
 * @param {string[]} arr
 * @return {number}
 have to keep searching until the last chunk
    so when index === arr.length;
    count the state container? or runningSum and update the global max
 will keep track of running sum and frequency in an object
 will use the
 use vs not use

 1: if can use, use
 2: not use

a string with only unique lower case char is at most 26 char long
so anytime when the global max is 26, just return/

 when using:
    loop through the string and add each char to the freq obj
        if anytime a key with val is already in the freq obj, forget about it
    
 */
        var maxLength = function(arr) {
            const freq = {};
            let max = 0;
            for (let i = 97; i < 123; i++) freq[String.fromCharCode(i)] = 0;
            const dfs = (index, runningSum) => {
                if (runningSum === 26 || index === arr.length) {
                    max = Math.max(max, runningSum);
                    return;
                }
        
                const str = arr[index];
                // checking if can use the current option:
                let canUse = true;
                let i = 0;
                while (i < str.length && canUse) {
                    const char = str[i];
                    if (freq[char]) {
                        canUse = false;
                    } else {
                        freq[char]++;
                        i++;   
                    }
                }
        
                // useing the current option
                canUse && dfs(index+1, runningSum + str.length);
                if (max === 26) return;
        
                // reverse the decision:
                for (let j = 0; j < i; j++) freq[str[j]]--;
        
                // not using it
                dfs(index+1, runningSum);
                return;
            }
            dfs(0, 0);
            return max;
        };