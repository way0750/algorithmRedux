/**
 * 
 * just use a cache to keep track of char frequency, if > 1, then return false for having duplicated char
 * time: O(n) for going through the input exactly once, space O(n) at worst case, you will just have 1 key for each
 * char in the str, so that just N as the length of the input.
 */
export function isUniq (str) {
    const cache = {};
    for (let char of str) {
        cache[char] = (cache[char] || 0) + 1;
        if (cache[char] > 1) return false;
    }
}

/**
 * 
 * just need to check char freq of both strings. If they are permutations of each other
 * then they should have the same chars and same freq
 * 
 * so make char freq of str1
 * then go through str2, for each char reduce the freq of the same char in cache of str1
 * if in any case that a char's freq does lower to -1 or it doesn't even exist, then short cut return false
 */

const checkPermutation = (str1, str2) => {
    const cache = {};
    for (let char of str1) {
        cache[char] = (cache[char] || 0) + 1;
    }
    for (let char of str2) {
        cache[char] = cache[char] || 0;
        if (cache[char] === 0) return false;
        cache[char]--;
    }
    return true;
}

/**
 * 
 * find the actual length of the string content first
 * then from that end of the actual content, loop backward 1 index at a time
 *  basically we are moving chars to the right side of the string char by char
 * but when we run into a space, we don't just move the current char
 * but instead add %20.
 * time: go through input basically twice so O(2N) so n
 * space: if the string structure is mutable, then O(1), we are not using additional space
 * but if string structure is immutable, then it's O(n) n as the length of the input
 */

const URLify = (str1) => {
    let trueLength = null;
    let index = str1.length-1;
    while (index > -1 && !trueLength) {
        if (str1[index]) trueLength = index;
        index--
    }

    const arr = Array(str1.length);
    let swapIndex = arr.length-1;
    for (let i = trueLength; i > -1; i--) {
        if (str1[i] === ' ') {
            str1[i] = '0';
            str1[i-1] = '2';
            str1[i-2] = '%';
        } else {
            arr.push(str1[i]);
        }
    }

    return arr.join('');
}

/**
 * 
 * to check if a string is a permutation of a palindrome, we just need to do a char freq count.
 * palindrome means at most there is 1 char that's of odd freq
 * so count all chars (convert them to the same case first), and count the amount of char with odd freq
 * 
 * can also, count the amount as you go already by having a count varible
 * each time a freq is odd, you increase it, when it's even then reduce it
 * time O(n) space: O(n)
 */

const isPalindromePermutation = (str) => {
    let oddCharCount = 0;
    let cache = {};
    for (let char of str) {
        cache[char] = (cache[char] || 0) + 1;
        cache[char] % 2 === 0 ? oddCharCount-- : oddCharCount++;
    }
    return oddCharCount < 2;
}

/**
 * to check if str2 is 1 edit away from becoming str1 by adding/remving/replacing a character
 * right off the bat, if the length difference between them is > 1, that will certainly require more than 1 edit
 * to make 2 strings the same, so in that case short cut return false
 * 
 * now there are cases we need to worry about:
 * length diff by 1:
 *  it means we must remove 1 char, and the rest of the chars from both strings need to be the same at each index
 *  so we can at most have 1 char differet in the longer string, and we should move its index further by 1 index when
 *  found the difference
 * same length
 *  just compare each char at the same index and count the edit count
 *  
 * 
 * when same length: always moving both indexes at the same speed
 * when not same length: move the long one further by 1 index at most when diff is found
 * 
 * time: O(longest str), space O(1);
 * 
 */

const oneAway = (str1, str2) => {
    if (Math.abs(str1.length - str2.length) > 1) return false;
    const [longStr, shortStr] = str1.length > str2.length ? [str1, str2] : [str2, str1];
    let editCount = 0;
    let shortStrIndex = 0;
    for (let longStrChar of longStr) {
        const shortStrChar = shortStr[shortStrIndex];
        if (longStrChar !== shortStrChar) {
            if ((longStr.length - shortStr.length) === 0) {
                shortStrIndex++;
            }
            editCount++;
        } else {
            shortStrIndex++;
        }
        if (editCount > 1) return false;
    }

    return true;
};

/**
 * keep looping through the str char by char, and compare to previous char
 * if the same, increase the char count
 * else, add previous char + its freq to an array
 * 
 * return array by joinning everyting into a string
 * time n for looping, might be n for joining the arr, so maybe O(n)
 * space if all alternating letters, then O(n*2) which O(n);
 */
const stringCompression = (str) => {
    if (!str) return str;
    const arr = [];
    let curAnsLength = 0
    let count = 1;
    // intentionally go over the loop by 1 index because we are using difference in char comparision
    // as a way to add char and freq to arr. going over would certain make that happen for the last char in the input
    for (let i = 1; i <= str.length; i++) {
        const char = str[i];
        if (char === str[i-1]) {
            count++;
        } else {
            arr.push(str[i-1], count);
            curAnsLength += (1 + `${count}`.length);
            count = 1;
        }
        if ((curAnsLength + 1 + `${count}`.length) > str.length) return str;
    }
    return arr.join('');
}

/**
 * Rotate Matrix:
 * 1 2 3
 * 4 5 6
 * 7 8 9
 * target:
 * 7 4 1
 * 8 5 2
 * 9 6 3
 * 
 * so first reverse horizontally
 * 3 2 1
 * 6 5 4
 * 9 8 7
 * 
 * so flip along the upward diagonal axi
 * 7 4 1
 * 8 5 2
 * 9 6 3
 * 
 * time O(n) for reversing, then O(n) for flipping
 * so O(n)
 * space, if doing in place then O(1)
 * if making new copy then same size as the matrix O(n**2)
 */

/**
 * 
 * 1. 2. 3. 4.
 * 5. 6. 7. 8.
 * 9. 10 11 12
 * 13 14 15 16
 * 
 * 1, 0 => row: row.legnth - col - 1; col: row.length - row - 1, 
 * 
 * 0, 2 => 1, 3
 * 
 */

const rotateMatrix = (matrix) => {
    matrix.forEach((row) => {
        let left = 0, right = row.length-1;
        while (left < right) {
            [row[left], row[right]] = [row[right], row[left]];
            left++;
            right--;
        }
    });

    matrix.forEach((row, rowIndex) => {
        for (let colIndex = 0; colIndex < row.length - 1 - rowIndex; colIndex++) {
            const targetRow = row.length - 1 - colIndex;
            const targetCol = row.length - 1 - rowIndex;
            [matrix[rowIndex][colIndex], matrix[targetRow][targetCol]] = [matrix[targetRow][targetCol], matrix[rowIndex][colIndex]];
        }
    });

    return matrix;
};

/**
 * 
 * keep the first row to keep track of all the cols that have zeros
 * keep one variable for the row0 col0 in case need to make the entire row 0 a bunch of 0s
 * 
 * then loop from 2nd row and on, to zero out either the entire row or certain cols
 * 
 * time: looping through the matrix 2 times, so O(matrix)
 * space: O(matrix[0])
 * 
 */
const zeroMatrix = (matrix) => {
    const rowCache = Array(matrix.length).fill(1);
    for (let rowIndex = 0; rowIndex < matrix.length-1; rowIndex++) {
        const row = matrix[rowIndex];
        if (row[0] === 0) rowCache[rowIndex] = 0;
        row.forEach((cell, colIndex) => {
            if (cell === 0) matrix[0][colIndex] = 0;
        });
    }

    for (let rowIndex = matrix.length-1; rowIndex > -1; rowIndex--) {
        const row = matrix[rowIndex];
        row.forEach((cell, colIndex) => {
            row[colIndex] = rowCache[rowIndex] === 0 || matrix[0][colIndex] ? 0 : cell;
        });
    }

    return matrix;
};

/**
 * String Rotation
 * just double the str, if a word is actully found in it, the doubling would produce all possible sub patterns
 */

const stringRotation = (str, word) => {
    const doubleS = str + str;
    return str.find(word) > -1;
}

// zeroMatrix, rotateMatrix

const zeroMatrix001 = (matrix) => {
    const zeroCols = [];
    matrix.forEach((row) => {
        row.forEach((cell, colIndex) => {
            if (cell === 0) {
                zeroCols[colIndex] = 0;
            };
        });
    });

    matrix.forEach((row) => {
        row.forEach((cell, colIndex) => {
            row[colIndex] = row[0] === 0 || zeroCols[colIndex] === 0 ? 0 : cell;
        });
    });

    return matrix;
};

