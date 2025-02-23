/**
 * You start with an initial power of power, an initial score of 0, and a bag of tokens given as an integer array tokens, where each tokens[i] denotes the value of tokeni.

Your goal is to maximize the total score by strategically playing these tokens. In one move, you can play an unplayed token in one of the two ways (but not both for the same token):

Face-up: If your current power is at least tokens[i], you may play tokeni, losing tokens[i] power and gaining 1 score.
Face-down: If your current score is at least 1, you may play tokeni, gaining tokens[i] power and losing 1 score.
Return the maximum possible score you can achieve after playing any number of tokens.

 

Example 1:

Input: tokens = [100], power = 50

Output: 0

Explanation: Since your score is 0 initially, you cannot play the token face-down. You also cannot play it face-up since your power (50) is less than tokens[0] (100).

Example 2:

Input: tokens = [200,100], power = 150

Output: 1

Explanation: Play token1 (100) face-up, reducing your power to 50 and increasing your score to 1.

There is no need to play token0, since you cannot play it face-up to add to your score. The maximum score achievable is 1.

Example 3:

Input: tokens = [100,200,300,400], power = 200

Output: 2

Explanation: Play the tokens in this order to get a score of 2:

Play token0 (100) face-up, reducing power to 100 and increasing score to 1.
Play token3 (400) face-down, increasing power to 500 and reducing score to 0.
Play token1 (200) face-up, reducing power to 300 and increasing score to 1.
Play token2 (300) face-up, reducing power to 0 and increasing score to 2.
The maximum score achievable is 2.

 

Constraints:

0 <= tokens.length <= 1000
0 <= tokens[i], power < 104

 */

/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 so gain as much power as possible
 then pay as many token as possible to get a lot of scores?

play 1 score and you get access to the largest token, gaining the power
    use score to get high power
play power, and you can get more scores
    use power to get more scores

play power to get scores to get more power to get more scores

play power against the least powerful to get score
    thereby preserving as much power as possible
then use score to get the highest power
    then use the accumulated higher power to play the above again

if the tokens are sorted:
                  1 2 3 4 5 5 5 6 7 8 9
play power for scores ->>> 
                            <<<<---play scores for power
you wanna go toward to right to as far as possible
and go toward the left as little as possible
prefix sum?

have two pointers going from left ->
and <- from right

always play power if you can --power and ++score
    else if score > 0 spend score
    else return
keep going left < right
default return
  1 2 3  4  5  5  5  6  7  8  9

 */
  var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a, b) => a - b);
    let score = 0;
    let max = 0;
    let left = 0;
    let right = tokens.length;
    while (left < right) {
        if (power >= tokens[left]) {
            power -= tokens[left++];
            max = Math.max(max, ++score);
        } else if (score--) {
            power += tokens[--right];
        } else {
            return max;
        }
    }
    return max;
};