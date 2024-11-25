/**
 * Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.
 

Example 1:

Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Example 2:

Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.
Example 3:

Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
 

Constraints:

1 <= words.length <= 300
1 <= words[i].length <= 20
words[i] consists of only English letters and symbols.
1 <= maxWidth <= 100
words[i].length <= maxWidth

keep on taking words until
    all chars length + word count -1 >= maxLength
    then distribute spaces:
        availabel space = maxLength - all chars length
        space chunk = word count - 1
        10/4 = 2.5
        3, 3, 2, 2
        10 / 4, floor 2
        10 % 4 = 2 meaning two first chuncks will get 1 extra space
        map through each string and add spaces

    for the last string, just add space to the end and done
 */
function fullJustify(words: string[], maxWidth: number): string[] {
    let justfied = [];
    let curLine = [];
    let curLineCharCount = 0;
    for (let word of words) {
        if ((curLineCharCount + word.length + curLine.length) <= maxWidth) {
            curLineCharCount += word.length;
            curLine.push(word);
        } else {
            // make justified line:
            const spaceChunk = curLine.length - 1;
            const spaceCount = maxWidth - curLineCharCount;
            // spaceChunk can be 0!
            const avgSpace = spaceChunk ? ' '.repeat(Math.floor(spaceCount / spaceChunk)) : '';
            const extraSpaceIndexes = spaceCount % spaceChunk;
            for (let j = 0; j < curLine.length-1; j++) {
                const extraSpace = j < extraSpaceIndexes ? ' ' : '';
                const space = avgSpace + extraSpace;
                curLine[j] += space;
            }
            justfied.push(curLine.join('').padEnd(maxWidth, ' '));
            curLine = [word];
            curLineCharCount = word.length;
        }
    }
    let lastLine = curLine.join(' ');
    lastLine = lastLine.padEnd(maxWidth, ' ');
    return justfied.concat(lastLine);
};