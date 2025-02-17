/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8

 */

function generateParenthesis001(n: number): string[] {
    let pairs = ['()'];
    for (let i = 2; i <= n; i++) {
        const newPairs = [];
        for (let j = 0; j < pairs.length; j++) {
            const pair = pairs[j];
            let pCount = 0;
            for (let k = -1; k < pair.length; k++) {
                const char = pair[k];
                if (char === '(') {
                    pCount++;
                } else if (char === ')') {
                    pCount--
                }
                if (pCount === 0) {
                    newPairs.push(
                        '(' + pair.substr(0, k+1)  + ')' + pair.slice(k+1)
                    );
                }
            }
        }
        pairs = newPairs;
    }

    return pairs;
};
/**
1: ()
2: a: ()() b:(())
3: a: ()()(), (())(), (()())
   b: ()(()), ((()))

1: ()
loop through all previous pairs
    count opening and closings
        whenever count === 0, add ) there
 */


/**
 * solution 2
 * if 3:
 *       ''
 *          (  
 *       ((    ()
 *    (((   (()
 * (((( ((()
 *     ))))
 * 
 * ()() branches out to ()()(()) and ()()()()
 * basically it will account for all possible patterns
 * 
 * note:
 * must have more opening than closing, in order to add an closing
 * 
 * end case: left and right () are the same and === n
 *      in that case, just add the pattern to the final array
 * if left > right then add ( and then )
 * if left === right, then only (
    * pass current partial pattern into the sub stack
    * pass left and right count as well
 * 
 * 
 * time and space:
 * O(2**n)
 * 
 */
function generateParenthesis(n) {
    const ans = [];

    const search = (partial, left, right) => {
        if (left === n && left === right) ans.push(partial);
        if (left < n) search(partial + '(', left+1, right);
        if (left > right) search(partial + ')', left, right+1);
    }

    search('', 0, 0);

    return ans;
}