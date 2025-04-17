/**
 * @param {string} s
 * @return {boolean}
 if there are even count
    alice can remove all except 1
    then bob can only remove 0
    then alice would then win by removing all of the rest
if there are odd
    then alice can just remove all
if there are 0
    alice lose
 */
    var doesAliceWin = function(s) {
        return /[aeiou]/.test(s);
    };