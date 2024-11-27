/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
 */

function convert(s: string, numRows: number): string {
    if (numRows === 1 || s.length < numRows) return s;
    let wordIndex = 0;
    let direction = 1;
    const rows = Array(numRows).fill(1).map(() => []);
    for (let i = 0; i < s.length; i++) {
        rows[wordIndex].push(s[i]);
        if (wordIndex === numRows - 1) {
            direction = -1;
        } else if (wordIndex === 0) {
            direction = 1;
        }
        wordIndex += direction;
    }
    return rows.map((r) => r.join('')).join('');
};

