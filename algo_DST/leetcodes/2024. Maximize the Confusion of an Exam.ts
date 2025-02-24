/**
 * A teacher is writing a test with n true/false questions, with 'T' denoting true and 'F' denoting false. He wants to confuse the students by maximizing the number of consecutive questions with the same answer (multiple trues or multiple falses in a row).

You are given a string answerKey, where answerKey[i] is the original answer to the ith question. In addition, you are given an integer k, the maximum number of times you may perform the following operation:

Change the answer key for any question to 'T' or 'F' (i.e., set answerKey[i] to 'T' or 'F').
Return the maximum number of consecutive 'T's or 'F's in the answer key after performing the operation at most k times.

 

Example 1:

Input: answerKey = "TTFF", k = 2
Output: 4
Explanation: We can replace both the 'F's with 'T's to make answerKey = "TTTT".
There are four consecutive 'T's.
Example 2:

Input: answerKey = "TFFT", k = 1
Output: 3
Explanation: We can replace the first 'T' with an 'F' to make answerKey = "FFFT".
Alternatively, we can replace the second 'T' with an 'F' to make answerKey = "TFFF".
In both cases, there are three consecutive 'F's.
Example 3:

Input: answerKey = "TTFTTFTT", k = 1
Output: 5
Explanation: We can replace the first 'F' to make answerKey = "TTTTTFTT"
Alternatively, we can replace the second 'F' to make answerKey = "TTFTTTTT". 
In both cases, there are five consecutive 'T's.
 

Constraints:

n == answerKey.length
1 <= n <= 5 * 104
answerKey[i] is either 'T' or 'F'
1 <= k <= n

 */

/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 basically get the longest string where the different char count <= k

 sub string length - max char count = the other char's count (stay <= k)
 so no need to know T or F anymore
 have two pointers
 back and front
 keep on moving front forward
    and increasing the frequency count of each char
    update the max frequency of char in general (T or F doesn't matter)
    when length - max frequency > k
        move back pointer forward ALONG with front
            to maintain the window. This window will never get shorten
                it will maintain or increase
return front - back
time: O(n)
space: O(1)
 */
// var maxConsecutiveAnswers = function(answerKey, k) {
//     let freq = {T: 0, F: 0};
//     let maxCharCount = 0;
//     let back = -1;
//     let front = -1;
//     while (++front < answerKey.length) {
//         const frontChar = answerKey[front];
//         freq[frontChar]++;
//         maxCharCount = Math.max(maxCharCount, freq[frontChar]);
//         if ((front - back) - maxCharCount > k) {
//             const backChar = answerKey[++back];
//             freq[backChar]--;
//         }
//     }

//     return front - back - 1;
// };

const maxConsecutiveAnswers = function (answerKey, k) {
    let T = 0;
    let F = 0
    let back = -1;
    let front = -1;
    while (++front < answerKey.length) {
        answerKey[front] === 'T' ? T++ : F++;
        if (Math.min(F, T) > k) {
            answerKey[++back] === 'T' ? T--  : F--;
        }
    }
    return front - back - 1;
}

/**
 * 
 * some basic ideas here:
 * sliding window to find sub string
 * no need to reduce sliding window size, just keep the found current window range/size. Just keep on moving back pointer forward by 1 following the front pointer
 * then return the currently found window size by front - back - 1
 *  ( - 1 because the front pointer has already gone out of the range of the string size)
 * 
 * 
 * Note:
 * in other cases where you have more than just T and F, you should maintain a
 * max char frequency to keep track of the max frequency of any char you have
 * seen so far in any where of the string
 * then use it to find if k has been used up by
 *  front - back - max char frequency = all the non-max char (for
 * comparing to k)
 * 
 */