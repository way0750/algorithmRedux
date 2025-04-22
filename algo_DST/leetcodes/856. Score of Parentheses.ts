/**
 * @param {string} s
 * @return {number}
 put both () and numbers in it
 (, (, 
 then )
    if last element in the stack is (
    pop and push 1

(, 1
    then )
    if last element in the stack a number
    * 2 and pop twice
    then check if the last element is another number
        if yes, pop, add, and push
whenever there is a )
    there will be math

time: O(s.length);
space: O(s.length);
(()(()))

 */
var scoreOfParentheses = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === '(') {
            stack.push(char);
            continue;
        }
        let lastElement = stack.pop();
        if (lastElement === '(') {
            lastElement = 1;
        } else if (Number.isInteger(lastElement)) {
            lastElement *= 2;
            stack.pop();
        }

        if (Number.isInteger(stack[stack.length-1])) {
            lastElement += stack.pop();
        }
        stack.push(lastElement);
    }
    return stack.pop();
};