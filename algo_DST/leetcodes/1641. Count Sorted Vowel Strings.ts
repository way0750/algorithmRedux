/**
 * @param {number} n
 * @return {number}

1: 5
2: 


5: add a to all 5
4: add e to only 4
3: add i to only 3
2: add o to only 2
1: add u to only 1


2: 15
add a to all 15: 15
add e to 10
add i to 6
add o to 3
add u to 1


3:
a: 35
e: 20
i: 10
o: 4
u: 1

2:
5
4
3
2
1

3:
15
10
6
3
1

4:
35
20
10
4
1


this is a math problem

 */
var countVowelStrings = function(n) {
    let dp = Array(5).fill(1);
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < dp.length; j++) {
            dp[j] += dp[j-1];
        }
    }
    return dp[4];
};
