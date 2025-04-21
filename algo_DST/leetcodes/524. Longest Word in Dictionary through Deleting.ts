/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 for each string
 loop and compare each char to s's each char
 for s, it keeps on looping forward
    word only move forward if there is a match
this way, we can maintain order of chars in word

do keep track of the longest word
if same length then keep one that is <
time: O(s.length * dictionary.length)
space: O(s.length);
 */
var findLongestWord001 = function(s, dictionary) {
    let max = '';
    for (let word of dictionary) {
        if (word.length > s.length) continue;
        let wIndex = 0;
        let sIndex = 0;
        while (sIndex < s.length && wIndex < word.length) {
            if (s[sIndex] === word[wIndex]) wIndex++;
            sIndex++;
        }
        if (wIndex === word.length) {
            if (wIndex > max.length) {
                max = word;
            } else if (wIndex === max.length) {
                max = word < max ? word : max;
            }
        }
    }
    return max;
};

var findLongestWord = function(s, dictionary) {
    let max = '';
    dictionary.sort((a, b) => a.length - b.length);
    for (let i = dictionary.length-1; i > -1; i--) {
        let word = dictionary[i]
        if (word.length < max.length) return max;
        let wIndex = 0;
        let sIndex = 0;
        while (sIndex < s.length && wIndex < word.length) {
            if (s[sIndex] === word[wIndex]) wIndex++;
            sIndex++;
        }
        if (wIndex === word.length) {
            if (wIndex > max.length) {
                max = word;
            } else if (wIndex === max.length) {
                max = word < max ? word : max;
            }
        }
    }
    return max;
};