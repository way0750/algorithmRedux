/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 0 1 2 3 4 5   6 7 8 9 10 11   12 13
 1 2 3 4 3 2   1 2 3 4 3  2    1  2
 a a a a a a   b b b b b  b    c  c

 one round trip:
 n = 4
 4 + (4 - 2) = 6
 t = 5
 it's over the lower bound by 2
    5 > 4
    5 - 4 + 1 = 2
then 4 - 2 = 2?

get round trip size
roundTripSize = n + (n - 2)
scale down the time to fit within one round trip
scaledDownTime = time % roundTripSize
scaledDownTime < n?
    return scaledDownTime + 1
> n?
    diff = scaledDownTime - n + 1
    n = diff

edge case?
 n = 1?
 1 + (1 - 2) = 0?
 just return 1

 n = 2?
 2 + (2 - 2) = 2

 n = 2, time = 4
 0 1 2 3 4
 1 2 1 2 1
 should be 1
 roundTripSize = 2
 scaledDownTime = 4 % 2 = 0
 scaleDownTime < n
    so return 0 + 1 = 1
 */
    var passThePillow = function(n, time) {
        if (n === 1) return 1;
        const roundTripSize = n + (n - 2);
        const scaledDownTime = time % roundTripSize;
        if (scaledDownTime < n) {
            return scaledDownTime + 1;
        } else {
            const diff = scaledDownTime - n + 1;
            return n - diff;
        }
    };