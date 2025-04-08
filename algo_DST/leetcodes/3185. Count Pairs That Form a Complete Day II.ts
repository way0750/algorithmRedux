/**
 * @param {number[]} hours
 * @return {number}
[12,12,30,24,24,60,72]
for any numbers that are already multiples of 24
    they are done, no need to do anything for them
[24,24,72]: ((3+1) * 3)/2
for any other numbers, we need to do calculations:
    only + are allowed, so we can do look backs:
    [18, 30]
    {18: true}
    30: 30 / 24 = 1.25 = ceil = 2
    24 * 2 = 48
    48 - 30 = 18
    18 is found, so that's one pair
[12, 12]
{12: 1} // look back num: frequncy
12 / 24 = 0.5 ceil = 1
24 * 1 = 24
24 - 12 = 12, 12 is found (with 1 count) so count + 1

2: 1
3: 2
4: 3

((4-1)*4)/2

 */
var countCompleteDayPairs = function(hours) {
    const freq = Array(24).fill(0);
    let count = 0;
    for (let num of hours) {
        count += freq[(24 - num % 24) % 24];
        freq[num % 24]++;
    }
    return count;
};
