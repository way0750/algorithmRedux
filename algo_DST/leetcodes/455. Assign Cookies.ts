/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
    easier to deal with kids with low greedy points
    hard to deal with ones with high points

    to get as many kids happy as possible
    aim for giving to kids with lower points?
        assuming, there won't be that many high point cookies
        even if there are, they can also be given to low point kids
    
    1,1,2,5,8
    1,1,1,1,2

    1,1,2,5,8
    4,5,7

    so sort both kids and cookies
    compare kid and cookie both at index 0
        if cookie >= kid, increase count by 1 for making one kid happy
        if cookie < kid, that cookie is useless for all kids at that point
            shift out that cookie
        keep going until either kids and cookies are empty
time: O(kidLogkid + cookieLogCookie)
space: O(1);



 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let count = 0;
    let curKid = 0;
    let curCookie = 0;
    while (curKid < g.length && curCookie < s.length) {
        if (g[curKid] <= s[curCookie]) {
            curKid++;
            count++;
        }
        curCookie++;
    }
    return count;
};